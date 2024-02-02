---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
  import JsConsole from './components/JsConsole.vue'
  import { ref, onMounted, onUnmounted } from 'vue'

  const randResult = ref('')
  const randResult2 = ref(0)
  let interval
  onMounted(() => {
    randomize()
    interval = setInterval(() => {
      randomize()
    }, 60e3 / 138)
  })
  onUnmounted(() => {
    clearInterval(interval)
  })
  const randomize = () => {
    randResult.value = Math.random()
    randResult2.value = Math.random()
  }
</script>

# มินิโปรเจกต์: โปรแกรมสุ่มเลข

ในโปรเจกต์นี้ เราจะสร้างโปรแกรมสุ่มเลขอย่างง่ายๆ กัน

ตัวอย่าง:

<HtmlOutput src="/js/mini-projects/randomizer.html" :height="192" />

:::tip ลองเล่นกับตัวอย่างข้างบนดู

1. กดที่ปุ่ม “Randomize”
2. เมื่อกดแล้ว กล่องข้อความจะแสดงเลขที่สุ่มได้ ตั้งแต่ 1 ถึง 10

:::

## เรื่องที่เราจะเรียนรู้ในโปรเจกต์นี้

- ในโปรเจกต์นี้ เราจะเรียนรู้เกี่ยวกับสองฟังก์ชัน คือ:

  1. `Math.random()`
  2. `Math.floor(…)`

## ขึ้นหน้าเว็บ

- เริ่มจากสร้างหน้าเว็บตามนี้

  <!-- prettier-ignore -->
  ```html
  <h1>Randomizer</h1>

  <input id="number" size="5">
  <input type="button" id="randomize" value="Randomize">

  <script>
    let number = document.getElementById('number')
    let randomize = document.getElementById('randomize')
    randomize.onclick = () => {
      // เดี๋ยวเราจะเขียนโค้ดในส่วนนี้
    }
  </script>
  ```

## รู้จักกับ Math.random

- ใน JavaScript มีฟังก์ชันที่ชื่อว่า [`Math.random()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

- เมื่อเราเรียกใช้งานฟังก์ชันนี้ คอมพิวเตอร์จะสุ่มเลขมาให้
  โดยเลขที่ได้นั้นจะมีค่ามากกว่าหรือเท่ากับ 0 และน้อยกว่า 1
  (กล่าวคือ อยู่ในช่วง `[0, 1)`)

  <JsConsole input="Math.random()" :output="{value: randResult}" />

  แต่ละครั้งที่คำสั่งนี้ทำงาน ก็จะได้ผลลัพธ์ที่แตกต่างกันออกไป

- ฟังก์ชัน `Math.random()` คืนค่ากลับมาเป็นเลขทศนิยม
  แต่เราอยากได้ตัวเลขสุ่ม **เป็นจำนวนเต็ม ระหว่าง 1–10** ต้องทำอย่างไร?

## รู้จักกับ Math.floor

- ใน JavaScript มีอีกฟังก์ชันที่ชื่อว่า [`Math.floor(…)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

- ฟังก์ชันนี้ รับเลขที่เป็นทศนิยมเข้าไป แล้วคืนค่ากลับมาเป็นจำนวนเต็ม
  โดยจะปัดลง

  <JsConsole input="Math.floor(3.14)" :output="{value: 3}" />

  <JsConsole input="Math.floor(3.99)" :output="{value: 3}" />

  <JsConsole input="Math.floor(4.00)" :output="{value: 4}" />

- กรณีที่เป็นเลขติดลบ ฟังก์ชัน `Math.floor(…)` จะปัดลงเสมอ

  <JsConsole input="Math.floor(-3.14)" :output="{value: -4}" />

  <JsConsole input="Math.floor(-3.99)" :output="{value: -4}" />

  <JsConsole input="Math.floor(-4.00)" :output="{value: -4}" />

## สุ่มเลขจำนวนเต็ม

- สมมติว่าเราผลลัพธ์ของการสั่ง `Math.random()` มาเก็บไว้ในตัวแปร `x`
  แล้วเราจะได้ผลลัพธ์ที่แตกต่างกันออกไปทุกครั้งที่เราเรียกใช้ `x`

  ```js
  let x = Math.random()
  ```

- เราสามารถใช้ตัวดำเนินการทางคณิตศาสตร์ และ `Math.floor(…)` ร่วมกัน เพื่อสร้างคำตอบที่ต้องการได้ครับ

  <!-- prettier-ignore -->
  | โค้ด | ผลลัพธ์ที่ได้ | ตัวอย่างผลลัพธ์ |
  | --- | --- | --- |
  | `x` | จำนวนทศนิยม ที่ ≥ 0 แต่ &lt; 1 | <code>{{ randResult2.toFixed(6) }}</code> |
  | `x * 10` | จำนวนทศนิยม ที่ ≥ 0 แต่ &lt; 10 | <code>{{ (randResult2 * 10).toFixed(6) }}</code> |
  | `Math.floor(x * 10)` | จำนวนเต็มที่ ≥ 0 แต่ &lt; 10 (ก็คือ 0 ถึง 9) | <code>{{ Math.floor(randResult2 * 10) }}</code> |
  | `Math.floor(x * 10) + 1` | จำนวนเต็มที่ ≥ 1 แต่ &lt; 11 (ก็คือ 1 ถึง 10) | <code>{{ Math.floor(randResult2 * 10) + 1 }}</code> |

  :::tip ลองทดสอบด้วยตัวเอง

  1. เปิด JavaScript Console ขึ้นมา
  2. พิมพ์ `Math.floor(Math.random() * 10) + 1` เข้าไปในคอนโซล &rarr; ควรจะได้เลขสุ่มตั้งแต่ 1 ถึง 10 ออกมา
  3. ทำซ้ำขั้นตอนที่ 2 หลายๆ ครั้ง แล้วดูผลลัพธ์ที่ได้

- นำโค้ดที่ได้มาใส่ในโปรแกรมของเราได้เลย

  <!-- prettier-ignore -->
  ```js{4}
  let number = document.getElementById('number')
  let randomize = document.getElementById('randomize')
  randomize.onclick = () => {
    number.value = Math.floor(Math.random() * 10) + 1
  }
  ```

## โค้ด

- หลังจากที่ทำโปรเจกต์นี้เสร็จแล้ว จะได้โค้ดดังต่อไปนี้:

  ::: details ดูโค้ด

  <<< @/public/js/mini-projects/randomizer.html{html:line-numbers}

  :::

  :::tip โจทย์ฝึกหัดเพิ่มเติม

  - ลองทำให้โปรแกรมนี้สามารถตั้งค่าได้ว่าจะสุ่มเลขตั้งแต่เลขอะไรถึงเลขอะไร

  :::

## ฟังก์ชัน??

- จากโค้ดที่เขียนมา จะเห็นโค้ดที่มีลักษณะเป็นแบบนี้:

  <!-- prettier-ignore -->
  ```js
  document.getElementById('number')
  document.getElementById('randomize')
  Math.random()
  Math.floor(Math.random() * 10)
  ```

- นี่คือ **การเรียกใช้งานฟังก์ชัน** ซึ่งจะเป็นหัวข้อของตอนต่อไปครับ
