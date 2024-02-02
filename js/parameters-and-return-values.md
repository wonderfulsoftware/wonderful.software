---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
  import JsConsole from './components/JsConsole.vue'
</script>

# รับค่าด้วย parameters และคืนค่าด้วย return

- ในตอนที่แล้ว
  เราได้สร้างฟังก์ชัน เพื่อห่อหุ้มโค้ดชุดหนึ่งไว้ให้กลายเป็นชุดคำสั่งที่เราสามารถเรียกใช้งานได้เมื่อต้องการครับ

  ```js
  let f = () => {
    console.log('a')
    console.log('b')
  }
  ```

- เมื่อเราเรียกใช้งานฟังก์ชันนี้
  โค้ดที่กำหนดไว้ภายในฟังก์ชันก็จะทำงาน

  <JsConsole
    :input="`f()`"
    :log="[`a`, `b`]"
    :output="{value:undefined}"
  />

  ในตัวอย่างนี้ โค้ดในฟังก์ชัน `f` ทำให้เกิดการแสดงข้อความ `a` และ `b` บนคอนโซล
  แต่ฟังก์ชันนี้เพียงแค่ห่อหุ้มโค้ดไว้เฉยๆ ไม่ได้ระบุว่าผลลัพธ์ของฟังก์ชันนี้เป็นอย่างไร
  จึงทำให้เราได้ค่า `undefined` ออกมาเป็นผลลัพธ์ของการเรียกใช้ฟังก์ชันนี้

## รู้จักกับ parameters และ return value

- เราลองกลับมาดูฟังก์ชันที่เราเคยทำความรู้จักไปก่อนหน้านี้กันดีกว่า

