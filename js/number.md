---
draft: true
---

# Numbers in depth

<script setup>
  import JsConsole from './components/JsConsole.vue'
</script>

- ในบทนี้ เราจะมาเรียนรู้เกี่ยวกับเรื่องตัวเลขให้ละเอียดขึ้นกันนิดนึงดีกว่าครับ

  ::: warning 🧐 Deep dive

  ในส่วนนี้จะเป็นความรู้เชิงลึกครับ ไม่ต้องเข้าใจทั้งหมดก็ได้

  :::

- ในภาษา javascript เราสามารถเขียนตัวเลขได้หลายวิธีครับ
  อันนี้คือเบสิคสุด คือจำนวนเต็มธรรมดาครับ

  <div><JsConsole input='123' :output="{value: 123}" /></div>

- จำนวนทศนิยม ก็เขียนได้ โดยใส่เครื่องหมาย . เข้าไปครับ

  <div><JsConsole input='3.14' :output="{value: 3.14}" /></div>

- ถ้าใส่เครื่องหมายลบข้างหน้า ก็จะได้เป็นตัวเลขติดลบครับ

  <div><JsConsole input='-128' :output="{value: -128}" /></div>

- เราสามารถเอาตัวเลขมาบวก ลบ คูณ หารกันได้

  <div><JsConsole input='25 * 25' :output="{value: 625}" /></div>

- หรือถ้าเราเอา `0.1` มาบวกกับ `0.2` เราก็จะได้…

  <div><JsConsole input='0.1 + 0.2' :output="{value: 0.30000000000000004}" /></div>

  …อ้าว ทำไมเป็นแบบนี้ล่ะ?
  ทำไม 0.1 + 0.2 ไม่ได้ 0.3 ล่ะ
  คอมพิวเตอร์คำนวณผิดหรือเปล่า หรือมันมั่วหรือเปล่า?

  - อย่างที่เคยเกริ่นไว้ในบทแรกครับ
    แทบทุกอย่างที่คอมพิวเตอร์ทำ มีเหตุผลอธิบายได้เสมอ

- คือมาตรฐานของภาษา JavaScript ได้ระบุไว้ว่า
  ตัวเลขต่างๆ จะเก็บไว้ในหน่วยความจำ ในรูปแบบที่เรียกกันว่า
  “double-precision floating-point”

- พูดง่ายๆ ก็คือ
  มนุษย์ กับ คอมพิวเตอร์ ประมวลผลตัวเลข คนละวิธีกันครับ

