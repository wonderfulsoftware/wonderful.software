---
draft: true
---

# HTML แบบเบื้องต้นสุดๆ

- ในตอนนี้เราจะมาเรียนรู้การสร้างหน้าเว็บด้วยภาษา HTML กันครับ

- มาถึงจุดนี้บางคนอาจจะยกมือถามว่า “HTML คืออะไร?”
  แต่เดี๋ยวเราลองทำตามขั้นตอนกันดูก่อนครับ แล้วเดี๋ยวผมจะอธิบายให้ฟังทีหลัง

## โปรเจคหน้าเว็บเปล่าๆ

- ผมได้เตรียมโปรเจคเปล่าๆ ไว้ให้ Remix กันแล้วครับ

- เข้าไปที่ <https://glitch.me/~hello-html-starter>

  ![](https://im.dt.in.th/ipfs/bafybeifomhov4xoridflfk32l5qzf45myldhcktfe35dd2ydvzlq3zdmmm/Screenshot_20230901_133714.webp)

- เสร็จแล้ว เลื่อนลงมาข้างล่าง แล้วกดที่ปุ่ม **Remix your own** ครับ

  ![](https://im.dt.in.th/ipfs/bafybeidjdfcdo6c5ma42hplvpksdi5oj7zl6nyohaikypqd6ba6mbx7bvm/image.webp)

- พอเข้ามาแล้วก็จะเจอกับโปรเจคนี้ครับ
  มีไฟล์อยู่แค่ 2 ไฟล์ คือ `README.md` และ `index.html`

  ![](https://im.dt.in.th/ipfs/bafybeialcsm2rc6d5434wodvmjjrf5ngpgtpizjyfbn6ajaskek35iczbq/image.webp)

- ลองเข้าไปดูไฟล์ `index.html` ดู จะเห็นโค้ดที่เขียนไว้แบบนี้

  ![](https://im.dt.in.th/ipfs/bafybeidgkvwseiagr3mp5f7jxgn35blzv3gjn56756yugn3xaxpolutply/Screenshot_20230901_140247.webp)

  <!-- prettier-ignore -->
  ```html
  <!doctype html>
  <html>
    <head>
    </head>
    <body>

      <!-- this is a comment -->

      hello

    </body>
  </html>
  ```

- ลองใส่โค้ดเพิ่มเข้าไป

  <!-- prettier-ignore -->
  ```html{8-10,12}
  <!doctype html>
  <html>
    <head>
    </head>
    <body>

      <!-- this is a comment -->
      <h1>
        big text
      </h1>
      hello
      welcome to my website

    </body>
  </html>
  ```
