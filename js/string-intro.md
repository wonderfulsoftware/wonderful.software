---
draft: true
---

# รู้จักกับ String

<script setup>
  import JsConsole from './components/JsConsole.vue'
</script>

ในตอนก่อนหน้า เราได้เขียนโค้ดเพื่อให้คอมพิวเตอร์ทำงานกับตัวเลขได้แล้ว
ในตอนนี้ เราจะมาเรียนรู้วิธีการทำงานกับข้อความ (หรือที่เรียกกันว่า [String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)) กันบ้าง

![](https://im.dt.in.th/ipfs/bafybeicpuqhtjkudazisehuw556fnybyz4gbv44kmb6x74pdaogfxica3m/image.webp)

## ข้อความ (String)

- ลองเปิด JavaScript Console แล้วพิมพ์ `"Hello, world!"` ดูครับ

  <div><JsConsole input='"Hello, world!"' :output="{value: 'Hello, world!'}" /></div>

- จะเห็นว่าเราสามารถสร้างสตริงได้ โดยการใช้เครื่องหมายอัญประกาศคู่ `"` (double quotes) ครอบข้อความ

- ถ้าเราลืมใส่ double quotes ก็จะเกิดสิ่งที่เรียกว่า SyntaxError ครับ
  (หมายความว่า โค้ดที่เราเขียนไม่ถูกต้องตามไวยากรณ์ของภาษา ทำให้คอมพิวเตอร์ไม่สามารถเข้าใจได้)

  <div><JsConsole input='Hello, world!' error="Uncaught SyntaxError: Unexpected token '!'" /></div>

- หรือถ้าเราใส่ double quotes ไว้ข้างหน้าแล้ว แต่ลืมใส่ข้างหลัง ก็ SyntaxError เช่นกัน

  <div><JsConsole input='"Hello, world!' error="Uncaught SyntaxError: Invalid or unexpected token" /></div>

- นอกจาก double quotes แล้ว เรายังสามารถใช้ single quotes `'` ครอบข้อความได้เช่นกันครับ[^singlequotes]

  ```js
  // ใช้ single quote
  'Hello, world!'

  // ใช้ double quote
  'Hello, world!'
  ```

- แปลว่า ถ้าข้อความของเรามี single quotes อยู่ในนั้น ก็สามารถใช้ double quotes ครอบข้อความได้

  ```js
  "It's dangerous to go alone! Take this."
  ```

- และถ้าข้อความของเรามี double quotes อยู่ในนั้น ก็สามารถใช้ single quotes ครอบข้อความได้

  ```js
  '"Who are you?" said the Caterpillar.'
  ```

- …แล้วถ้าข้อความของเรา มีทั้ง double quotes และ single quotes ล่ะ จะทำยังไงดี?

  ![](https://im.dt.in.th/ipfs/bafybeiecx2j722c4g72jxszudvlimzepxmuy7vsqikm5fasyhzqrki7g34/image.webp)

  เดี๋ยวคำถามนี้ และคำถามอื่นๆ ที่เกี่ยวกับ string เราจะมาตอบกันในบทหลังๆ เมื่อเราเรียนรู้ภาษา JavaScript ในระดับลึกขึ้นครับ

[^singlequotes]:
    ภาษา JavaScript อนุญาตให้ใช้ double quotes หรือ single quotes ครอบข้อความได้ทั้งคู่ (สื่อความหมายเดียวกัน)
    แต่บางภาษา เช่น ภาษา C จะอนุญาตให้ใช้เฉพาะ double quotes เพื่อครอบ string เท่านั้น (ตัว single quotes มีความหมายอื่น)

## Concatenation

<!-- prettier-ignore -->
- ถ้าเรามี String สองตัว เราสามารถเอามันมาต่อกันได้ โดยใช้เครื่องหมายบวก `+`

  <div><JsConsole input='"Hello, " + "world!"' :output="{value: 'Hello, world!'}" /></div>

- จะเห็นว่า ในภาษา JavaScript เครื่องหมาย + มีได้สองความหมาย[^plus]

  1. ใช้ “บวก” เลข (Addition)

      <div><JsConsole input='1 + 2' :output="{value: 3}" /></div>

  2. ใช้ “ต่อ” สตริงเข้าด้วยกัน (Concatenation)

      <div><JsConsole input='"Hello, " + "world!"' :output="{value: 'Hello, world!'}" /></div>

## Up next

ก็จะเห็นว่า JavaScript ไม่ได้มีแค่ตัวเลข
แต่มีข้อความ และมีข้อมูลชนิดอื่นๆ ด้วย
คำว่า “ชนิดข้อมูล” ภาษาอังกฤษคือ “data type” เป็นหัวข้อของตอนต่อไปครับ

[^plus]:
    ในภาษาอย่าง JavaScript, Java, Python, Ruby, Swift, C#, Go ใช้เครื่องหมายบวก `+` สำหรับทั้งการบวกเลขและต่อสตริงเข้าด้วยกัน
    แต่ในภาษาอื่นๆ อาจจะไม่เป็นเช่นนั้น
    เช่น ภาษา PHP และ Perl ใช้เครื่องหมาย `.` ในการต่อสตริง,
    ภาษา Lua ใช้เครื่องหมาย `..` ในการต่อสตริง,
    ภาษา Haskell ใช้เครื่องหมาย `++` ในการต่อสตริง,
    ภาษา VB.NET และสูตร Excel ใช้เครื่องหมาย `&` ในการต่อสตริง,
    และในบางภาษาไม่มีเครื่องหมายสำหรับการต่อสตริงเลย แต่ใช้สิ่งที่เรียกว่าฟังก์ชันเพื่อทำการต่อสตริงแทน เช่น `CONCAT()` ในภาษา SQL หรือ `strcat()` ในภาษา C
