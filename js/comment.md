---
draft: true
---

# คอมเม้นต์ในภาษา JavaScript

<script setup>
</script>

- ในบทก่อนหน้า
  เราได้เรียนรู้ว่าเราสามารถเขียนคอมเม้นต์ในภาษา HTML ได้โดยเขียนโค้ดเป็นรูปแบบนี้:

  ```html
  <!-- คอมเม้นต์ -->
  ```

- ในภาษา JavaScript ก็มี[คอมเม้นต์](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#comments)เช่นกัน
  มีอยู่ 2 รูปแบบ

  1. คอมเม้นต์บรรทัดเดียว (single-line comment หรือ [line comment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#line_comments))
  2. คอมเม้นต์หลายบรรทัด (multi-line comment หรือ [block comment](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#block_comments))

## คอมเม้นต์บรรทัดเดียว (line comment)

- คอมเม้นต์บรรทัดเดียว เริ่มด้วยการพิมพ์ `//` คอมเม้นต์จะยาวไปจนถึงจุดสิ้นสุดของบรรทัด

  ```js
  // คอมเม้นต์บรรทัดเดียว
  ```

- เราสามารถใช้คอมเม้นต์เพื่ออธิบายโค้ดที่อาจจะไม่ตรงไปตรงมาได้

  ```js{8}
  let a = document.getElementById('a')
  let b = document.getElementById('b')
  let c = document.getElementById('c')
  let btn = document.getElementById('btn')

  calculate.onclick = () => {
    //           ใช้ `* 1` เพื่อแปลงค่าจาก string เป็น number
    let answer = (a.value * 1) + (b.value * 1)
    c.value = answer
  }
  ```

  เวลาคอมพิวเตอร์รันโค้ดที่เราเขียน
  มันก็จะอ่านข้ามคอมเม้นต์ครับ

- หรือบางทีเราต้องการให้โค้ดบางบรรทัดไม่ทำงาน แต่ยังอยากเก็บโค้ดนั้นไว้ชั่วคราว
  ก็สามารถใส่ `//` ไว้ข้างหน้าบรรทัด
  เพื่อให้คอมพิวเตอร์ทำงานข้ามบรรทัดนั้นไปได้ครับ

  ```js{3}
  calculate.onclick = () => {
    let answer = (a.value * 1) + (b.value * 1)
    // console.log(answer)
    c.value = answer
  }
  ```

  ในตัวอย่างนี้ โค้ด `console.log(answer)` จะไม่ทำงาน เพราะกลายเป็นคอมเม้นต์ไปแล้ว

## คอมเม้นต์หลายบรรทัด (block comment)

- คอมเม้นต์หลายบรรทัด เริ่มด้วยการพิมพ์ `/*` และจบด้วยการพิมพ์ `*/`

  ```js
  /*
    คอมเม้นต์หลายบรรทัด
    บรรทัดที่ 2
    บรรทัดที่ 3
  */
  ```
