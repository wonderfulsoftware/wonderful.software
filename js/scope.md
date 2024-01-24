---
draft: true
---

<script setup>
  import PreviewItem from './components/PreviewItem.vue'
</script>

# คอร์สนี้จะได้เรียนรู้อะไรบ้าง

## เรื่องที่สอนในคอร์สนี้

### การคำนวณเบื้องต้น

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeid5ymmmiprhesleetledo4i6fnjlbxt7ir2zxlsba6rm3y5a57mnu/image.webp">

เราจะเริ่มจากการทำความรู้จักกับ JavaScript Console และนำมาใช้คิดเลขง่ายๆ ก่อน

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeicutgrs74w7vgnya3hsfuncaxpiro7r4o6bor7puzvyxdumertaee/image.webp">

เราจะได้เรียนรู้เรื่องการทำงานของ JavaScript Console
ว่าจากโค้ดที่เราพิมพ์เข้าไป
ผ่านขั้นตอนอะไรบ้าง จนกลายเป็นผลลัพธ์ที่เราเห็นอยู่บนหน้าจอ

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeigj5fqk2ojr4pbai7duh6uxocbs54dse3yikx4oafckzer2xu52ke/image.webp">

เราจะได้เรียนรู้เรื่อง**ชนิดข้อมูล**ต่างๆ

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeigbfvvjh3fbyuxea62ffwu2lbubjdfavsvmrugmlnsu56qgcoscrq/image.webp">

เริ่มจาก**ข้อมูลชนิดตัวเลข** (number)
**ตัวดำเนินการ**ทางคณิตศาสตร์ที่เกี่ยวข้อง (operators)
และคอนเซปต์ที่เรียกว่า**เอกซ์เพรสชัน** (expression) ซึ่งจะช่วยให้เข้าใจโครงสร้างของภาษาโปรแกรมมากขึ้น

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeih2fvnzoxn4jsrwgr57hw3bou2ttdjz3gwlqqkp3edi5yyd23s6eu/image.webp">

ต่อด้วย**ข้อมูลชนิดข้อความ** (string)
ที่เราใช้เพื่องานเพื่อเก็บและแสดงผลข้อความต่างๆ และโต้ตอบกับผู้ใช้งาน

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeihavyxt55lekgdvasgpmcvuivhympq4fvecgfukqrsolbzy4plxwq/image.webp">

เมื่อเรามีข้อมูลหลายๆ ชนิด
เราก็จะต้องรู้วิธี**การแปลงข้อมูล**ไป–มา ระหว่างข้อมูลชนิดต่างๆ ด้วย
เพราะในภาษา JavaScript ข้อความกับตัวเลข ถือเป็นคนละประเภท และทำงานไม่เหมือนกัน
(ตัวอย่างเช่น `'1' + '2'` จะได้ผลลัพธ์เป็น `'12'` เพราะการเอาข้อความมาบวกกันจะเป็นการต่อเข้าด้วยกัน
ในขณะที่ `1 + 2` จะได้ผลลัพธ์เป็น `3` เพราะเป็นการบวกกันทางคณิตศาสตร์)

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeiggmlzx3twwez43izhuccfyjm66sgy3o355smxfozofp72vg3x5na/image.webp">

พอโปรแกรมของเราทำงานกับข้อมูลหลายๆ อย่าง
โปรแกรมก็จะต้องมีที่ไว้สำหรับเก็บข้อมูลเหล่านั้น
เราจะมารู้จักกับคอนเซปต์ของ**ตัวแปร** (variable) ที่ใช้เก็บค่าต่างๆ ไว้ในหน่วยความจำ

</PreviewItem>

### ลองสร้างเว็บแอปพลิเคชัน

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeia2kyeyaapuqat6i4dikbfekd2l2s2n4oc46mp6ejraw2snwgeyj4/image.webp">

