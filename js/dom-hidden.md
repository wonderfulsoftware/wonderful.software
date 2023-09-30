---
draft: true
---

# การแสดง/ซ่อน element

<script setup>
  import { reactive } from 'vue'
  import {HtmlOutput,} from './components/HtmlOutput.vue'
  import JsConsole from './components/JsConsole.vue'
  import BooleanValue from './components/BooleanValue.vue'
  
  const ex1 = `<p>Text 1</p>
<p hidden>Text 2</p>
<p>Text 3</p>`
</script>

- ในตอนนี้ เราจะมารู้จักกับ attribute ที่ชื่อว่า `hidden` ครับ

- ถ้าเราใส่ `hidden` เข้าไปใน element ใดๆ
  จะทำให้ element นั้นถูกซ่อนไว้
  และจะไม่แสดงผลออกมาบนหน้าเว็บ

  <!-- prettier-ignore -->
  ```html
  <p>Text 1</p>
  <p hidden>Text 2</p>
  <p>Text 3</p>
  ```

  <HtmlOutput :html="ex1" height="160" />

## การแสดง/ซ่อน element ด้วย JavaScript

- ถ้าเราต้องการแสดง/ซ่อน element ด้วย JavaScript
  เริ่มจากการสร้างตัวแปรให้อ้างอิงไปยัง element ที่เราต้องการก่อนครับ

  <!-- prettier-ignore -->
  ```html
  <p id="text">Text</p>
  ```

  <JsConsole input="let text = document.getElementById('text')" />

- ถ้าต้องการจะซ่อน:

  <JsConsole input="text.hidden = true" />

- ถ้าต้องการจะแสดง:

  <JsConsole input="text.hidden = false" />

## test
