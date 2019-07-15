<template>
  <DefaultThemePage :sidebarItems="sidebarItems"></DefaultThemePage>
</template>

<script>
import DefaultThemePage from '@parent-theme/components/Page.vue'

export default {
  props: ['sidebarItems'],
  components: { DefaultThemePage },
}
</script>

<style>
</style>
