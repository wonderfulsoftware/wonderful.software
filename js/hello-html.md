---
draft: true
---

# HTML แบบเบื้องต้นสุดๆ

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
  import HtmlTagList from './components/HtmlTagList.vue'
  import CodeTemplate from './components/CodeTemplate.vue'

  const ex1 = `hello`

  const ex2 = `<h1>
      big text
    </h1>
    hello
    welcome to my website`

  const ex3 = `${ex2}
    <a href="https://www.google.com/" target="_blank">Go to Google</a>`

  const ex4 = `
    hello
    welcome to my website
    <a href="https://www.google.com/" target="_blank">Go to Google</a>`

  const ex5 = `
    hello
    <br>
    welcome to my website
    <br>
    <a href="https://www.google.com/" target="_blank">Go to Google</a>`

  const html1 = `<button id="clickMe">Click me</button>`
  const html2 = `<style>
      #clickMe {
        font-size: 24px;
        padding: 8px 12px;
        background: linear-gradient(to bottom, #da3567, #ba1547);
        color: white;
        cursor: pointer;
        border: none;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      }
      #clickMe:hover {
        text-shadow: 0 0 4px #fff;
      }
    <\/style>${html1}`
  const html3 = `
    ${html2}
    <script>
      let button = document.getElementById('clickMe')
      let count = 0
      button.addEventListener('click', () => {
        count++
        alert('You clicked ' + count + ' times!')
      })
    <\/script>`
</script>

- ในตอนนี้เราจะมาเรียนรู้การสร้างหน้าเว็บด้วยภาษา HTML กันครับ

- มาถึงจุดนี้บางคนอาจจะยกมือถามว่า “HTML คืออะไร?”
  แต่เดี๋ยวเราลองทำตามขั้นตอนกันดูก่อนครับ แล้วเดี๋ยวผมจะอธิบายให้ฟังทีหลัง

## โปรเจคหน้าเว็บเปล่าๆ

- ผมได้เตรียมโปรเจคเปล่าๆ ไว้ให้ Remix กันแล้วครับ

- เข้าไปที่ <https://glitch.com/~hello-html-starter>

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

  <div><HtmlOutput :html="ex1" height="128" /></div>

- ลองใส่โค้ดเพิ่มเข้าไปดู

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

  <div><HtmlOutput :html="ex2" height="256" /></div>

  ::: tip ขอแนะนำให้พิมพ์โค้ดด้วยตัวเอง
  บางทีก๊อบโค้ดอาจจะเร็วกว่า แต่ขอแนะนำว่าให้พิมพ์โค้ดทั้งหมดด้วยตัวเองในระหว่างที่เรียน
  เพื่อให้โค้ดผ่านมือเรามากขึ้น และเป็นการฝึกพิมพ์ดีดให้ถูกต้องไปด้วย
  :::

## HTML, CSS, JavaScript

- โค้ดที่คุณกำลังเขียนอยู่นี้ คือโค้ดที่อยู่ในภาษา HTML[^html] ซึ่งเป็นภาษาที่ใช้สร้างหน้าเว็บ

- “แต่นี่คอร์ส JavaScript ไม่ใช่หรอ?”
  ใช่ครับ แต่เวลาเราสร้างเว็บแอพพลิเคชั่น รู้แค่ JavaScript อย่างเดียวไม่เพียงพอ
  เวลาทำเว็บ ปกติเราจะใช้ 3 ภาษา ได้แก่ HTML, CSS, และ JavaScript

### HTML

- ภาษา HTML มีหน้าที่กำหนดโครงสร้างและเนื้อหาของหน้าเว็บ

  <!-- prettier-ignore -->
  ```html{6}
  <!doctype html>
  <html>
    <head>
    </head>
    <body>
      <button id="clickMe">Click me</button>
    </body>
  </html>
  ```

  <div><HtmlOutput :html="html1" height="128" /></div>

  ตัวอย่างเช่น โค้ดด้านบนนี้ กำหนดให้มีปุ่ม “Click me” อยู่บนหน้าเว็บ

### CSS

