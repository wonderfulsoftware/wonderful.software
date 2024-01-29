---
draft: true
---

<script setup>
  import HtmlTagList from './components/HtmlTagList.vue'
  import HtmlOutput from './components/HtmlOutput.vue'
  import CodeTemplate from './components/CodeTemplate.vue'
  import JsConsole from './components/JsConsole.vue'

  const ex3 = `myButton.onclick = () => {
  alert('hi')
}`
</script>

# โต้ตอบกับผู้ใช้งานด้วย input

- ในตอนนี้ เราจะมารู้จักกับ HTML element ตัวใหม่คือ `<input>` กันครับ

  <HtmlTagList introduced="html,head,body,h1,a,br,title,h2,h3,h4,h5,h6,strong,em,img,mark,del,ul,ol,li,hr,script,p" acquired="input" />

- เวลาใช้ element `<input>` จะมี attribute ตัวหนึ่งที่สำคัญคือ `type="…"` ซึ่งเป็นตัวกำหนดว่าจะแสดงเป็น UI component แบบไหน

  :::info UI (User Interface)
  “User interface” หรือ “ส่วนต่อประสานกับผู้ใช้”
  หมายถึงสิ่งที่ผู้ใช้งานสามารถกระทำกับแอปพลิเคชันของเรา เพื่อให้แอปพลิเคชันทำงานตามที่ผู้ใช้งานต้องการ
  UI สามารถสร้างขึ้นโดยนำ “UI components” ต่างๆ (เช่น ปุ่มกด กล่องข้อความ หรือเมนู) มาประกอบเข้าด้วยกัน
  :::

- **ถ้าตั้ง `type="button"` ก็จะได้ปุ่มกด**
  โดยกำหนดข้อความที่จะแสดงบนปุ่มได้โดยตั้งค่า attribute `value="…"`:

  <!-- prettier-ignore -->
  ```html
  <input type="button" value="Click me">
  ```

  <HtmlOutput src="/js/examples/input/button.html" height="128" />

- ถ้าตั้ง `type="text"` ก็จะได้กล่องข้อความ

  <!-- prettier-ignore -->
  ```html
  <input type="text">
  ```

  <HtmlOutput src="/js/examples/input/text.html" height="128" />

- [ถ้าอยากรู้ว่า element `input` มีชนิดอะไรอีกบ้าง ลองเข้าไปดูได้บนเว็บ MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input)

## ใช้งาน JavaScript กับ input

- เดี๋ยวเราจะลองใช้ JavaScript กับ input กัน
  เริ่มจากการสร้างปุ่มขึ้นมา

  <!-- prettier-ignore -->
  ```html
  <input type="button" value="Click me">
  ```

- ก่อนอื่นเราต้องทำให้โค้ด JavaScript หาตัว input เจอก่อน
  เริ่มจากการใส่ attribute `id` ให้กับ input ก่อน

  <!-- prettier-ignore -->
  ```html
  <input id="my-button" type="button" value="Click me">
  ```

- แล้วเราก็สามารถใช้คำสั่ง `document.getElementById` ใน JavaScript
  เพื่อหา element ที่มี `id="my-button"`

  เดี๋ยวเราจะลองทำใน JavaScript Console ดูก่อนครับ

  <JsConsole input="let myButton = document.getElementById('my-button')" :output="{value: undefined}" />

  คำสั่งข้างบนจะหา element ที่มี `id="my-button"` แล้วเก็บไว้ในตัวแปรชื่อ `myButton`

  :::info การดึง element บนหน้าเว็บมาเก็บไว้ในตัวแปร
  <CodeTemplate template="'let ' :: [placeholder] ชื่อตัวแปร :: ' = document.getElementById('' :: [placeholder] id :: '')'" />
  :::

  หลังจากนั้นเราสามารถหาตัวแปร `myButton` ได้ด้วยการพิมพ์ชื่อตัวแปรนั้นใน JavaScript Console

  <JsConsole input="myButton" :output="{value: {$tagName: 'input', attributes: {id: 'my-button', type: 'button', value: 'Click me'}}}" />

## ทำให้โค้ดทำงานเมื่อปุ่มถูกกด

- เราทำให้เวลาคลิกแล้วขึ้นป๊อปอัพขึ้นมา โดยการกำหนดฟังก์ชัน `onclick` บนตัวปุ่ม (โค้ดหน้าตาแปลกๆ มาอีกแล้ว… เดี๋ยวจะอธิบายในบทต่อๆ ไปครับ)

  <JsConsole :input="ex3" :output="{value: undefined}" />

  เมื่อคลิกที่ปุ่ม ก็จะมีหน้าต่าง alert ป๊อปอัพขึ้นมา

  :::info การรันโค้ดเมื่อปุ่มถูกคลิก
  <CodeTemplate template="[placeholder] ชื่อตัวแปร :: '.onclick' :: ' = ' :: '() => {' :: [placeholder] โค้ดที่ต้องการให้ทำงาน :: '}'" />
  :::

  :::info การแสดงข้อความในกล่องป๊อปอัพ
  <CodeTemplate template="'alert(' :: [placeholder] expression :: ')'" />
  :::

