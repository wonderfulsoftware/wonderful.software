---
draft: true
---

# การซ่อน/แสดง element

<script setup>
  import { reactive } from 'vue'
  import HtmlOutput from './components/HtmlOutput.vue'
  import JsConsole from './components/JsConsole.vue'
  import BooleanValue from './components/BooleanValue.vue'
  import CodeTemplate from './components/CodeTemplate.vue'
</script>

- ในตอนนี้ เราจะมารู้จักกับ attribute ที่ชื่อว่า `hidden` ครับ

- ถ้าเราใส่ `hidden` เข้าไปใน element ใดๆ
  จะทำให้ element นั้นถูกซ่อนไว้
  และจะไม่แสดงผลออกมาบนหน้าเว็บ

  <!-- prettier-ignore -->
  ```html{2}
  <p>Text 1</p>
  <p hidden>Text 2</p>
  <p>Text 3</p>
  ```

  <HtmlOutput src="/js/examples/dom-hidden/hidden.html" height="160" />

  ในตัวอย่างข้างบน จะเห็นว่า
  คำว่า Text 2 ไม่ปรากฏบนหน้าเว็บ เพราะถูกซ่อนไว้

## การแสดง/ซ่อน element ด้วย JavaScript

- ถ้าเราต้องการแสดง/ซ่อน element ด้วย JavaScript
  เริ่มจากการสร้างตัวแปรให้อ้างอิงไปยัง element ที่เราต้องการก่อนครับ

  <!-- prettier-ignore -->
  ```html{1,3}
  <p id="text">Text</p>
  <script>
    let text = document.getElementById('text')
  </script>
  ```

- ถ้าต้องการจะซ่อน:

  <JsConsole input="text.hidden = true" />

  ถ้าต้องการจะแสดง:

  <JsConsole input="text.hidden = false" />

  :::tip ทดลองด้วยตัวเอง

  1. <a href="/js/examples/dom-hidden/play.html" target="_blank">คลิกที่นี่เพื่อเปิดหน้าตัวอย่าง</a>
  2. เมื่อหน้าเว็บโหลดแล้วให้เปิด JavaScript Console ขึ้นมา
  3. พิมพ์​ `text.hidden = true` ลงไปใน console &rarr; ข้อความจะหายไป
  4. พิมพ์​ `text.hidden = false` ลงไปใน console &rarr; ข้อความจะกลับมาแสดงอีกครั้ง

  :::

  :::info ซ่อน/แสดง element
  <CodeTemplate template="[placeholder] element :: . :: hidden :: ' = ' :: [placeholder] boolean" />
  :::
