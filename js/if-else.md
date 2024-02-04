---
draft: true
---

<script setup>
  import { reactive } from 'vue'
  import JsConsole from './components/JsConsole.vue'
  import CodeTemplate from './components/CodeTemplate.vue'
  import HtmlOutput from './components/HtmlOutput.vue'
</script>

# if และ else

จากโปรเจกต์ที่แล้ว
เราได้ลองเล่นกับ `if` กับ `else` กันดูไปแล้ว

ในตอนนีี้ เราจะมาเรียนรู้โครงสร้างของ [`if` กับ `else`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) กัน

```js
if (เงื่อนไข) {
  // โค้ดที่จะทำงานถ้าเงื่อนไขเป็นจริง
} else {
  // โค้ดที่จะทำงานถ้าเงื่อนไขเป็นเท็จ
}
```

## การใช้ if ซ้อนกัน

- เวลาเราเขียนโปรแกรม
  เงื่อนไขของเราอาจจะซับซ้อนมากกว่าแค่สองเส้นทาง

- **เราสามารถเอา if ซ้อนกันได้**
  โดยเราจะเขียนเงื่อนไขที่ซ้อนกันได้เท่าที่เราต้องการ

## ตัวอย่าง: โปรแกรมคำนวณเกรด

- ผมจะสร้างโปรแกรมที่คำนวณเกรดของนักเรียน
  โดยโปรแกรมจะรับคะแนนเข้ามา และแสดงเกรดออกมา โดยใช้ตารางเกรดดังนี้

  | คะแนน  | เงื่อนไข           | เกรด |
  | ------ | ------------------ | ---- |
  | 80-100 | คะแนน ≥ 80         | A    |
  | 70-79  | 70 ≤ คะแนน &lt; 80 | B    |
  | 60-69  | 60 ≤ คะแนน &lt; 70 | C    |
  | 50-59  | 50 ≤ คะแนน &lt; 60 | D    |
  | 0-49   | คะแนน &lt; 50      | F    |

- ตัวอย่าง:

  <HtmlOutput src="/js/examples/if-else/grade-calculator.nested.html" :height="128" />

  :::tip ลองเล่นกับตัวอย่างข้างบนดู

  1. ใส่คะแนน 100 แล้วกด Calculate grade &rarr; ควรได้เกรด A
  2. ใส่คะแนน 90 แล้วกด Calculate grade &rarr; ควรได้เกรด A
  3. ใส่คะแนน 80 แล้วกด Calculate grade &rarr; ควรได้เกรด A
  4. ใส่คะแนน 79 แล้วกด Calculate grade &rarr; ควรได้เกรด B
  5. ใส่คะแนน 70 แล้วกด Calculate grade &rarr; ควรได้เกรด B
  6. ใส่คะแนน 69 แล้วกด Calculate grade &rarr; ควรได้เกรด C
  7. ใส่คะแนน 60 แล้วกด Calculate grade &rarr; ควรได้เกรด C
  8. ใส่คะแนน 59 แล้วกด Calculate grade &rarr; ควรได้เกรด D
  9. ใส่คะแนน 50 แล้วกด Calculate grade &rarr; ควรได้เกรด D
  10. ใส่คะแนน 49 แล้วกด Calculate grade &rarr; ควรได้เกรด F
  11. ใส่คะแนน 0 แล้วกด Calculate grade &rarr; ควรได้เกรด F

  :::

