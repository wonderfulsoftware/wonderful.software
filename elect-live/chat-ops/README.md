---
authors:
  - heytitle
---

# ถ้าปล่อยให้ทุกคนปล่อยเวอร์ชั่นใหม่กันเอง สับสนแน่นอน หา ChatOps มาสัก 1 ตัวดีกว่า ให้ Release manager

<author-list></author-list>

เนื่องจากตัวระบบ ELECT Live มีผู้ร่วมพัฒนาหลายคน และทำงานแข่งกับเวลา
เราจึงได้สร้างตัว [ChatOps][1] ขึ้นมา
เพื่อเพิ่มความสะดวกเวลาจะ​ deploy เวอร์ชั่นใหม่

![](./Untitled-7245129e-0f22-4979-886f-54328a34dcde.png)

ซึ่งการมี ChatOps นี้ทำให้เราสามารถสั่ง deploy ​ระบบ ELECT Live จาก master branch ได้โดยตรงผ่านทาง Slack
แทนที่การรันคำสั่ง `git tag` จาก local repository​
ซึ่งอาจมีความวุ่นวายในกรณีที่ Release Manager นั้นทำงานกำลังพัฒนา features อื่นๆ อยู่ และ local repository ไม่สะอาด

[1]: https://github.com/codeforthailand/elect-live-release-manager
