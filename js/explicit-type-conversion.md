---
draft: true
---

# การแปลงชนิดข้อมูล

<script setup>
  import { reactive } from 'vue'
  import JsConsole from './components/JsConsole.vue'
  import CodeTemplate from './components/CodeTemplate.vue'
</script>

- ในบทที่แล้ว
  เราพบว่าเวลาดึงข้อความหรือตัวเลขจากกล่อง `<input>` ออกมา
  จะได้ข้อมูลชนิด string ออกมาเสมอ

  <JsConsole input="num.value" :output="{value: '42'}" />

  และเราเอาสตริงมาคูณด้วย 1 เพื่อแปลงเป็นตัวเลข:

  <JsConsole input="num.value * 1" :output="{value: 42}" />

- แต่คนอื่นที่มาเห็นโค้ดนี้อาจจะงง และสงสัยว่า
  “ทำไมต้องเอามาคูณด้วย 1 ด้วยล่ะ?”

- เราในฐานะที่เป็นคนเขียนโค้ด เรารู้ดีว่าเราคูณด้วย 1 เพื่อแปลง string เป็น number
  แต่คนอื่นที่อ่านโค้ดนี้อาจจะไม่รู้
  เพราะโค้ดที่เราเขียน ไม่ได้สื่อความหมายตรงกับเป้าหมายของมัน

  - **เป้าหมาย:** การแปลง string เป็น number
  - **สิ่งที่เขียน:** การคูณด้วย 1

- จริงอยู่ที่ว่าเราสามารถเขียนอธิบายเป้าหมายที่แท้จริงของโค้ดได้ด้วยคอมเม้นต์

  ```js
  // ใช้ `* 1` เพื่อแปลงค่าจาก string เป็น number
  ```

  …แต่มีวิธีไหนไหมที่เราจะสามารถสื่อความหมายว่า
  “เราต้องการแปลงค่านี้เป็น number”
  ให้ชัดเจนขึ้น?

## การแปลงชนิดข้อมูล

- ในภาษา JavaScript เราสามารถแปลงค่าต่างๆ เป็นตัวเลข โดยครอบด้วย `Number()`

  <JsConsole input="Number(num.value)" :output="{value: 42}" />

  :::tip แปลงค่าเป็น number
  <CodeTemplate template="Number( :: [placeholder] expression :: )" />
  :::

- และเราสามารถแปลงค่าต่างๆ เป็นสตริง โดยครอบด้วย `String()`

  <JsConsole input="String(1)" :output="{value: '1'}" />

  :::tip แปลงค่าเป็น string
  <CodeTemplate template="String( :: [placeholder] expression :: )" />
  :::

- จะเห็นว่าพอเขียนแบบนี้ สามารถสื่อความหมายได้ชัดเจนกว่า
  คนที่อ่านโค้ด เห็นแล้วไม่ต้องเดาความหมายเองเลย

- เราเรียกการแปลงชนิดข้อมูลโดยตรงแบบนี้ว่า **“explicit type conversion”**
  ส่วนการแปลงชนิดข้อมูลที่เกิดขึ้นโดยอัตโนมัติ หรือการแปลงชนิดข้อมูลโดยทางอ้อม เรียกว่า **“implicit type conversion”** (หรือ “coercion”)

  | แปลงข้อมูลเป็น | implicit | explicit    |
  | -------------- | -------- | ----------- |
  | number         | `x * 1`  | `Number(x)` |
  | string         | `x + ""` | `String(x)` |
