---
home: true
heroImage: /resources/logo.svg
pages:
  - path: /programming-and-motivation/
    date: 2021-03-14
  - path: /elect-live/
    date: 2019-03-29
  - path: /answers/2018-09-11-React-setState.html
    date: 2018-09-11
  - path: /answers/2017-11-14-JavaScript-semicolon.html
    date: 2017-11-14
---

<div class="homepage-content">

## Contents

<ul>
  <li v-for="page of childPages">
    <router-link :to="page.path">{{page.title}}</router-link>
    <author-list :secondary="true" :authors="page.frontmatter.authors"></author-list>
  </li>
</ul>

</div>

<script>
export default {
  computed: {
    childPages() {
      return this.$page.frontmatter.pages.map(child => this.$site.pages.find(page => page.path === child.path)).filter(page => page)
    }
  }
}
</script>

<style scoped>
.homepage-content {
  margin: 4em 0;
}
.homepage-content li {
  margin-top: 2em;
}
</style>
