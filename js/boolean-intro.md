---
draft: true
---

<script setup>
  import { reactive } from 'vue'
  import JsConsole from './components/JsConsole.vue'
  import BooleanValue from './components/BooleanValue.vue'

const values = reactive({
  str: 'hello',
  num: 42,
  bool: false,
  a: 5,
  b: 3,
})

const tf = (v) => v ? 'จริง' : 'เท็จ'
</script>

<style scoped>
  .n-input-text {
    border: 1px solid var(--vp-c-divider);
    padding: 0 0.25em;
    border-radius: 4px;
    font: inherit;
    box-shadow: inset 0 1px 3px var(--vp-c-divider);
  }
</style>

# รู้จักกับ Boolean

- ในตอนนี้เราจะมาทำความรู้จักกับ Data type ชนิดต่อไป ที่มีชื่อว่า “Boolean” ครับ

  ![](https://im.dt.in.th/ipfs/bafybeiezljefpp4am7koa27iesbecx7wms2cznbswxfgsujguogbnyg3ty/image.webp)

## Boolean คืออะไร

- Boolean คือ Data type ที่มีค่าเพียง 2 ค่า คือ `true` และ `false` เท่านั้น
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

## ตัวดำเนินการเปรียบเทียบ (Comparison operators)

- สมมติเรามีตัวเลข ที่เก็บไว้ในตัวแปร `a` กับ `b`

  | ตัวแปร | ค่า                                                                                  |
  | ------ | ------------------------------------------------------------------------------------ |
  | a      | <input v-model="values.a" type="range" min="-10" max="10"> <code>{{values.a}}</code> |
  | b      | <input v-model="values.b" type="range" min="-10" max="10"> <code>{{values.b}}</code> |

  <JsConsole :input="`let a = ${values.a};\nlet b = ${values.b};`" />

- เราสามารถเอาข้อมูลที่เป็นตัวเลขมาเทียบกันด้วย operator พวกนี้ได้

  | Expression | ผลลัพธ์                                          | ความหมาย                                                                                          |
  | ---------- | ------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
  | `a > b`    | <BooleanValue :value="+values.a > +values.b" />  | a ({{ values.a }}) มากกว่า b ({{ values.b }}) &rarr; {{ tf(+values.a > +values.b) }}              |
  | `a < b`    | <BooleanValue :value="+values.a < +values.b" />  | a ({{ values.a }}) น้อยกว่า b ({{ values.b }}) &rarr; {{ tf(+values.a < +values.b) }}             |
  | `a >= b`   | <BooleanValue :value="+values.a >= +values.b" /> | a ({{ values.a }}) มากกว่าหรือเท่ากับ b ({{ values.b }}) &rarr; {{ tf(+values.a >= +values.b) }}  |
  | `a <= b`   | <BooleanValue :value="+values.a <= +values.b" /> | a ({{ values.a }}) น้อยกว่าหรือเท่ากับ b ({{ values.b }}) &rarr; {{ tf(+values.a <= +values.b) }} |
  | `a == b`   | <BooleanValue :value="+values.a == +values.b" /> | a ({{ values.a }}) เท่ากับ b ({{ values.b }}) &rarr; {{ tf(+values.a == +values.b) }}             |
  | `a != b`   | <BooleanValue :value="+values.a != +values.b" /> | a ({{ values.a }}) ไม่เท่ากับ b ({{ values.b }}) &rarr; {{ tf(+values.a != +values.b) }}          |

- ถ้าทั้งสองฝั่งเป็น string ก็จะเปรียบเทียบตามลำดับของตัวอักษร

  <JsConsole input='"apple" < "banana"' :output="{value: true}" />

  โดยในคอมพิวเตอร์ ตัวอักษรแต่ละตัว มีเลขประจำตัวอยู่

  | ตัวอักษร | เลข Unicode |
  | -------- | ----------: |
  | 1        |          49 |
  | A        |          65 |
  | a        |          97 |
  | ก        |        3585 |

  แปลว่าตัวอักษรพิมพ์ใหญ่ จะถือว่า “น้อยกว่า” ตัวอักษรพิมพ์เล็ก

  <JsConsole input='"apple" < "Banana"' :output="{value: false}" />

  กรณีที่ตัวอักษรตัวแรกเหมือนกัน จะเปรียบเทียบตัวอักษรตัวที่สอง

  <JsConsole input='"apple" < "apricot"' :output="{value: true}" />