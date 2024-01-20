---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
</script>

# มินิโปรเจค: หัวหรือก้อย

ในโปรเจคนี้ เราจะสร้างโปรแกรมที่จำลองการโยนเหรียญ

ตัวอย่าง:

<HtmlOutput src="/js/mini-projects/coin-flipper.html" :height="128" />

:::tip ลองเล่นกับตัวอย่างข้างบนดู

1. กดที่ปุ่ม “Flip a coin”
2. จะแสดงหน้าต่างป๊อปอัพขึ้นมา แสดงผลลัพธ์ว่า Heads (หัว) หรือ Tails (ก้อย)

:::

## เรื่องที่เราจะเรียนรู้ในโปรเจคนี้

- ในโปรเจคนี้ เราจะได้รู้จักกับการใช้งาน if-else

## ขึ้นหน้าเว็บ

- เริ่มจากสร้างหน้าเว็บตามนี้

  <!-- prettier-ignore -->
  ```html
  <h1>Coin Flipper</h1>
  <input type="button" id="flip" value="Flip a coin">
  <script>
    let flip = document.getElementById('flip')
    flip.onclick = () => {
      // เดี๋ยวเราจะเขียนโค้ดในส่วนนี้
    }
  </script>
  ```

## สุ่มหัว–ก้อย

- เราจะนำฟังก์ชัน `Math.random()` กลับมาใช้อีกครั้ง

- อย่างที่กล่าวไปในตอนก่อนหน้า `Math.random()` จะสุ่มเลขทศนิยมที่ ≥ 0 แต่ &lt; 1

- โดยวิธีที่ฟังก์ชัน `Math.random()` สุ่มเลข **แต่ละเลขจะมีโอกาสถูกสุ่มขึ้นมาเท่าๆ กัน**[^uniform]

- นั่นหมายความว่า

  - มีโอกาส 50% ที่จะได้เลขที่ &lt; 0.5
  - และมีโอกาส 50% ที่จะได้เลขที่ ≥ 0.5

- เราสามารถเขียนเงื่อนไขได้แบบนี้

  <div class="rounded-with-shadow" style="padding: 1px 20px">

  `Math.random() < 0.5`?

  - true &rarr; Heads (ออกหัว)
  - false &rarr; Tails (ออกก้อย)

  </div>

  ![](https://im.dt.in.th/ipfs/bafybeibja2kbmpm6ubfi7k3evthoaagvrzi6hjzoitdg4l7lzmbyoaemwa/image.webp)

## เอาเงื่อนไขมาเขียนเป็น JavaScript

- แก้โค้ดของ `flip.onclick` ให้เป็นแบบนี้

  ```js{2-7}
  flip.onclick = () => {
    let randomNumber = Math.random()
    if (randomNumber < 0.5) {
      alert('Heads')
    } else {
      alert('Tails')
    }
  }
  ```

  :::tip ตรวจสอบผลลัพธ์

  1. เปิดเว็บที่สร้างขึ้นมา
  2. กดปุ่ม “Flip a coin”
  3. จะแสดงหน้าต่างป๊อปอัพขึ้นมา แสดงผลลัพธ์ว่า Heads (หัว) หรือ Tails (ก้อย)
  4. ลองซ้ำหลายๆ รอบ เพื่อดูว่าผลลัพธ์ที่ได้เป็นอย่างไร

  :::

## if–else

- ในตัวอย่างข้างบน เราใช้คำสั่ง `if` และ `else` เพื่อเขียนเงื่อนไข ซึ่งมีรูปแบบดังนี้

  ```js{1,3,5}
  if (randomNumber < 0.5) {
    alert('Heads')
  } else {
    alert('Tails')
  }
  ```

- และ if–else จะเป็นหัวข้อของตอนต่อไปครับ

[^uniform]:
    กล่าวคือ
    ฟังก์ชันนี้ มีการแจกแจงความน่าจะเป็นในรูปแบบที่เรียกว่า “uniform distribution” (หรือภาษาไทยเรียกว่า การแจกแจงเอกรูป)
