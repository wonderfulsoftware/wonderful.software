---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
  import simpleQuiz from './mini-projects/simple-quiz.html?raw'
</script>

# มินิโปรเจค: ควิซอย่างง่าย

- ในโปรเจคนี้ เราจะสร้างโปรแกรมควิซแบบง่ายๆ

  มีคำถาม 1 ข้อ
  และมีตัวเลือก 4 ตัวเลือก
  เมื่อกดปุ่มที่ตรงกับคำตอบที่ถูกต้อง จะแสดงข้อความว่า “ถูกต้อง”
  แต่ถ้ากดปุ่มอื่นๆ จะแสดงข้อความว่า “ยังไม่ถูก” และมีปุ่มให้กดเพื่อลองตอบใหม่

  <HtmlOutput :html="simpleQuiz" :height="256" />

- ในโปรเจคนี้

  - เราจะนำความรู้เรื่อง Boolean และการแสดง/ซ่อน element มาใช้
  - และจะรู้จักกับ element ใหม่อีกชนิด คือ `<div>`