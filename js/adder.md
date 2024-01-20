---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
  import JsConsole from './components/JsConsole.vue'
</script>

# มินิโปรเจค: โปรแกรมบวกเลข

ตัวอย่าง:

<HtmlOutput src="/js/mini-projects/adder.html" :height="192" />

:::tip ลองเล่นกับตัวอย่างข้างบนดู

1. ใส่เลข 10 ในกล่องข้อความที่ 1
2. ใส่เลข 20 ในกล่องข้อความที่ 2
3. กดปุ่ม “=”
4. กล่องข้อความที่ 3 จะแสดงผลลัพธ์เป็น 30

:::

## ขึ้นหน้าเว็บ

- สร้างหน้าเว็บที่มีกล่องข้อความ 3 กล่อง
  และปุ่ม 1 ปุ่ม

  <!-- prettier-ignore -->
  ```html
  <h1>Adder</h1>

  <input type="text" size="8" id="a">
  +
  <input type="text" size="8" id="b">
  <input type="button" value="=" id="calculate">
  <input type="text" size="8" readonly id="c">

  <script>
    let calculate = document.getElementById('calculate')
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')
  </script>
  ```

  :::info แนะนำ attribute `size="…"` ของ `<input type="text">`
  กล่องข้อความ `<input type="text">` ขนาดมาตรฐาน อาจจะยาวไปหน่อย
  เราสามารถกำหนดขนาดของกล่องข้อความด้วย [attribute `size="…"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/size)
  ตัวอย่างเช่น
  `<input size="5">` จะทำให้กล่องข้อความมีขนาดสำหรับข้อความ 5 ตัวอักษร
  :::

  :::info แนะนำ attribute `readonly` ของ `<input type="text">`
  สำหรับกล่องข้อความอันสุดท้าย
  สามารถใส่ [attribute `readonly=""`](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) ได้
  เพื่อทำให้กล่องข้อความนั้นไม่สามารถแก้ไขได้
  ตัวอย่างเช่น
  `<input readonly="">` (สามารถย่อเป็น `<input readonly>` ได้)
  :::

  :::tip ตรวจสอบผลลัพธ์

  1. เปิดเว็บที่สร้างขึ้นมา หรือ <a href="/js/mini-projects/adder.starter.html" target="_blank">คลิกที่นี่เพื่อเปิดหน้าตัวอย่าง</a>
  2. เปิด JavaScript Console ขึ้นมา
  3. พิมพ์ `a` แล้วกด Enter &rarr; คอนโซลควรจะแสดงตัวอินพุตที่มี `id="a"`
  4. พิมพ์ `b` แล้วกด Enter &rarr; คอนโซลควรจะแสดงตัวอินพุตที่มี `id="b"`
  5. พิมพ์ `c` แล้วกด Enter &rarr; คอนโซลควรจะแสดงตัวอินพุตที่มี `id="c"`
  6. พิมพ์ `calculate` แล้วกด Enter &rarr; คอนโซลควรจะแสดงตัวปุ่มที่มี `id="calculate"`

  :::

## ทำให้ปุ่มทำงาน

- ต่อไป
  เราจะทำให้เมื่อกดปุ่ม
  ให้นำเลขที่อยู่ในกล่องข้อความที่ 1 และ 2 มาบวกกัน
  แล้วเอาผลลัพธ์ไปใส่ในกล่องข้อความที่ 3

- เวลาเขียนโค้ด **เราจะพยายามแก้ปัญหาทีละส่วน**

- เริ่มจากการทำให้ปุ่มสามารถคลิกได้ก่อน…

  ```html{7-9}
  <script>
    let calculate = document.getElementById('calculate')
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')

    calculate.onclick = () => {
      alert('ok')
    }
  </script>
  ```

  :::tip ตรวจสอบผลลัพธ์

  1. เปิดเว็บที่สร้างขึ้นมา
  2. คลิกที่ปุ่ม “=”
  3. ควรจะมีกล่องป๊อปอัพโผล่ขึ้นมา แสดงคำว่า “ok”

  :::

## ลองสั่งให้คอมพิวเตอร์คำนวณผลลัพธ์ใน console ดู

- ต่อไป เราจะต้องเขียนโค้ดข้างในตัว `calculate.onclick`
  แต่ก่อนอื่น เราจะมาลองคำสั่งผ่าน JavaScript Console กันดู

- เปิดหน้าเว็บที่สร้างขึ้นมา (หรือ <a href="/js/mini-projects/adder.starter.html" target="_blank">คลิกที่นี่เพื่อเปิดหน้าตัวอย่าง</a>)

- ใส่เลข 10 ในกล่องข้อความที่ 1

- ใส่เลข 20 ในกล่องข้อความที่ 2

- เปิด JavaScript Console ขึ้นมา

- ดึงข้อมูลออกมาจากกล่องข้อความแรก

  <JsConsole input="a.value" :output="{value: '10'}" />

- ดึงข้อมูลออกมาจากกล่องข้อความที่สอง

  <JsConsole input="b.value" :output="{value: '20'}" />

- เอาค่าที่ได้มาบวกกัน

  <JsConsole input="a.value + b.value" :output="{value: '1020'}" />

- ทำไมถึงไม่ได้เลข 30 แต่กลับได้เลข 1020 ออกมาแทน?

- นั่นก็เพราะว่า **เวลาดึงข้อมูลจากกล่องข้อความ เราจะได้ข้อมูลออกมาเป็น string เสมอ**
  ทำให้เมื่อเอามา `+` กัน จึงเป็นการนำสตริงมาต่อกันแทนที่จะเป็นการบวกเลข

- ถ้าอยากให้เป็นการบวกเลข **เราต้องแปลงข้อมูลทั้งสองฝั่งของเครื่องหมาย `+` ให้กลายเป็นตัวเลขทั้งคู่**

- จากที่เราเรียนรู้กันไปก่อนหน้าในหัวข้อ [“การแปลงชนิดข้อมูล”](./data-types.md#%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B9%81%E0%B8%9B%E0%B8%A5%E0%B8%87%E0%B8%8A%E0%B8%99%E0%B8%B4%E0%B8%94%E0%B8%82%E0%B9%89%E0%B8%AD%E0%B8%A1%E0%B8%B9%E0%B8%A5-type-coercion) การเอาค่าสองค่ามาคูณกัน คอมพิวเตอร์จะนำค่าทั้งสองฝั่งของเครื่องหมาย `*` มาแปลงเป็นข้อมูลชนิด number โดยอัตโนมัติ ก่อนทำการคูณ

  <JsConsole input="a.value * 1" :output="{value: 10}" />

- ลองบวกเลขใหม่อีกครั้ง
  โดยครั้งนี้เราจะแปลงสตริงเป็นตัวเลขด้วย

  <JsConsole input="(a.value * 1) + (b.value * 1)" :output="{value: 30}" />

  เนื่องจากการคูณทำงานก่อนการบวกอยู่แล้ว จึงไม่จำเป็นต้องใส่วงเล็บ

  <JsConsole input="a.value * 1 + b.value * 1" :output="{value: 30}" />

- นำคำตอบที่ได้เก็บใส่ตัวแปร

  <JsConsole input="let answer = a.value * 1 + b.value * 1" :output="{value: undefined}" />

  ตรวจสอบค่าตัวแปร `answer`

  <JsConsole input="answer" :output="{value: 30}" />

- นำคำตอบที่ได้ไปใส่ในกล่องข้อความที่ 3

  <JsConsole input="c.value = answer" :output="{value: 30}" />

  :::tip ตรวจสอบผลลัพธ์
  เมื่อทำตามขั้นตอนข้างต้นเสร็จแล้ว กล่องข้อความที่ 3 ควรจะแสดงผลลัพธ์เป็น 30
  :::

- รวบรวมโค้ดที่เราพิมพ์ไว้
  และนี่คือโค้ดที่เราจะเอาไปใส่ใน `calculate.onclick`

  ```js
  let answer = a.value * 1 + b.value * 1
  c.value = answer
  ```

  :::warning การแปลงสตริงเป็นตัวเลขด้วยการเอามาคูณด้วย 1 ไม่ใช่วิธีที่ดีนัก…
  เพราะว่าเป็นการแปลงชนิดข้อมูลโดยทางอ้อม
  แต่สำหรับตอนนี้ เราจะใช้วิธีนี้กันไปก่อน
  เป็นการแก้ปัญหาด้วยความรู้เท่าที่มีตอนนี้
  สำหรับตอนนี้แต่ในบทต่อไปเราจะมาเรียนเรียนรู้วิธีที่ดีกว่านี้อีกที
  :::

## ใส่โค้ดให้ปุ่มกด

- นำโค้ดก่อนหน้า มาใส่ใน `calculate.onclick`

  ```html{8-9}
  <script>
    let calculate = document.getElementById('calculate')
    let a = document.getElementById('a')
    let b = document.getElementById('b')
    let c = document.getElementById('c')

    calculate.onclick = () => {
      let answer = a.value * 1 + b.value * 1
      c.value = answer
    }
  </script>
  ```

  :::tip ตรวจสอบผลลัพธ์

  1. เปิดหน้าเว็บที่สร้างขึ้นมา
  2. ใส่เลข 10 ในกล่องข้อความที่ 1
  3. ใส่เลข 20 ในกล่องข้อความที่ 2
  4. กดปุ่ม “=”
  5. กล่องข้อความที่ 3 จะแสดงผลลัพธ์เป็น 30

  :::
