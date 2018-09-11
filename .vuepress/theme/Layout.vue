<template>
  <div class="wondersoft">
    <DefaultThemeLayout>
      <template slot="page-bottom">
        <Utterances :path="$page.path" :title="$page.title" />
      </template>
      <template slot="sidebar-top">
        <div class="wondersoft-sidebar-contents">
          <div class="wondersoft-sidebar-contents-smiley">
            hello!<br />:)
          </div>
        </div>
      </template>
    </DefaultThemeLayout>
  </div>
</template>

<script>
import Vue from 'vue'
import DefaultThemeLayout from '../../node_modules/vuepress/lib/default-theme/Layout.vue'
import Utterances from './Utterances.vue'
import './fonts/cschatthaiui.css'

export default {
  components: { DefaultThemeLayout, Utterances }
}
</script>

<style lang="stylus">
.wondersoft-sidebar-contents {
  position: absolute;
  top: 3.6rem;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  .wondersoft-sidebar-contents-smiley {
    opacity: 0.5;
    font-size: 5em;
  }
}
</style>
