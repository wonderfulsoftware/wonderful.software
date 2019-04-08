<template>
  <div>
    <div :key="$page.path" v-if="$page.frontmatter.authors">
      เขียนโดย:
      <span v-for="(name, index) of $page.frontmatter.authors">
        <a :href="'https://github.com/' + name">{{nameOf(name)}}</a>{{index === $page.frontmatter.authors.length - 1 ? '' : ', '}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    nameOf(authorKey) {
      const author = this.$site.themeConfig.authors[authorKey]
      return author ? author.name : authorKey
    }
  }
}
</script>