เราจะพักเบรคจากช่วงทฤษฎี แล้วเราจะลองมาสร้างอะไรที่เป็นชิ้นเป็นอันกันดู
เราจะมา**สร้างเว็บแอปพลิเคชัน**กัน

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeibxbldi2qo2tafsoyf4kd7nxsgawpdr7jrufimtqswwifdsdnpw5m/image.webp">

โดยในคอร์สนี้
เราจะใช้บริการของ Glitch.com ซึ่งเป็นเว็บไซต์ที่ช่วยให้เราสร้างแอปพลิเคชันบนเว็บได้ง่ายๆ และรวดเร็ว
เพราะทุกอย่างสามารถทำได้บนเว็บเบราว์เซอร์โดยไม่ต้องติดตั้งโปรแกรมเพิ่มเติม

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeie7th32awa3qker5ucdb5s6gkmbidu5hnsxtr6pwahlfsuw3xqexa/image.webp">

เวลาสร้างเว็บพลิเคชั่นเราจะใช้กันอยู่ 3 ภาษาหลักๆ คือ **HTML, CSS และ JavaScript**
เราจะได้เรียนรู้ว่าแต่ละภาษามีหน้าที่อะไร และมีความสัมพันธ์กันอย่างไร

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeih5t2l5kpw245ioanlmnzjvk73dfox7vo75i6finsl7gtv6b45kba/image.webp">

เราจะมาลอง**ขึ้นหน้าเว็บกันด้วยภาษา HTML** กันก่อน

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeigkgbh6wvpbm5d5w6x5gywutlo7nu7zpwowdfg4fw36kkzcwp2ep4/image.webp">

ภาษา HTML มีอะไรให้เราใช้เยอะมากๆ
เราจะได้มารู้จัก**แหล่งข้อมูลเกี่ยวกับเทคโนโลยีเว็บ**ต่างๆ ที่เราสามารถหาข้อมูลเพิ่มเติมได้
และจะมีแบบฝึกหัดให้ไปลองศึกษา element ชนิดต่างๆ ใน HTML เพิ่มเติมด้วยตัวเอง
เพราะทักษะที่สำคัญมากๆ ในการเป็นนักเวทย์ในโลกคอมพิวเตอร์ คือความสามารถในการอ่านคู่มือและศึกษาวิชาใหม่ๆ ได้ด้วยตัวเอง

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeiho4tfnfs4tkcescgrbwf7uyadabw36axw2r3tfolgnnfsvphghru/image.webp">

เมื่อเราเขียน HTML กันพอเป็นแล้ว
เราจะเรียนรู้วิธีการ**ใส่โค้ด JavaScript ลงไปใน HTML** ของเรา
เพื่อให้เว็บแอปพลิเคชันของเรามีชีวิตขึ้นมา
และสามารถทำงานโต้ตอบกับผู้ใช้งานได้

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeiaownqczt35paqjpywddxj374pcqkevhetmumq53nly6tzjsb2iva/image.webp">

เรามาทำความรู้จักกับ**อินพุต**ชนิดต่างๆ
เช่น ปุ่ม กล่องข้อความ เช็คบ็อกซ์ และอื่นๆ
ที่เราจะเอามาใช้ในการรับข้อมูลและโต้ตอบกับผู้ใช้งาน

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeienhqw6cnxejcxkqth4ao7zhcwyjfph3fosvt2igvyixzss3262la/image.webp">

และเราจะเขียนโค้ด JavaScript เพื่อทำงานกับอินพุตเหล่านั้น

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeib6jxftr67rv4m2dwgvdurhmdsn2n43rwfdojl5ovgzbvslgelaka/image.webp">

และเราจะนำความรู้เหล่านี้มาสร้างเป็น**มินิโปรเจค**ต่างๆ
มินิโปรเจค คือโปรเจคขนาดเล็กๆ ใช้เวลาทำไม่นาน ที่เราจะได้นำความรู้ต่างๆ มาประกอบกัน เพื่อใช้งานจริงดู

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeidmiofdsk7dm7364xst2spaer5myfvlpjrobf74pphyz5zzollniy/image.webp">

