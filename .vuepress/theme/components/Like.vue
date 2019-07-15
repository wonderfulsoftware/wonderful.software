<template>
  <div class="wondersoft-fb-like-container" ref="container"></div>
</template>

<script>
import { initializeFacebook } from '../util'

export default {
  props: {
    path: String,
    title: String,
  },
  async mounted() {
    const FB = await initializeFacebook()
    this.$refs.container.innerHTML = `<div
      class="fb-like"
      data-href="https://wonderful.software${this.path}"
      data-layout="standard"
      data-action="like"
      data-show-faces="true"
      data-share="true"
    ></div>`
    FB.XFBML.parse()
  },
}
</script>

<style lang="stylus">
.wondersoft-fb-like-container {
  position: relative;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  box-sizing: border-box;
  padding-left: 64px;
}
</style>
