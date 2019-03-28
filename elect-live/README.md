# บันทึกการพัฒนาเว็บ ELECT Live!

เว็บไซต์ [ELECT Live!](https://elect.thematter.co/) เกิดขึ้นจากทีม Developer และ Designer หลายคนจากที่ต่างๆ อาสามาร่วมกันพัฒนาโดยไม่มีค่าตอบแทนใดๆ
ใช้เวลาเพียง 8 วันก่อนการเลือกตั้ง (ซึ่งเป็นเวลาส่วนตัวของอาสาสมัคร ไม่ใช่งานแบบ Full-time) เพื่อออกแบบอีกหนึ่งแพลตฟอร์ม ที่หวังจะอำนวยความสะดวกให้คนไทยมีอีกหนึ่งช่องทางในการรับข้อมูลข่าวสารเกี่ยวกับการเลือกตั้ง

ในวันที่ 24 มีนาคม 2562
เว็บ ELECT Live! สามารถรองรับผู้ใช้ 100,000 คนที่เข้ามาใช้ในเวลาพร้อมกัน
รวมผู้ใช้กว่า 1.5 ล้านคนในวันนั้น

มีหลายเรื่องที่เราอยากจะเล่าเกี่ยวกับการพัฒนาเว็บนี้
บทความนี้จึงแบ่งเป็นหลายๆ หัวข้อย่อย

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
