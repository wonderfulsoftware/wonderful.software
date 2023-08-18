---
draft: true
---

# การเขียนโปรแกรมคืออะไร

- ในตอนก่อนหน้าเราพอเห็นตัวอย่างคร่าวๆ แล้ว
  เรามานิยามกันดีกว่าว่า การเขียนโปรแกรมคืออะไร

## Programming

- ผมขอดึงคำนิยามมาจากหนังสือ [Eloquent JavaScript](https://eloquentjavascript.net/00_intro.html):

  > “**Programming** is the act of constructing a _program_ — a set of precise instructions telling a computer what to do”

  การเขียนโปรแกรม คือ การสร้างสิ่งที่เรียกว่า ‘โปรแกรม’ ซึ่งเป็นชุดคำสั่งที่บอกคอมพิวเตอร์ว่าจะต้องทำอะไรบ้างอย่างละเอียดและชัดเจน

## Input &rarr; Process &rarr; Output

- เราสามารถมองโปรแกรมที่เราเขียนได้ว่าเป็น “กระบวนการ” เพื่อแปรรูป “อินพุต” (ข้อมูลนำเข้า) ให้กลายเป็น “เอาท์พุต” (ผลลัพธ์ หรือข้อมูลส่งออก) ตามที่เราต้องการ[^ipo]

- ในตัวอย่างจากตอนก่อนหน้า:

  - **อินพุต** ก็คือ หน้าเว็บสั่งพิซซ่า

  - **กระบวนการ** คือ โค้ดนี้ที่เขียนไป

    ```js
    Array.from($$('.item-name'), (x) => x.innerText).join('\n')
    ```

  - **เอาท์พุต** คือ ข้อความหลายบรรทัด ที่มีชื่อเมนูพิซซ่าทั้งหมด โดย 1 บรรทัดแทน 1 เมนู

  ![](https://im.dt.in.th/ipfs/bafybeiebdmjwg2ngytljdckqifyzfgvp2coqsdxjobcqiqbi5d27hkqx2e/image.webp)

[^ipo]: มุมมองนี้เรียกว่า [IPO model](https://en.wikipedia.org/wiki/IPO_model) หรือ “Input-Process-Output model”
