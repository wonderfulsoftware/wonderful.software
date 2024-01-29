---
draft: true
---

<script setup>
  import BooleanValue from './components/BooleanValue.vue'
  import HtmlOutput from './components/HtmlOutput.vue'
</script>

# ตัวดำเนินการทางตรรกศาสตร์

- ในตอนนี้เราจะได้รู้จักกับตัวดำเนินการ `!` `&&` และ `||` ครับ

  <!-- prettier-ignore -->
  | ตัวดำเนินการ | ชื่อ | สัญลักษณ์ลอจิกเกต | สัญลักษณ์ทางคณิตศาสตร์ |
  | --- | --- | --- | --- |
  | `!` | Logical NOT | <iconify-icon icon="mdi:gate-not"></iconify-icon> | $\neg$ |
  | `&&` | Logical AND | <iconify-icon icon="mdi:gate-and"></iconify-icon> | $\land$ |
  | <code>\|\|</code> | Logical OR | <iconify-icon icon="mdi:gate-or"></iconify-icon> | $\lor$ |

- **Logical NOT** (`!`)
  (เปลี่ยนจาก <BooleanValue :value="true" /> เป็น <BooleanValue :value="false" />, และจาก <BooleanValue :value="false" /> เป็น <BooleanValue :value="true" />)

  | `x`                             | `!x`                            |
  | ------------------------------- | ------------------------------- |
  | <BooleanValue :value="true" />  | <BooleanValue :value="false" /> |
  | <BooleanValue :value="false" /> | <BooleanValue :value="true" />  |

- **Logical AND** (`&&`) จะมีค่าเป็นจริงก็ต่อเมื่อทั้งด้านซ้ายและด้านขวา มีค่าเป็นจริงทั้งคู่เท่านั้น

  <table>
    <thead>
      <tr>
        <th><code>a</code></th>
        <th><code>b</code></th>
        <th><code>a && b</code></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="a in [true, false]">
        <template v-for="b in [true, false]">
          <tr>
            <td><BooleanValue :value="a" /></td>
            <td><BooleanValue :value="b" /></td>
            <td><BooleanValue :value="a && b" /></td>
          </tr>
        </template>
      </template>
    </tbody>
  </table>

- **Logical OR** (`||`) จะมีค่าเป็นจริงก็ต่อเมื่อ ด้านซ้าย หรือ ด้านขวา มีค่าเป็นจริงอย่างน้อยหนึ่งด้าน

  <table>
    <thead>
      <tr>
        <th><code>a</code></th>
        <th><code>b</code></th>
        <th><code>a || b</code></th>
      </tr>
    </thead>
    <tbody>
      <template v-for="a in [true, false]">
        <template v-for="b in [true, false]">
          <tr>
            <td><BooleanValue :value="a" /></td>
            <td><BooleanValue :value="b" /></td>
            <td><BooleanValue :value="a || b" /></td>
          </tr>
        </template>
      </template>
    </tbody>
  </table>

## ตัวอย่างการนำตัวดำเนินการทางตรรกศาสตร์ไปใช้

- ยกตัวอย่างแบบฟอร์มลงทะเบียน
  ฟอร์มเหล่านี้มักจะมีช่องให้ทำเครื่องหมาย (checkbox) เพื่อยอมรับเงื่อนไขการใช้งาน (Terms and Conditions) และนโยบายความเป็นส่วนตัว (Privacy Policy)
  โดยปุ่มลงทะเบียนจะเปิดใช้งาน ก็ต่อเมื่อทำเครื่องหมายถูกลงในทั้งสองช่องเท่านั้น:

  <HtmlOutput src="/js/examples/logical-operators.html" :height="192" />

  ::: tip ลองเล่นกับตัวอย่างข้างบนดู

  1. ตอนแรก ปุ่ม Sign Up จะไม่สามารถกดได้
  2. ลองทำเครื่องหมายในช่อง Terms and Conditions และ Privacy Policy ดู &rarr; ปุ่ม Sign Up จะเปิดให้ใช้งานได้เมื่อทั้งสองช่องถูกติ๊กเท่านั้น
  3. กดปุ่ม Sign Up ดู &rarr; จะมีข้อความแสดงขึ้นมา
  4. ลองเอาเครื่องหมายออกจากช่องใดช่องหนึ่งดู &rarr; ปุ่ม Sign Up จะไม่สามารถกดได้

  :::

