---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
</script>

# มินิโปรเจค: โปรแกรมสุ่มเลข

- ในโปรเจคนี้ เราจะสร้างโปรแกรมสุ่มเลข

  - มีกล่องข้อความและปุ่ม
  - เมื่อกดปุ่ม จะสุ่มเลข 1 ถึง 10 และแสดงผลออกมาในกล่องข้อความ

- ตัวอย่าง:

  <HtmlOutput src="/js/mini-projects/randomizer.html" :height="256" />

- ในโปรเจคนี้

  - เราจะได้รู้จักกับฟังก์ชั่น `Math.random()` และ `Math.floor(…)`

- ฝึกหัดเพิ่มเติม:

  - ทำให้สามารถกำหนดได้ว่าจะสุ่มเลขตั้งแต่เลขอะไรถึงเลขอะไร
