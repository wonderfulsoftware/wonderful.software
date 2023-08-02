<template>
  <div :class="{ 'is-secondary': secondary, 'is-primary': !secondary }">
    <div v-if="effectiveAuthors">
      เขียนโดย:
      <span v-for="(name, index) of effectiveAuthors">
        <a :href="'https://github.com/' + name">{{nameOf(name)}}</a>{{index === effectiveAuthors.length - 1 ? '' : ', '}}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useData } from 'vitepress'
import { authors } from '../authors'

const { frontmatter } = useData()

const props = defineProps({
  authors: {
    type: Array,
  },
  secondary: {
    type: Boolean,
    default: false,
  },
})

const nameOf = (authorKey) => {
  const author = authors[authorKey]
  return author ? author.name : authorKey
}

const effectiveAuthors = computed(() => {
  return props.authors || frontmatter.value.authors
})
</script>

<style scoped>
.is-primary {
  margin: 16px 0;
}
.is-secondary div {
  color: #888583;
}
.is-secondary a {
  color: inherit;
}
</style>
