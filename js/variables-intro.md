---
draft: true
---

# ตัวแปร

เวลาเราเขียนโปรแกรม เรามักจะต้องการให้คอมพิวเตอร์ช่วยจำข้อมูลบางสิ่งให้เรา
เราสามารถใช้สิ่งที่เรียกว่า **ตัวแปร** (ภาษาอังกฤษ: [variable](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Variables)) เพื่อเก็บข้อมูลไว้ในหน่วยความจำของคอมพิวเตอร์ได้ครับ

<script setup>
  import JsConsole from './components/JsConsole.vue'
</script>

## ตัวแปร (Variables)

- ลองเปิด JavaScript Console แล้วพิมพ์ตัว `a`

  <div><JsConsole input='a' error="Uncaught ReferenceError: a is not defined" /></div>

  ข้อความ error นี้บอกว่าตัวแปรที่ชื่อว่า “a” ยังไม่ได้ถูกกำหนดค่า

- ใช้คำสั่ง `let` เพื่อประกาศตัวแปร

  <div><JsConsole input='let a' :output="{value: undefined}" /></div>

- เมื่อประกาศตัวแปรแล้ว ลองพิมพ์ `a` เข้าไปใหม่อีกครั้ง:

  <div><JsConsole input='a' :output="{value: undefined}" /></div>

- จากเดิมที่เกิด error
  ตอนนี้เราได้ผลลัพธ์เป็นคำว่า `undefined` แทน
  เพราะว่าตอนนี้มีตัวแปร “a” แล้ว
  แต่ตัวแปรนั้น ยังไม่ได้เก็บค่าใดๆ เลย
  เราจึงได้ค่าพิเศษที่เรียกว่า `undefined` กลับมา

  และ `undefined` ก็เป็น data type อีกชนิดนึงครับ:

  ![](https://im.dt.in.th/ipfs/bafybeigtdfu5hq4abbfrrteeurfdnqeg5eeyggdiacuqpdqpq5h33wlahm/image.webp)

- ลองกำหนดค่าให้ตัวแปร:

  <div><JsConsole input='a = 123' :output="{value: 123}" /></div>

- หลังจากนั้นลองพิมพ์ `a` อีกครั้ง:

  <div><JsConsole input='a' :output="{value: 123}" /></div>

  จะเห็นว่าตอนนี้ตัวแปร “a” มีค่าเป็น 123 แล้ว

- ลองสร้างตัวแปรและเอามาใช้เพิ่ม

  <div><JsConsole input='let b = 456' :output="{value: undefined}" /></div>

  <div><JsConsole input='a * b' :output="{value: 56088}" /></div>

- ตัวแปรที่เราสร้างใน JavaScript Console จะอยู่แค่ภายในหน้าเว็บนั้นๆ

  ถ้ากดปุ่ม Refresh เพื่อโหลดหน้าเว็บใหม่
  ตัวแปรที่สร้างไว้ก่อนหน้านี้ ก็จะหายไป

  <div><JsConsole input='a * b' error="Uncaught ReferenceError: a is not defined" /></div>

- นอกจากนี้ ตัวแปร เราสามารถกำหนดค่าใหม่ให้กับมันได้ครับ

  <div><JsConsole input='let x = 20' :output="{value: undefined}" /></div>

  <div><JsConsole input='x' :output="{value: 20}" /></div>

  <div><JsConsole input='x = x + 1' :output="{value: 21}" /></div>

  โค้ด `x = x + 1` อันนี้ไม่ใช่สมการคณิตศาสตร์นะครับ
  แต่เป็นคำสั่งที่ไว้บอกว่า
  ให้คำนวณหาค่า `x + 1` (คำตอบที่ได้คือ 21)
  แล้วเอาคำตอบนั้นมาเก็บในตัวแปร `x` ใหม่

### สรุปเรื่องการประกาศตัวแปร

```js
// ประกาศตัวแปร
let a

// ประกาศตัวแปรและกำหนดค่าเริ่มต้นให้
let b = 123
```

## ชื่อของตัวแปร

- สุดท้ายเรามาดูกันว่า เราตั้งชื่อตัวแปรเป็นอะไรได้บ้าง[^ident]

- ชื่อตัวแปรที่ถูกต้องตามหลักของภาษา สามารถมีตัวอักษร ตัวเลข เครื่องหมาย `_` หรือ `$` ก็ได้
  ชื่อตัวแปรในโค้ดตัวอย่างต่อไปนี้ สามารถใช้เป็นชื่อตัวแปรได้หมดเลยครับ[^varname]:

  ```js
  let name
  let yourName
  let your_name
  let YourName
  let YOURNAME
  let x1
  let $x
  ```

- แต่ชื่อตัวแปร ห้ามขึ้นต้นด้วยตัวเลข
  ห้ามมีเว้นวรรค
  และห้ามเป็นคำสงวนหรือที่เรียกกันว่า reserved words ครับ

  ![](https://im.dt.in.th/ipfs/bafybeia6alagn6g4ptp7gjrdpyyx5w5vlgkojpo7vhppzkldi2zk5mgqzi/image.webp)

- จะเห็นว่าภาษา JavaScript ค่อนข้างเปิดกว้างในวิธีการตั้งชื่อตัวแปร
  เราจะตั้งชื่อตัวแปรยังไงก็ได้เท่าที่กฏของภาษายอมรับ
  แต่ธรรมเนียมปฏิบัติ หรือ “convention” ที่ได้รับความนิยมใช้กัน จะตั้งชื่อวิธีนี้ครับ[^convention]

  - ชื่อตัวแปรที่เป็นคำๆ เดียว
    มักจะเขียนเป็นตัวพิมพ์เล็ก

  - ส่วนกรณีที่ชื่อตัวแปรประกอบด้วยหลายคำ
    ให้คำแรกเขียนด้วยตัวพิมพ์เล็ก ส่วนคำต่อๆ ไป ให้ขึ้นต้นด้วยตัวพิมพ์ใหญ่

  ![](https://im.dt.in.th/ipfs/bafybeiblmjndxpnlchzuy4wsz4tm2sohzf2djrm4c57t7s3fbmsvui3h7a/image.webp)

[^varname]:
    คำอธิบายนี้ยังไม่ถูกต้องซะทีเดียว (oversimplification)
    สามารถ[ดูกฏการตั้งชื่อตัวแปรแบบเต็มๆ ได้บน MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers)

[^convention]:
    เป็น convention สำหรับกรณีส่วนใหญ่
    แต่มีข้อยกเว้น ซึ่งจะยังไม่อธิบาย ณ ที่นี้

[^ident]: ชื่อของตัวแปร ในเชิงของโครงสร้างภาษา เรียกว่า [identifier](https://developer.mozilla.org/en-US/docs/Glossary/Identifier)

## ปิดท้ายบท

- ตอนนี้เราได้เรียนรู้เกี่ยวกับตัวภาษา JavaScript กันไปพอสมควรแล้ว

- แต่ถ้าเราอยู่กับแค่ JavaScript Console อย่างเดียว
  เราอาจจะทำอะไรได้ไม่ค่อยเยอะเท่าไหร่ถ้ายังไม่เซียนครับ
  ดังนั้นเราจะพักช่วงทฤษฎีไว้ตรงนี้ก่อน

- และในบทถัดไป เราจะมาเรียนรู้เรื่อง การสร้างหน้าเว็บกันครับ