- โค้ดที่พิมพ์ใน console
  จะมีผลแค่เท่าที่เปิดหน้าเว็บนั้นอยู่เท่านั้น
  พอกด refresh แล้วกดปุ่มใหม่ ก็จะไม่มีป๊อปอัพขึ้นมาอีก เพราะหน้าเว็บถูกโหลดใหม่แล้ว

- เมื่อเรามีโค้ดที่ใช้งานได้แล้ว
  ก็เอามาใส่ใน `<script>` เพื่อให้โค้ดทำงานเมื่อเราเปิดหน้าเว็บครั้งต่อไป

  <!-- prettier-ignore -->
  ```html{2-7}
  <input id="my-button" type="button" value="Click me">
  <script>
    let myButton = document.getElementById('my-button')
    myButton.onclick = () => {
      alert('hi')
    }
  </script>
  ```

  <HtmlOutput src="/js/examples/input/button-clickable.html" height="128" />

  :::warning เอา `<script>` ไว้หลังตัว `<input>`
  เพื่อให้โปรแกรมทำงานได้อย่างถูกต้อง เราต้องเอา element script ไว้หลังตัว input
  เพราะถ้าเอาไว้ก่อน จะทำให้โค้ดที่อยู่ข้างใน script ถูกทำงาน ก่อนที่ตัว input จะถูกสร้างขึ้นมาบนหน้าเว็บ และส่งผลให้คำสั่ง `document.getElementById` หาตัว input ตัวนั้นไม่เจอ (เพราะ ณ จังหวะนั้น ตัว input ยังไม่มีอยู่)
  :::

## อ่านหรือแก้ข้อความในกล่องข้อความ

- สมมติว่าเรามีกล่องข้อความ…

  <!-- prettier-ignore -->
  ```html{1}
  <input type="text" id="your-name">
  ```

- และเราเอากล่องนี้มาเก็บในตัวแปร `yourName`:

  ```html{2-4}
  <input type="text" id="your-name">
  <script>
    let yourName = document.getElementById('your-name')
  </script>
  ```

- เราสามารถอ่านข้อความโดยดึงค่า `value` ออกมาได้ โดยการพิมพ์ใน console:

  <div><JsConsole input="yourName.value" :output="{value: ''}" /></div>

  โดยจะได้ผลลัพธ์เป็นข้อความที่เราพิมพ์ลงไปในกล่องข้อความ
  หากกล่องข้อความยังว่างอยู่ ก็จะได้ผลลัพธ์เป็นสตริงเปล่า หรือ `""` (empty string)

  :::tip ทดลองเล่นด้วยตัวเอง

  1. <a href="/js/examples/input/text-input.html" target="_blank">คลิกที่นี่เพื่อเปิดหน้าตัวอย่าง</a>
  2. เปิด JavaScript Console ขึ้นมา
  3. พิมพ์​ `yourName.value` ลงไปใน console &rarr; ควรจะได้ผลลัพธ์เป็นสตริงเปล่า
  4. ใส่ข้อความอะไรสักอย่างลงไปในกล่องข้อความ
  5. พิมพ์​ `yourName.value` ลงไปใน console อีกครั้ง &rarr; ควรจะได้ผลลัพธ์เป็นข้อความที่เราพิมพ์ลงไปในกล่องข้อความ

  :::

  :::info การอ่านข้อความในกล่อง input
  <CodeTemplate template="[placeholder] ชื่อตัวแปร :: '.value'" />
  :::

- นอกจากอ่านข้อความออกมาแล้ว เราสามารถเขียนข้อความเข้าไปในกล่องได้ด้วย:

  ```js
  yourName.value = 'Brendan'
  ```

  :::info การแก้ข้อความในกล่อง input
  <CodeTemplate template="[placeholder] ชื่อตัวแปร :: '.value = ' :: [placeholder] expression ข้อความที่จะใส่ในกล่องข้อความ" />
  :::

## Putting it together

ลองเอาความรู้ทั้งหมดจากตอนนี้มารวมกันดู
ก็สามารถสร้างโปรแกรมที่ถามชื่อ
แล้วพอกดทักทาย โปรแกรมก็จะแสดงข้อความทักทายกลับมาได้

<!-- prettier-ignore -->
```html
<!doctype html>
<html>
  <head><title>Greeter</title></head>
  <body>
    Your name: <input id="your-name" type="text">
    <input type="button" value="Say hi!" id="my-button">
    <script>
      let myButton = document.getElementById('my-button')
      let yourName = document.getElementById('your-name')
      myButton.onclick = () => {
        alert('Hi ' + yourName.value + '!')
      }
    </script>
  </body>
</html>
```

<HtmlOutput src="/js/examples/input/greeter.html" height="128" />
