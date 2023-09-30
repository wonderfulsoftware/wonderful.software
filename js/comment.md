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

- ในภาษา JavaScript ก็มีคอมเม้นต์เช่นกัน
  มีอยู่ 2 รูปแบบ

  1. คอมเม้นต์บรรทัดเดียว (single-line comment)
  2. คอมเม้นต์หลายบรรทัด (multi-line comment)

## คอมเม้นต์บรรทัดเดียว (single-line comment)

- คอมเม้นต์บรรทัดเดียว เริ่มด้วยการพิมพ์ `//` คอมเม้นต์จะยาวไปจนถึงจุดสิ้นสุดของบรรทัด

  ```js
  // คอมเม้นต์บรรทัดเดียว
  ```

- เราสามารถใช้คอมเม้นต์เพื่ออธิบายโค้ดที่อาจจะไม่ตรงไปตรงมาได้

  ```js{7}
  let a = document.getElementById('a')
  let b = document.getElementById('b')
  let c = document.getElementById('c')
  let btn = document.getElementById('btn')

  btn.onclick = () => {
    //        ใช้ `* 1` เพื่อแปลงค่าจาก string เป็น number
    c.value = (a.value * 1) + (b.value * 1)
  }
  ```

## คอมเม้นต์หลายบรรทัด (multi-line comment)

- คอมเม้นต์หลายบรรทัด เริ่มด้วยการพิมพ์ `/*` และจบด้วยการพิมพ์ `*/`

  ```js
  /*
    คอมเม้นต์หลายบรรทัด
    บรรทัดที่ 2
    บรรทัดที่ 3
  */
  ```