เริ่มจาก**โปรแกรมบวกเลข** (Adder)

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeifiikavbreoxn3vglqpnlasank5h73zsdgctakpdixgbodil6mqza/image.webp">

และ**โปรแกรมนับเลข** (Counter)

</PreviewItem>

### การเขียนเงื่อนไข

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeifjy5ta7rxdksv7kmrr4wkzczrmsigtvy7c7hhrlmq6idk4fhwp3u/image.webp">

เราจะกลับมาศึกษาภาษา JavaScript กัน
เรามาทำความรู้จักกับสิ่งที่เรียกว่า**คอมเม้นต์** (comment) ที่เราสามารถใช้เขียนข้อความบรรยายหรืออธิบายภายในโค้ดของเราได้

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeibmcdn7jxeaa5ngafl275zsfp4s23mj7p2yevip7fdcvoxwtw75ru/image.webp">

เราจะมารู้จักกับชนิดข้อมูลอันต่อไปที่เรียกว่า**บูลีน** (boolean)
ซึ่งเป็นชนิดข้อมูลที่เก็บค่าความจริง (true) หรือเท็จ (false)
รวมถึงตัวดำเนินการดำเนินการต่างๆ ที่ใช้เปรียบเทียบข้อมูลกัน (comparison operators)

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeifdwbafo63vban7huxmjvn6oxeh3yqmmk74wu7hq5fd2nuu72xcri/image.webp">

boolean เป็นข้อมูลชนิดสำคัญที่เราใช้เพื่อ**กำหนดเงื่อนไข**ต่างๆ
และทำให้การทำงานของโปรแกรมแยกเป็นสองทาง
ถ้าเงื่อนไขเป็นจริง ก็ไปทางนึง แต่ถ้าเงื่อนไขเป็นเท็จ ก็ไปอีกทางนึง

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeibwsidze4l6m74lig5mcxp5tt4d7alm3dqmftinlsc7suyzljtevm/image.webp">

เสร็จแล้วเราจะมาสร้างมินิโปรเจคชิ้นต่อไป คือ**โปรแกรมควิซอย่างง่าย** (Simple Quiz)

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeiern6jhhmekmxenvbl44fn6nqbxtcvi6plyvesongjwloi5swbux4/image.webp">

ต่อด้วย**โปรแกรมสุ่มเลข** (Randomizer)
ซึ่งในโปรเจคนี้เราจะได้เรียนรู้กับคำสั่งที่ใช้ในการสุ่มเลข

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeibtuzjm43bni6squ6dhq2mlvg6ibox6iwrtwujtzu56rk3pnsppwe/image.webp">

และต่อด้วย**โปรแกรมโยนเหรียญหัวก้อย** (Coin Flipper)
ที่ผู้ใช้งานสามารถกดปุ่ม แล้วโปรแกรมจะตอบกลับมาว่าโยนออกหัวหรือออกก้อย

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeigjvyexw4v5rv33zrsps2slvenbdtkgdjuzuzjcrgrm4e2ijixofa/image.webp">

ในโปรเจคนี้เราจะได้รู้จักกับโครงสร้างภาษา **if–else**
ที่ทำให้โปรแกรมของเราแยกเป็นสองเส้นทาง ขึ้นอยู่กับเงื่อนไขที่เรากำหนด

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeiax5owddnoddfx7zkuu2f4s5zllhgk4wayroftu6q2h7lb2aczd2y/image.webp">

เราสามารถ**นำคำสั่ง if–else หลายๆ คำสั่งมาซ้อนกัน**ได้
เพื่อกำหนดเงื่อนไขในโปรแกรมที่ซับซ้อนขึ้น

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeiafs5m3ukbeq4vcwrqfzc6cmyjqlqkpbifoadzmq23jlrn5uw57qi/image.webp">