- เริ่มจากโค้ดตั้งต้นนี้:

  ```html
  <p>
    <input id="acceptTerms" type="checkbox" />
    <label for="acceptTerms">I agree to the Terms and Conditions</label>
  </p>
  <p>
    <input id="acceptPrivacyPolicy" type="checkbox" />
    <label for="acceptPrivacyPolicy">I agree to the Privacy Policy</label>
  </p>
  <p>
    <input disabled type="button" id="signUpButton" value="Sign Up" />
  </p>

  <script>
    let acceptTerms = document.getElementById('acceptTerms')
    let acceptPrivacyPolicy = document.getElementById('acceptPrivacyPolicy')
    let signUpButton = document.getElementById('signUpButton')

    acceptTerms.onchange = () => {
      // เดี๋ยวมาเขียน
    }
    acceptPrivacyPolicy.onchange = () => {
      // เดี๋ยวมาเขียน
    }
    signUpButton.onclick = () => {
      alert('Sign up button clicked!')
    }
  </script>
  ```

- ในโค้ดนี้
  จะมีโค้ด HTML บางอย่างที่เราอาจไม่เคยเจอ

  - อย่างแรกคือ `<input type="checkbox">`
    เป็นอินพุตชนิดหนึ่งที่ผู้ใช้งานเลือกทำเครื่องหมายได้ ว่าจะติ๊กหรือไม่ติ๊ก

  - อย่างที่สองคือ `<label for="id">`
    หน้าที่ของมันคือ ทำให้ผู้ใช้งานสามารถคลิกที่ข้อความที่อยู่ข้างใน label
    แทนการคลิกที่อินพุตได้

  - อย่างที่สามคือ attribute `disabled`
    ทำให้ element นั้นไม่สามารถใช้งานได้
    จะเห็นว่าถ้าปุ่มถูก `disabled` อยู่
    เวลาคลิกจะไม่มีอะไรเกิดขึ้นเลย

- ส่วนของ JavaScript จะมีเรื่องที่ควรรู้เพิ่มเติมคือ

  - `ชื่ออินพุต.checked` เอาไว้ตรวจสอบว่า อินพุตนั้นถูกติ๊กหรือไม่

    ::: tip

    ลองสั่ง `acceptTerms.checked` กับ `acceptPrivacyPolicy.checked` ในคอนโซลดูครับ

    :::

  - `ชื่ออินพุต.onchange = () => { /* โค้ด */ }` เอาไว้ใส่โค้ดที่ต้องการให้ทำ เมื่ออินพุตนั้นถูกเปลี่ยนค่า

    ::: tip

    ลองใส่ `console.log` ลงในโค้ด แล้วทดสอบดู จะเห็นว่าเมื่อติ๊กหรือเอาติ๊กออก ก็จะมีข้อความแสดงในคอนโซล

    ```js{2,5}
    acceptTerms.onchange = () => {
      console.log('A')
    }
    acceptPrivacyPolicy.onchange = () => {
      console.log('B')
    }
    ```

    :::

## ลองทำด้วยความรู้ตอนนี้

