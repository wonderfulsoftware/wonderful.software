---
authors:
  - dtinth
---

# เลือกใช้ Gatsby เพราะจะได้เอาเวลามาพัฒนาเว็บ ไม่ใช่มานั่งเซ็ตอัพ webpack, Babel, React Router, ฯลฯ

<author-list></author-list>

ด้วยว่าเรามีเวลาทำเว็บ ELECT Live! กันแค่ 8 วัน (อย่างกับทำเว็บ Prototype)
แต่เนื่องจากไหนๆ ไม่ได้เลือกตั้งมา 8 ปีแล้ว โปรเจคแบบนี้นานๆ ที ก็เลยอยากจัดเต็ม และทำให้เป็นเว็บแบบ Production-grade ไปเลย

หนึ่งใน Goal ส่วนตัวของผมคือผมอยากทำให้เว็บนี้โหลดเร็วที่สุดในบรรดาเว็บแสดงผลการเลือกตั้ง
ซึ่งจะทำแบบนี้ การมานั่ง Optimize มือ ก็อาจจะไม่ทันเวลาที่ค่อนข้างน้อย

การจะทำเว็บด้วย React ให้โหลดเร็วและพัฒนาสะดวก
ต้องคำนึงถึงหลายๆ ปัจจัย:

- เซ็ตอัพ Build tooling ให้มี Development server เพื่อการพัฒนาและทดสอบอย่างรวดเร็ว
- [Minification](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/javascript-startup-optimization/) ย่อขนาดโค้ดเพื่อให้โค้ดที่ผู้ใช้ต้องโหลดมีขนาดเล็กๆ
- [Caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching) การตั้งชื่อไฟล์ แล้วตั้งค่า HTTP Header เพื่อให้สามารถ cache โค้ดและข้อมูลได้อย่างมีประสิทธิภาพสูงสุด
- [Code splitting](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads) แยกโค้ดของแต่ละส่วนออกเป็นไฟล์ย่อยๆ ตอนที่ผู้ใช้เข้ามา จะได้โหลดแค่โค้ดเท่าที่ต้องใช้ ไม่ต้องรอให้โค้ด JavaScript ทั้งหมดโหลดเสร็จก่อนถึงใช้งานได้
- [Critical CSS inlining](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/page-speed-rules-and-recommendations#inline_render-blocking_css) ยัดโค้ด CSS ที่ถูกใช้ในหน้าเว็บไว้ในไฟล์ .html ไปเลย จะได้ไม่ต้องรอโหลดไฟล์ .css
- [Pre-rendering](https://medium.com/@gajus/pre-rendering-spa-for-seo-and-improved-perceived-page-loading-speed-47075aa16d24) แสดงเนื้อหาสำคัญในหน้าเว็บโดยไม่ต้องรอให้โหลดไฟล์ .js
- [Preloading and prefetching](https://developers.google.com/web/fundamentals/performance/resource-prioritization) บอกเว็บบราวเซอร์ตั้งแต่เริ่มโหลดหน้าเว็บว่าเดี๋ยวจะต้องการใช้ไฟล์อะไรอีกบ้าง

ซึ่งถ้าต้องมาเซ็ตอัพทั้งหมดนี่เอง คงใช้เวลาหลายวัน

สุดท้ายผมเลือกใช้ Gatsby สำหรับโปรเจคนี้ เพราะว่า…

## ลงปุ๊ปใช้ได้เลย

ทันทีที่เซ็ตอัพโปรเจคด้วย Gatsby เราสามารถสั่ง `yarn start` แล้วเริ่มเขียนโค้ดได้เลย
โดยสามารถใช้ ES2018+, JSX, CSS (ทั้งแบบธรรมดาและ CSS modules) ได้ทันทีโดยไม่ต้องตั้งค่าอะไรเพิ่ม
นอกจากนี้ยังมีการตั้งค่าระบบ Hot Reload ทำให้พอกด Save แล้วสามารถดูผลได้ทันทีโดยไม่ต้อง Refresh บราวเซอร์

สำหรับการ Build
สามารถสั่ง `yarn build` เพื่อให้ Gatsby สร้างเป็นไฟล์หน้าเว็บที่พร้อมอัพโหลดขึ้นเซิฟเวอร์
โดย Gatsby จะทำการ Minify โค้ด, Inline critical CSS, ใส่แท็ก Preload/Prefetch ต่างๆ, เอา Hash ของไฟล์มาใส่ในชื่อไฟล์เพื่อเพิ่มประสิทธิภาพการ Caching โดยไม่ต้องตั้งค่าอะไรเพิ่ม

ตัว Gatsby รวม Tools หลายๆ ตัวเข้าด้วยกัน โดยที่เราไม่ต้องยุ่งกับไฟล์ Config ของแต่ละตัว (เช่น `webpack.config.js`, `.babelrc`) เลย

## เพิ่มเพจเพียงสร้างไฟล์ใน `src/pages`

ปกติเวลาทำเว็บด้วย React ถ้าต้องการทำให้เว็บมีหลายๆ หน้า ก็ต้องไปหา Router มาใช้อีก
แต่สำหรับ Gatsby แค่เพิ่มไฟล์ใหม่ในโฟลเดอร์​ `src/pages` ก็จะได้หน้าใหม่มาเลย

นอกจากนี้เรายังสามารถ Generate หน้าเว็บหลายๆ หน้า จากไฟล์ข้อมูลได้อีกด้วย
ทำให้แทบทุกหน้าในเว็บ ELECT Live! มี URL ของมันเอง

## มีคู่มือครบครัน

หนึ่งในจุดแข็งสุดๆ ของ Gatsby คือ Documentation ของมันรวมหลากหลายหัวข้อไว้ และมี [Recipe](https://www.gatsbyjs.org/docs/recipes/) หรือสูตรสำเร็จสำหรับการทำสิ่งต่างๆ ใน Gatsby เช่น

- [การสร้างลิงค์ไปหน้าต่างๆ](https://www.gatsbyjs.org/docs/recipes/#linking-between-pages)
- [การจัดสไตล์หน้าเว็บ](https://www.gatsbyjs.org/docs/recipes/#styling) ไม่ว่าจะใช้[ไฟล์ CSS ธรรมดา](https://www.gatsbyjs.org/docs/creating-global-styles/#how-to-add-global-styles-in-gatsby-with-standard-css-files), [CSS module](https://www.gatsbyjs.org/tutorial/part-two/#css-modules), [Styled Components](https://www.gatsbyjs.org/docs/styled-components/) หรือ [Emotion](https://www.gatsbyjs.org/docs/emotion/)
- [การเตรียมหน้าเว็บสำหรับอัพโหลดขึ้นเซิฟเวอร์](https://www.gatsbyjs.org/docs/recipes/#deploying) ไม่ว่าจะเป็นการ [Optimize เพิ่มเติม](https://www.gatsbyjs.org/docs/performance/), [การตั้งค่า Caching](https://www.gatsbyjs.org/docs/caching/) และ[การอัพโหลดขึ้นเซิฟเวอร์ชนิดต่างๆ](https://www.gatsbyjs.org/docs/deploying-and-hosting/)

## มีปลั๊กอินให้ใช้หลากหลาย

เราสามารถเพิ่มความสามารถให้ Gatsby หลายๆ อย่าง ผ่านการติดตั้งปลั๊กอิน
เมื่อติดตั้งแล้ว ก็สามารถเรียกใช้ โดยการแก้ไฟล์​ `gatsby-config.js` เพียงไฟล์เดียว
โดยตัวปลั๊กอินสามารถตั้งค่าเครื่องมือเบื้องหลัง เช่น webpack, Babel และการทำงานอื่นๆ ของตัว Gatsby โดยที่เราไม่ต้องไปแก้แต่ละส่วนเองเลย

ปลั๊กอินที่เรา[ใช้ในเว็บ ELECT Live!](https://github.com/codeforthailand/election-live/blob/master/gatsby-config.js):

- `gatsby-plugin-emotion` ช่วยให้เราแต่งหน้าเว็บได้ง่ายขึ้น ด้วย Emotion
- `gatsby-plugin-react-helmet` เอาไว้เพิ่มพวก Meta Tag ต่างๆ เพื่อ Optimize SEO
- `gatsby-plugin-web-font-loader` เอาไว้โหลดฟอนต์จาก Google Fonts โดยที่ไม่บล็อกการ Render หน้าเว็บ
- `gatsby-plugin-layout` เอาไว้กำหนด Component สำหรับใช้เป็น Layout เพื่อให้ไม่ถูก Unmount ทุกครั้งที่เปลี่ยนหน้า
- `gatsby-plugin-google-analytics` เอาไว้ใส่โค้ด Google Analytics พร้อมกับ Track Page View ในแต่ละหน้า โดยมีการ Integrate เข้ากับตัว Router ให้เลย
- `gatsby-plugin-facebook-pixel` เอาไว้ใส่โค้ด Facebook Pixel
- `gatsby-plugin-manifest` เอาไว้สร้าง Progressive Web App Manifest File เพื่อให้สามารถ Add เข้า Home Screen ได้
- `gatsby-plugin-htaccess` เอาไว้สร้างไฟล์ .htaccess สำหรับ Apache Web Server เพื่อให้มีการกำหนด Cache-Control header ตรงตามที่คู่มือแนะนำ
- `gatsby-plugin-netlify` เอาไว้สร้างไฟล์ Config สำหรับ Netlify ที่เราใช้เพื่อดูตัวอย่างของเว็บ ก่อนที่จะปล่อยขึ้น Production ให้ทุกคนใช้

สรุปแล้ว การใช้ Gatsby ช่วยประหยัดเวลาในการพัฒนาเว็บไซต์ได้เยอะมากๆ
เพราะเราสามารถเอาเวลาไปโฟกัสกับการพัฒนาตัวเว็บได้ แทนที่จะต้องมาคิดเรื่องการ Set up เครื่องมือต่างๆ และการ Optimize เว็บแบบเบื้องต้น