เราจะมารู้จักกับ**ตัวดำเนินการทางตรรกศาสตร์**ต่างๆ (logical operators)
ที่เราสามารถใช้เพื่อเชื่อมต่อเงื่อนไขต่างๆ เข้าด้วยกัน
ตัวอย่างเช่น “และ” (and), “หรือ” (or), “นิเสธ” (not)

</PreviewItem>

### ฟังก์ชัน

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeia6t6vszw66avuq5dkehbpys6ljzmjmpmiwt3atpulnbxtdmrqwwe/image.webp">

ต่อไป เราจะมาทำความรู้จักกับคอนเซปต์ของ**ฟังก์ชัน** (function)
ที่ช่วยให้เราสามารถเอาโค้ดหลายๆ บรรทัดมามัดรวมกันเป็นชุดคำสั่งที่เราสามารถนำมาใช้ซ้ำได้
โดยฟังก์ชันสามารถรับค่าผ่าน**พารามิเตอร์** (parameter) และ**ส่งค่ากลับ**ไปให้ผู้เรียกใช้งานได้ (return value)

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeiggfxfl3nq47v3fhfzof7kth3v7tlok4nummjdzmj7xbbjaebc6yi/image.webp">

นอกจากนี้เราจะแวะมารู้จักกับแนวคิดของการทำ automated testing กันด้วย
คือการ**เขียนโค้ดที่เอาไว้ทดสอบโค้ดของเราเองอีกที** ว่าทำงานถูกต้องหรือไม่
เวลาที่เราพัฒนาโปรแกรม เราจะได้ไม่ต้องทดสอบโค้ดซ้ำๆ ด้วยตัวเอง

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeievbb7o7qpuq3brdyhdrdqck45akglve6za5llszi6wa55dkxorxm/image.webp">

หลังจากที่เราเรียนรู้เรื่องพวกนี้ไปแล้วเราจะมาทำ**โปรเจคหลักของคอร์สนี้**กัน (course project)
ซึ่งโปรเจคนั้นคือ**โปรแกรม Flashcard**
เป็นโปรแกรมไว้ช่วยในการเรียนรู้คำศัพท์ภาษาต่างๆ
หลังจากทำโปรเจคนี้แล้ว เราสามารถนำโปรแกรมที่เราสร้างขึ้นมาช่วยในการเรียนรู้เรื่องต่างๆ ในชีิวิตจริงได้ด้วย
และสามารถต่อยอดโปรแกรมนี้ได้ต่อไปด้วย เพราะเป็นโปรแกรมที่เราสร้างขึ้นมาเอง

</PreviewItem>

### อาร์เรย์และออบเจกต์

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeia4g5vazqibwo2gucc3abagzg243gfallhdxweqrooiwy7yd4pvfy/image.webp">

หลังจากที่เราทำโปรเจค Flashcard จะพบว่า
ถึงแม้เราจะสร้างโปรเจคได้ แต่โค้ดที่เราเขียนไปมีความซ้ำซ้อนมากๆ
เราจะมารู้จักกับการ**รีแฟคเตอร์โค้ด** คือการปรับปรุงโครงสร้างของโค้ดให้ดีขึ้น โดยคงความสามารถเดิมไว้
เราจะมารู้จักกับโครงสร้างข้อมูลชนิดใหม่คือ**อาร์เรย์** (array) ที่ใช้เก็บข้อมูลหลายๆ ชิ้นไว้ด้วยกัน
เสร็จแล้วเราจะรีแฟคเตอร์โค้ดของเราให้ดีขึ้นด้วยการใช้อาร์เรย์

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeieymqz6f7jmi3p4vqxomuhpbsvy5uqi4fzx6xgv4l2qj5plfgx3cu/image.webp">

