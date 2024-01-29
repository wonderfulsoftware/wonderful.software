---
draft: true
---

<script setup>
  import { reactive } from 'vue'
  import JsConsole from './components/JsConsole.vue'
  import CodeTemplate from './components/CodeTemplate.vue'
</script>

# การเรียกใช้งานฟังก์ชัน

ในตอนก่อนๆ อาจจะได้ยินคำว่า “เรียกใช้งานฟังก์ชัน”
ในตอนนี้เราจะมาทำความรู้จักกับคอนเซ็ปต์ของฟังก์ชัน และการเรียกใช้ฟังก์ชันกันครับ

## หน้าตาของการเรียกใช้ฟังก์ชัน

- ตัวอย่างการเรียกใช้ฟังก์ชันจากโค้ดที่เราเคยเขียนมาแล้ว:

  ```js
  alert('hi')
  console.log(123 * 456)
  document.getElementById('number')
  Math.random()
  Math.floor(1.5)
  ```

- โดยตัวฟังก์ชันก็คือ “ชุดคำสั่ง” ที่เราสามารถเรียกใช้ได้:

  ```js
  alert
  console.log
  document.getElementById
  Math.random
  Math.floor
  ```

- หากเราเรียกของชื่อฟังก์ชันเฉยๆ โดยไม่ใส่วงเล็บต่อท้าย
  นั่นหมายถึงว่า เราแค่อ้างถึงฟังก์ชันนั้นเฉยๆ แต่ไม่ได้เรียกใช้

  <JsConsole input="alert" :output="{value: {$fn: 'alert() { [native code] }'}}" />

- และเวลาเราใช้ `typeof` เพื่อตรวจสอบชนิดของฟังก์ชัน เราจะได้ผลลัพธ์เป็น `function`

  <JsConsole input="typeof alert" :output="{value: 'function'}" />

  และนี่ก็จะเป็นชนิดข้อมูลชนิดใหม่ที่เราได้รู้จักในตอนนี้

  ![](https://im.dt.in.th/ipfs/bafybeihextjgdvjep5hbmomzdcysy6hb5vlguiuwfnf2g2hl2fcnsih3se/image.webp)

- เมื่อเราเรียกใช้งานฟังก์ชัน ก็จะทำให้ชุดคำสั่งภายในทำงาน

  <JsConsole input="alert('สวัสดี')" :output="{value: undefined}"><div style="text-align: center"><img src="https://im.dt.in.th/ipfs/bafybeiadh64moqbhsi4vupgtc6yiqfsssmzsvgsmezl3bfrqn6nymgxsaq/sawasdee.webp" alt="กล่องข้อความป๊อบอัพ ข้างในแสดงคำว่า สวัสดี" width="472" height="131" style="margin: 0 auto"></div></JsConsole>

- การเรียกใช้ฟังก์ชัน จะมีหน้าตาประมาณนี้

  :::info การเรียกใช้ฟังก์ชัน
  <CodeTemplate template="[placeholder] ฟังก์ชัน :: ( :: )" />
  <CodeTemplate template="[placeholder] ฟังก์ชัน :: ( :: [placeholder] อาร์กิวเมนต์ :: )" />
  <CodeTemplate template="[placeholder] ฟังก์ชัน :: ( :: [placeholder] อาร์กิวเมนต์ 1 :: ', ' :: [placeholder] อาร์กิวเมนต์ 2 :: , :: [placeholder] ... :: )" />
  :::

  โดยที่:

  - **ฟังก์ชัน** คือ ชื่อของฟังก์ชันที่เราต้องการเรียกใช้ (หรือ expression อื่นๆ ที่ผลลัพธ์เป็นข้อมูลชนิดฟังก์ชัน)
  - **อาร์กิวเมนต์** คือ ข้อมูลเพิ่มเติมที่เราส่งเข้าไปในฟังก์ชัน

- ในตอนนี้เราได้เรียนรู้วิธีการเรียกใช้ฟังก์ชันที่มีอยู่แล้ว
  เราสามารถเขียนฟังก์ชันขึ้นมาเองได้เช่นกัน
  ซึ่งเราจะลงรายละเอียดในบทถัดๆ ไปครับ
