---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
  import adder from './mini-projects/adder.html?raw'
</script>

# มินิโปรเจค: โปรแกรมบวกเลข

## เกี่ยวกับมินิโปรเจค

- สมัยที่ผมเด็กๆ
  พ่อกับแม่ผมเคยซื้อชุดประกอบวงจรไฟฟ้า ([Snap Circuits](https://en.wikipedia.org/wiki/Snap_Circuits)) มาให้เล่น
  ในชุดประกอบไปด้วยตัวและอุปกรณ์ไฟฟ้าต่างๆ ที่เราสามารถประกอบเข้าด้วยกัน เพื่อสร้างวงจรไฟฟ้าต่างๆ ได้

- และในชุด
  มีหนังสือที่รวมโปรเจคต่างๆ กว่าร้อยโปรเจค ที่เราสามารถทำได้ด้วยชุดนี้
  เริ่มตั้งแต่[โปรเจคง่ายๆ](https://resources.demco.com/snapcircuitsjrmanual.pdf)
  เช่น วงจรที่เมื่อเปิดสวิตช์แล้วไฟจะสว่าง…

  ![](https://im.dt.in.th/ipfs/bafybeibbuqry2c5isho5fmmj35cxu3iq3tifvr3hgesdzandneqbastef4/image.webp)

- …ไปจนถึง[ประกอบวิทยุ](https://www.pololu.com/file/0J174/SnapCircuitProjects306-511.pdf)ใช้เอง และอื่นๆ อีกมากมาย

  ![](https://im.dt.in.th/ipfs/bafybeiash2pirzlogmsacg2o3ozkn7mjcnt3wyvm6uhua5vjzrqimvufyu/image.webp)

- พวกนี้คือสิ่งที่ผมเรียกว่า **“Mini project”** คือสิ่งประดิษฐ์เล็กๆ ที่เราสร้างได้ โดยใช้เวลาไม่นานมากครับ

- ในยุคปัจจุบัน นับว่าเป็นเรื่องที่ดีมากๆ ที่การเขียนโปรแกรมเป็นอะไรที่เข้าถึงได้ง่ายมากๆ

- จำได้ว่าสมัยนั้นชุดอุปกรณ์พวกนี้ค่อนข้างแพง ถ้าจำไม่คิด ราคากล่องประมาณ 5,000 บาท
  แต่พอเป็นการเขียนโปรแกรมคอมพิวเตอร์ ถ้ามีคอมสักเครื่องอยู่แล้ว ก็ไม่ต้องซื้ออุปกรณ์อะไรเพิ่มเลย

- และตอนนั้นเนื่องจากมีแค่ชุดประกอบวงจรแค่ชุดเดียว
  เวลาอยากทำโปรเจคอื่น ก็ต้องรื้อวงจรที่ทำอยู่ออกมาก่อน ถึงจะทำอันใหม่ได้
  แต่พอเป็นการเขียนโปรแกรม เราสามารถสร้างโปรเจคใหม่ได้เรื่อยๆ
  โปรเจคเก่าๆ ก็เก็บไว้ได้นานเท่าที่ต้องการ

## โปรแกรมบวกเลข

<HtmlOutput :html="adder" :height="192" />

- สร้างหน้าเว็บที่มีกล่องข้อความ 3 กล่อง
  และปุ่ม 1 ปุ่ม

- ทำให้เมื่อกดปุ่ม
  ให้นำเลขที่อยู่ในกล่องข้อความที่ 1 และ 2 มาบวกกัน
  แล้วเอาผลลัพธ์ไปใส่ในกล่องข้อความที่ 3

- คำแนะนำสำหรับโปรเจคนี้

  - กำหนดขนาดของกล่องข้อความด้วย attribute `size`
    ตัวอย่างเช่น
    `<input size="5">` จะทำให้กล่องข้อความมีขนาดเท่ากับ 5 ตัวอักษร

  - สำหรับกล่องข้อความอันสุดท้าย
    สามารถใส่ attribute ชื่อ `readonly` เข้าไปได้
    เพื่อทำให้กล่องข้อความนั้นไม่สามารถแก้ไขได้
    ตัวอย่างเช่น
    `<input readonly="">` (สามารถย่อเป็น `<input readonly>` ได้)

  - ตอนดึงข้อมูลจากกล่องข้อความ
    เราจะได้ข้อมูลออกมาเป็น string เสมอ
    เราต้องแปลงเป็น number เพื่อให้บวกกันได้
    โดยวิธีนึงที่ใช้แปลง string เป็น number ได้ คือเอา 1 มาคูณ
    จากที่เราเรียนกันไปก่อนหน้าในหัวข้อ “การแปลงชนิดข้อมูล” การเอาของมาคูณกัน จะเกิดการแปลงข้อมูลเป็น number โดยอัตโนมัติ
    (จริงๆ วิธีนี้ไม่ใช่วิธีที่ดีนัก เราจะเรียนวิธีที่ดีกว่าในภายหลัง)