- เวลาผมเขียนตัวเลข 0.1 กับ 0.2
  คอมพิวเตอร์จะเก็บมันในหน่วยความจำ แต่ในรูปของเลข 0 กับ 1 จำนวน 64 ตัว

  ![](https://im.dt.in.th/ipfs/bafybeifqzkmbrxxt4jvfei6qun5h2zpxiwd4fcn24kroxpftiy3lfyorme/image.webp)

- และนี่คือค่าจริงๆ ที่คอมพิวเตอร์เก็บ
  วิธีเก็บตัวเลขแบบนี้
  ไม่สามารถเก็บตัวเลขทศนิยมแบบเป๊ะๆ ได้ครับ
  เก็บได้แค่ค่าประมาณ
  แต่ก็มีความแม่นยำพอในการใช้งานส่วนใหญ่

  ![](https://im.dt.in.th/ipfs/bafybeican2x6cpm2p5few4ftkxgx73vx2ny666ob6dweyrmynl5ewhzg7q/image.webp)

- ทีนี้ พอเอามาบวกกันก็จะได้ตัวเลขนี้ครับ
  แต่ตอนที่เอามาแสดงผล มันถูกตัดตอนตรงหลังเลข 4 พอดี
  จึงเห็นเป็น 0.30000000000000004

  ![](https://im.dt.in.th/ipfs/bafybeib3htav4ngaco6yriwqvokbgbq77qe7jcm7ei2zleyxjb3o2ikuua/image.webp)

  ตรงส่วนนี้ ถ้าไม่เข้าใจก็ไม่เป็นไรนะครับ
  แค่จะโชว์ให้ดูว่า มันมีเหตุผลของมัน[^double]

- และเหตุผลเดียวกันนี้เอง ทำให้เวลาเราเก็บข้อมูลตัวเลขที่เยอะมากๆ ใน JavaScript
  บางทีจะเกิดการปัดขึ้น หรือปัดลง ไปยังตัวเลขที่ใกล้เคียงครับ[^bigint]

  ![](https://im.dt.in.th/ipfs/bafybeihf4jjbrsn4u5wxdbbhabnqsgopcjv4bmm5a42uf7aqson6wd2gpi/image.webp)

## เกร็ดความรู้เพิ่มเติมเกี่ยวกับตัวเลข

- ต่อไปนี้ คือเกร็ดความรู้เพิ่มเติมเกี่ยวกับตัวเลขครับ
  เกร็ดความรู้พวกนี้ ถ้าไม่รู้ ก็ไม่ได้ทำให้เขียนโค้ดไม่ได้ครับ
  แต่เวลาเราอ่านโค้ดของคนอื่น บางทีก็จะเจอของพวกนี้ครับ เลยอยากให้รู้ว่ามันมีของพวกนี้อยู่ด้วย

- เวลาตัวเลขมีจำนวนหลักมากๆ แล้วถ้ามันอ่านยาก
  เราสามารถใส่เครื่องหมาย `_` คั่นไว้ เพื่อให้อ่านง่ายขึ้นได้ครับ

  <div><JsConsole input='1_000_000' :output="{value: 1_000_000}" /></div>

  แต่ห้ามใส่เครื่องหมายเว้นวรรค ก่อนหรือหลังตัว underscore

  <div><JsConsole input='1 _ 000 _ 000' error="Uncaught SyntaxError: Unexpected identifier '_'" /></div>

- ตัวเลขจำนวนเต็มที่ขึ้นต้นด้วย `0` จะถือว่าเป็นตัวเลขที่เขียนในรูปของเลขฐานแปด (octal)

  <div><JsConsole input='031' :output="{value: 25}" /></div>

- จำนวนเต็มที่ขึ้นต้นด้วย `0b` จะถือว่าเป็นตัวเลขที่เขียนในรูปของเลขฐานสอง (binary)

  <div><JsConsole input='0b01100001' :output="{value: 0b01100001}" /></div>

- และจำนวนเต็มที่ขึ้นต้นด้วย `0x` จะถือว่าเป็นตัวเลขที่เขียนในรูปของเลขฐานสิบหก (hexadecimal)

  <div><JsConsole input='0x61' :output="{value: 0x61}" /></div>

- เราสามารถใส่ตัว `e` เพื่อเขียนตัวเลขในรูปแบบของสัญลักษณ์วิทยาศาสตร์ได้

  <div><JsConsole input='1.2e6' :output="{value: 1.2e6}" /></div>

  <div><JsConsole input='1e-2' :output="{value: 1e-2}" /></div>

  โดยห้ามมีช่องว่างระหว่าง `e` กับตัวเลขครับ

  <div><JsConsole input='1e - 2' error="Uncaught SyntaxError: Invalid or unexpected token" /></div>

[^double]:
    ถ้าอยากเข้าใจแบบละเอียดมากขึ้น
    ก็ไปอ่านบทความเรื่อง [What Every Computer Scientist Should Know About Floating-Point](https://docs.oracle.com/cd/E19957-01/800-7895/800-7895.pdf) Arithmetic (ยาว 74 หน้า) ดูได้ครับ
    ผมเองก็ยังอ่านบทความนี้ไม่ค่อยรู้เรื่องเหมือนกัน ลึกเกิน

[^bigint]:
    หากต้องการที่จะเก็บข้อมูลตัวเลขที่มีค่าเยอะขนาดนั้น (ตัวเลขที่มากกว่า 9,007,199,254,740,991) อย่างแม่นยำจริงๆ
    ภาษา JavaScript มีชนิดข้อมูล BigInt ให้ใช้ แต่จะไม่ได้สอนในคอร์สนี้ครับ
