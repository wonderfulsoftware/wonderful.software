---
meta:
  - name: description
    content: เบื้องหลังการพัฒนาเว็บ ELECT Live! ตั้งแต่การออกแบบ เซ็ตอัพโปรเจค แบ่งงาน การสร้างคอมมูนิตี้โอเพนซอร์ส การทำ CI/CD เทคนิคการเขียนโค้ด และบทเรียนต่างๆ
  - property: og:image
    content: /share-images/elect-live-v1.png
---

# บันทึกการพัฒนาเว็บ ELECT Live!

เว็บไซต์ [ELECT Live!](https://elect.thematter.co/)
เป็นเว็บไซต์ที่ให้ผู้ใช้ติดตามผลการนับคะแนนเลือกตั้งได้แบบเรียลไทม์
เราตั้งใจทำให้เป็นอีกหนึ่งแพลตฟอร์ม ที่หวังจะอำนวยความสะดวกให้คนไทยมีอีกหนึ่งช่องทางในการรับข้อมูลข่าวสารเกี่ยวกับการเลือกตั้ง

![](./elect-live-screenshot.png)

เว็บไซต์นี้เกิดขึ้นจากทีม Developer และ Designer หลายคน จากที่ต่างๆ อาสามาร่วมกันพัฒนาโดยไม่มีค่าตอบแทนใดๆ
ใช้เวลาพัฒนาเพียง 8 วันก่อนการเลือกตั้ง (ซึ่งเป็นเวลาส่วนตัวของอาสาสมัคร ไม่ใช่งานแบบ Full-time)

เราพัฒนาเว็บนี้กันแบบโอเพนซอร์ส
โดยมีการวางระบบการทำงาน เพื่อให้ทุกคนสามารถเข้ามาร่วมพัฒนาได้ ถึงแม้ไม่ได้อยู่ในทีมงานหลัก
จน[มีอาสาสมัครมาร่วมพัฒนาเว็บเรากว่า 20 คน](https://elect.thematter.co/about#contributors)
และสามารถ[ปิด issue ได้กว่า 100 issue](https://github.com/codeforthailand/election-live/issues?q=is%3Aissue+sort%3Aupdated-desc+is%3Aclosed) ภายในเวลา 8 วัน
โดยสามารถเข้าไปดูโค้ดได้ที่โปรเจค [codeforthailand/election-live](https://github.com/codeforthailand/election-live) บน GitHub

ในวันที่ 24 มีนาคม 2562
เว็บ ELECT Live! สามารถรองรับผู้ใช้ 100,000 คนที่เข้ามาใช้ในเวลาพร้อมกัน
รวมผู้ใช้กว่า 1.5 ล้านคนในวันนั้น

มีหลายเรื่องที่เราอยากจะเล่าเกี่ยวกับการพัฒนาเว็บนี้
บันทึกนี้จึงแบ่งเป็นหลายๆ หัวข้อย่อย

---

<section v-for="(item, index) of sidebarItems" :key="index" v-if="item.type === 'group'">
  <h2>{{ item.title }}</h2>
  <ul>
    <li v-for="page of item.children" :key="page.key">
      <span style="display: flex; align-items: flex-start;">
        <span style="display: block; flex: 1">
          <router-link :to="page.path">{{ page.title }}</router-link>
        </span>
        <span style="display: block; margin-left: auto">
          <span v-for="(author, index) of page.frontmatter.authors" class="article-author">
            <a :href="'https://github.com/' + author">
              <img :src="'https://github.com/' + author + '.png'" :alt="author" />
            </a>
          </span>
        </span>
      </span>
    </li>
  </ul>
</section>

<style scoped>
.article-author {
  display: inline-block;
  margin-left: 0.25em;
  margin-top: 0.25em;
}
.article-author a {
  display: block;
  overflow: hidden;
  width: 1.5em;
  height: 1.5em;
  border-radius: 2px;
}
.article-author a img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

<script>
import { resolveSidebarItems } from '../node_modules/vuepress/lib/default-theme/util'

export default {
  mounted() {
    console.log(this.sidebarItems)
  },
  computed: {
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },
  }
}
</script>
