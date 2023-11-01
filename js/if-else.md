---
draft: true
---

<script setup>
  import { reactive } from 'vue'
  import JsConsole from './components/JsConsole.vue'
  import CodeTemplate from './components/CodeTemplate.vue'
</script>

# if และ else

- จากโปรเจคที่แล้ว
  เราได้ลองใช้ `if` กับ `else` กันไปแล้ว
  เรามาดูโครงสร้างของ `if` กับ `else` กัน

  ```js
  if (เงื่อนไข) {
    // ถ้าเงื่อนไขเป็นจริง
  } else {
    // ถ้าเงื่อนไขเป็นเท็จ
  }
  ```

- กรณีที่มีหลายเงื่อนไข สามารถใช้ `else if` ได้

  ```js
  if (เงื่อนไข1) {
    // ถ้าเงื่อนไข1 เป็นจริง
  } else if (เงื่อนไข2) {
    // ถ้าเงื่อนไข2 เป็นจริง
  } else {
    // ถ้าเงื่อนไข1 และ เงื่อนไข2 เป็นเท็จ
  }
  ```

  เช่น

  ```js
  let grade
  if (score >= 80) {
    grade = 'A'
  } else if (score >= 70) {
    grade = 'B'
  } else if (score >= 60) {
    grade = 'C'
  } else if (score >= 50) {
    grade = 'D'
  } else {
    grade = 'F'
  }
  ```

## การแปลงข้อมูลเป็น boolean

- กรณีที่เงื่อนไขเป็นตัวแปร
  หรือ ค่าที่ไม่ใช่ boolean
  จะถูกแปลงเป็น boolean ก่อน

- โดยในภาษา JavaScript ค่าต่อไปนี้จะถูกแปลงเป็น `false`:

  - `0`
  - `NaN` (Not a Number, เป็นค่าที่ได้จากการคำนวณทางคณิตศาสตร์ที่ผิดพลาด)
  - `""` (สตริงเปล่า)
  - `undefined` (ค่าเริ่มต้นของตัวแปรที่ยังไม่ได้กำหนดค่า)
  - `null` (จะได้รู้จักในบทถัดๆ ไป)

- ส่วนค่าอื่นๆ จะถูกแปลงเป็น `true`
