<template>
  <DefaultThemePage
    :sidebarItems="sidebarItems"
    @click="onClick"
  ></DefaultThemePage>
</template>

<script>
import DefaultThemePage from '@parent-theme/components/Page.vue'
import { setupInteractiveFootnotes } from '../util/InteractiveFootnotes'

export default {
  props: ['sidebarItems'],
  components: { DefaultThemePage },
  mounted() {
    setupInteractiveFootnotes()
  },
  updated() {
    setupInteractiveFootnotes()
  },
  methods: {
    onClick() {},
  },
}
</script>