- ต่อมา ภาษา CSS มีหน้าที่กำหนดรูปร่างหน้าตาของหน้าเว็บ หน้าที่หลักๆ คือทำให้เว็บดูสวยงามครับ

  <!-- prettier-ignore -->
  ```html{4-18}
  <!doctype html>
  <html>
    <head>
      <style>
        #clickMe {
          font-size: 24px;
          padding: 8px 12px;
          background: linear-gradient(to bottom, #da3567, #ba1547);
          color: white;
          cursor: pointer;
          border: none;
          border-radius: 4px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        #clickMe:hover {
          text-shadow: 0 0 4px #fff;
        }
      </style>
    </head>
    <body>
      <button id="clickMe">Click me</button>
    </body>
  </html>
  ```

  <div><HtmlOutput :html="html2" height="128" /></div>

  ตอนนี้ปุ่มก็ดูสวยขึ้นแล้ว~

  ::: warning เรียนรู้เพิ่มเติมเกี่ยวกับภาษา CSS
  ในคอร์สนี้จะแทบไม่ได้สอนเรื่อง ​CSS เลย
  โปรเจคที่เราจะสร้าง จะไม่ได้เน้นความสวยงาม แต่จะเน้นเรื่องการใช้งานเป็นหลัก
  แต่ถ้าคุณเป็นคนที่ชอบความสวยงามแล้วรู้สึกขัดใจกับเว็บที่ไม่สวย
  คุณสามารถเรียนรู้เรื่อง CSS ด้วยตัวเองได้จาก [CSS Guide บนเว็บ MDN](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)

  และถ้าคุณชอบศิลปะ
  จะมีเว็บ [CodePen.io](https://codepen.io/) ที่เป็นพื้นที่สำหรับสร้างและแชร์ผลงานหน้าเว็บสวยๆ
  (คล้ายๆ กับเว็บแบบ DeviantArt, Pixiv, ArtStation ที่เอาไว้แชร์ผลงานภาพวาด;
  Flickr, 500px ที่เอาไว้แชร์ภาพถ่าย;
  Behance, Dribbble ที่เอาไว้แชร์ผลงานดีไซน์;
  SoundCloud, Bandcamp ที่เอาไว้แชร์ผลงานเพลง;
  หรือ itch.io ที่เอาไว้แชร์เกม)
  :::

  แต่จะเห็นว่าตอนที่กดปุ่ม ยังไม่มีอะไรเกิดขึ้นเลย
  เพราะเรายังไม่ได้กำหนดว่าเมื่อกดปุ่มแล้วให้เกิดอะไรขึ้น
  และนั่นก็เป็นหน้าที่ของภาษา JavaScript ครับ

### JavaScript

- ภาษา JavaScript มีหน้าที่เพิ่มความสามารถให้กับเว็บไซต์

  <!-- prettier-ignore -->
  ```html{8-15}
  <!doctype html>
  <html>
    <head>
      <style>/* ... (CSS ที่เขียนไว้ก่อนหน้านี้) ... */</style>
    </head>
    <body>
      <button id="clickMe">Click me</button>
      <script>
        let button = document.getElementById('clickMe')
        let count = 0
        button.addEventListener('click', () => {
          count++
          alert('You clicked ' + count + ' times!')
        })
      </script>
    </body>
  </html>
  ```

  <div><HtmlOutput :html="html3" height="128" /></div>

  จากโค้ดตัวอย่าง เราสามารถตั้งโปรแกรมได้ว่า เมื่อกดปุ่มแล้ว จะเกิดอะไรขึ้น (ลองกดดูนะครับ)

## รู้จักกับภาษา HTML

- สำหรับตอนนี้เรากลับมาเรียนรู้เรื่องภาษา HTML กันต่อดีกว่า

- กลับมาที่โค้ดนี้ เดี๋ยวเราจะมาแยกชิ้นส่วนกัน:

  <!-- prettier-ignore -->
  ```html:line-numbers
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

- บรรทัดแรกของไฟล์ HTML จะเขียนว่า `<!doctype html>`
  หน้าที่ของบรรทัดนี้คือ เอาไว้บอกเว็บเบราว์เซอร์ว่า เราต้องการใช้ HTML เวอร์ชั่น 5

  ::: details doctype ของ HTML รุ่นก่อนหน้า

  HTML เป็นภาษาที่มีวิวัฒนาการมาอย่างยาวนาน จึงมีหลายเวอร์ชั่น
  เวลาเขียนเว็บด้วยภาษา HTML เราจึงใช้บรรทัดแรกของไฟล์ HTML ในการบอกเว็บเบราว์เซอร์ว่า เราจะใช้ HTML เวอร์ชั่นไหน (เรียกว่า [doctype](https://www.w3.org/QA/2002/04/valid-dtd-list.html))
  เบราเซอร์จะได้ทำงานตรงกับเวอร์ชั่นนั้นๆ

  - HTML เวอร์ชั่นแรก ไม่มี doctype ให้ใช้ มาถึงบรรทัดแรกก็เริ่มต้นด้วย `<html>` เลย

  - HTML 2.0

    ```html
    <!DOCTYPE html PUBLIC "-//IETF//DTD HTML 2.0//EN">
    ```

  - HTML 3.2

    ```html
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2 Final//EN">
    ```

  - HTML 4.01

    ```html
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    ```

  - HTML 5

    ```html
    <!DOCTYPE html>
    ```

  ที่ doctype ของ HTML 5 ไม่มีเลขเวอร์ชั่นอยู่ในนั้น
  เพราะว่า[องค์กรที่กำหนดมาตรฐาน HTML ได้เลิกใช้เลขเวอร์ชั่นแล้ว](https://blog.whatwg.org/html-is-the-new-html5)
  โดยความสามารถใหม่ๆ จะถูกเพิ่มเข้ามาโดยไม่มีการเพิ่มเลขเวอร์ชั่น (เรียกว่าเป็น “living standard”)

  :::

- บรรทัดที่เหลือ จะเห็นว่าประกอบไปด้วยสิ่งที่เรียกว่า element ซ้อนๆ กัน

  ![](https://im.dt.in.th/ipfs/bafybeidxfdojdwgo2r5y7qlzagnjbydg7j4numeldaqsxs2zj6tqdonpea/image.webp)

  ข้างนอกสุดคือ element “html”,
  ข้างในมี 2 element ย่อย คือ element “head” กับ element “body”

- แต่ละ element จะประกอบไปด้วย 3 ส่วน[^void]
  ได้แก่
  (1) แท็กเปิด
  (2) แท็กปิด
  (3) เนื้อหา:

  ![](https://im.dt.in.th/ipfs/bafybeif2kjoxbwhmohjydhihkf5y3v4nsgxoidejdq46lgndwwbzm4h3re/image.webp)

  1. **แท็กเปิด (opening tag)** เขียนรูปแบบนี้

     <CodeTemplate template="< :: [placeholder] ชื่อของ element :: >" />

  2. **แท็กปิด (closing tag)** เขียนรูปแบบนี้

     <CodeTemplate template="</ :: [placeholder] ชื่อของ element :: >" />

  3. **เนื้อหา (content)** คือโค้ดทั้งหมดที่อยู่ระหว่างแท็กเปิดกับแท็กปิด

- ภาษา HTML มี element ให้เลือกใช้เยอะมาก
  เดี๋ยวเราจะได้รู้จักกับ element ชนิดอื่นๆ เพิ่มเติม เมื่อเราทำโปรเจคที่ซับซ้อนขึ้น
  แต่ไม่ได้จำเป็นต้องรู้จักให้ครบทั้งหมด (ผมเขียนโค้ดมาเป็นสิบปีแล้วบางอันก็ยังไม่เคยใช้ครับ)

  <div><HtmlTagList acquired="html,head,body,h1" /></div>

  | ชื่อ element | หน้าที่                                                                             |
  | ------------ | ----------------------------------------------------------------------------------- |
  | `html`       | เป็น element ที่เอาไว้ครอบทุกๆ อย่างที่อยู่ในหน้าเว็บ                               |
  | `head`       | เป็น element ที่เอาไว้ใส่ข้อมูลที่เกี่ยวกับหน้าเว็บ แต่ไม่ใช่เนื้อหา                |
  | `body`       | เป็น element ที่เอาไว้ใส่เนื้อหาของหน้าเว็บ                                         |
  | `h1`         | มาจาก “Heading 1” เอาไว้ใส่ข้อความที่เป็นหัวข้อหลัก แสดงผลเป็นข้อความตัวหนาขนาดใหญ่ |

- อีกอย่างนึงที่เห็นในโค้ดนี้คือสิ่งที่เรียกว่า comment ครับ
  สิ่งที่เขียนอยู่ใน comment จะไม่ถูกนำไปประมวลผลครับ
  ดังนั้นเราสามารถใช้ comment เพื่อเขียนข้อความเพิ่มเติมในโค้ดได้

  ```html
  <!-- this is a comment -->
  ```

  โดยคอมเม้นต์จะเขียนรูปแบบนี้:

  <CodeTemplate template="<!-- :: [placeholder] ข้อความในคอมเม้นต์ :: -->" />

[^html]: HTML ย่อมาจาก “HyperText Markup Language”
[^void]: element ส่วนใหญ่จะมี 3 ส่วน แต่จะมีบาง element ที่ไม่มีแท็กปิด และไม่มีเนื้อหา ซึ่งเรียกว่า “void element” ซึ่งเราจะได้เรียนรู้กันในภายหลัง

## การจัดรูปแบบโค้ด

- ในโค้ด HTML ที่เราเขียน จะเห็นว่ามีการเยื้องบรรทัด (indent) และการขึ้นบรรทัดใหม่เพื่อให้โค้ดอ่านง่าย

  ![](https://im.dt.in.th/ipfs/bafybeihp25t6ayqr5mdvter64dr5r35zq7ulsud6nzhrqknygjsdqtewaq/image.webp)

- ในกรณีส่วนใหญ่ การจัดรูปแบบโค้ดจะไม่มีผลกับผลลัพธ์ที่เราเห็นในหน้าเว็บครับ[^whitespace-sensitivity]
  เราจะจัดยังไงก็ได้

  <!-- prettier-ignore -->
  ```html
  <!doctype html>
  <html> <head> </head>
         <body> <!--    this   is   a   comment   -->
                <h1>        big     text        </h1>
                hello
                welcome to my website </body> </html>
  ```

- หรือจะเขียนทุกอย่างในบรรทัดเดียว ก็ได้เช่นกัน

  <!-- prettier-ignore -->
  ```html
  <!doctype html><html><head></head><body><!-- this is a comment --><h1>big text</h1>hello welcome to my website</html>
  ```

- แต่โค้ดก็จะอ่านยากและแก้ยากหน่อย
  รูปแบบที่แนะนำคือ จัดโค้ดให้แท็กเปิดกับแท็กปิดอยู่ที่ตำแหน่งเดียวกันครับ

  ![](https://im.dt.in.th/ipfs/bafybeibm7j56cdldjbyrkqnusrhk34rr7buwjw2uzap3cd65nmetg24rz4/image.webp)

## ตั้งชื่อให้หน้าเว็บ

- ใน Glitch ลองกด **Preview** > **Preview in a new window** ดู — จะเห็นว่าตรงชื่อแท็บเป็น URL ของ Glitch

  ![](https://im.dt.in.th/ipfs/bafybeiahy27amnq3mkzzhuy3qtyzxfuahajtbifue3yb4rd6xahg5xakny/image.webp)

- คราวนี้ กลับไปที่โค้ด
  ไปที่ element `<head>`
  แล้วเพิ่ม element `<title>` ลงไปครับ

  <!-- prettier-ignore -->
  ```html{2}
  <head>
    <title>My first web page</title>
  </head>
  ```

- กลับไปที่หน้าเว็บ แล้วกดปุ่ม **Refresh** ดู — จะเห็นว่าชื่อแท็บเปลี่ยนเป็น “My first web page” แล้ว

  ![](https://im.dt.in.th/ipfs/bafybeie2nbmckqilshodfwg3iew6wfdrhptim2tbjkibme2oxs7c4vhbea/image.webp)

## สร้างลิงค์ไปยังหน้าอื่น

- คราวนี้ข้างใน `<body>` ลองใส่ element `<a>` เข้าไปดู
  เขียนตามนี้ครับ

  <!-- prettier-ignore -->
  ```html{3}
  hello
  welcome to my website
  <a href="https://www.google.com/" target="_blank">Go to Google</a>
  ```

  <div><HtmlOutput :html="ex3" height="256" title="My first web page" /></div>

- พอกดที่คำว่า “Go to Google” ก็จะลิงค์ไปที่หน้า Google โดยเปิดในแท็บใหม่ครับ

  ::: warning ให้ทดสอบด้วย Preview in a new window
  เวลา Preview ตรงด้านขวามือ เมื่อคลิกลิงค์จะไม่เกิดอะไรขึ้น ด้วยข้อจำกัดของเว็บ Glitch
  ดังนั้น ให้ทดสอบในแท็บใหม่ โดยการกดที่ **Preview** > **Preview in a new window**
  :::

## รู้จักกับ attributes

- จะเห็นว่าตอนเราสร้างลิงค์ ในแท็กเปิด `<a>` มีสิ่งที่เรียกว่า “attribute” เอาไว้กำหนดค่าต่างๆ ให้กับ element

  ![](https://im.dt.in.th/ipfs/bafybeih7uwabne2cocuj5h5ni3d3yy6mwpkskjetyylsk7ld3nwvqwpsx4/image.webp)

- โดยแต่ละ attribute ก็จะมีชื่อของมัน และค่าของมัน

  ![](https://im.dt.in.th/ipfs/bafybeifk54tvghbm3vz2qgycir455ykxdbbbm7ewnjtzthatgp5ddeowvq/image.webp)

  | ชื่อของ attribute | หน้าที่                                                                   |
  | ----------------- | ------------------------------------------------------------------------- |
  | `href`            | กำหนด URL ของลิงค์                                                        |
  | `target`          | ถ้าตั้งเป็น `_blank` จะเปิดลิงค์ในแท็บใหม่ ถ้าเอาออกจะเปิดลิงค์ในแท็บเดิม |

- เขียนในรูปแบบนี้

  <CodeTemplate template="[placeholder] ชื่อของ attribute :: = :: '&quot;' :: [placeholder] ค่าของ attribute :: '&quot;'" />

  ตัวอย่างเช่น

  <CodeTemplate template="[filled] href :: = :: '&quot;' :: [filled] https://www.google.com/ :: '&quot;'" />

- แปลว่า **แท็กเปิด (opening tag)** สามารถเขียนในรูปแบบนี้

  <CodeTemplate template="< :: [placeholder] ชื่อของ element :: ' ' :: [placeholder] attribute อันแรก :: ' ' :: [placeholder] attribute อันที่สอง :: ' ' :: [placeholder] ... :: >" />

  ตัวอย่างเช่น

  <CodeTemplate template="< :: [filled] a :: ' ' :: [filled] href=&quot;https://www.google.com/&quot; :: ' ' :: [filled] target=&quot;_blank&quot; :: >" />

## ขึ้นบรรทัดใหม่ด้วย `<br>`

- จะเห็นว่า ข้อความของเรา ถูกเขียนต่อกันหมดเลย ถึงแม้ว่าในโค้ดจะเขียนแยกบรรทัดกัน

  <!-- prettier-ignore -->
  ```html
  hello
  welcome to my website
  <a href="https://www.google.com/" target="_blank">Go to Google</a>
  ```

  <div><HtmlOutput :html="ex4" height="128" title="My first web page" /></div>

- ถ้าเราอยากจะขึ้นบรรทัดใหม่ ให้ใช้ element `<br>` ครับ

  <!-- prettier-ignore -->
  ```html{2,4}
  hello
  <br>
  welcome to my website
  <br>
  <a href="https://www.google.com/" target="_blank">Go to Google</a>
  ```

  <div><HtmlOutput :html="ex5" height="192" title="My first web page" /></div>

- **“เอ… เขียนแท็กเปิด `<br>` แล้วไม่ต้องเขียนแท็กปิด `</br>` หรอ?”**

  คำตอบคือ **ไม่ต้องครับ** เพราะว่า `<br>` เรียกว่าเป็น [“void element”](https://developer.mozilla.org/en-US/docs/Glossary/Void_element)
  ที่มีแค่ตัวแท็กอย่างเดียว ไม่มีเนื้อหาข้างใน และไม่มีแท็กปิด

- โอเค ตอนนี้เราก็รู้จักกับ element ต่างๆ ไปกันพอสมควรแล้ว

  <div><HtmlTagList introduced="html,head,body,h1" acquired="a,br,title" /></div>

- ต่อไป เดี๋ยวลองทำแบบฝึกหัดกันดูนะครับ

[^whitespace-sensitivity]:
    แต่จะมีบาง element ที่การจัดรูปแบบโค้ดมีผลกับผลลัพธ์ที่เห็นในหน้าเว็บด้วย เช่น `<pre>` และ `<textarea>` เป็นต้น
    สามารถอ่านรายละเอียดเพิ่มเติมได้ใน[บทความเรื่อง “How whitespace is handled by HTML, CSS, and in the DOM” บนเว็บ MDN](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Whitespace)
