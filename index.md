---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  image:
    src: /resources/logo.svg
    alt: wonderful.software
  name: "wonderful.software"
  tagline: "a website about software engineering"
---

<div class="homepage-content vp-doc" style="max-width: 1152px; margin: 0 auto 1em">

## Contents

<ul>
  <li v-for="page of childPages">
    <a :href="page.url">{{page.title}}</a>
    <!-- <author-list :secondary="true" :authors="page.frontmatter.authors"></author-list> -->
  </li>
</ul>

</div>

<script setup>
import { computed } from 'vue'
import { data } from './index.data'

const childPages = data
</script>