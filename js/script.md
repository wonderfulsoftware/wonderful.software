---
draft: true
---

<script setup>
  import HtmlTagList from './components/HtmlTagList.vue'
  import CodeTemplate from './components/CodeTemplate.vue'
  import JsConsole from './components/JsConsole.vue'
</script>

# ใส่ JavaScript บนหน้าเว็บ

- ในโค้ด HTML ที่เราเขียนมาแล้ว
  เราสามารถใส่ JavaScript ลงไปในหน้าเว็บได้ด้วย
  โดยใช้ element `<script>` ครอบโค้ด JavaScript ไว้

- **ลองใส่โค้ดนี้เพิ่มเข้าไปในหน้าเว็บ**
  ในโค้ดตัวอย่างนี้ จะมีภาษาของ JavaScript ใหม่ที่ยังไม่เคยเจอ
  ให้ลองพิมพ์ตามดูก่อนครับ

  <!-- prettier-ignore -->
  ```html
  <script>
    console.log('hello from JS');
  </script>
  ```

- เสร็จแล้วลองกด **Preview** > **Preview in a new window**
  แล้วเปิด JavaScript Console ขึ้นมา

- **ถ้าเกิดทุกอย่างทำงานถูกต้อง**
  ควรจะเห็นข้อความ `hello from JS` ปรากฏอยู่ใน Console

  ![](https://im.dt.in.th/ipfs/bafybeiausn5wricqd7hiz7yd3samhee4hdnsqruqsegu7ppxnwe6phxrdu/image.webp)

- **แต่ถ้ามีข้อผิดพลาด**
  จะเห็นข้อความ Error เป็นสีแดง
  และมีลิงค์ให้กดเพื่อไปยังจุดที่คอมพิวเตอร์คิดว่าเกิดข้อผิดพลาดขึ้น

  ![](https://im.dt.in.th/ipfs/bafybeifm26yjag44mqwxgxrl55dhc24nkyig557kvymu7nm6bd6z45lrry/image.webp)

- เมื่อกดเข้าไปแล้ว ตัว Dev Tools จะพาเราไปยังแท็บ **Sources**
  และจะมีการไฮไลท์จุดที่เกิดข้อผิดพลาดขึ้นครับ

  ![](https://im.dt.in.th/ipfs/bafybeicbv6tb76xay2oycxksdwlpb3ypy7k7qjatp4fuxgxcfifdnj46lu/image.webp)

  :::warning อ่านข้อความ Error ด้วย
  เว็บเบราเซอร์เป็นโปรแกรมที่ซับซ้อนมาก
  และประกอบไปด้วยหลายๆ ส่วนที่ทำงานร่วมกัน
  บางทีเราอาจจะเห็น Error ที่ไม่เกี่ยวข้องกับโค้ดที่เราเขียนอยู่บ้าง
  โดยเราสามารถเช็คได้ว่า Error มาจากไหน โดยดูตรงลิงค์ที่มาในด้านขวา ว่าเกี่ยวข้องกับโค้ดที่เราเขียนหรือไม่

  ![](https://im.dt.in.th/ipfs/bafybeicwocn7bdubniefbrthnj5tvmjsyekc4zkhfwhsgm7iwfu5ahblnu/image.webp)
  :::

## `console.log`

- เราลองใส่โค้ดที่เราเรียนจากบทก่อนหน้าดูบ้าง

  <!-- prettier-ignore -->
  ```html
  <script>
    123 * 456
  </script>
  ```

- พอรันดูแล้วจะพบว่า ไม่มีอะไรเกิดขึ้นเลย
  แต่เราเขียนโค้ดไว้ใน `<script>` ไว้แล้ว
  ทำไมมันไม่ทำงาน?

- ความจริงมันทำงานแล้วครับ
  ตอนที่ script ทำงาน คอมพิวเตอร์จะคำนวณค่า `123 * 456`
  แต่เราไม่ได้บอกให้ทำอะไรกับผลลัพธ์นั้น
  คำตอบจึงถูกโยนทิ้งไป

- ถ้าอยากให้มันแสดงผลออกมา
  ก็ใช้คำสั่ง `console.log()`[^command]

  <!-- prettier-ignore -->
  ```html
  <script>
    console.log(123 * 456);
  </script>
  ```

  เขียนรูปแบบนี้[^iceberg]

  <CodeTemplate template="console.log( :: [placeholder] ค่าที่เราให้แสดงผลออกมา :: );" />

  แค่นี้ เราก็จะเห็นผลลัพธ์ออกมาใน console แล้ว

[^command]:
    ในคอร์สนี้เราจะนิยามคำว่า “คำสั่ง” แบบหลวมๆ เพื่อสื่อถึงโค้ดที่เราต้องเขียนเพื่อให้ได้ผลลัพธ์อะไรสักอย่างออกมา
    แต่ในทางทฤษฎี จะมีคำว่า statement (ที่มักจะแปลเป็นไทยว่า ‘คำสั่ง’ เหมือนกัน หรือบางทีก็แปลว่า ‘ประโยค’) แต่มันจะมีอีกความหมายที่ค่อนข้างเฉพาะเจาะจง

[^iceberg]:
    ในบทนี้เราจะสอนคำสั่งต่างๆ เป็นประโยคๆ ไปก่อน
    โดยที่ยังไม่ได้อธิบายว่าคำว่า `console` กับ `log` คืออะไร มาจากไหน
    แล้วเครื่องหมาย `.`, `(`, `)` ทำหน้าที่อะไร
    ซึ่งเราจะได้เรียนรู้เรื่องนี้ในบทถัดๆ ไป เกี่ยวกับเรื่อง object และ function

## เครื่องหมาย เซมิโคล่อน `;`

- เครื่องหมาย `;` ในภาษา JavaScript เอาไว้ใช้บอกว่าเป็นการจบคำสั่ง

- เวลาเราเขียนหลายๆ คำสั่งในบรรทัดเดียว สามารถใช้ `;` คั่นแค่ละคำสั่งได้

  <!-- prettier-ignore -->
  ```html
  <script>
    console.log(123); console.log(456); console.log(123 * 456)
  </script>
  ```

- ถ้าเราลืมใส่ `;` จะเกิด error ขึ้น

  <!-- prettier-ignore -->
  ```html
  <script>
    console.log(123) console.log(456) console.log(123 * 456)
  </script>
  ```

  <div><JsConsole error="Uncaught SyntaxError: Unexpected identifier 'console'" /></div>

- แต่ถ้าคำสั่งแต่ละคำสั่ง
  อยู่บนคนละบรรทัดกัน
  ในกรณีส่วนใหญ่ ไม่จำเป็นต้องใส่เครื่องหมาย `;`
  เมื่อขึ้นบรรทัดใหม่ คำสั่งก่อนหน้าจะจบลงโดยอัตโนมัติ[^asi]

  <!-- prettier-ignore -->
  ```html
  <script>
    console.log(123)
    console.log(456)
    console.log(123 * 456)
  </script>
  ```

- ในทางปฏิบัติ
  เรามักจะเขียนโปรแกรมโดยให้แต่ละคำสั่งอยู่คนละบรรทัดกัน
  [ดังนั้นจะใส่ `;` หรือไม่ใส่ก็ได้](https://wonderful.software/answers/2017-11-14-JavaScript-semicolon.html)
  ทั้งนี้ ขึ้นอยู่กับความชอบของแต่ละคน หรือถ้าทำงานเป็นทีม ก็ขึ้นอยู่กับว่าตกลงกันไว้ว่าจะใช้แบบไหน

[^asi]:
    เรียกว่า [“Automatic Semicolon Insertion”](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#automatic_semicolon_insertion) ซึ่งมีในภาษา JavaScript
    แต่ภาษาอื่นๆ เช่น C, C++, C#, Java, PHP จะไม่มี แปลว่าทุกๆ คำสั่งจะต้องใส่ `;` ทุกครั้ง
    ในภาษา JavaScript จะมีบางกรณีที่การขึ้นบรรทัดใหม่ จะไม่ทำให้คำสั่งก่อนหน้าจบลง ก็คือเมื่อบรรทัดต่อไปขึ้นต้นด้วยเครื่องหมาย `(` `[` <code>&#96;</code> `+` `-` `/`

## Next up

- ตอนนี้เราก็ได้เรียนรู้ element `<script>` เพิ่มอีกตัวนึงแล้ว

  <HtmlTagList introduced="html,head,body,h1,a,br,title,h2,h3,h4,h5,h6,strong,em,img,mark,del,ul,ol,li,hr" acquired="script" />

- ในตอนต่อไปเราจะลองสร้างปุ่มและกล่องข้อความ และเขียนโค้ดเพื่อให้หน้าเว็บของเรา โต้ตอบกับผู้ใช้งานได้ครับ