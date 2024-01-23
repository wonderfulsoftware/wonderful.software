---
draft: true
---

<script setup>
  import { reactive } from 'vue'
  import JsConsole from './components/JsConsole.vue'
  import BooleanValue from './components/BooleanValue.vue'

const values = reactive({
  str: 'hello',
  strA: 'apple',
  strB: 'apricot',
  num: 42,
  bool: false,
  a: 5,
  b: 3,
})

const charCodes = (str) => Array.from({ length: str.length }, (_, i) => str.charCodeAt(i)).join(', ')

const tf = (v) => v ? 'จริง' : 'เท็จ'
const strCmp = (a, b) => {
  if (a < b) {
    return 'a < b'
  } else if (a > b) {
    return 'a > b'
  } else if (a == b) {
    return 'a == b'
  }
  return '???'
}
</script>

<style scoped>
  .n-input-text {
    border: 1px solid var(--vp-c-border);
    padding: 0 0.25em;
    border-radius: 4px;
    font: inherit;
    box-shadow: inset 0 1px 3px var(--vp-c-divider);
  }
</style>

# รู้จักกับ Boolean

ในตอนนี้เราจะมาทำความรู้จักกับ data type ชนิดต่อไป ที่มีชื่อว่า “Boolean” ครับ

![](https://im.dt.in.th/ipfs/bafybeihoinyo3odbmie2msxjzkgkbwz7sb7kswie27vhqfepvqqc6ibjl4/image.webp)

## Boolean คืออะไร

- Boolean คือ data type ที่มีค่าเพียง 2 ค่า คือ `true` และ `false` เท่านั้น
  โดยที่ “true” แปลว่า “จริง” ส่วน “false” แปลว่า “เท็จ”

  <JsConsole input="true" :output="{value: true}" />

  <JsConsole input="false" :output="{value: false}" />

- ถ้าเทียบข้อมูลชนิด string เหมือนกล่องข้อความ
  ข้อมูลชนิด number เหมือนสไลเดอร์
  ข้อมูลชนิด boolean ก็อาจจะเปรียบเหมือนกับสวิตช์ครับ

  | ชนิดข้อมูล | อินพุต                                                                     | ค่า                                         |
  | ---------- | -------------------------------------------------------------------------- | ------------------------------------------- |
  | string     | <input v-model="values.str" size="16" maxlength="20" class="n-input-text"> | <code>{{JSON.stringify(values.str)}}</code> |
  | number     | <input v-model="values.num" type="range" min="0" max="100">                | <code>{{values.num}}</code>                 |
  | boolean    | <input v-model="values.bool" type="checkbox">                              | <BooleanValue :value="values.bool" />       |

  :::tip ลองเล่นดู
  ลองเล่นกับอินพุตข้างบนดู แล้วสังเกตค่าที่เปลี่ยนแปลง
  :::

## ตัวดำเนินการเปรียบเทียบ (Comparison operators)

- สมมติเรามีตัวเลข ที่เก็บไว้ในตัวแปร `a` กับ `b`
  เราสามารถเอาข้อมูลที่เป็นตัวเลขมาเทียบกันด้วย operator พวกนี้ได้

  | ตัวดำเนินการ | ความหมาย            |
  | ------------ | ------------------- |
  | `>`          | มากกว่า             |
  | `<`          | น้อยกว่า            |
  | `>=`         | มากกว่าหรือเท่ากับ  |
  | `<=`         | น้อยกว่าหรือเท่ากับ |
  | `==`         | เท่ากับ             |
  | `!=`         | ไม่เท่ากับ          |

- ตัวอย่าง

  | ตัวแปร | ค่า                                                                                  |
  | ------ | ------------------------------------------------------------------------------------ |
  | a      | <input v-model="values.a" type="range" min="-10" max="10"> <code>{{values.a}}</code> |
  | b      | <input v-model="values.b" type="range" min="-10" max="10"> <code>{{values.b}}</code> |

  <JsConsole :input="`let a = ${values.a};\nlet b = ${values.b};`" />

  | Expression | ผลลัพธ์                                          | ความหมาย                                                                                          |
  | ---------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
  | `a > b`    | <BooleanValue :value="+values.a > +values.b" />  | a ({{ values.a }}) มากกว่า b ({{ values.b }}) &rarr; {{ tf(+values.a > +values.b) }}              |
  | `a < b`    | <BooleanValue :value="+values.a < +values.b" />  | a ({{ values.a }}) น้อยกว่า b ({{ values.b }}) &rarr; {{ tf(+values.a < +values.b) }}             |
  | `a >= b`   | <BooleanValue :value="+values.a >= +values.b" /> | a ({{ values.a }}) มากกว่าหรือเท่ากับ b ({{ values.b }}) &rarr; {{ tf(+values.a >= +values.b) }}  |
  | `a <= b`   | <BooleanValue :value="+values.a <= +values.b" /> | a ({{ values.a }}) น้อยกว่าหรือเท่ากับ b ({{ values.b }}) &rarr; {{ tf(+values.a <= +values.b) }} |
  | `a == b`   | <BooleanValue :value="+values.a == +values.b" /> | a ({{ values.a }}) เท่ากับ b ({{ values.b }}) &rarr; {{ tf(+values.a == +values.b) }}             |
  | `a != b`   | <BooleanValue :value="+values.a != +values.b" /> | a ({{ values.a }}) ไม่เท่ากับ b ({{ values.b }}) &rarr; {{ tf(+values.a != +values.b) }}          |

- ถ้าทั้งสองฝั่งเป็น string ก็จะเปรียบเทียบตามลำดับของตัวอักษร

  <figure class="figure">
    <JsConsole input='"apple" < "banana"' :output="{value: true}" />
    <figcaption>ตัว a (ในคำว่า apple) มาก่อนตัว b (ในคำว่า banana) จึงได้คำตอบเป็น true</figcaption>
  </figure>

  โดยในคอมพิวเตอร์ ตัวอักษรแต่ละตัว มีเลขประจำตัวของมันอยู่

  | ตัวอักษร | หมายเลขประจำตัวอักษร<br>(charCode) |
  | -------- | ---------------------------------: |
  | 1        |                                 49 |
  | A        |                                 65 |
  | a        |                                 97 |
  | ก        |                               3585 |

  แปลว่าตัวอักษรพิมพ์ใหญ่ จะถือว่า “มีค่าน้อยกว่า” ตัวอักษรพิมพ์เล็ก

  <figure class="figure">
    <JsConsole input='"apple" < "Banana"' :output="{value: false}" />
    <figcaption>ตัว a มีหมายเลข 97 ส่วนตัว B เป็นหมายเลข 66<br>เนื่องจาก 97 ไม่ได้น้อยกว่า 66 จึงได้คำตอบเป็น false</figcaption>
  </figure>

  กรณีที่ตัวอักษรตัวแรกเหมือนกัน จะเปรียบเทียบตัวอักษรตัวที่สอง
  และถ้ายังเหมือนกันอีก ก็เปรียบเทียบตัวอักษรตัวที่สาม และต่อๆ ไป

  <JsConsole input='"apple" < "apricot"' :output="{value: true}" />

  ลองเล่นดู:

  <table>
    <thead>
      <tr><th></th><th>a</th><th>b</th></tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">ข้อความ</th>
        <td><input v-model="values.strA" size="16" class="n-input-text"></td>
        <td><input v-model="values.strB" size="16" class="n-input-text"></td>
      </tr>
      <tr>
        <th scope="row">charCode</th>
        <td style="width: 256px">{{ charCodes(values.strA) }}</td>
        <td style="width: 256px">{{ charCodes(values.strB) }}</td>
      </tr>
      <tr>
        <th scope="row">ผลการเทียบ</th>
        <td colspan="2" style="text-align: center">
          <strong>{{ strCmp(values.strA, values.strB) }}</strong>
        </td>
      </tr>
    </tbody>
  </table>

- นอกจาก `==` กับ `!=`
  ยังมี `===` กับ `!==`
  หน้าที่คล้ายๆ กัน แต่แตกต่างกันตรงที่ `===` กับ `!==` จะไม่มีการแปลงชนิดข้อมูลให้

  | ตัวดำเนินการ | ความหมาย                                                        |
  | ------------ | --------------------------------------------------------------- |
  | `==`         | เท่ากับ (แปลงชนิดข้อมูลให้ กรณีที่สองข้างเป็นข้อมูลคนละชนิด)    |
  | `!=`         | ไม่เท่ากับ (แปลงชนิดข้อมูลให้ กรณีที่สองข้างเป็นข้อมูลคนละชนิด) |
  | `===`        | เท่ากับ (ไม่แปลงชนิดข้อมูลให้)                                  |
  | `!==`        | ไม่เท่ากับ (ไม่แปลงชนิดข้อมูลให้)                               |

  ตัวอย่างเช่น
  เวลาใช้ `==` แล้วฝั่งนึงเป็น string และอีกฝั่งเป็น number
  ฝั่งที่เป็น string จะถูกแปลงเป็น number ก่อน

  <JsConsole input='"42" == 42' :output="{value: true}" />

  แต่ถ้าใช้ `===`
  จะถือว่าข้อมูลทั้งสองฝั่งไม่เท่ากัน ถ้าหากเป็นข้อมูลชนิดต่างกัน

  <JsConsole input='"42" === 42' :output="{value: false}" />

## หน้าที่ของ Boolean

- เราใช้ข้อมูลชนิด Boolean เพื่อให้คอมพิวเตอร์เลือกว่าจะทำอะไรต่อไป

  ![](https://im.dt.in.th/ipfs/bafybeiao6fktd2qhjuoki7p6hffmtpzax7qbxqql7q7is3to5ypdibxjbu/image.webp)

  ตัวอย่างเช่น
  ถ้าเราเขียนโปรแกรมเกี่ยวกับร้านค้าออนไลน์
  แล้วต้องการกำหนดโปรโมชั่น เช่น ซื้อ 200 บาท ได้ลด 20 บาท
  ก็อาจจะเขียนเป็นเงื่อนไขแบบนี้

  <div class="ws-rounded-with-shadow" style="padding: 1px 20px">

  ยอดเงินที่ซื้อ ≥ 200 บาท?

  - true &rarr; ลดราคา 20 บาท
  - false &rarr; ไม่ลดราคา

  </div>

  ![](https://im.dt.in.th/ipfs/bafybeibz7i7f43kf542vw7xovnehkvpdzf2to2ioerpm3qie4asxiw5e3m/image.webp)
