---
draft: true
---

<script setup>
  import JsConsole from './components/JsConsole.vue'
</script>

# รู้จักกับอาร์เรย์ (Array)

ในตอนนี้เราจะมารู้จักกับสิ่งที่เรียกว่า **อาร์เรย์** (Array) กันครับ

## ทบทวนจากตอนที่แล้ว

ในตอนที่แล้วที่เราทำโปรเจกต์ Flashcard การที่เรากำหนดข้อมูลคำถามและคำตอบลงไปในโค้ดตรงๆ เราเรียกว่า **การ Hardcode** (Hardcoding) ซึ่งมีข้อเสียคือทำให้แก้ไขโค้ดยาก

🚧

ตัวอย่างเช่น หากต้องการเพิ่มคำถามข้อที่ 11 เราต้องแก้โค้ดถึง 3 จุด:

1.  แก้ไขตัวเลขในฟังก์ชัน `getRandomQuestionNumber`
2.  เพิ่มเงื่อนไขในฟังก์ชัน `getQuestionText`
3.  เพิ่มเงื่อนไขในฟังก์ชัน `getAnswerText`

การที่ต้องแก้ไขหลายจุดแบบนี้ เพิ่มโอกาสที่จะเกิดข้อผิดพลาดได้ง่าย แต่เราสามารถปรับปรุงโค้ดนี้ให้ดีขึ้นได้ด้วยการใช้ Array ครับ

## Array คืออะไร?

Array เป็นโครงสร้างข้อมูลชนิดหนึ่ง ที่ทำให้เราสามารถเก็บข้อมูลหลายๆ ชิ้นไว้ภายใต้ตัวแปรเดียวได้

ในภาษา JavaScript เราสามารถสร้าง Array ได้โดยใช้เครื่องหมาย `[]` (square brackets) และคั่นข้อมูลแต่ละตัวด้วยเครื่องหมายลูกน้ำ (comma)

```js
[1, true, "Hey"]
```

## ลองเล่นกับ Array ใน Console

เรามาลองสร้างและใช้งาน Array ใน JavaScript Console กันดูครับ

-   **การสร้าง Array:**

    <JsConsole input="let a = [123, 456, 789]" />

    เมื่อเราสร้าง Array นี้ขึ้นมา ข้อมูลแต่ละตัวจะถูกเก็บในตำแหน่ง (index) ของมัน โดยตำแหน่งจะเริ่มนับจาก 0

    -   ตำแหน่งที่ 0 คือ `123`
    -   ตำแหน่งที่ 1 คือ `456`
    -   ตำแหน่งที่ 2 คือ `789`

-   **Array เก็บข้อมูลต่างชนิดกันได้:**

    <JsConsole input="let b = [10, true, 'สวัสดี']" />

-   **การเข้าถึงข้อมูลใน Array:**

    เราสามารถดึงข้อมูลจาก Array ได้โดยการระบุตำแหน่ง (index) ที่ต้องการ

    <JsConsole input="a[0]" :output="{ value: 123 }" />
    <JsConsole input="a[1]" :output="{ value: 456 }" />
    <JsConsole input="a[2]" :output="{ value: 789 }" />
    <JsConsole input="a[3]" :output="{ value: undefined }" />

-   **การหาขนาดของ Array:**

    เราสามารถใช้ `.length` เพื่อดูว่ามีข้อมูลกี่ชิ้น (หรือกี่ element) ใน Array

    <JsConsole input="a.length" :output="{ value: 3 }" />

-   **การตรวจสอบชนิดข้อมูล:**

    เมื่อเราใช้ `typeof` กับ Array เราจะได้ผลลัพธ์เป็น `"object"`

    <JsConsole input="typeof a" :output="{ value: 'object' }" />

    :::info
    ใน JavaScript นั้น Array ถือเป็น Object ชนิดหนึ่ง ซึ่งเราจะได้เรียนรู้เรื่อง Object ในบทถัดไปครับ
    :::

-   **การตรวจสอบว่าเป็น Array หรือไม่:**

    เนื่องจาก `typeof` คืนค่าเป็น `"object"` เราจึงต้องใช้วิธีอื่นเพื่อตรวจสอบให้แน่ใจว่าเป็น Array จริงๆ ซึ่งสามารถทำได้โดยใช้ฟังก์ชัน `Array.isArray()`

    <JsConsole input="Array.isArray(a)" :output="{ value: true }" />
    <JsConsole input="Array.isArray(123)" :output="{ value: false }" />
    <JsConsole input="Array.isArray('Hi')" :output="{ value: false }" />

## สรุป

-   เราสร้าง Array ด้วย `[]`
-   Array สามารถเก็บข้อมูลหลายชนิดปนกันได้
-   เราเข้าถึงข้อมูลใน Array ด้วยตำแหน่ง (index) ซึ่งเริ่มจาก 0 เช่น `array[0]`
-   เราหาขนาดของ Array ด้วย `.length`
-   Array เป็น `object` ชนิดหนึ่ง
-   เราสามารถตรวจสอบว่าเป็น Array หรือไม่ด้วย `Array.isArray()`
