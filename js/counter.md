---
draft: true
---

<script setup>
  import HtmlOutput from './components/HtmlOutput.vue'
  import counter from './mini-projects/counter.html?raw'
</script>

# มินิโปรเจค: โปรแกรมนับเลข

- ให้ลองสร้างโปรแกรมที่มีกล่องข้อความ และปุ่มสองปุ่ม

  - กล่องข้อความ เริ่มต้นที่ตัวเลข 0
  - ปุ่มแรก (+) กดแล้วตัวเลขจะเพิ่มขึ้น 1
  - ปุ่มที่สอง (Reset) กดแล้วรีเซ็ตตัวเลขกลับไปเป็น 0

- ตัวอย่าง:

  <HtmlOutput :html="counter" :height="192" />