- เขียนโปรแกรมดังนี้

  ```html:line-numbers
  Your score:
  <input id="scoreInput" value="100" type="number" max="100" min="0" />
  <input id="calculateGrade" value="Calculate grade" type="button" />

  <script>
    let scoreInput = document.getElementById('scoreInput')
    let calculateGrade = document.getElementById('calculateGrade')

    calculateGrade.onclick = () => {
      let score = Number(scoreInput.value)
      let grade
      if (score >= 80) {
        grade = 'A'
      } else {
        if (score >= 70) {
          grade = 'B'
        } else {
          if (score >= 60) {
            grade = 'C'
          } else {
            if (score >= 50) {
              grade = 'D'
            } else {
              grade = 'F'
            }
          }
        }
      }
      alert('Your grade is ' + grade)
    }
  </script>
  ```

  :::tip การลดเงื่อนไขซ้ำซ้อน

  เงื่อนไขของเกรด B คือ “70 ≤ คะแนน &lt; 80”
  แต่ในโค้ด บรรทัดที่ 15 (ซึ่งกำหนดเงื่อนไขของเกรด B เอาไว้) เขียนไว้แค่ `score >= 70` ทำไมถึงเป็นเช่นนั้น?

  ก็เพราะว่า
  ถ้าคะแนน ≥ 80 (เงื่อนไขในบรรทัดที่ 12),
  จะทำให้เข้าเงื่อนไขของเกรด A
  ทำให้โค้ดในส่วนของ else (บรรทัดที่ 15–27) ไม่ทำงาน
  นั่นแปลว่า ถ้าโค้ดมาถึงบรรทัดที่ 15 ได้ เรามั่นใจว่า คะแนนต้องน้อยกว่า 80 แน่นอน

  :::

- จะเห็นว่า พอซ้อน if–else หลายๆ ชั้น โค้ดจะอ่านยากมาก
  กรณีที่มีหลายเงื่อนไข เราสามารถใช้ `else if` แทนได้

  ```js{3}
  if (เงื่อนไข1) {
    // โค้ดที่จะทำงาน ถ้าเงื่อนไข1 เป็นจริง
  } else if (เงื่อนไข2) {
    // โค้ดที่จะทำงาน ถ้าเงื่อนไข2 เป็นจริง
  } else {
    // โค้ดที่จะทำงาน ถ้าทั้งเงื่อนไข1 และเงื่อนไข2 เป็นเท็จทั้งคู่
  }
  ```

- นำมาใช้กับโปรแกรมคำนวณเกรดได้ แบบนี้

  ```js{6,8,10}
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

  จะเห็นว่า โค้ดสั้นลง และอ่านง่ายขึ้นครับ

  ::: details ดูโค้ด

  <<< @/public/js/examples/if-else/grade-calculator.with-else-if.html{18-28 html:line-numbers}

  :::

## การแปลงข้อมูลเป็น boolean

- โดยปกติแล้ว เงื่อนไขใน `if` ควรจะเป็นข้อมูลชนิด boolean

  ```js{1}
  if (Math.random() < 0.5) {
    alert('Heads')
  } else {
    alert('Tails')
  }
  ```

- แต่จะเกิดอะไรขึ้นถ้าเราใส่ข้อมูลชนิดอื่นลงไปในเงื่อนไขของ `if`?

  ```js
  if (12345) {
    // A
  } else {
    // B
  }
  ```

  ในกรณีนี้
  โค้ดส่วนไหนจะถูกทำงาน?
  A หรือ B?

- **กรณีที่เงื่อนไขมีชนิดข้อมูลที่ไม่ใช่ boolean
  จะถูกแปลงเป็น boolean ก่อน**

- โดยในภาษา JavaScript [ค่าต่อไปนี้จะถูกแปลงเป็น `false`](https://developer.mozilla.org/en-US/docs/Glossary/Falsy):

  - `0`
  - `NaN` (Not a Number, เป็นค่าที่ได้จากการคำนวณทางคณิตศาสตร์ที่ผิดพลาด)
  - `""` (สตริงเปล่า)
  - `undefined` (ค่าเริ่มต้นของตัวแปรที่ยังไม่ได้กำหนดค่า)
  - `null` (จะได้รู้จักในบทถัดๆ ไป)

- ส่วนค่าอื่นๆ จะถูกแปลงเป็น `true`

<div class="ws-rounded-with-shadow" style="padding: 1px 20px">

![](https://im.dt.in.th/ipfs/bafybeiekcarsh7tr5eq32o4nxavd4otrzygcnjayq7dzvwp6rbout7m2y4/image.webp)

</div>
