<template>
  <div class="wondersoft">
    <DefaultThemeLayout>
      <template slot="page-bottom">
        <Utterances :path="$page.path" :title="$page.title" />
      </template>
    </DefaultThemeLayout>
  </div>
</template>

<script>
import Vue from 'vue'
import DefaultThemeLayout from '../../node_modules/vuepress/lib/default-theme/Layout.vue'
import './fonts/cschatthaiui.css'

export default {
  components: { DefaultThemeLayout }
}
</script>
