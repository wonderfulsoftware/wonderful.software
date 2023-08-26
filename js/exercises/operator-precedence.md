---
draft: true
questions:
  - prompt: '20 - 5 - 1'
    type: choice
    choices:
      - answer: '14'
        correct: true
      - answer: '16'
  - prompt: '1+2 * 3+4'
    type: choice
    choices:
      - answer: '11'
        correct: true
      - answer: '13'
      - answer: '15'
      - answer: '21'
---

# Exercise

ทักษะนึงที่ควรมีเวลาเขียนโปรแกรม
คือเวลาเห็นโค้ด เราสามารถคาดเดาได้ว่าโค้ดนั้นจะทำอะไร หรือได้ผลลัพธ์อะไรออกมา
ทักษะนี้จะช่วยให้สามารถเขียนโค้ดให้คอมพิวเตอร์ทำงานตามที่เราต้องการได้ง่ายขึ้นครับ

ในแบบฝึกหัดนี้ จะมีโค้ดตัวอย่าง
ให้ลองคาดเดาคำตอบที่จะได้จากการรันโค้ดนั้นครับ

<JsExercise :questions="$frontmatter.questions" />

<script setup>
  import JsExercise from './JsExercise.vue'
</script>
