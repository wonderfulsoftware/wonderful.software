---
draft: true
---

# แนะนำเว็บ Glitch

ในบทก่อนหน้า
เราได้ลองใช้ JavaScript Console ในการคำนวณตัวเลขแบบเบื้องต้นดูแล้ว
แต่บางที อยู่กับแค่หน้า console อย่างเดียวมันอาจจะไม่ค่อยสนุกเท่าไหร่
เพราะเราจะทำได้แค่เสกคาถาทีละบรรทัดสองบรรทัด

ในบทนี้เลยอยากจะพามาลองสร้าง web application กันดูครับ
จะได้สร้างของที่เป็นชิ้นเป็นอัน ที่เราสามารถใช้เอง หรือแชร์ให้เพื่อนๆ ใช้ได้ด้วย

โดยเราจะใช้เว็บ Glitch ที่เป็นเว็บที่ให้เราสร้าง web application ได้ง่ายๆ กันครับ

## Glitch คืออะไร

- [Glitch.com](https://glitch.com/)
  เป็นเว็บที่ช่วยให้เราสร้าง web application ได้ง่ายๆ
  บนเว็บนี้มีโปรเจคตัวอย่างต่างๆ ให้ลองเล่นดู
  และถ้าเจอโปรเจคไหนที่อยากใช้เป็นต้นแบบ ก็สามารถกด “Remix” เพื่อเอาโปรเจคนั้นมาต่อยอด สร้างเป็นโปรเจคใหม่ของเราได้เลย

- ผมลองกด Remix โปรเจคที่ชื่อ “Glitch in Bio” ดู

  ![](https://im.dt.in.th/ipfs/bafybeihgsjsudgce4yf7t7oulpfbqd2effxytfuw47wy3ub4mjoyb4ytte/image.webp)

- เมื่อกดปุ่ม Remix แล้ว
  ก็จะเจอกับหน้า “Editor” ของ Glitch
  ที่ข้างในประกอบไปด้วยสองส่วนหลักๆ:

  1. รายชื่อไฟล์ต่างๆที่อยู่ในโปรเจค
  2. ตัว Editor ที่เอาไว้ใช้แก้ไขเนื้อหาในไฟล์ที่เลือก

  ![](https://im.dt.in.th/ipfs/bafybeia4cjscbkdgtxbhmqeq34gvp74kvbnvc4f5ukvyytnrjiehwntcja/image.webp)

- อ่านดูในไฟล์ `README.md` ก็จะเห็นว่าโปรเจคนี้เป็นเว็บที่เอาไว้สร้าง Links Page ของตัวเอง
  ในนี้เขียนไว้ว่า ให้ลองกด **Preview** ตรงข้างล่างแล้วเลือก **Preview in a new window** ดู…

  ![](https://im.dt.in.th/ipfs/bafybeihzfku47uwftiv25y65in7mgausuu4vxmpvppgyyvy75iavh73jvm/image.webp)

- เมื่อกดแล้ว ก็จะมีแท็บใหม่โผล่ขึ้นมา

  ![](https://im.dt.in.th/ipfs/bafybeieiqvwmfiekd44omji2ahlhr77n6ilctkpcx24naz5fqj65p26x5u/Screenshot_20230901_134901.webp)

- โปรเจคแต่ละโปรเจคใน Glitch จะมีลิงค์ URL เป็นของตัวเอง
  เราสามารถ copy URL ของโปรเจคนั้นๆ ไปแชร์ให้เพื่อนๆ ดูได้
  ซึ่งจะมีประโยชน์ในช่วงที่เราเรียนรู้มากๆ โดยเฉพาะเวลาที่เราติดปัญหา เราสามารถส่งลิ้งค์ไปให้คนอื่นเข้ามาดูโค้ดของเราได้เลย

- หรือถ้าเลือก **Open preview pane** ก็จะเห็นผลลัพธ์ทางด้านขวาแทนครับ:

  ![](https://im.dt.in.th/ipfs/bafybeigd7cs5pmfyockxdcjj2dltlqedxl7g72bbii3rmc6wq3ncv5dn5m/image.webp)

  ::: warning ข้อจำกัดของ preview pane

  เวลาแสดงตัวอย่างเว็บใน preview pane ด้านขวา ฟังก์ชันบางอย่างบนเว็บเราอาจจะใช้งานไม่ได้
  เวลาพัฒนาเว็บด้วย Glitch จึงแนะนำให้ใช้คำสั่ง “Open in a new window” แทนครับ

  :::

- กลับมาทีไฟล์ README…
  ในนี้เขียนไว้ด้วยว่า
  ให้ลองไปแก้ไฟล์ที่ชื่อ `settings.json` แล้วใส่ข้อมูลของตัวเองเข้าไปดู

  ![](https://im.dt.in.th/ipfs/bafybeie7xbynwhxbhwky7wblxfmhok6ise325nc7r246amxtwo2tsi5h34/image.webp)

- พอลองไปที่ไฟล์ แล้วแก้ไขข้อความ
  รอสักพักนึงก็จะเห็นการเปลี่ยนแปลงตรงด้านขวาครับ

  ![](https://im.dt.in.th/ipfs/bafybeigbvaq6btp7lrv2xwg65wzisqj354tfk3orqecvfu53uvx74iemya/image.webp)

  ::: tip เรียนรู้เพิ่มเติม

  ถ้าสนใจเรียนรู้เพิ่มเติมเกี่ยวกับโปรเจคนี้ ลองไปอ่านบทความ [“ทำ links page ของตัวเองแบบง่ายๆ ด้วย Glitch in Bio” ของคุณ MikkiPastel](https://www.mikkipastel.com/my-bio-website-by-glitch-in-bio/) ได้ครับ

  :::

- จะเห็นว่าตรงด้านซ้าย โปรเจคนี้มีไฟล์อะไรก็ไม่รู้เต็มไปหมดเลย
  เราสามารถลองไปดู และเข้าไปแก้แต่ละไฟล์ดูได้ แล้วก็สังเกตดูว่าพอแก้แล้วเกิดผลลัพธ์อะไรขึ้นบ้าง
  ถ้าแก้แล้วมันพังก็ไม่เป็นไร สามารถ undo หรือลอง Remix โปรเจคใหม่ได้เลยครับ

- แต่สำหรับคอร์สนี้
  เราจะมาลองสร้าง web application ขึ้นมาใหม่เองจากหน้าเปล่าๆ กันครับ

  ::: tip สร้างแอคเคาท์ใน Glitch

  ก่อนจะไปต่อขอแนะนำให้สร้างแอคเคาท์ใน Glitch ครับ และล็อกอินด้วยครับ
  เพราะว่าถ้าไม่ล็อกอิน โปรเจคที่เราสร้างจะถูกลบโดยอัตโนมัติภายใน 5 วัน

  :::
