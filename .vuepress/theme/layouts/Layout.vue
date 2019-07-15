<template>
  <div class="wondersoft">
    <DefaultThemeLayout>
      <template slot="page-bottom">
        <div :key="$page.path">
          <Like :path="$page.path" :title="$page.title"/>
          <Utterances
            :path="$page.path"
            :title="$page.title"
            :issueTerm="$page.path + ' comments'"
          />
        </div>
      </template>
      <template slot="sidebar-bottom">
        <div class="wondersoft-sidebar-contents">
          <div class="wondersoft-sidebar-contents-smiley">
            hello!
            <br>:)
          </div>
        </div>
      </template>
    </DefaultThemeLayout>
  </div>
</template>

<script>
import Vue from 'vue'
import DefaultThemeLayout from '@parent-theme/layouts/Layout.vue'
import Utterances from '@theme/components/Utterances.vue'
import Like from '@theme/components/Like.vue'
import '../fonts/cschatthaiui.css'

export default {
  components: { DefaultThemeLayout, Utterances, Like },
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

.sidebar-links ~ .wondersoft-sidebar-contents {
  display: none;
}
</style>
