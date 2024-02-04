# แยกโค้ดก้อนใหญ่ๆ ให้กลายเป็นชิ้นส่วนเล็กๆ ด้วยฟังก์ชัน

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
  import JsConsole from './components/JsConsole.vue'
</script>

- ในบทก่อนหน้า เกี่ยวกับเรื่อง `if`
  เราได้ลองสร้างโปรแกรมสำหรับคำนวณเกรดครับ

  <HtmlOutput src="/js/examples/if-else/grade-calculator.with-else-if.html" :height="128" />

- โดยโค้ดจากครั้งที่แล้ว เป็นแบบนี้:

  ```js:line-numbers
  calculateGrade.onclick = () => {
    let score = Number(scoreInput.value)
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
    alert('Your grade is ' + grade)
  }
  ```

- จะเห็นว่า
  ภายในฟังก์ชันของเรา มีการดำเนินการสามขั้นตอน:

  1. **Input:**
     รับคะแนนจากผู้ใช้ ผ่านกล่องข้อความ `scoreInput`
     (บรรทัดที่ 2)
  2. **Process:**
     คำนวณเกรดจากคะแนนที่ได้
     (บรรทัดที่ 3–14)
  3. **Output:**
     แสดงเกรดที่ได้ผ่านกล่องป๊อปอัพ `alert`
     (บรรทัดที่ 15)

- เนื่องจากโค้ด I/O (input/output) และโค้ดที่คำนวณเกรด ถูกมัดรวมกันอยู่ในฟังก์ชันเดียว
  วิธีเดียวที่จะทดสอบโค้ดนี้และตรวจสอบว่ามันทำงานอย่างถูกต้องหรือไม่ ก็เราต้องกรอกเลข กดปุ่ม และตรวจสอบผลลัพธ์เอาเอง
  น่าจะดีกว่าถ้าเราสามารถแยกโค้ดของการคำนวณเกรดออกเป็นฟังก์ชันแยกต่างหาก เพื่อที่เราจะได้ทดสอบมันตรงๆ ได้

## ขั้นตอนการรีแฟคเตอร์

- เราจะรีเฟคเตอร์โค้ดนี้โดยใช้ท่า Extract Function เช่นเดิมครับ
  ประกอบด้วย 3 ขั้นตอนหลักๆ

  1. สร้างฟังก์ชันใหม่
  2. คัดลอกโค้ดที่เกี่ยวข้องไปยังฟังก์ชันใหม่
  3. แทนที่โค้ดเดิมด้วยการเรียกใช้งานฟังก์ชันใหม่

### 1. สร้างฟังก์ชันใหม่

