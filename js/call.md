---
draft: true
---

<script setup>
  import { reactive } from 'vue'
  import JsConsole from './components/JsConsole.vue'
  import CodeTemplate from './components/CodeTemplate.vue'
</script>

# การเรียกใช้ฟังก์ชั่น

- ในตอนก่อนๆ อาจจะได้ยินคำว่า “ใช้ฟังก์ชัน”
- ในตอนนี้เราจะมาทำความรู้จักกับคอนเซ็ปต์ของการเรียกใช้ฟังก์ชันกันครับ

## หน้าตาของการเรียกใช้ฟังก์ชัน

- ตัวอย่างการเรียกใช้ฟังก์ชันจากโค้ดที่เราเคยเขียนมาแล้ว:

  ```js
  alert('hi')
  console.log(123 * 456)
  document.getElementById('number')
  Math.random()
  Math.floor(1.5)
  ```

- ฟังก์ชั่นคือชุดคำสั่งที่เราสามารถเรียกใช้ได้:

  - `alert`
  - `console.log`
  - `document.getElementById`
  - `Math.random`
  - `Math.floor`

- เมื่อเราเรียกชื่อฟังก์ชั่นเฉยๆ โดยไม่ต่อท้ายด้วยวงเล็บ เราแค่อ้างถึงฟังก์ชั่นนั้นเฉยๆ แต่ไม่ได้เรียกใช้

  <JsConsole input="alert" :output="{value: {$TODO: 1}}" />

- และเวลาเราใช้ `typeof` เพื่อตรวจสอบชนิดของฟังก์ชั่น เราจะได้ผลลัพธ์เป็น `function`

  <JsConsole input="typeof alert" :output="{value: 'function'}" />

  เป็นชนิดข้อมูลชนิดใหม่ที่เราได้รู้จักในตอนนี้

  ![](https://im.dt.in.th/ipfs/bafybeihextjgdvjep5hbmomzdcysy6hb5vlguiuwfnf2g2hl2fcnsih3se/image.webp)

- การเรียกใช้ฟังก์ชัน จะมีหน้าตาประมาณนี้

  :::tip การเรียกใช้ฟังก์ชัน
  <CodeTemplate template="[placeholder] ฟังก์ชั่น :: ( :: )" />
  <CodeTemplate template="[placeholder] ฟังก์ชั่น :: ( :: [placeholder] อาร์กิวเมนต์ :: )" />
  <CodeTemplate template="[placeholder] ฟังก์ชั่น :: ( :: [placeholder] อาร์กิวเมนต์ 1 :: ', ' :: [placeholder] อาร์กิวเมนต์ 2 :: , :: [placeholder] ... :: )" />
  :::

  โดยที่:

  - ชื่อฟังก์ชัน คือ ชื่อของฟังก์ชันที่เราต้องการเรียกใช้
  - อาร์กิวเมนต์ คือ ข้อมูลที่เราส่งเข้าไปในฟังก์ชัน

- ในตอนนี้เราได้เรียนรู้วิธีการเรียกใช้ฟังก์ชันที่มีอยู่แล้ว
  เราสามารถเขียนฟังก์ชันขึ้นมาเองได้เช่นกัน
  ซึ่งเราจะลงรายละเอียดในบทถัดๆ ไปครับ
