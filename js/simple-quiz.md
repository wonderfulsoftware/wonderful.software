---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
</script>

# มินิโปรเจกต์: ควิซอย่างง่าย

ในโปรเจกต์นี้ เราจะสร้างโปรแกรมควิซแบบง่ายๆ

มีคำถาม 1 ข้อ
และมีตัวเลือก 4 ตัวเลือก
เมื่อกดปุ่มที่ตรงกับคำตอบที่ถูกต้อง จะแสดงข้อความว่า “ถูกต้อง”
แต่ถ้ากดปุ่มอื่นๆ จะแสดงข้อความว่า “ยังไม่ถูก” และมีปุ่มให้กดเพื่อลองตอบใหม่

ตัวอย่าง:

<HtmlOutput src="/js/mini-projects/simple-quiz.html" :height="256" />

## เรื่องที่เราจะเรียนรู้ในโปรเจกต์นี้

ในโปรเจกต์นี้…

- เราจะนำความรู้เรื่อง boolean และการแสดง/ซ่อน element มาใช้
- และจะรู้จักกับ element ใหม่อีกชนิด คือ `<div>`

## ขึ้นหน้าเว็บ

- เริ่มจากสร้างหน้าเว็บตามนี้

  <!-- prettier-ignore -->
  ```html
  <h1>Simple Quiz</h1>
  
  <!-- แสดงตอนเริ่มโปรแกรม -->
  <div id="beforeAnswer">
    <p id="question"><b>คำถาม:</b> JavaScript ถูกสร้างเมื่อปีไหน</p>
    <input id="choiceA" type="button" value="(A) 1993">
    <input id="choiceB" type="button" value="(B) 1994">
    <input id="choiceC" type="button" value="(C) 1995">
    <input id="choiceD" type="button" value="(D) 1996">
  </div>
  
  <!-- แสดงเมื่อตอบถูก -->
  <p id="correctFeedback">
    <b>ถูกต้อง!</b> 🎉
  </p>

  <!-- แสดงเมื่อตอบผิด -->
  <div id="incorrectFeedback">
    <p>
      <b>ยังไม่ถูก</b>
    </p>
    <input id="tryAgain" type="button" value="ลองอีกครั้ง">
  </div>
  ```

  ผลลัพธ์:

  <HtmlOutput src="/js/mini-projects/simple-quiz.starter.html" :height="320" />

  :::info แนะนำ element `<div>`

  [element `<div>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div) ทำหน้าที่เหมือนเป็นกล่อง เพื่อจับกลุ่ม element ต่างๆ ที่เกี่ยวข้องกันไว้ด้วยกัน
  ผมได้นำ element `<div>` มาใช้สำหรับ `id="beforeAnswer"` และ `id="incorrectFeedback"`
  เพื่อให้ผมสามารถซ่อน/แสดง element เป็นกลุ่มได้ โดยไม่ต้องซ่อน/แสดง element ทีละตัว

  :::

## ซ่อนบางส่วนของหน้าเว็บ

- เพิ่ม attribute `hidden` ให้ `correctFeedback` และ `incorrectFeedback`

  <!-- prettier-ignore -->
  ```html{2,7}
  <!-- แสดงเมื่อตอบถูก -->
  <p id="correctFeedback" hidden>
    <b>ถูกต้อง!</b> 🎉
  </p>

  <!-- แสดงเมื่อตอบผิด -->
  <div id="incorrectFeedback" hidden>
    <p>
      <b>ยังไม่ถูก</b>
    </p>
    <input id="tryAgain" type="button" value="ลองอีกครั้ง">
  </div>
  ```

  :::tip ตรวจสอบผลลัพธ์

  1. เปิดเว็บที่สร้างขึ้นมา
  2. ควรจะเห็นแค่คำถามและปุ่มตัวเลือก
     ในขณะที่ส่วนของ “ถูกต้อง!” และ “ยังไม่ถูก” ควรจะถูกซ่อนไว้

## แสดงผลลัพธ์เมื่อตอบถูก

- เริ่มจากสร้างตัวแปรสำหรับ element ต่างๆ ก่อน

  <!-- prettier-ignore -->
  ```html
  <script>
    let beforeAnswer = document.getElementById('beforeAnswer')
    let correctFeedback = document.getElementById('correctFeedback')
    let incorrectFeedback = document.getElementById('incorrectFeedback')
    let tryAgain = document.getElementById('tryAgain')
    let question = document.getElementById('question')
    let choiceA = document.getElementById('choiceA')
    let choiceB = document.getElementById('choiceB')
    let choiceC = document.getElementById('choiceC')
    let choiceD = document.getElementById('choiceD')
  </script>
  ```

- กรณีที่ตอบถูก (ตัวเลือก C)
  ให้ซ่อน `beforeAnswer` และแสดง `correctFeedback`

  <!-- prettier-ignore -->
  ```js
  choiceC.onclick = () => {
    beforeAnswer.hidden = true
    correctFeedback.hidden = false
  }
  ```

  :::tip ตรวจสอบผลลัพธ์

  1. เปิดเว็บที่สร้างขึ้นมา
  2. คลิกปุ่มตัวเลือก C
  3. ตัวเลือกต่างๆ ควรจะหายไป
     และควรจะเห็นข้อความ “ถูกต้อง!”

  :::

- กรณีที่ตอบผิด (ตัวเลือก A, B, หรือ D)
  ให้ซ่อน `beforeAnswer` และแสดง `incorrectFeedback`

  <!-- prettier-ignore -->
  ```js
  choiceA.onclick = () => { // [!code focus:4]
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceB.onclick = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceC.onclick = () => { // [!code focus:4]
    beforeAnswer.hidden = true
    correctFeedback.hidden = false
  }
  choiceD.onclick = () => { // [!code focus:4]
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  ```

  :::tip ตรวจสอบผลลัพธ์

  1. เปิดเว็บที่สร้างขึ้นมา
  2. คลิกปุ่มตัวเลือก A, B, หรือ D
  3. ตัวเลือกต่างๆ ควรจะหายไป
     และควรจะเห็นข้อความ “ยังไม่ถูก!” และมีปุ่ม “ลองอีกครั้ง”

  :::

- ทำให้ปุ่ม “ลองอีกครั้ง” ซ่อน `incorrectFeedback` และแสดง `beforeAnswer`

  <!-- prettier-ignore -->
  ```js
  tryAgain.onclick = () => {
    incorrectFeedback.hidden = true
    beforeAnswer.hidden = false
  }
  ```

  :::tip ตรวจสอบผลลัพธ์

  1. เปิดเว็บที่สร้างขึ้นมา
  2. คลิกปุ่มตัวเลือก A, B, หรือ D
  3. คลิกปุ่ม “ลองอีกครั้ง”
  4. ตัวเลือกต่างๆ ควรจะกลับมาแสดงอีกครั้ง

  :::
