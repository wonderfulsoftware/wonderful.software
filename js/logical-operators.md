---
draft: true
---

<script setup>
  import BooleanValue from './components/BooleanValue.vue'
  import HtmlOutput from './components/HtmlOutput.vue'
</script>

# ตัวดำเนินการทางตรรกศาสตร์

- ในตอนนี้เราจะได้รู้จักกับตัวดำเนินการ `!` `&&` และ `||` ครับ

- **Logical NOT** (`!`) 3
  (เปลี่ยนจาก `true` เป็น `false` หรือจาก `false` เป็น `true`)

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

- เริ่มจากโค้ดตั้งต้นอันนี้:

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

- สิ่งที่ต้องการคือ
  ต้องการให้ปุ่ม Sign Up นั้น สามารถกดได้ ก็ต่อเมื่อ checkbox ทั้งสองอันถูกติ๊กไว้เท่านั้น

  <HtmlOutput src="/js/examples/logical-operators.html" :height="256" />

- ในโค้ดตั้งต้นนี้
  จะมีโค้ด HTML บางส่วนที่เรายังไม่เคยเจอครับ

  - อย่างแรกคือ `<input type="checkbox">`
    เป็น input ชนิดนึง ที่ผู้ใช้งานสามารถเลือกได้ว่าจะติ๊กหรือไม่ติ๊ก

  - อย่างที่สองคือ element `<label for="id">`
    หน้าที่ของมันคือทำให้ผู้ใช้งาน สามารถคลิกที่ข้อความข้างใน แทนการคลิกที่ input ได้

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

## ลองทำด้วยความรู้ตอนนี้ (v1)

```js
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
  if (acceptPrivacyPolicy.checked) {
    if (acceptTerms.checked) {
      signUpButton.disabled = false
    } else {
      signUpButton.disabled = true
    }
  } else {
    signUpButton.disabled = true
  }
}
```

## ใช้ `&&` เพื่อรวมเงื่อนไขเข้าด้วยกัน (v2)

```js
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

```js
acceptTerms.onchange = () => {
  signUpButton.disabled = !(acceptTerms.checked && acceptPrivacyPolicy.checked)
}
acceptPrivacyPolicy.onchange = () => {
  signUpButton.disabled = !(acceptTerms.checked && acceptPrivacyPolicy.checked)
}
```

## ใช้ De Morgan's law เพื่อกลับเงื่อนไข (v4)

```js
acceptTerms.onchange = () => {
  signUpButton.disabled = !acceptTerms.checked || !acceptPrivacyPolicy.checked
}
acceptPrivacyPolicy.onchange = () => {
  signUpButton.disabled = !acceptTerms.checked || !acceptPrivacyPolicy.checked
}
```

## สรุป

| ตัวดำเนินการ      | ความหมาย |
| ----------------- | -------- |
| `!`               | นิเสธ    |
| `&&`              | และ      |
| <code>\|\|</code> | หรือ     |
