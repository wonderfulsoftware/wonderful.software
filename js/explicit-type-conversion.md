---
draft: true
---

# การแปลงชนิดข้อมูล

<script setup>
  import { reactive, ref } from 'vue'
  import JsConsole from './components/JsConsole.vue'
  import CodeTemplate from './components/CodeTemplate.vue'

  const a = ref('42')
</script>

- ในบทที่แล้ว ตอนที่เราทำ [มินิโปรเจค: โปรแกรมบวกเลข](./adder.md#%E0%B9%82%E0%B8%9B%E0%B8%A3%E0%B9%81%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%9A%E0%B8%A7%E0%B8%81%E0%B9%80%E0%B8%A5%E0%B8%82)
  เราพบว่าเวลาดึงข้อความหรือตัวเลขจากกล่อง `<input>` ออกมา
  จะได้ข้อมูลชนิด string ออกมาเสมอ

  ```html
  <input id="a" value="42" size="8" />
  ```

  <div class="rounded-with-shadow" style="padding: 20px;">
    <input class="n-input-text" id="a" v-model="a" size="8" />
  </div>

  <JsConsole input="a.value" :output="{value: a}" />

  และเราได้เอา string มาคูณด้วย 1 เพื่อแปลงเป็นตัวเลข:

  <JsConsole input="a.value * 1" :output="{value: a * 1}" />

- จึงกลายเป็นโค้ดแบบนี้ในโปรเจค

  ```js{2}
  calculate.onclick = () => {
    let answer = (a.value * 1) + (b.value * 1)
    c.value = answer
  }
  ```

- **แต่คนอื่นที่มาเห็นโค้ดนี้อาจจะงง** และสงสัยว่า
  “ทำไมต้องเอามาคูณด้วย 1 ด้วยล่ะ?”

- เราในฐานะคนที่เขียนโค้ด เรารู้ดีว่า เราเอาสตริงนี้มาคูณด้วย 1 เพื่อแปลง string เป็น number
  แต่คนอื่นที่มาอ่านโค้ดนี้เขาอาจจะไม่รู้
  เพราะโค้ดที่เราเขียน ไม่ได้สื่อความหมายตรงกับเป้าหมายของมัน

  - **เป้าหมาย:** การแปลง string เป็น number
  - **สิ่งที่เขียน:** การคูณด้วย 1

- จริงอยู่ที่ว่าเราสามารถเขียนอธิบายเป้าหมายที่แท้จริงของโค้ดได้ด้วยคอมเม้นต์

  ```js{2}
  calculate.onclick = () => {
    //           ใช้ `* 1` เพื่อแปลงค่าจาก string เป็น number
    let answer = (a.value * 1) + (b.value * 1)
    c.value = answer
  }
  ```

  …แต่มีวิธีไหนไหมที่เราจะสามารถสื่อความหมายว่า
  “เราต้องการแปลงค่านี้เป็น number”
  ให้ชัดเจน และตรงไปตรงมาขึ้น?

## การแปลงชนิดข้อมูล

- ในภาษา JavaScript เราสามารถแปลงค่าต่างๆ เป็นตัวเลข โดยครอบด้วย `Number()`

  <div class="rounded-with-shadow" style="padding: 20px;">
    <input class="n-input-text" id="a" v-model="a" size="8" />
  </div>

  <JsConsole input="Number(a.value)" :output="{value: Number(a)}" />

  :::info แปลงค่าเป็น number
  <CodeTemplate template="Number( :: [placeholder] expression :: )" />
  :::

- และเราสามารถแปลงค่าต่างๆ เป็นสตริง โดยครอบด้วย `String()`

  <JsConsole input="String(1)" :output="{value: '1'}" />

  :::info แปลงค่าเป็น string
  <CodeTemplate template="String( :: [placeholder] expression :: )" />
  :::

- จะเห็นว่าพอเขียนแบบนี้ สามารถสื่อความหมายได้ชัดเจน และตรงไปตรงมายิ่งขึ้น
  คนที่มาอ่านโค้ด เห็นแล้วเข้าใจได้ไม่ต้องเดาความหมายเองเลย

- เราเรียกการแปลงชนิดข้อมูลโดยตรงแบบนี้ว่า [**“explicit type conversion”** หรือ **“typecasting”**](https://developer.mozilla.org/en-US/docs/Glossary/Type_Conversion)

- ส่วนการแปลงชนิดข้อมูลที่เกิดขึ้นโดยอัตโนมัติ เรียกว่า [**“implicit type conversion”** หรือ **“type coercion”**](https://developer.mozilla.org/en-US/docs/Glossary/Type_coercion) เป็นการแปลงชนิดข้อมูลโดยทางอ้อม

  | แปลง x เป็น | แปลงแบบอ้อมๆ<br>(implicit) | แปลงแบบตรงๆ<br>(explicit) |
  | ----------- | -------------------------- | ------------------------- |
  | number      | `x * 1`                    | `Number(x)`               |
  | string      | `x + ""`                   | `String(x)`               |

<style scoped>
  .n-input-text {
    border: 1px solid var(--vp-c-border);
    padding: 0 0.25em;
    border-radius: 4px;
    font: inherit;
    box-shadow: inset 0 1px 3px var(--vp-c-divider);
  }
</style>
