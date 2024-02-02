---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
</script>

# ลดโค้ดซ้ำซ้อนด้วยฟังก์ชัน

ในตอนนี้เราจะลองเอาฟังก์ชันมาใช้ลดความซ้ำซ้อนของโค้ดครับ

## รู้จักกับคำว่า Refactoring

- เราจะกลับไปแก้ไขโปรเจกต์ก่อนๆ ที่เราเคยทำ
  ถ้าจำกันได้ ในโปรเจกต์ก่อนๆ จะมีโค้ดบางส่วนที่หน้าตาเหมือนๆ กันค่อนข้างเยอะ
  เราจะใช้คอนเซปต์ของการสร้างฟังก์ชันมา refactor หรือปรับโครงสร้างโค้ดของเรา ให้มีโค้ดซ้ำซ้อนน้อยลงครับ

- คำว่า [“refactor”](https://refactoring.com/) หมายถึงการปรับแก้โครงสร้างโค้ด โดยที่โค้ดยังทำงานเหมือนเดิมครับ

## Refactor มินิโปรเจกต์ ควิซอย่างง่าย

- ใน[มินิโปรเจกต์: ควิซอย่างง่าย](./simple-quiz.md)
  เราได้เขียนโค้ดชุดนี้เพื่อกำหนดการทำงานให้กับปุ่มตัวเลือกต่างๆ

  <!-- prettier-ignore -->
  ```js
  choiceA.onclick = () => { 
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceB.onclick = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceC.onclick = () => { 
    beforeAnswer.hidden = true
    correctFeedback.hidden = false
  }
  choiceD.onclick = () => { 
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  ```

- จะเห็นว่าในกรณีของปุ่มที่ตรงกับคำตอบไม่ถูกต้อง
  โค้ดภายในนั้นเหมือนๆ กันหมด
  เรียกว่าเป็นโค้ดซ้ำซ้อน (duplicated code) ครับ

  <!-- prettier-ignore -->
  ```js{2-3,6-7,14-15}
  choiceA.onclick = () => { 
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceB.onclick = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceC.onclick = () => { 
    beforeAnswer.hidden = true
    correctFeedback.hidden = false
  }
  choiceD.onclick = () => { 
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  ```

- เราสามารถสร้างเป็นฟังก์ชันเพื่อรับมือการกดปุ่มที่ตรงกับคำตอบที่ผิดได้
  ผมจะตั้งชื่อว่า `handleIncorrectAnswer`
  แล้วนำโค้ดที่ซ้ำซ้อนมาใส่ในฟังก์ชันนี้

  <!-- prettier-ignore -->
  ```js
  let handleIncorrectAnswer = () => { // [!code focus:4] // [!code ++:4]
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceA.onclick = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceB.onclick = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceC.onclick = () => { 
    beforeAnswer.hidden = true
    correctFeedback.hidden = false
  }
  choiceD.onclick = () => { 
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  ```

- จากนั้นเราก็จะทำให้โค้ดเรียกใช้ฟังก์ชัน `handleIncorrectAnswer`
  แทนการเขียนโค้ดซ้ำๆ ในทุกๆ ปุ่ม

  <!-- prettier-ignore -->
  ```js
  let handleIncorrectAnswer = () => { // [!code focus:4]
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceA.onclick = () => { // [!code focus:5]
    beforeAnswer.hidden = true // [!code --]
    incorrectFeedback.hidden = false // [!code --]
    handleIncorrectAnswer() // [!code ++]
  }
  choiceB.onclick = () => { // [!code focus:5]
    beforeAnswer.hidden = true // [!code --]
    incorrectFeedback.hidden = false // [!code --]
    handleIncorrectAnswer() // [!code ++]
  }
  choiceC.onclick = () => { 
    beforeAnswer.hidden = true
    correctFeedback.hidden = false
  }
  choiceD.onclick = () => { // [!code focus:5]
    beforeAnswer.hidden = true // [!code --]
    incorrectFeedback.hidden = false // [!code --]
    handleIncorrectAnswer() // [!code ++]
  }
  ```

- นี่คือท่าการรีแฟคเตอร์ที่เรียกว่า [**Extract Function**](https://refactoring.com/catalog/extractFunction.html) (บางภาษาเรียกว่า [Extract Method](https://refactoring.guru/extract-method))
  เป็นการแกะโค้ดภายในฟังก์ชัน แยกออกมาเป็นฟังก์ชันใหม่

- เพื่อความสม่ำเสมอในโค้ดทั้งสองกรณี (คำตอบถูกและคำตอบผิด)
  ผมจะแยกโค้ดการทำงานของปุ่มคำตอบที่ถูกต้องออกมาด้วย
  เป็นฟังก์ชันที่ชื่อ `handleCorrectAnswer`

  <!-- prettier-ignore -->
  ```js
  let handleIncorrectAnswer = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  let handleCorrectAnswer = () => { // [!code ++:4]
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceA.onclick = () => {
    handleIncorrectAnswer()
  }
  choiceB.onclick = () => {
    handleIncorrectAnswer()
  }
  choiceC.onclick = () => {
    beforeAnswer.hidden = true // [!code --]
    correctFeedback.hidden = false // [!code --]
    handleCorrectAnswer() // [!code ++]
  }
  choiceD.onclick = () => {
    handleIncorrectAnswer()
  }
  ```

## กำหนดฟังก์ชันให้กับปุ่มตัวเลือกตรงๆ

- ในตอนนี้ เราได้กำหนดฟังก์ชัน onclick ให้ปุ่มต่างๆ
  โดยแต่ละปุ่มจะมีฟังก์ชัน onclick ของมันเอง
  แต่จะเห็นว่า ฟังก์ชันเหล่านี้เราสร้างขึ้นมา แค่เพื่อให้มันเรียกใช้งานฟังก์ชันอื่นๆ อีกที

  <!-- prettier-ignore -->
  ```js{9-20}
  let handleIncorrectAnswer = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  let handleCorrectAnswer = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceA.onclick = () => {
    handleIncorrectAnswer()
  }
  choiceB.onclick = () => {
    handleIncorrectAnswer()
  }
  choiceC.onclick = () => { 
    handleCorrectAnswer()
  }
  choiceD.onclick = () => {
    handleIncorrectAnswer()
  }
  ```

- จริงๆ แล้ว
  เราสามารถกำหนดฟังก์ชันสองฟังก์ชันที่เราสร้างไว้ (`handleIncorrectAnswer` กับ `handleCorrectAnswer`) เข้าไปที่ onclick ของแต่ละปุ่มได้เลย
  เพื่อให้โค้ดกระชับมากขึ้น

  <!-- prettier-ignore -->
  ```js
  let handleIncorrectAnswer = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  let handleCorrectAnswer = () => {
    beforeAnswer.hidden = true
    incorrectFeedback.hidden = false
  }
  choiceA.onclick = () => { // [!code --:3]
    handleIncorrectAnswer()
  }
  choiceA.onclick = handleIncorrectAnswer // [!code ++]
  choiceB.onclick = () => { // [!code --:3]
    handleIncorrectAnswer()
  }
  choiceB.onclick = handleIncorrectAnswer // [!code ++]
  choiceC.onclick = () => { // [!code --:3]
    handleCorrectAnswer()
  }
  choiceC.onclick = handleCorrectAnswer // [!code ++]
  choiceD.onclick = () => { // [!code --:3]
    handleIncorrectAnswer()
  }
  choiceD.onclick = handleIncorrectAnswer // [!code ++]
  ```

- สุดท้ายแล้วโค้ดของโปรเจกต์เราจึงเหลือแค่นี้:

  ::: details ดูโค้ด (ก่อน)

  <<< @/public/js/mini-projects/simple-quiz.html{40-55 html:line-numbers}

  :::

  ::: details ดูโค้ด (หลัง)

  <<< @/public/js/mini-projects/simple-quiz.v2.html{40-51 html:line-numbers}

  :::

  <HtmlOutput src="/js/mini-projects/simple-quiz.v2.html" :height="256" />
