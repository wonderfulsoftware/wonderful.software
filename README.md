---
home: true
heroImage: /resources/logo.svg
pages:
  - path: /elect-live/
  - path: /answers/2018-09-11-React-setState.html
  - path: /answers/2017-11-14-JavaScript-semicolon.html
---

<div class="homepage-content">

## Contents

<ul>
  <li v-for="page of childPages">
    <router-link :to="page.path">{{page.title}}</router-link>
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
  margin: 3em 0;
}
.homepage-content li {
  margin-top: 1em;
}
</style>