- เราจะลองใช้ความรู้ที่เราเรียนไปก่อนหน้านี้
  มาทำแบบฟอร์มลงทะเบียนให้เปิดใช้งานปุ่ม Sign Up กัน
  โดยจะยังไม่ใช้ตัวดำเนินการทางตรรกศาสตร์
  สามารถเขียนโค้ดได้แบบนี้:

  ```js{2-10,13-21}
  acceptTerms.onchange = () => {
    if (acceptTerms.checked) {
      if (acceptPrivacyPolicy.checked) {
        signUpButton.disabled = false
      } else {
        signUpButton.disabled = true
      }
    } else {
      signUpButton.disabled = true
    }
  }
  acceptPrivacyPolicy.onchange = () => {
    if (acceptTerms.checked) {
      if (acceptPrivacyPolicy.checked) {
        signUpButton.disabled = false
      } else {
        signUpButton.disabled = true
      }
    } else {
      signUpButton.disabled = true
    }
  }
  ```

  ::: tip หมายเหตุ
  โค้ดข้างใน `acceptTerms.onchange` กับ `acceptPrivacyPolicy.onchange` นั้นเหมือนกัน
  เพราะเมื่อใดก็ตามที่เราติ๊กถูกหรือเอาติ๊กถูกออกจากกล่องอินพุตอันใดอันหนึ่ง
  เราต้องการตรวจสอบสถานะของอินพุตทั้งสองอันเสมอ
  :::

- จะเห็นว่า โค้ดนี้ค่อนข้างยาว
  เดี๋ยวเราจะแก้ให้ดีขึ้นกว่านี้

## ใช้ `&&` เพื่อรวมเงื่อนไขเข้าด้วยกัน

- เราสามารถนำตัวดำเนินการทางตรรกศาสตร์มาใช้
  เพื่อรวมเงื่อนไขทั้งสองเข้าด้วยกัน และทำให้โค้ดสั้นลงได้

  ```js{2-6,9-13}
  acceptTerms.onchange = () => {
    if (acceptTerms.checked && acceptPrivacyPolicy.checked) {
      signUpButton.disabled = false
    } else {
      signUpButton.disabled = true
    }
  }
  acceptPrivacyPolicy.onchange = () => {
    if (acceptTerms.checked && acceptPrivacyPolicy.checked) {
      signUpButton.disabled = false
    } else {
      signUpButton.disabled = true
    }
  }
  ```

## ใช้ `!` เพื่อกลับค่า (v3)

- กรณีที่โค้ดอยู่ในรูปแบบนี้:

  ```js
  if (x) {
    y = true
  } else {
    y = false
  }
  ```

  สามารถเขียนให้สั้นลงได้เป็น:

  ```js
  y = x
  ```

  ::: info ทำไมถึงเขียนให้สั้นลงได้?

  ในกรณีที่ x เป็นข้อมูลชนิด boolean จะเห็นพบว่า:

  - ในกรณีที่ `x` เป็นจริง
    เราสามารถแทนที่ `y = true` ด้วย `y = x` ได้
    เพราะว่า `x` มีค่าเป็น `true` อยู่แล้ว:

    ```js{2}
    if (x) {
      y = true // [!code --]
      y = x // เพราะว่าในบล็อกนี้ x มีค่าเป็น true // [!code ++]
    } else {
      y = false
    }
    ```

  - ในกรณีที่ `x` เป็นเท็จ
    เราสามารถแทนที่ `y = false` ด้วย `y = x` ได้
    เพราะว่า `x` มีค่าเป็น `false` อยู่แล้ว:

    ```js{4}
    if (x) {
      y = x // เพราะว่าในบล็อกนี้ x มีค่าเป็น true
    } else {
      y = false // [!code --]
      y = x // เพราะว่าในบล็อกนี้ x มีค่าเป็น false // [!code ++]
    }
    ```

  - เราจะพบว่า
    ไม่ว่า `x` จะเป็นจริงหรือเท็จ
    สิ่งที่จะเกิดขึ้นตามมา เหมือนกันทั้งสองกรณี
    นั่นก็คือ `y = x`
    เราจึงสามารถเอาเงื่อนไขออกได้เลย

    ```js{1}
    y = x
    ```

  :::