- เริ่มจากการสร้างฟังก์ชันใหม่ขึ้นมาก่อน
  ซึ่งเราจะตั้งชื่อว่า `getGrade`
  ฟังก์ชันนี้ควรจะรับคะแนนเข้าไปเป็นพารามิเตอร์
  และส่งค่าเกรดกลับออกมา

  ![](https://im.dt.in.th/ipfs/bafybeigrtdfbv3efzp7gokymcx6ywmm45ew4cjqgasjjx3cmbahyooqwyi/image.webp)

  <!-- prettier-ignore -->
  ```js
  let getGrade = (score) => { // [!code ++:2]
  }
  ```

### 2. คัดลอกโค้ดที่เกี่ยวข้องไปยังฟังก์ชันใหม่

- จากนั้นเราจะคัดลอกโค้ดที่เกี่ยวข้องกับการคำนวณเกรด
  ไปใส่ในฟังก์ชัน `getGrade`

  <!-- prettier-ignore -->
  ```js
  let getGrade = (score) => {
    let grade // [!code ++:12]
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
  }
  ```

  ::: warning โค้ดนี้ยังไม่สมบูรณ์
  โค้ดนี้ยังมีไม่สมบูรณ์ครับ แต่เพราะอะไร เราจะมาลองทดสอบกันดู
  :::

- ลองเรียกใช้งานฟังก์ชัน `getGrade` ดู

  <JsConsole :input="`getGrade(85)`" :output="{value:undefined}" />

  จะเห็นว่า ฟังก์ชัน `getGrade` ยังไม่ส่งค่าเกรดกลับออกมา
  นั่นก็เพราะว่า เรายังไม่ได้ใส่คำสั่ง `return` ในฟังก์ชัน `getGrade` ครับ
  แก้ไขโดยการเพิ่มคำสั่ง `return` เข้าไป:

  <!-- prettier-ignore -->
  ```js
  let getGrade = (score) => {
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
    return grade // [!code ++]
  }
  ```

- ลองเรียกใช้งานฟังก์ชัน `getGrade` ดูใหม่

  <JsConsole :input="`getGrade(85)`" :output="{value:'A'}" />

  จะเห็นว่า ฟังก์ชัน `getGrade` สามารถส่งค่าเกรดกลับออกมาได้แล้วครับ

  ::: tip ลองทดสอบกรณีอื่นๆ ดู
  ลองทดสอบกรณีอื่นๆ ดูด้วย เช่น `getGrade(75)` หรือ `getGrade(55)`
  เพื่อให้เรามั่นใจว่าฟังก์ชัน `getGrade` ยังคงทำงานถูกต้องอยู่
  :::

- นอกจากนี้
  ภายในฟังก์ชัน `getGrade` เรายังสามารถเลิกใช้ตัวแปร `grade` ได้
  โดยการใช้คำสั่ง `return` ภายในผลของแต่ละเงื่อนไขได้เลย:

  ```js
  let getGrade = (score) => {
    let grade // [!code --]
    if (score >= 80) {
      return 'A' // [!code ++]
      grade = 'A' // [!code --]
    } else if (score >= 70) {
      return 'B' // [!code ++]
      grade = 'B' // [!code --]
    } else if (score >= 60) {
      return 'C' // [!code ++]
      grade = 'C' // [!code --]
    } else if (score >= 50) {
      return 'D' // [!code ++]
      grade = 'D' // [!code --]
    } else {
      return 'F' // [!code ++]
      grade = 'F' // [!code --]
    }
    return grade // [!code --]
  }
  ```

  ซึ่งจะทำให้ฟังก์ชันของเราสั้นลงไปอีกครับ:

  ```js
  let getGrade = (score) => {
    if (score >= 80) {
      return 'A'
    } else if (score >= 70) {
      return 'B'
    } else if (score >= 60) {
      return 'C'
    } else if (score >= 50) {
      return 'D'
    } else {
      return 'F'
    }
  }
  ```

  ::: warning แก้โค้ดแล้วอย่าลืมทดสอบซ้ำ
  เมื่อใดก็ตามที่เราปรับโครงสร้างหรือทำการเปลี่ยนแปลงอื่นๆ กับโค้ดที่เราเขียน
  เราอาจเผลอทำอะไรสักอย่างผิดพลาด ส่งผลให้โค้ดของเราพัง
  ดังนั้น เมื่อเราแก้โค้ด เราจึงควรทดสอบโค้ดของเราใหม่ เพื่อให้แน่ใจว่ามันยังทำงานได้ตามที่คาดหวังไว้
  :::

### 3. แทนที่โค้ดเดิมด้วยการเรียกใช้งานฟังก์ชันใหม่

- เมื่อเรารีแฟคเตอร์โค้ดของเราแล้ว
  จะทำให้โค้ดใน `calculateGrade.onclick` ของเราสั้นลงมาก

  <!-- prettier-ignore -->
  ```js
  calculateGrade.onclick = () => {
    let score = Number(scoreInput.value)
    let grade
    grade = getGrade(score) // [!code ++]
    if (score >= 80) { // [!code --:11]
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
    alert('Your grade is ' + grade)
  }
  ```

- นอกจากนี้
  เราสามารถกำหนดค่าตัวแปร `grade` ตั้งแต่ตอนที่สร้างตัวแปรได้เลย

  <!-- prettier-ignore -->
  ```js
  calculateGrade.onclick = () => {
    let score = Number(scoreInput.value)
    let grade = getGrade(score) // [!code ++]
    let grade // [!code --]
    grade = getGrade(score) // [!code --]
    alert('Your grade is ' + grade)
  }
  ```

- อันที่จริง
  เราสามารถรีแฟคเตอร์ด้วยท่า [Inline Variable](https://refactoring.com/catalog/inlineVariable.html)
  เพื่อทำให้โค้ดของเราเหลือบรรทัดเดียวได้เลย

  <!-- prettier-ignore -->
  ```js
  calculateGrade.onclick = () => {
    let score = Number(scoreInput.value) // [!code --]
    let grade = getGrade(score) // [!code --]
    alert('Your grade is ' + grade) // [!code --]
    alert('Your grade is ' + getGrade(Number(scoreInput.value))) // [!code ++]
  }
  ```

  แต่ผมคิดว่ามันทำให้โค้ดนี้อ่านยากกว่าเดิม
  ดังนั้นผมจึงกลับไปใช้โค้ด 3 บรรทัดแบบเดิม
  ผมชอบโค้ดแบบนี้มากกว่าเพราะว่ามันแยกชัดเจนระหว่าง Input/Process/Output:

  <!-- prettier-ignore -->
  ```js
  calculateGrade.onclick = () => {
    let score = Number(scoreInput.value)  // Input
    let grade = getGrade(score)           // Process
    alert('Your grade is ' + grade)       // Output
  }
  ```

- และนี่คือโค้ดที่ผ่านการรีแฟคเตอร์แล้วครับ

  ::: details ดูโค้ด

  <<< @/public/js/examples/smaller-functions/grade-calculator.with-functions.html{15-27,30 html:line-numbers}

  :::

  <HtmlOutput src="/js/examples/smaller-functions/grade-calculator.with-functions.html" :height="128" />
