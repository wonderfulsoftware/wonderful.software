---
draft: true
---

# แนะนำเว็บ Glitch

- ในบทก่อนหน้า
  เราได้ลองใช้ JavaScript Console ในการคำนวณตัวเลขแบบเบื้องต้นดูแล้ว
  แต่บางที อยู่กับแค่หน้า Console มันอาจจะไม่ค่อยสนุกเท่าไหร่

- ในบทนี้
  เลยอยากจะพามาลองสร้าง Web Application กันดูครับ
  โดยใช้เว็บ Glitch ที่เป็นเว็บที่ให้เราสร้าง Web Application ได้ง่ายๆ

## Glitch คืออะไร

- [Glitch.com](https://glitch.com/)
  เป็นเว็บที่ให้เราสร้าง Web Application ได้ง่ายๆ
  ในเว็บมีโปรเจคต่างๆ ให้ลองเล่นดู
  ถ้าเจอโปรเจคที่อยากใช้เป็นต้นแบบ ก็สามารถกด Remix เพื่อเอาโปรเจคนั้นมาสร้างโปรเจคใหม่ได้เลย

  ผมลองกด Remix โปรเจค “Glitch in Bio” ดู

  ![](https://im.dt.in.th/ipfs/bafybeihgsjsudgce4yf7t7oulpfbqd2effxytfuw47wy3ub4mjoyb4ytte/image.webp)

- พอกด Remix แล้วก็จะเจอกับหน้า “Editor” ของ Glitch ที่ประกอบไปด้วยสองส่วนหลักๆ:

  1. รายชื่อไฟล์ต่างๆที่อยู่ในโปรเจค
  2. ตัว Editor ที่เอาไว้ใช้แก้ไขเนื้อหาในไฟล์ที่เลือก

  ![](https://im.dt.in.th/ipfs/bafybeia4cjscbkdgtxbhmqeq34gvp74kvbnvc4f5ukvyytnrjiehwntcja/image.webp)

- อ่านดูในไฟล์ `README.md` ก็จะเห็นว่าโปรเจคนี้เป็นเว็บที่เอาไว้สร้าง Links Page ของตัวเอง
  ในนี้เขียนไว้ว่า ให้ลองกด **Preview** ตรงข้างล่างแล้วเลือก **Preview in a new window** ดู…

  ![](https://im.dt.in.th/ipfs/bafybeihzfku47uwftiv25y65in7mgausuu4vxmpvppgyyvy75iavh73jvm/image.webp)

- พอกดแล้ว ก็จะมีแท็บใหม่โผล่ขึ้นมา

  ![](https://im.dt.in.th/ipfs/bafybeieiqvwmfiekd44omji2ahlhr77n6ilctkpcx24naz5fqj65p26x5u/Screenshot_20230901_134901.webp)

- โปรเจคแต่ละโปรเจคใน Glitch จะมีลิงค์ URL เป็นของตัวเอง
  เราสามารถก๊อบ URL ของโปรเจคนั้นๆ ไปแชร์ให้เพื่อนๆ ดูได้
  ซึ่งมีประโยชน์ในช่วงที่เราเรียนรู้มากๆ โดยเฉพาะเวลาที่เราติดปัญหา เราสามารถส่งลิ้งค์ไปให้คนอื่นเข้ามาดูโค้ดของเราได้เลย

- หรือถ้าเลือก **Open preview pane** ก็จะเห็นผลลัพธ์ทางด้านขวาแทนครับ:

  ![](https://im.dt.in.th/ipfs/bafybeigd7cs5pmfyockxdcjj2dltlqedxl7g72bbii3rmc6wq3ncv5dn5m/image.webp)

- กลับมาทีไฟล์ README…
  ในนี้เขียนไว้ด้วยว่า
  ให้ลองไปแก้ไฟล์ที่ชื่อ `settings.json` แล้วใส่ข้อมูลของตัวเองเข้าไปดู

  ![](https://im.dt.in.th/ipfs/bafybeie7xbynwhxbhwky7wblxfmhok6ise325nc7r246amxtwo2tsi5h34/image.webp)

- พอลองไปที่ไฟล์ แล้วแก้ไขข้อความ
  รอสักพักนึงก็จะเห็นการเปลี่ยนแปลงตรงด้านขวาครับ

  ![](https://im.dt.in.th/ipfs/bafybeigbvaq6btp7lrv2xwg65wzisqj354tfk3orqecvfu53uvx74iemya/image.webp)

- ลองไปอ่านบทความ [“ทำ links page ของตัวเองแบบง่ายๆ ด้วย Glitch in Bio” ของคุณ MikkiPastel](https://www.mikkipastel.com/my-bio-website-by-glitch-in-bio/) เพื่อเรียนรู้เพิ่มเติมได้ครับ

- จะเห็นว่าในโปรเจคมีไฟล์อะไรก็ไม่รู้เต็มไปหมดเลย
  เราสามารถลองไปแก้แต่ละไฟล์ดูได้ แล้วก็สังเกตดูว่าพอแก้แล้วมีผลลัพธ์ยังไง
  ถ้าแก้แล้วมันพังก็ไม่เป็นไร สามารถแก้กลับ หรือลอง Remix โปรเจคใหม่ได้เลยครับ

- แต่สำหรับคอร์สนี้
  เราจะมาลองสร้าง Web Application ขึ้นมาใหม่เองจากหน้าเปล่าๆ กันครับ

- ก่อนจะไปต่อขอแนะนำให้สร้างแอคเคาท์ใน Glitch ครับ และล็อกอินด้วยครับ
  เพราะว่าถ้าไม่ล็อกอิน โปรเจคที่เราสร้างจะถูกลบโดยอัตโนมัติภายใน 5 วัน
