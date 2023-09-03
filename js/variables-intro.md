---
draft: true
---

# ตัวแปร

<script setup>
  import JsConsole from './components/JsConsole.vue'
</script>

## ตัวแปร (Variables)

- บางครั้งเราต้องการให้คอมพิวเตอร์ช่วยจำข้อมูลไว้ให้เรา
  เราสามารถใช้สิ่งที่เรียกว่า **ตัวแปร** (Variable) เพื่อเก็บข้อมูลไว้ในหน่วยความจำของคอมพิวเตอร์ได้

- ลองเปิด JavaScript Console แล้วพิมพ์ตัว `a`

  <div><JsConsole input='a' error="Uncaught ReferenceError: a is not defined" /></div>

  ข้อความ Error นี้บอกว่าตัวแปร “a” ยังไม่ได้ถูกกำหนดค่า

- ลองพิมพ์ว่า `let a`

  <div><JsConsole input='let a' :output="{value: undefined}" /></div>

  นี่คือการสร้างตัวแปร “a” โดยใช้คำสั่ง `let`

- เสร็จแล้วลองพิมพ์ `a` ใหม่อีกครั้ง:

  <div><JsConsole input='a' :output="{value: undefined}" /></div>

  จากเดิมที่เกิด Error ตอนนี้เราจะเห็นคำว่า `undefined` แทน
  เพราะว่าตอนนี้มีตัวแปร “a” แล้ว แต่ยังไม่มีค่าใดๆ ในตัวแปรนั้น

- ลองกำหนดค่าให้ตัวแปร:

  <div><JsConsole input='a = 123' :output="{value: 123}" /></div>

- หลังจากนั้นลองพิมพ์ `a` อีกครั้ง:

  <div><JsConsole input='a' :output="{value: 123}" /></div>

  จะเห็นว่าตอนนี้ตัวแปร “a” มีค่าเป็น 123 แล้ว

- ลองสร้างตัวแปรและเอามาใช้เพิ่ม

  <div><JsConsole input='let b = 456' :output="{value: undefined}" /></div>

  <div><JsConsole input='a * b' :output="{value: 56088}" /></div>

- ตัวแปรที่เราสร้างใน JavaScript Console จะอยู่แค่ภายในหน้าเว็บนั้นๆ
  ถ้ากดปุ่ม Refresh หน้าเว็บ
  ตัวแปรที่สร้างไว้ก่อนหน้านี้ ก็จะหายไป