พอเรามีข้อมูลหลายๆ ตัว
เราก็ต้องมีวิธีที่จะทำให้โปรแกรมของเราทำงานกับข้อมูลแต่ละตัวที่อยู่ในนั้นได้
เราจะมารู้จักกับโครงสร้างภาษาที่เรียกว่า**ลูป** (loop) ที่ทำให้โค้ดทำงานซ้ำๆ กับข้อมูลแต่ละตัวได้
โดยเราจะรู้จักกับลูปแบบ **for–of** ก่อน ซึ่งเป็นลูปชนิดที่เราใช้งานบ่อยที่สุด และเหมาะสำหรับการทำงานกับอาร์เรย์

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeicbpe4oxreqlnptqeveqmvr4yraqera5mdenuclxx75c3btq2g6pm/image.webp">

เราจะมารู้จักกับ**ออบเจกต์** (object)
ที่เป็นโครงสร้างข้อมูลชนิดหนึ่ง ที่ช่วยให้เราเก็บค่าต่างๆ ที่มีความเกี่ยวข้องกันไว้ด้วยกัน
และเราจะเอาออบเจกต์มาใช้ปรับปรุงโค้ดของโปรเจค Flashcard ให้ดีขึ้นอีก

</PreviewItem>

### เก็บตกความรู้เพิ่มเติม

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeidcybrpfpnltcntycb2i3lmk6d3zgi7vtpluupzmvba7pygddvppa/image.webp">

ในช่วงต้นๆ ของคอร์ส
เราได้ข้ามเนื้อหาพื้นฐานหลายๆ เรื่อง
เพื่อให้คอร์สนี้เรียนรู้ง่ายขึ้นสำหรับผู้เริ่มต้น
แต่หลังจากที่เราได้ทำความคุ้นเคยกับภาษา JavaScript มาพอสมควรแล้ว
ในบทสุดท้ายของคอร์สนี้ เราจะกลับมาเรียนรู้เรื่องพื้นฐานอื่นๆ ที่เราข้ามไปก่อนหน้านี้
โดยเริ่มจาก**ความรู้เชิงลึกเกี่ยวกับ string และ number** ครับ

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeigpuduugo463vagoqzdota36adbgj3emzxgt7hxwkc5c254vqlxti/image.webp">

นอกจากนี้เราจะได้เรียนรู้เกี่ยวกับเรื่องการ**ทำงานกับวันที่และเวลา** (date and time) ในภาษา JavaScript กัน
เราจะได้เรียนรู้ว่า JavaScript เก็บข้อมูลและทำงานกับวันที่และเวลาอย่างไร
และเราจะลองนำความรู้ที่ได้มาใช้จับเวลาใน JavaScript Console ดู

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeida37423mzi7epun3b6y6ujwrv4ketv6rmlkvmwiuzunwi3so3yuq/image.webp">

หลังจากนั้นเราจะมาทำมินิโปรเจคชิ้นสุดท้ายของคอร์สนี้กัน
ซึ่งนั่นก็คือ**โปรแกรมนาฬิกาบอกเวลา**ครับ (Digital Clock)

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeig4t52uo5cmnjxzpne2bqfryib4jsqkw6bqnstygg5kw4pvgnojqy/image.webp">

สุดท้ายเราจะมารู้จักกับลูปอีกสองชนิด คือ **while loop** และ **for loop**
ซึ่งมักจะใช้เพื่อนับเลข เช่นนับจาก 1 ถึง 10

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeicslturt3um4oszm4qmxzbajxhss6ok7sdhr2zklrgqpn2hoyjqmq/image.webp">

และเราจะปิดท้ายคอร์สนี้ด้วย**บทส่งท้าย**
ที่เราจะมาดูกันว่า หลังจากเรียนคอร์สนี้จบแล้ว มีอะไรให้เราไปศึกษากันต่อบ้าง

</PreviewItem>

### บทเสริม

- นอกจากนี้ หลังจากจบคอร์ส จะมีบทเสริมต่างๆ
  ที่จะมีเนื้อหาเพิ่มเติมที่ไม่ได้อยู่ในเนื้อหาหลักของคอร์ส รวมถึงแหล่งความรู้อื่นๆ เพื่อไปศึกษาต่อกันด้วยครับ

