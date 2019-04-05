# ทดสอบโค้ดของคนอื่นโดยไม่ต้อง Checkout มารันเองด้วย Netlify

**Author:** @Thai Pangsakulyanont

น่าเบื่อไหม? ทุกครั้งที่เราต้องการจะรีวิว Pull request ของคนอื่น เราต้อง checkout branch ของเขามารันในเครื่องตัวเองจึงจะสามารถรีวิวได้ ผมคนนึงล่ะครับที่เบื่อและขี้เกียจมากๆ

จนกระทั่งมาเจอ Netlify ซึ่งเป็นบริการ Web hosting สำหรับเว็บสมัยใหม่ โดยวิธีการอัพโหลดเว็บ คือ แค่ push โค้ดขึ้น GitHub/GitLab/BitBucket แล้วตัว Netlify มันก็จะเอาโค้ดจาก Repository ไป build และ deploy ให้เลยโดยอัตโนมัติ

![](-cb02bdd0-c78d-4420-b15b-aeb6cdecb53auntitled)

## Deploy preview

นอกจากเป็นแค่ Web hosting แล้ว มันยังสามารถช่วยสร้าง Deploy preview ให้เราเวลามีคนส่ง Pull request มาให้เรารีวิวด้วย โดยเมื่อมีคนส่ง Pull Request เข้ามา ตัว Netlify จะนำโค้ดที่ส่งเข้ามาไป build และ deploy ขึ้นไปบนโดเมนเฉพาะกิจให้เลย

![](Artboard-0ac09a7b-fb9a-4365-90d4-1190b5ab1fd4.png)

เพียงเท่านี้ เวลาผมดู PR ใน GitHub ผมสามารถกดตรง Deploy preview ก็จะสามารถลองทดสอบโค้ดที่คนอื่นส่งเข้ามาได้ทันที ไม่ต้องโหลดโค้ดมารันเองในเครื่องเลย
