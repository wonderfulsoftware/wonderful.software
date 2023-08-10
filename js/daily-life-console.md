:::warning DRAFT
This is a draft content and may be incomplete or inaccurate.
:::

# ตัวอย่างการใช้ JavaScript Console ในชีวิตประจำวัน

- โอเค เรารู้จักกับ JavaScript Console แล้ว เห็นตัวอย่างการร่ายคาถาแล้ว แล้วมันมีประโยชน์กับชีวิตประจำวันยังไงบ้าง
  ในตอนนี้ผมมีตัวอย่างมาให้ดูครับ
  ว่าถ้าฝึกฝนวิชา JavaScript จนเชี่ยวชาญแล้ว การใช้ชีวิตมันเปลี่ยนไปยังไง

## ใช้คิดเลข

- อย่างแรกเลย — คือเดี๋ยวนี้ ผมแทบไม่ต้องใช้เครื่องคิดเลขแล้ว เมื่อไหร่ก็ตามที่ผมต้องการคิดเลข ผมก็เปิด JavaScript Console ขึ้นมา แล้วก็คิดเลขในนี้ไปเลย

  ```js
  ;(500 * 1080) / 720
  ```

## ดึงข้อมูลจากหน้าเว็บ

- ทีนี้ใกล้เวลาพักเทียงก็เพิ่งรู้ตัวว่า ยังไม่ได้สั่งอาหารกลางวันเลย เลยคิดว่า สั่งพิซซ่าดีกว่า แต่จะเอาหน้าอะไรดี? ก็เลยอยากจะทำโพลให้คนที่มาร่วมงานได้โหวตกันครับ

  ![](https://im.dt.in.th/ipfs/bafybeicziqeguwwqdpftdglhnj5r3cf5suksts7xcdp3sopajxdgmgmo7q/image.png)

- แต่ถ้าผมต้องสร้างแบบฟอร์ม แล้วใส่ตัวเลือกเข้าไปทีละหน้า คงจะใช้เวลาหลายนาที ตอนนั้นผมจึงตัดสินใจเขียนโค้ดครับ
- เข้ามาที่เว็บพิซซ่า คลิกขวาที่หน้าพิซซ่าสักหน้า สังเกตโครงสร้างของหน้าเว็บ แล้วก็ไปที่ Console แล้วก็พิมพ์โค้ดเพื่อดึงออบเจกต์ที่อยู่บนหน้าเว็บนั้นออกมา หลังจากนั้นก็ดึงข้อความมาจากแต่ละอัน สุดท้ายก็รวมข้อความทั้งหมดเข้าด้วยกัน ให้กลายเป็นข้อความเดียวครับ… ผมสามารถ Copy ข้อความนี้ไปแปะในฟอร์มได้ทันที เสร็จแล้วก็เอาตัวเลือกที่ไม่ต้องการออก

  ::: info
  ในบทเรียนของจริงจะมีวีดีโอให้ดูเพื่อให้เห็นภาพมากขึ้น แต่ผมเคยทำคลิปเกี่ยวกับตัวอย่างนี้ไว้แล้ว [ดูได้บน YouTube](https://www.youtube.com/watch?v=IdFX7nwD744&t=1414s)
  :::

- สุดท้าย ใช้เวลาไม่ถึง 1 นาที

## ดึงข้อมูลจากไฟล์

- ผมมีไฟล์ PDF ที่เป็นรายการเดินบัญชีจากธนาคาร
  อันนี้เป็นตัวอย่างข้อมูลจากบัญชีนึงที่ใช้จัดงานอีเวนต์ครับ
  ผมอยากจะเอาข้อมูลในไฟล์นี้มาใส่ Google Sheet เพื่อความสะดวกในการเอาไปวิเคราะห์ต่อ

![](https://im.dt.in.th/ipfs/bafybeidk6gyrudcp2panl4pwscswdwhzcpucagsk4hwgeb2vtfddtsztxu/image.png)

- สิ่งที่ผมอยากได้ คือ อยากได้ตารางที่มี 3 คอลัมน์ — คอลัมน์แรกคือวันที่ แต่อยากให้มันอยู่ในรูปแบบ ISO หรือ ปี-เดือน-วัน
  คอลัมน์ที่สองคือเวลา
  ส่วนคอลัมน์สุดท้ายคือค่าใช้จ่ายครับ

  ![](https://im.dt.in.th/ipfs/bafybeid7l5zkvgy3rxub6jojb35rsqwe6f52nrpxehfo3xbxvm6rojuiou/image.png)

- ทีแรก ผมลองก๊อปข้อมูลออกมาจากไฟล์ PDF ตรงๆแล้วเอามาแปะใน Google Sheet แล้วก็พบว่า เวลากับวันที่มันรวมกันอยู่ในคอลัมน์เดียวเลย ส่วนจำนวนเงิน ตอนที่เอามาแปะ มันก็เอาข้อมูลทั้งหมดมากองอยู่ในช่องเดียว

  ![](https://im.dt.in.th/ipfs/bafybeidt3byg7uwulytmmwddlzdj6wnasbuhqez2mj4o3uvkqx3dph7rta/image.png)

- ถ้าจะต้องให้มานั่งพิมพ์ก็คงจะใช้เวลานาน ยิ่งไฟล์นี้เป็นแค่หน้าแรกจากหลายๆ หน้า ผมจึงตัดสินใจเขียนโค้ดครับ

- เริ่มจากการก๊อบข้อมูลจาก PDF มาแปะใส่ JavaScript Console ก่อน

  ::: details See code

  ````js
  x=`25/03/23 16:28
  25/03/23 18:24
  25/03/23 18:44
  25/03/23 21:46
  26/03/23 01:02
  26/03/23 07:29
  26/03/23 08:49
  26/03/23 09:20
  26/03/23 13:49
  26/03/23 14:12
  26/03/23 21:59
  26/03/23 22:03
  29/03/23 13:25
  31/03/23 23:36
  31/03/23 23:37
  X2/ENET
  X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET X2/ENET
  4,240.00
  3,693.00 273.00 769.00 769.00 1,236.00 438.00 1,297.00 1,100.00 138.00 65.00 4,442.00 958.00 640.00 4,401.00`
  ```js

  :::

  ````

- หลังจากนั้นเขียนโค้ดให้คอมพิวเตอร์ (1) ช่วยหา หรือ match ข้อมูลที่ดูเหมือนวันที่ออกมา — ถ้าอ่านโค้ดนี้ไม่เข้าใจไม่เป็นไรนะครับ แค่จะให้ดูภาพรวมขั้นตอนการทำงานของโปรแกรมเมอร์เฉยๆ — (2) โอเค ตอนนี้ได้ข้อมูลละ
  (3) ทำการจัดเรียงวันที่ให้อยู่ในรูปแบบ ปี-เดือน-วัน
  (4) พอได้ข้อมูลที่ต้องการแล้ว ก็สั่งให้มันรวมกันเป็นก้อนข้อความเดียว
  (5) แล้วก็ Copy ออกมาแปะใน Google Sheets ได้เลย

  ![](https://im.dt.in.th/ipfs/bafybeigg3u7dht76k5qddtci54ilcgsnwi5fwkssp4t7zltxewow5m5nka/image.png)

  ::: details See code

  ```js
  Array.from(x.matchAll(/(\d\d)\/(\d\d)\/(\d\d)/g))
    .map(([, a, b, c]) => `20${c}-${b}-${a}`)
    .join('\n')
  ```

  :::

- หลังจากนั้นก็ทำแบบเดียวกันกับคอลัมน์ที่ 2
  ก็คือ ดึงข้อมูลที่หน้าตาดูเหมือนเป็นเวลาออกมาครับ
  จะเห็นว่า เวลาผมเขียนโค้ด ผมไม่ได้เขียนจากซ้ายไปขวาตลอดครับ ก็จะมีการขยับไปซ้ายบ้างขวาบ้าง
  แล้วก็อีกเรื่องหนึ่งคือ ผมไม่ได้เขียนโค้ดให้เสร็จทั้งหมดแล้วรันทีเดียวครับ
  ผมลองแก้โค้ดทีละนิด ทีละหน่อย แล้วก็ลองรันดู
  ถ้าไปถูกทางก็เขียนโค้ดต่อ
  ถ้าไปผิดทางก็แก้ครับ

  ![](https://im.dt.in.th/ipfs/bafybeigun6n2g77a4t4edokjehxrpv3ivzimjcozfjw4l6iuje7vhslfwa/image.png)

  ::: details See code

  ```js
  Array.from(x.matchAll(/\d\d:\d\d/g), (a) => a[0]).join('\n')
  ```

  :::

- สุดท้ายก็ทำกับคอลัมน์ที่ 3 ครับ
  ดึงข้อมูลที่เป็นจุดทศนิยมออกมา ซึ่งก็คือจำนวนเงินนั่นเอง

  ![](https://im.dt.in.th/ipfs/bafybeidatqmb4nfpyntvzqh2rymwoy72nwk3upclwjox4fpvaadjecnzny/image.png)

- แต่ผมพอเอาคำตอบที่ได้มาแปะใน Google Sheet ก็รู้สึกว่าตัวเลขมันน้อยแปลกๆ
  พอมองสักพักก็ อ๋อ! ลืมไปว่าจำนวนเงินอาจจะมีเครื่องหมาย `,` (comma) คั่นด้วย แต่โค้ดที่เขียนไม่ได้รองรับกรณีนี้ไว้ครับ
  ถามว่าคอมพิวเตอร์ทำงานผิดไหม คือคอมมันก็ทำตามที่ผมสั่งเป๊ะๆ น่ะครับื
  คำตอบที่ได้เลยไม่ตรงกับที่เราต้องการแค่นั้นเอง
  เวลาเกิดเหตุการณ์แบบนี้อาจจะเรียกได้ว่าโปรแกรมของเรามี Bug ครับ

  ![](https://im.dt.in.th/ipfs/bafybeibemyqxaj4meydhllbfd64wikwpgsk5ct6y2zemjdjrfjsmjm52d4/image.png)

- สุดท้ายก็แก้บั๊ก ทำให้ตอนดึงข้อมูลที่เป็นตัวเลข รองรับกรณีที่มีเครื่องหมาย `,` แค่นี้ผมก็ได้ตารางตามที่ต้องการแล้ว

  ::: details See code

  ```js
  Array.from(x.matchAll(/[\d,]+\.\d+/g), (a) => a[0])
    .join('\n')
    .replace(/,/g, '')
  ```

  :::

- ข้อดีคือพอผมมีโค้ดนี้แล้ว ผมก็สามารถเอาโค้ดนี้ มารันซ้ำกับข้อมูลจากหน้าอื่นๆ ต่อได้ โดยไม่ต้องเขียนใหม่ทั้งหมดครับ

## สรุป

- ก็หวังว่าจะได้เห็นภาพกันบ้างแล้ว ว่าการเขียนโปรแกรมเป็นเนี่ยมันมีประโยชน์ขนาดไหน ไม่ว่าคุณจะทำงานในสายอาชีพไหน หรือเรียนสายไหน การเขียนโปรแกรมเป็น ก็อาจจะเป็นหนึ่งในสิ่งที่ช่วยให้อำนวยความสะดวกในชีวิตได้ครับ

- ผมนึกถึง[โพสต์นี้ของเพจ Phoenix Lava](https://www.facebook.com/PhoenixLava/posts/pfbid02w4wg6G5vDf6mQPeWKcwvimRKPQAHj64YkR2UbVfxeXN59Uof6kVKrQnq9gJcKCHHl) ที่ขายซาลาเปาลาวา เจ้าของโพสต์นี้ เล่าว่าเขาจบสาขา Food Science ไม่ได้จบสายคอมเลย เดิมใช้ Excel วางแผนการผลิต ซึ่งใช้งานค่อนข้างลำบาก จนถึงจุดนึงเลยหัดเขียนโปรแกรมใช้เองที่ร้าน ผ่านมา 2 ปีแล้ว ก็ช่วยให้กิจการไปได้อย่างราบรื่นขึ้นมาก

- ก่อนจะไปที่หัวข้อถัดไป ต้องขอบอกไว้ก่อนว่า
  สองตัวอย่างเมื่อกี๊ อยากให้เห็นเป็นตัวอย่างครับ ว่าถ้าเขียนโปรแกรมเป็นจนชำนาญมากๆ จะสามารถช่วยให้ประหยัดเวลาในชีวิตประจำวันได้ขนาดไหน
  ในตัวอย่างมีการใช้งานโค้ดที่เป็นศาสตร์ขั้นสูงหลายๆ เรื่อง[^advanced]
  ถ้าเปรียบกับการเล่นดนตรีก็คงคล้ายๆ กับเพลงที่ต้องชำนาญระดับนึงถึงจะเล่นได้ครับ

  ![](https://im.dt.in.th/ipfs/bafybeihq22tmexbev7tghpqwqxvxs56cytucig2fey6zpeeoqi4evqvbae/image.webp)

- แต่ก่อนที่เราจะสามารถเล่นเพลงแอดวานซ์ๆ ได้
  เราต้องเล่นเพลงเบสิคๆ ได้ก่อน

  ![](https://im.dt.in.th/ipfs/bafybeiazfejgn24ard65ha2oxm73ke3e32txcsgqdx24fk7mz23qo7hjhi/image.webp)

- กลับเข้าเรื่อง — คอร์สนี้ จะสอนเบสิคต่างๆ ของการใช้งานภาษา JavaScript ครับ
  เราจะมาเรียนรู้พื้นฐานที่จำเป็นบางส่วน
  และเราจะมาลองสร้างโปรเจค Web application กันครับ (เดี๋ยวจะลงรายละเอียดเพิ่มเติมในหัวข้อ “คอร์สนี้จะได้เรียนรู้อะไรบ้าง”)

- พอจะเห็นตัวอย่างกันไปแล้ว เดี๋ยวเรามาให้คำจำกัดความกันดีกว่า ว่าตกลงแล้วการเขียนโปรแกรมมันคืออะไร

[^advanced]: ตัวอย่างเช่น Iterators and iterables, Higher-order functions, DOM APIs, CSS selectors และ Regular expressions