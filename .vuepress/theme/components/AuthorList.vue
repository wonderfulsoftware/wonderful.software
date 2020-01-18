<template>
  <div :class="{ 'is-secondary': secondary }">
    <div :key="$page.path" v-if="effectiveAuthors">
      เขียนโดย:
      <span v-for="(name, index) of effectiveAuthors">
        <a :href="'https://github.com/' + name">{{nameOf(name)}}</a>{{index === effectiveAuthors.length - 1 ? '' : ', '}}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['authors', 'secondary'],
  methods: {
    nameOf(authorKey) {
      const author = this.$site.themeConfig.authors[authorKey]
      return author ? author.name : authorKey
    },
  },
  computed: {
    effectiveAuthors() {
      return this.authors || this.$page.frontmatter.authors
    },
  },
}
</script>

<style scoped>
.is-secondary div {
  color: #888583;
}
.is-secondary a {
  color: inherit;
}
</style>