- และด้วยเหตุผลเดียวกัน
  กรณีที่โค้ดอยู่ในรูปแบบนี้:

  ```js
  if (x) {
    y = false
  } else {
    y = true
  }
  ```

  สามารถเขียนให้สั้นลงได้เป็น:

  ```js
  y = !x
  ```

- เนื่องจากโค้ดของโปรแกรมเราอยู่ในรูปแบบหลัง
  เราจึงสามารถย่อโค้ดให้สั้นลงได้อีกแบบนี้:

  ```js{2,5}
  acceptTerms.onchange = () => {
    signUpButton.disabled = !(acceptTerms.checked && acceptPrivacyPolicy.checked)
  }
  acceptPrivacyPolicy.onchange = () => {
    signUpButton.disabled = !(acceptTerms.checked && acceptPrivacyPolicy.checked)
  }
  ```

## ใช้ De Morgan's law เพื่อกลับเงื่อนไข

- [กฏของ De Morgan](https://th.wikipedia.org/wiki/%E0%B8%81%E0%B8%8E%E0%B9%80%E0%B8%94%E0%B8%AD%E0%B8%A1%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B9%81%E0%B8%81%E0%B8%99) เป็นกฎในวิชาตรรกศาสตร์ที่ระบุไว้ว่า[^english-de-morgan]

  $$
  \neg (p \land q) \equiv (\neg p) \lor (\neg q)
  $$

  <p style="text-align: center">และ</p>

  $$
  \neg (p \lor q) \equiv (\neg p) \land (\neg q)
  $$

- เมื่อแปลเป็นภาษา JavaScript หมายความว่า…

  <!-- prettier-ignore -->
  | โค้ดนี้… | …มีความหมายเหมือนกับโค้ดนี้ |
  | --- | --- |
  | `!(p && q)` | <code>!p &#124;&#124; !q</code> |
  | <code>!(p &#124;&#124; q)</code> | `!p && !q` |

- เราสามารถนำกฏของ De Morgan มาใช้กับโค้ดของเราได้แบบนี้:

  ```js{2,5}
  acceptTerms.onchange = () => {
    signUpButton.disabled = !acceptTerms.checked || !acceptPrivacyPolicy.checked
  }
  acceptPrivacyPolicy.onchange = () => {
    signUpButton.disabled = !acceptTerms.checked || !acceptPrivacyPolicy.checked
  }
  ```

[^english-de-morgan]:
    [ในภาษาอังกฤษ](https://en.wikipedia.org/wiki/De_Morgan's_laws)
    กฏนี้ระบุไว้ว่า "The negation of a conjunction is the disjunction of the negations" และ "The negation of a disjunction is the conjunction of the negations"
    โดยที่ conjunction หมายถึง `&&`, disjunction หมายถึง `||`, และ negation หมายถึง `!`

## สรุป

- ในบทนี้เราได้นำตัวดำเนินการทางตรรกศาสตร์ต่างๆ มาใช้งาน
  เพื่อรวมเงื่อนไขหลายๆ เงื่อนไขเข้าด้วยกัน
  เพื่อทำให้โค้ดของเราสั้นลงได้

- แต่จะเห็นว่าตอนนี้
  โค้ดภายใน `acceptTerms.onchange` กับ `acceptPrivacyPolicy.onchange` นั้นเหมือนกันเลย
  เพื่อให้อินพุตทั้งสองอันทำงานเหมือนกัน เราจึงเขียนโค้ดที่ซ้ำซ้อนกันขึ้นมา (duplicate code)
  แต่ในบทต่อไป เราจะเรียนรู้การสร้างฟังก์ชัน เพื่อทำให้โค้ดที่ซ้ำซ้อนนี้หายไปได้

  ```js{1-3,5,8}
  let recheckSignUpButton = () => {
    signUpButton.disabled = !acceptTerms.checked || !acceptPrivacyPolicy.checked
  }
  acceptTerms.onchange = () => {
    recheckSignUpButton()
  }
  acceptPrivacyPolicy.onchange = () => {
    recheckSignUpButton()
  }
  ```