## เรื่องที่ไม่ได้สอนในคอร์สนี้

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeig32p52tm7kjba62bv5whqimkv2ndeun4pyk5gnz7avhjrbd4fz7a/image.webp">

**ในคอร์สนี้จะมีคอนเซปต์หลายอย่างที่เราไม่ได้ครอบคลุม**
เพราะภาษา JavaScript เป็นภาษาที่ยืดหยุ่นมาก มีตัวเลือกให้เราหลายตัวเลือก
ตัวอย่างเช่น ถ้าเราอยากจะสร้างฟังก์ชัน เราสามารถเขียนโค้ดได้ถึง 4 วิธีเป็นอย่างต่ำ
แต่ในคอร์สนี้เราจะเลือกมาสอนแค่รูปแบบเดียว เพื่อให้ง่ายต่อการเรียนรู้ครับ
ถ้าใครเรียนคอร์สนี้ควบคู่กับคอร์สอื่นๆ ไปด้วย ก็อาจจะเจอโค้ดรูปแบบอื่นที่ไม่ได้สอนในคอร์สนี้ครับ

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeigsdm3j53avbmx3usiub7s3tv2f624xgugvwa3pns2suxot5nhvxy/image.webp">

**Industry practices & tools** —
ในคอร์สนี้เราจะไม่สอนเรื่องเครื่องมือต่างๆ ที่โปรแกรมเมอร์มืออาชีพใช้กัน
แต่เราจะใช้เครื่องมือบ้านๆ ที่เน้นง่ายต่อการเรียนรู้ครับ

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeihfd5ugkk7h4wchtsklnwz4i7lkt3mqklbojyg5cf6xim3tcrucwi/image.webp">

**“Best practices”** —
ด้วยความที่คอร์สนี้เป็นคอร์สเบื้องต้น เราจะเขียนโค้ดกันแบบบ้านๆ
แต่เวลาเขียนโค้ดจริงๆ จะมีสิ่งที่เรียกว่า “best practices” ซึ่งเป็นคำแนะนำว่าควรทำอะไร ไม่ควรทำอะไร

ตัวอย่างเช่น best practice บางอันกล่าวไว้ว่า “เราควรแบ่งโค้ดของเราออกเป็นโมดูลต่างๆ” ซึ่งเป็นคำแนะนำที่มีประโยชน์เมื่อเราทำโปรเจคขนาดใหญ่
แต่สำหรับผู้เริ่มต้น การแยกโค้ดออกเป็นโมดูล อาจจะทำให้เห็นภาพรวมการทำงานทั้งหมดของโปรแกรมได้ยากขึ้น ซึ่งอาจเป็นอุปสรรคต่อการเรียนรู้
ดังนั้นอย่าให้ best practices มาขัดความการเรียนรู้ของเราครับ

ในขณะเดียวกัน ก็อยากจะให้พึงระลึกไว้ว่า
พวกท่าต่างๆ ที่เจอในคอร์สนี้ อาจจะไม่ใช่วิธีที่ดีที่สุดเสมอไป
และอาจจะถูกแทนที่ด้วยวิธีการเขียนโค้ดที่ดีกว่า ที่คุณจะได้พบเจอในอนาคตครับ[^pro]

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeiho5tfoxoumb3labugztl2v5xr2fj53mx33wlhtlphyoa3tfk7uli/image.webp">

**Computer science fundamentals** —
คอร์สนี้เป็นคอร์สเบื้องต้น แต่ไม่ใช่คอร์สพื้นฐานครับ
คอร์สนี้พยายามที่จะหาจุดสมดุลระหว่าง fundamental knowledge (ความรู้พื้นฐาน) กับ working knowledge (ความรู้ที่ใช้ในการทำงาน) เท่าที่จะทำได้ แต่จะเน้นปฏิบัติเป็นหลัก
โดยมีจุดมุ่งหมายให้คุณได้ลองก้าวเท้าเข้าสู่โลกของการเขียนโปรแกรมดู
เพื่อให้พอเก็ตฟีลว่าการเขียนโปรแกรมมันเป็นยังไง และคุณชอบมันหรือเปล่า

