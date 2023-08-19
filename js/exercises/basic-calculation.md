---
draft: true
questions:
  - prompt: ซื้อของราคา 20, 15, 18, 30, 25 บาท รวมกันทั้งหมดกี่บาท
    code: 20 + 15 + 18 + 30 + 25
    hints:
      - whenAnswerIs: 20 + 15 + 18 + 30 + 25
        showText: ให้นำโค้ดไปรันใน JavaScript Console ก่อน แล้วค่อยเอาผลลัพธ์ที่ได้มาใส่ในช่องตอบ
    answer: '108'
    type: number
  - prompt: หนึ่งวันมีกี่นาที
    code: 24 * 60
    answer: '1440'
    type: number
  - prompt: สินค้าราคา 120 บาท ลด 25% เหลือกี่บาท
    code: 120 * 0.75
    answer: '90'
    type: number
  - prompt: อาหาร 128 บาท มี + Service Charge 10% และ + VAT 7% (ให้ปัดเศษขึ้นเป็นจำนวนเต็ม)
    code: 128 * 1.1 * 1.07
    answer: '151'
    type: number
  - prompt: 3 + 4 * 0 + 5 = ?
    code: 3 + 4 * 0 + 5
    answer: '8'
    type: number
---

# Exercise

ลองใช้ JavaScript Console คำนวณคำตอบของโจทย์ต่อไปนี้
แล้วนำคำตอบที่ได้ มาใส่ในช่องคำตอบ
เพื่อเช็คว่าถูกต้องหรือไม่

<JsExercise :questions="$frontmatter.questions" />

<script setup>
  import JsExercise from './JsExercise.vue'
</script>
