---
topics: [React]
authors: [dtinth]
meta:
  - name: description
    content: setState() ไม่ได้อัพเดต​ this.state ทันทีเสมอไป และจะทำการรวม state เก่าเข้ากับข้อมูลใหม่เสมอ
---

# React: `setState({…})` กับ `setState(prevState => ({…}))` ต่างกันยังไง

จาก[คำถามในกลุ่ม สมาคมโปรแกรมเมอร์ไทย](https://www.facebook.com/groups/ThaiPGAssociateSociety/permalink/970201366524466/):

> สำหรับ React แล้ว \
> การ setState ของ 2 แบบนี้ ต่างกันยังไงครับ? \
> เราควรเลือกใช้แบบไหนถึงจะเหมาะสมมากกว่า
>
> ```js {7-9,12-17}
> // (Initial state)
> state = {
>   name: 'cherprang',
> }
>
> // [1]
> this.setState({
>   name: 'orn',
> })
>
> // [2]
> this.setState(prevState => {
>   return {
>     ...prevState,
>     name: 'orn',
>   }
> })
> ```

::: tip Table of contents
[[toc]]
:::

## `setState()` ไม่ได้อัพเดต​ `this.state` ทันทีเสมอไป

จาก [Docs ของ React](https://reactjs.org/docs/react-component.html#setstate):

> `setState()` does not always immediately update the component. It may batch or defer the update until later. This makes reading `this.state` right after calling `setState()` a potential pitfall.

หมายความว่า “ในบางกรณี” `setState()` จะไม่อัพเดต `this.state` ทันที
แต่ React อาจจะ delay การอัพเดต state ออกไป เพื่อ optimize performance

แต่เนื่องทั้งตัวอย่างโค้ดแบบที่ 1 และแบบที่ 2 ไม่ได้ใช้ state เก่าในการอัพเดต แต่เป็นการนำข้อมูลใหม่มาทับข้อมูลเก่า โดยไม่สนใจค่าก่อนหน้า
ตัวอย่างทั้งสองแบบจึงไม่เจอปัญหาจากกรณีนี้

**กรณีที่อาจจะเจอปัญหา**

เราอาจจะเจอปัญหาหากเรานำ `this.state` มาใช้ หลังจากเรียก `this.setState()`

```js
// สมมติว่า state = { counter: 0 }
this.setState({ counter: this.state.counter + 1 })
// ณ จุดนี้ this.state.counter อาจจะมีค่า 0 หรือ 1 ก็ได้
this.setState({ counter: this.state.counter + 1 })
```

- ในกรณีที่ `this.setState` ถูกอัพเดตทันที `this.state.counter` จะเพิ่มทีละ 2
- ในกรณีที่ `this.setState` ไม่ถูกอัพเดตทันที `this.state.counter` จะเพิ่มทีละ 1

วิธีแก้คือ
ให้ส่งฟังก์ชันเข้าไปใน `this.setState()` แทน
โดย React จะเรียกฟังก์ชัน และส่ง state ณ เวลาที่ React กำลังจะอัพเดตจริงๆ

```js
// สมมติว่า state = { counter: 0 }
this.setState(prevState => ({ counter: prevState.counter + 1 }))
// ไม่สนใจว่า this.state.counter มีค่าเท่าไหร่ (ไม่ได้ใช้)
// แต่รับประกันได้ว่าเมื่อฟังก์ชันถูกเรียก `prevState` จะมีค่า { counter: 1 }
this.setState(prevState => ({ counter: prevState.counter + 1 }))
```

**สรุป**

- ใช้ท่า `setState({…})` เมื่อต้องการเปลี่ยน state เป็นค่าใหม่โดยไม่สน state เก่า
- ใช้ท่า `setState(prevState => …)` เมื่อต้องการนำ state เก่ามาคำนวณ state ใหม่

::: tip NOTE
บางคนอาจจะบอกว่า “แต่เท่าที่ลองมา `this.state` อัพเดตทันทีตลอดนะ” ซึ่งก็จริงครับ — ตอนที่เขียนบทความนี้ React (v16) มักจะอัพเดต `this.state` ทันที
แต่ในอนาคต React จะเพิ่มความสามารถ เช่น [async rendering](https://www.youtube.com/watch?v=nLF0n9SACd4) ซึ่งอาจทำให้ `this.state` ไม่ถูกอัพเดตทันทีก็ได้
:::

## `setState()` จะทำการรวม state เก่าเข้ากับข้อมูลใหม่เสมอ

ไม่ว่าจะใช้ท่า `setState({…})` หรือ `setState(prevState => …)`
React จะเอา state เก่า กับข้อมูลใหม่ มารวมกัน ([“shallow merge”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)) เสมอ

ดังนั้น การเขียนแบบนี้จึงไม่มีประโยชน์เลย อีกทั้งยังทำให้เกิดการ shallow merge สองครั้ง
(ครั้งแรกตอนที่เราใช้ `...prevState`, ครั้งที่สองทำโดย React):

```js {3}
// Bad
this.setState(prevState => ({
  ...prevState,
  counter: prevState.counter + 1,
}))
```

แค่ส่ง state ที่ต้องการเปลี่ยนออกมาก็พอครับ:

```js
// Good
this.setState(prevState => ({
  counter: prevState.counter + 1,
}))
```

::: tip NOTE
ผมเข้าใจว่า ท่าการส่ง state เก่าให้ `this.setState()` น่าจะเกิดจากความชินมือจากการใช้ [Redux](https://redux.js.org/)
ที่[บังคับให้ reducer ต้องคืนค่า state เก่าออกมาด้วย หากต้องการคงค่า state เก่านั้น](https://redux.js.org/basics/reducers#handling-actions)ครับ
:::

## อย่าสับสนระหว่าง “Callback” function กับ “Updater” function ซึ่งอาจเรียกได้ว่าเป็น “Callback function” ทั้งคู่

แค่อ่านหัวเรื่องก็งงแล้วใช่ไหมล่ะครับ 555

เราสามารถเรียก `setState` ได้ 4 วิธี:

1. `setState(stateChangeObj)`
2. `setState(stateChangeObj, callbackFn)`
3. `setState(updaterFn)`
4. `setState(updaterFn, callbackFn)`

ปกติแล้ว ในภาษา JavaScript เวลาเราส่งฟังก์ชันเข้าไปในอีกฟังก์ชันนึง (เช่น `array.map(f)`)
เรามักเรียกฟังก์ชันที่เราส่งเข้าไป (ในที่นี้คือ `f`) ว่า **“Callback function”**
เพราะว่าฟังก์ชัน `.map` จะกลับมาเรียกฟังก์ชัน `f` ที่เราส่งเข้าไป ([ตัวอย่าง](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map))

ซึ่งในกรณีของ `setState` ก็พูดได้ว่า เรามี “Callback function” สองตัว ที่ทำคนละหน้าที่:

- “Updater” function เอาไว้คำนวณว่าต้องเปลี่ยน state ยังไง
- “Callback” function เอาไว้กระทำ side effect หลังจาก update state เสร็จแล้ว

งงไหมครับ
จะเห็นว่าเมื่อเจอคำว่า Callback function จึงตีความได้ 2 ความหมาย

1. “Callback function” (ศัพท์ JavaScript) คือฟังก์ชันที่เราส่งให้อีกฟังก์ชันนึง ในทีี่นี้ `updater` กับ `callback` ถือเป็น Callback function ทั้งคู่
2. “Callback” function (ศัพท์ React) คือฟังก์ชันที่เอาไว้กระทำ side effect หลังจาก update state เสร็จแล้ว

ดังนั้นให้ดูดีๆ นะครับว่าเวลาเจอ หรือเวลาใช้คำว่า Callback function
คำนั้นหมายถึงความหมายไหน

## อ่านเพิ่มเติม

แนะนำให้อ่าน API ของ React เลยครับ
มีการอธิบายการทำงานของ `setState` ไว้โดยละเอียด

- [React API Reference &rarr; React.Component &rarr; setState()](https://reactjs.org/docs/react-component.html#setstate)