แต่หากคุณอยากเขียนโปรแกรมเป็นแบบจริงจัง อยากไปถึงจุดที่คุณเชี่ยวชาญ ความรู้พื้นฐานเป็นสิ่งที่สำคัญมาก
ผมชอบคำพูดจากบล็อกของพี่หนูเนยมาก: [“อยากไปถึงยอด ต้องเข้าให้ถึงแก่น”](https://nuuneoi.com/blog/blog.php?read_id=834)
แก่นพวกนี้คือสิ่งที่คุณน่าจะได้เรียนรู้หากคุณศึกษาในคณะที่เกี่ยวกับ Computer Science หรือ Software Engineering[^subj]
แต่ถึงคุณไม่ได้ศึกษาในคณะเหล่านี้ คุณสามารถเรียนรู้ได้ด้วยตัวเอง เพราะความรู้พื้นฐานพวกนี้มีอยู่เต็มโลกอินเตอร์เน็ต และคุณแทบไม่ต้องใช้อุปกรณ์หรือเครื่องมือพิเศษเพื่อเรียนรู้สิ่งเหล่านี้เลยครับ

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeigaqutx2clmdvlrbnyo6t7hclgcrxjdg4cefxqahqliejodj46wby/image.webp">

**Object Oriented Programming (OOP)** — ในคอร์สนี้
เราจะได้เรียนรู้เกี่ยวกับเรื่องคอนเซปต์ของ “ออบเจกต์” แบบคร่าวๆ
รวมถึงการใช้งานออบเจกต์ต่างๆ และการสร้างออบเจกต์แบบเบื้องต้น
แต่เราจะไม่ลงลึกเกี่ยวกับการเขียนโปรแกรมเชิงวัตถุ (OOP) มากนัก[^oop]

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeieztygefcltldw52g5jixcg7nzodddutb7h3fxgcuqwjrnrvagn3m/image.webp">

**การพิมพ์ดีด** — ในคอร์สเวอร์ชันวีดีโอ ผมจะพิมพ์ทุกอย่างด้วยความเร็วเต็มสปีด ถ้าตามไม่ทันก็สามารถหยุดวีดีโอเพื่อพิมพ์ตามได้
และสามารถไปเล่นเกมต่างๆ เพื่อฝึกพิมพ์ดีดเพิ่มเติมได้เอง ([อ่านบทเสริมเรื่องการพิมพ์ดีด](./typing.md))

</PreviewItem>

<PreviewItem image="https://im.dt.in.th/ipfs/bafybeieztygefcltldw52g5jixcg7nzodddutb7h3fxgcuqwjrnrvagn3m/image.webp">

**Text editor techniques** — ในคอร์สเวอร์ชันวีดีโอ ผมจะใช้คีย์ลัดต่างๆ เพื่อแก้โค้ดหลายๆ จุดพร้อมๆ กัน
ที่ทำแบบนี้เพื่อจะให้เห็นว่า เวลาเราเขียนโปรแกรม เราไม่จำเป็นต้องเขียนโค้ดทีละบรรทัด ถ้าเกิดเรารู้คำสั่งลัดต่างๆ ที่ช่วยให้เราเขียนโค้ดได้เร็วขึ้น

แต่คอร์สนี้จะเน้นที่ตัวภาษา JavaScript ดังนั้นในคอร์สนี้จะไม่ได้สอนเทคนิคต่างๆ เกี่ยวกับการใช้งาน Text editor
ถ้าอยากทำเป็นก็สามารถไปลองหาเทคนิคต่างๆ ได้เองครับ ลองเสิร์ชด้วยคำว่า “text editor techniques” ดูได้ครับ หรือถ้ามีเพื่อนที่เรียนคอร์สนี้ด้วย ก็ลองแลกเปลี่ยนเทคนิคกันได้ครับ

<video src="https://im.dt.in.th/ipfs/bafybeicjd6jfzvcc3rcehhvsluquvzirxxb6ibywbgpn3gafbpu7wxlhqm/text-edit.mp4" muted autoplay loop controls></video>

</PreviewItem>

## Up next

- ในตอนต่อไป ซึ่งจะเป็นสุดท้ายของบทนำนี้
  จะเกี่ยวกับ**การเรียนรู้การเขียนโปรแกรม**
  เพราะต้องบอกก่อนว่าการเขียนโปรแกรมไม่ใช่เรื่องง่ายเลยครับ
  ผมหวังว่าเนื้อหาในตอนต่อไป จะช่วยให้คุณสามารถเรียนรู้เรื่องการเขียนโปรแกรมได้อย่างมีประสิทธิภาพมากขึ้นครับ

[^pro]:
    โลกของโปรแกรมมิ่งมีสิ่งใหม่ๆ เกิดขึ้นตลอดเวลา
    หากคุณไปคุยกับโปรแกรมเมอร์ที่ชำนาญแล้ว แล้วเขาเห็นโค้ดของคุณ หรือวิธีการที่คุณเขียนโค้ด
    เขาก็อาจจะถามคำถามต่างๆ ว่าทำไมไม่ลองใช้อันนู้นอันนี้ดูล่ะ?
    (เช่น ทำไมไม่ใช้ TypeScript ล่ะ?
    ทำไมไม่ใช้เฟรมเวิร์คแบบ React, Vue, Angular, Svelte, Solid หรืออะไรก็ตามที่มันฮิตๆ ในช่วงนั้นล่ะ?
    ทำไมไม่เก็บไฟล์ใส่ Git แล้วดีพลอยด้วย Firebase, Netlify หรือ Vercel ล่ะ?
    ทำไม่เขียนโปรแกรมแบบ Functional ล่ะ?
    ทำไมไม่ทำ CI/CD, TDD, DDD, SSR, SEO, CQRS, MVC, MVP หรือ MVVM ล่ะ?
    ทำไมไม่ใช้ Vite, SvelteKit หรือ Astro ล่ะ?
    ทำไมไม่เขียนโค้ดด้วย Vim หรือ Emacs หรือใช้ Arch Linux ล่ะ?
    ทำไมไม่ลองฝึกพิมพ์ด้วยคีย์บอร์ด Dvorak ล่ะ?)
    ในกรณีส่วนมาก หลายๆ คนก็น่าจะแนะนำด้วยความหวังดีนะครับ เพราะก็ไม่อยากให้คุณเขียนต้องโค้ดเยอะเกินความจำเป็น
    ซึ่งในการทำงานจริงๆ มันก็เป็นเรื่องที่ดีนะ ถ้าคุณเขียนโค้ดน้อยๆ แต่สร้างประโยชน์ได้เยอะ
    แล้วเครื่องมือต่างๆ พวกนี้นี่แหละที่สามารถช่วยทุ่นแรงและทุ่นเวลาคุณได้
    หากคุณเรียนรู้ต่อในสายนี้ ก็จะได้เจอ ได้ลองเล่นกับเครื่องมือมากมายครับ
    แต่ในช่วงแรกๆ คุณอาจจะได้ใช้เครื่องมือบ้านๆ ไปก่อน
    เพื่อสะสมชั่วโมงบิน (ดูบทเสริม: [ความสำคัญของชั่วโมงบิน](./quantity.md)) และพัฒนาตัวเองให้พร้อมกับเลเวลถัดไปครับ

[^subj]:
    ตัวอย่างวิชาเช่น
    Computer Programming,
    Discrete Maths,
    Data Structures and Algorithms,
    Computer Architecture,
    Operating Systems,
    Database Systems,
    Computer Networks,
    Software Engineering,
    Theory of Computation
    ฯลฯ

[^oop]:
    ในคอร์สนี้จะไม่ได้สอนเรื่องคำสั่ง `class`
    หรือการใช้งานคีย์เวิร์ด `this` ในภาษา JavaScript