- อย่างเช่นฟังก์ชัน `Math.max`
  ที่รับข้อมูลตัวเลขเข้ามาหลายๆ ตัว
  แล้วให้คำตอบเราว่าเลขไหนที่มีค่ามากที่สุดครับ

  <JsConsole
    :input="`Math.max(123, 456)`"
    :output="{value:456}"
  />

  ![](https://im.dt.in.th/ipfs/bafybeidojgl6stosohj6xdavtq2rwiicvdr7q577djw4tictt3wv3qkk4i/image.webp)

  - เราส่งค่า 123, 456 เข้าไปในฟังก์ชัน `Math.max`
    ค่าต่างๆ ที่เราส่งเข้าไป เรียกว่าเป็น **อาร์กิวเมนต์** ([arguments](https://developer.mozilla.org/en-US/docs/Glossary/Argument)) ของการเรียกใช้งานฟังก์ชันนั้น (ตามที่ได้เรียนกันไปในตอนก่อนๆ)

  - ฟังก์ชัน `Math.max` รับค่าจากอาร์กิวเมนต์เข้าไปอยู่ในตัวแปร `value1`, `value2` ซึ่งสามารถนำไปใช้คำนวณได้ภายในฟังก์ชันนั้น
    ตัวแปรเหล่านี้เรียกว่า **พารามิเตอร์** ([parameters](https://developer.mozilla.org/en-US/docs/Glossary/Parameter))

  - ฟังก์ชัน `Math.max` คำนวณหาค่าที่สูงสุด แล้วทำการ **คืนค่า** 456 กลับมาให้เรา
    ค่าที่เราได้กลับมาเรียกว่า [return value](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Return_values) ของการเรียกใช้งานฟังก์ชันนั้นครับ

- มาดูตัวอย่างฟังก์ชันอื่นๆ กันบ้าง

- ฟังก์ชัน `Math.random` ที่ใช้สุ่มเลข
  ไม่รับอาร์กิวเมนต์เข้าไปเลย (ไม่มีพารามิเตอร์)
  สามารถคืนค่าออกมาได้อย่างเดียว

  ![](https://im.dt.in.th/ipfs/bafybeicwz4jdqi3yqmg4k4trsnad2zuzjtluf2nriyzl5gcab3cyqojyku/image.webp)

- ฟังก์ชัน `alert`
  มีพารามิเตอร์ 1 ตัวเพื่อกำหนดการทำงานของมัน (กำหนดข้อความที่จะแสดงในกล่องป๊อปอัพ)
  แต่ไม่คืนค่าอะไรกลับมาเลย (ทำเมื่อเรียกใช้งานแล้วเราจึงได้ค่า `undefined` กลับมา)

  ![](https://im.dt.in.th/ipfs/bafybeifvss5fayzt5pzznwhebrhzqmup6x4eyrn3epgb724exk3qtkcalq/image.webp)

- และถ้าเราจะให้ฟังก์ชันที่เราสร้างเองสามารถรับค่าพารามิเตอร์ และคืนค่ากลับมาได้บ้าง
  ต้องทำอย่างไร เดี๋ยวเรามาดูกันครับ

## การรับค่าผ่าน parameters

- ฟังก์ชันที่เราสร้างเองสามารถรับค่าเข้ามาผ่านพารามิเตอร์ได้
  โดยใส่ชื่อพารามิเตอร์ไว้ในวงเล็บที่อยู่ก่อน `=>`

  ```js{1}
  let f = (a, b) => {
    console.log(a)
    console.log(b)
  }
  ```

  ในตัวอย่างนี้ ฟังก์ชัน `f` จะมีพารามิเตอร์ 2 ตัวคือ `a` และ `b`

  ![](https://im.dt.in.th/ipfs/bafybeieuakqyenwxtnv66kafmmwbsbghpdnjkss2dsa63s5txxznixzz4i/image.webp)

  เราสามารถเรียกใช้งานฟังก์ชัน `f` โดยส่งอาร์กิวเมนต์เข้าไปได้

  <JsConsole
    :input="`f(123, 456)`"
    :log="[123, 456]"
    :output="{value:undefined}"
  />

## การใช้คำสั่ง return

- เราสามารถใช้คำสั่ง `return` ภายในฟังก์ชัน เพื่อให้ฟังก์ชันคืนค่ากลับมาได้

  ```js{2}
  let g = (a, b) => {
    return a + b
  }
  ```

  ทำให้ฟังก์ชัน `g` มีการคืนค่าออกมา

  ![](https://im.dt.in.th/ipfs/bafybeidz2paq66yf444ofw3cebftqdzfrtuxwaevsi76wmffheylka4fny/image.webp)

  เราสามารถเรียกใช้งานฟังก์ชัน `g` แล้วนำค่าที่คืนออกมาไปใช้งานต่อได้

  <JsConsole
    :input="`g(123, 456)`"
    :output="{value:579}"
  />

## คำสั่ง return จะทำให้ฟังก์ชันหยุดทำงาน

- เราจะแก้โค้ดจากตัวอย่างที่แล้วนิดนึง
  เพื่อให้ฟังก์ชัน `log` ขั้นตอนการทำงานของมันออกมาให้เห็น

  ```js
  let g = (a, b) => {
    console.log('before return') // [!code ++]
    return a + b
    console.log('after return') // [!code ++]
  }
  ```

- เมื่อสั่งให้ฟังก์ชัน g ทำงาน
  จะเห็นว่าข้อความ `after return` ไม่ได้แสดงออกมาเลย
  นั่นเพราะว่าคำสั่ง `return` จะทำให้ฟังก์ชันหยุดทำงานแล้วคืนค่ากลับมาทันทีครับ

  <JsConsole
    :input="`g(123, 456)`"
    :log="[`before return`]"
    :output="{value:579}"
  />

## Up next

- ในตอนต่อไป เราจะนำคอนเซปต์ของพารามิเตอร์และค่าที่คืนออกมา
  เพื่อใช้ในการ refactor โค้ดกันต่อไป
  เพื่อโค้ดก้อนใหญ่ๆ ให้กลายเป็นชิ้นส่วนเล็กๆ ครับ
