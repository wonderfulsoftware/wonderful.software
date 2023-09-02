---
draft: true
---

<script setup>
  import HtmlTagList from './components/HtmlTagList.vue'
</script>

# แบบฝึกหัด HTML เบื้องต้น

- มาถึงจุดนี้
  เราสามารถสร้างชิ้นงานเป็นหน้าเว็บ และทำให้มันอยู่บนโลกออนไลน์ได้แล้ว
  ลองเอามาประยุกต์ใช้งานกันดีกว่า

- **โจทย์:**
  ให้ลองเอาเรื่องที่เรียนรู้ไปก่อนหน้านี้ สร้างหน้าเว็บอะไรก็ได้ขึ้นมาดูครับ
  อาจจะเป็นหน้าเว็บที่เอาไว้แสดงข้อมูลส่วนตัว
  หรือเป็นเว็บเกี่ยวกับเรื่องที่เราสนใจ
  หรือเป็นเว็บไว้แชร์ความรู้เกี่ยวกับเรื่องที่เราชอบ
  หรือจดบันทึกเกี่ยวกับการเรียนคอร์สนี้ก็ได้ครับ

- ตัวอย่างเช่น
  สมมติเล่นดนตรีแล้วมีเพลงที่เล่นกันบ่อยๆ ก็อาจจะทำหน้าเว็บไว้รวมคอร์ดของเพลงที่จะซ้อมกันในรอบต่อไปได้

  ![](https://im.dt.in.th/ipfs/bafybeiglunbewkl3ofrvergpheaweal7wsk6o6iiaujfgby5qtjcfcbsfq/Screenshot_20230902_153135.webp)

## รู้จักกับ Element เพิ่มเติม

### h2 – h6

- เราได้ลองใช้ `<h1>` เพื่อสร้างหัวข้อใหญ่กันไปแล้ว
  ในภาษา HTML ยังมี `<h2>` `<h3>` `<h4>` `<h5>` `<h6>`

- **โจทย์:**
  ให้ลองเล่นดูว่าแต่ละตัวมีลักษณะการแสดงผลอย่างไร

### MDN และ W3Schools

- ถ้าเราอยากเรียนรู้เกี่ยวกับ element ชนิดอื่นๆ
  เราสามารถลองหาใน Google ดูได้ โดยพิมพ์ “html” ตามด้วยชื่อ element ที่เราอยากรู้
  โดยส่วนมาก เว็บที่โผล่ขึ้นมาจะเป็นเว็บ MDN หรือ W3Schools

  ![](https://im.dt.in.th/ipfs/bafybeia732qgzrcotr26ia4qzuowovwqvgphs6nugcb2gnej53cifhuwvm/Screenshot_20230902_154452.webp)

- บนเว็บ MDN จะมี [“HTML elements reference”](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
  สำหรับเรียนรู้เกี่ยวกับ element แต่ละชนิด
  และในหลายๆ หน้า จะมีตัวอย่างให้เราลองแก้โค้ดเพื่อทดสอบผลลัพธ์ดูได้ด้วย

  เว็บ MDN เนื้อหาจะค่อนข้างครบถ้วนและละเอียด แต่อาจจะเข้าใจยากกว่า W3Schools

  ![](https://im.dt.in.th/ipfs/bafybeibqsgwvchoyngkcd5y4nk6je5l6d4xvha4etsxszjpcoyu6mjn2q4/image.webp)

- บนเว็บ W3schools
  สามารถกดที่ **Try it Yourself** เพื่อลองแก้โค้ดและดูผลลัพธ์ได้เช่นกัน

  เว็บ W3Schools ส่วนมากจะอธิบายง่ายกว่าเว็บ MDN
  แต่เว็บ [W3Schools บางคนไม่ค่อยแนะนำ](https://meta.stackoverflow.com/questions/280478/why-not-w3schools-com) เพราะข้อมูลบางส่วนอาจจะไม่อัพเดทตามมาตรฐานล่าสุด
  และบนเว็บมีโฆษณาค่อนข้างเยอะ

  ![](https://im.dt.in.th/ipfs/bafybeifpjva5zsyjtt5zvce634xpv4ncjqfwhrxmwwpdwlzi2oaswtb774/image.webp)

- **โจทย์:**
  ให้ลองไปศึกษาเกี่ยวกับ element ต่างๆ ต่อไปนี้
  แล้วลองเอามาประยุกต์ใช้กับหน้าเว็บของเราดู

  - `<strong>`
  - `<em>`
  - `<img>`
  - `<mark>`
  - `<del>`
  - `<ul>` `<ol>` `<li>`
  - `<hr>`

- เมื่อทำแบบฝึกหัดนี้แล้ว จะได้รู้จักกับ HTML elements เพิ่มเติมจากบทก่อนหน้า

  <div><HtmlTagList introduced="html,head,body,h1,a,br,title" acquired="h2,h3,h4,h5,h6,strong,em,img,mark,del,ul,ol,li,hr" /></div>
