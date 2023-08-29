---
draft: true
questions:
  - prompt: '"10" + "10" * "0" + "10"'
    answer:
      - '10010'
      - '"10010"'
      - "'10010'"
      - '`10010`'
    type: string
---

# รู้จักกับชนิดข้อมูล (Data Types)

<script setup>
  import JsConsole from './components/JsConsole.vue'
  import JsExercise from './exercises/JsExercise.vue'
</script>

- ตอนนี้เราได้ลองใช้งานข้อมูล 2 ชนิดแล้วในภาษา JavaScript
  ก็คือตัวเลข (Number) กับข้อความ (String)

  ![](https://im.dt.in.th/ipfs/bafybeigmlktpfvuujjwio3q6fqw6apb6ifpltejncdsuc2oen2sfgzq7le/image.webp)

## typeof

- เราสามารถตรวจสอบชนิดข้อมูล โดยการใช้โอเปอเรเตอร์ `typeof` ได้

  <div><JsConsole input='typeof 123' :output="{value: 'number'}" /></div>

  <div><JsConsole input='typeof "Hello, world!"' :output="{value: 'string'}" /></div>

## การแปลงชนิดข้อมูล (Type Coercion)

- จำได้ใช่ไหมครับว่าในตอนก่อนหน้า เครื่องหมาย `+` สามารถใช้ได้ทั้งสำหรับการบวกเลข และต่อ string

- แต่จะเกิดอะไรขึ้น ถ้าเอาเลข กับ string มา `+` กัน?

  - ใน[เอกสารอ้างอิงของเครื่องหมายบวก](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)ได้ระบุไว้ว่า
    ในการเอาค่าสองค่ามาบวกกัน
    หากมีฝั่งใดฝั่งหนึ่งเป็นข้อมูลชนิด string
    อีกฝั่งจะถูกแปลงเป็น string
    แล้วจึงนำมาต่อกัน

    <div><JsConsole input='123 + "456"' :output="{value: '123456'}" /></div>

- หรือถ้าเอา string สองอันมา `*` กันล่ะ?

  - ใน[เอกสารอ้างอิงของเครื่องหมายดอกจัน](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication)ได้ระบุไว้ว่า
    ทั้งสองฝั่ง จะถูกแปลงเป็นตัวเลขก่อน แล้วจึงนำมาคูณกัน
    ผลลัพธ์ที่ได้จะเป็นข้อมูลที่มีชนิดเป็นตัวเลข

    <div><JsConsole input='"123" * "456"' :output="{value: 56088}" /></div>

## Exercise

- ในหัวข้อก่อนหน้า (‘ลำดับการทำงานของตัวดำเนินการ’) เราได้เรียนรู้กันไปว่า `10 + 10 * 0 + 10` ในภาษา JavaScript คำตอบคือ 20

    <div><JsConsole input='10 + 10 * 0 + 10' :output="{value: 20}" /></div>

- แต่ถ้าเราลองเปลี่ยนตัวเลขทั้งหมดในโจทย์ ให้เป็น string แทนล่ะ JavaScript จะตอบเท่าไหร่?

    <div><JsConsole input='"10" + "10" * "0" + "10"' /></div>

- ลองหาคำตอบโดยไม่ใช้ Console ดูครับ
  ลองเช็คคำตอบข้างล่างได้เลย

    <JsExercise :questions="$frontmatter.questions" />
