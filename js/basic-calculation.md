---
draft: true
---

# การคำนวณเบื้องต้น

ในบทนี้ เราจะเรียนรู้เรื่องการใช้งาน JavaScript Console กัน

## เปิด JavaScript Console

- ใน Google Chrome ให้เข้าไปที่หน้าเว็บสักหน้า
  หากต้องการไปหน้าเปล่าๆ ให้ใส่ URL `about:blank`
  หลังจากนั้นคลิกขวาที่พื้นที่ว่าง แล้วเลือก **Inspect**

  ![](https://im.dt.in.th/ipfs/bafybeig2o4tt4xxpipuqx5q73er2ynwokt37i34himcr4iwdqt7i7pt27i/image.webp)

- ตัวเครื่องมือสำหรับนักพัฒนา หรือที่เราเรียกกันว่า [**Dev Tools**](https://developer.chrome.com/docs/devtools/open) จะโผล่ขึ้นมา

  ![](https://im.dt.in.th/ipfs/bafybeie747xcok6xcabadlwus3fjpv3xxh46xc7lvfvnpuhqjevwwn4mty/image.webp)

- โดยปกติแล้วมันจะโผล่มาทางด้านขวาของหน้าเว็บ
  แต่เราสามารถกดที่จุด 3 จุด เพื่อย้ายมันไปด้านซ้าย ด้านล่าง หรือจะให้มันขึ้นเป็นหน้าต่างใหม่ก็ได้

  ![](https://im.dt.in.th/ipfs/bafybeighetikkki7mevmkbfnczu5be7vj2u7use45ycqdxu62qelwhy6lq/image.webp)

- นอกจากนี้เราสามารถกดที่เฟืองด้านบนสุด เพื่อปรับธีมให้เป็นธีมมืด หรือสว่างก็ได้ครับ

- ใน Dev Tools จะประกอบไปด้วยแท็บหลายๆ แท็บ

  ![](https://im.dt.in.th/ipfs/bafybeidgkkn26jakffbfpxdjlf5bpcu5wennqfoh7i5rpwn5nu6gfvsoqu/image.webp)

- ในแท็บ [**Elements**](https://developer.chrome.com/docs/devtools/dom)
  เราสามารถใช้ตรวจสอบองค์ประกอบต่างๆ ที่อยู่บนหน้าเว็บได้
  ซึ่งเดี๋ยวเราจะมาเรียนรู้กันอีกที ตอนที่เราสร้างเว็บแอปพลิเคชั่นครับ
  แต่สำหรับตอนนี้…

- ให้เราไปที่แท็บ [**Console**](https://developer.chrome.com/docs/devtools/console/javascript) กันครับ

  1. แท็บ Console จะเป็นที่ที่เราสามารถพิมพ์คำสั่งภาษา JavaScript เข้าไป
  2. เมื่อเรากดปุ่ม enter โค้ดของเราก็จะทำงาน หรือที่เรียกว่าเป็นการ “run” โค้ด
     ผลลัพธ์ของการรันโค้ดก็จะแสดงบนหน้าจอครับ
  3. หลังจากนั้น ตัวคอนโซลก็จะรอให้เราพิมพ์โค้ดบรรทัดถัดไป

  ![](https://im.dt.in.th/ipfs/bafybeibpanko37y2zzmbklq5jdici6ve4q3kaz3qxppslqnfspiiftvlhy/image.webp)

## REPL

- เรามาดูกันแบบละเอียดดีกว่าครับ
  ว่าเมื่อกี๊เกิดอะไรขึ้นบ้าง

- จากมุมมองของตัวคอนโซล สิ่งที่เกิดขึ้น สามารถแบ่งเป็น 4 ขั้นตอนใหญ่ๆ ได้ดังนี้ครับ

  1. **Read** — ตัวคอนโซล รอให้เราพิมพ์โค้ด เพื่อที่มันจะได้ “อ่าน” โค้ดที่เราพิมพ์
     จากตัวอย่าง สิ่งที่คอนโซลอ่านได้ก็คือข้อความที่เราพิมพ์ไป (`123 * 456`)

     ![](https://im.dt.in.th/ipfs/bafybeibquwts4cv45e4o43kajanqn75dnx5ex7rpoinn53xxivkszk4yam/image.webp)

  2. **Eval** — ตัวคอนโซล นำโค้ดที่เพิ่งอ่านไป ส่งไปให้สิ่งที่เรียกว่า “JavaScript Engine”[^js-engine] เพื่อเอาไปหาผลลัพธ์ครับ
     ในขั้นตอนนี้ โค้ดของเราจะผ่านกระบวนการต่างๆ จนในที่สุด เราจะได้ผลลัพธ์ออกมาเป็น **“ค่า”** ค่านึงครับ
     โดยคำว่า “ค่า” ในที่นี้
     หมายถึง ข้อมูลที่สามารถประมวลผลโดยคอมพิวเตอร์ได้
     ในที่นี้ ค่าที่ได้ออกมา คือตัวเลข 56088 ครับ

     ![](https://im.dt.in.th/ipfs/bafybeiaahyb75zfncicfvkc5pfy4pauufzuppwl77grxhpafdo4qr6vsji/image.webp)

  3. **Print** — เอาค่าหรือผลลัพธ์ที่ได้ มาแสดงผลบนหน้าจอครับ[^print]

     ![](https://im.dt.in.th/ipfs/bafybeied2ctkqx65butqw7etv7tmrrpsgl5pn25f56wudlbetc223osjy4/image.webp)

  4. **Loop** — วนกลับไปข้อ 1
     ก็คือรอให้เราพิมพ์โค้ดบรรทัดต่อไปครับ

  กระบวนการนี้ เรียกกันสั้นๆ ว่า REPL หรือ [Read–eval–print loop](https://en.wikipedia.org/wiki/Read%E2%80%93eval%E2%80%93print_loop) ครับ

[^js-engine]:
    ซอฟต์แวร์เว็บเบราว์เซอร์ที่เราใช้กัน ประกอบไปด้วยชิ้นส่วนย่อยหลายๆ ส่วน
    และหนึ่งในนั้นคือ JavaScript Engine ที่มีหน้าที่รันโค้ดที่เป็นภาษา JavaScript ทำให้โปรแกรมที่เขียนด้วยภาษา JavaScript ทำงานได้ในเบราว์เซอร์
    แต่ละเบราว์เซอร์ก็จะมี JS Engine ที่แตกต่างกันออกไป
    เช่น JS Engine ที่อยู่ใน Google Chrome ชื่อว่า V8,
    ที่อยู่ใน Safari ชื่อว่า JavaScriptCore,
    ที่อยู่ใน Firefox ชื่อว่า SpiderMonkey

[^print]:
    คอมพิวเตอร์สมัยก่อนไม่มีหน้าจอ
    ในยุคนั้น คอมพิวเตอร์แสดงผลลัพธ์ของการคำนวณ โดยการ print ลงไปบนกระดาษ
    [คลิปวิดีโอนี้ โชว์ตัวอย่างจากคอมพิวเตอร์เมนเฟรม IBM 1401 จากปี 1959](https://youtu.be/dc5PpE56qPw?t=558)
    แต่ผ่านมาแล้วกว่า 60 ปี ปัจจุบันเราก็ยังใช้คำว่า print เวลาจะแสดงผลลัพธ์บนคอนโซลกันอยู่
    ตัวอย่างเช่นในภาษา C (`printf`) หรือ Java (`System.out.println`)
    ส่วน JavaScript บนเบราว์เซอร์ ฟังก์ชัน `print` เอาไว้สั่งให้เบราว์เซอร์ print หน้าปัจจุบันผ่านเครื่องพิมพ์ครับ
    โดยคำสั่งที่ใช้แสดงผลข้อมูลบนคอนโซล ชื่อว่า `console.log` ซึ่งเดี๋ยวเราจะได้ใช้งานในบทเรียนต่อๆ ไป

## ขั้นตอนการ Eval

- โดยขั้นตอนที่เป็นตัวหลัก คือขั้นตอนที่ 2 — ขั้นตอนการ Eval ซึ่งเป็นขั้นตอนที่โค้ดที่เราเขียน ถูกนำมารัน เพื่อหาผลลัพธ์ครับ
  มาดูกันว่าเกิดอะไรขึ้นบ้าง

  ::: warning 😖 Deep dive

  เนื้อหาในส่วนนี้ จะเป็นเนื้อหาทางทฤษฎีครับ
  ถ้ายังไม่เข้าใจทั้งหมดก็ไม่เป็นไรนะครับ สามารถกลับมาศึกษาทีหลังได้ แค่อยากให้ผ่านตาสักรอบนึงก่อน
  บางทีพอเขียนโค้ดไปสักพัก แล้วกลับมาอ่านทีหลังตอนที่มีประสบการณ์มากขึ้นแล้ว ก็อาจจะเข้าใจได้ง่ายขึ้นครับ

  :::

- ขั้นแรก โค้ดของเราจะผ่านสิ่งที่มักเรียกกันว่า **tokenizer**[^lex]
  โดยหน้าที่ของมันคือ แยกโค้ดออกมาเป็นชิ้นๆ
  แต่ละชิ้นเรียกว่า token ครับ

  ![](https://im.dt.in.th/ipfs/bafybeig2a3emxzkjdt6b7hctehnbmnf4wcwfsfrpfjszvs2k3nycllzfpe/image.webp)

- หลังจากนั้น token พวกนี้ จะถูกส่งต่อไปให้สิ่งที่เรียกว่า **parser**
  โดยหน้าที่ของมันคือ เอา token พวกนี้ ไปวิเคราะห์ ตามหลักแกรมม่าของภาษา JavaScript
  เพื่อแปรรูปออกมา กลายเป็นโครงสร้างภาษา[^ast] ที่สามารถนำไปประมวลผลต่อได้ง่ายขึ้นครับ

  ![](https://im.dt.in.th/ipfs/bafybeigjsb6hqc623k7ert3nn7xqicy7rz2uctspfxcy253s6ae43rpkxi/image.webp)

- โดยในมาตรฐานของตัวภาษา มีการระบุวิธีการประมวลผลโครงสร้างนี้ไว้อย่างชัดเจนครับ
  เช่น สำหรับ “การคูณ”
  จะทำการประมวลผลกิ่งด้านซ้ายก่อน (1)
  แล้วจึงทำกิ่งด้านขวา (2)
  สุดท้ายเอาผลลัพธ์จากทั้งสองกิ่งมาคูณกัน (3)

  ![](https://im.dt.in.th/ipfs/bafybeif7ej3wdgqoi3j3amxnpputnzl2vrtchtele7k3hx32w364m3knce/image.webp)

- อย่างที่บอกครับ ตรงนี้เป็นภาคทฤษฎี ถ้ายังไม่เข้าใจไม่เป็นไร
  เดี๋ยวเรากลับมาที่ภาคปฏิบัติกันดีกว่าครับ

## เครื่องหมายที่ใช้ในการคำนวณทางคณิตศาสตร์

- ในหัวข้อนี้
  เราได้เอาตัวเลข 2 ตัวมาคูณกัน
  โดยใช้เครื่องหมายดอกจัน
  แต่นอกจากเครื่องหมายดอกจันมีเครื่องหมายอะไรอีกบ้าง

- จริงๆ มีอีกเยอะเลยครับ

  ![](https://im.dt.in.th/ipfs/bafybeicgzgtxdsunvux7ekc6g4w37qcbmonxflwr5kwz4bxssrvyydj7ei/image.webp)

- แต่สำหรับตอนนี้ เราจะมาทำความรู้จักกันสัก 6 ตัวก่อน

  <!-- prettier-ignore -->
  | เครื่องหมาย | หน้าที่   | ชื่อภาษาอังกฤษ |
  | ----------- | --------- | -------------- |
  | `+`         | บวก       | [Addition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Addition)       |
  | `-`         | ลบ        | [Subtraction](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Subtraction)    |
  | `*`         | คูณ       | [Multiplication](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Multiplication) |
  | `/`         | หาร       | [Division](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Division)       |
  | `%`         | หารเอาเศษ | [Remainder](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder)        |
  | `**`        | ยกกำลัง   | [Exponentiation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Exponentiation) |

## Exercise time

- เดี๋ยวเราลองไปทำแบบฝึกหัดกันดีกว่าครับ

[^lex]:
    จริงๆ มีหลายชื่อ
    บางที่ก็เรียกว่า Lexer
    บางที่ก็เรียกว่า Scanner

[^ast]:
    โครงสร้างข้อมูลนี้เรียกว่า “Abstract Syntax Tree” หรือ AST
    แปลเป็นภาษาไทยได้ว่า “โครงสร้างต้นไม้วากยสัมพันธ์แบบนามธรรม”
    ในทางปฏิบัติ แทบจะไม่มีใครใช้คำแปลภาษาไทยนี้เลย เพราะยิ่งแปลก็ยิ่งงง
