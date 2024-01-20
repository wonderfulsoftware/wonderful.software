<template>
  <div class="dtinth-embed-container rounded-with-shadow" :style="style">
    <slot />
  </div>
</template>

<script>
export default {
  props: ['ratio'],
  computed: {
    style() {
      return {
        paddingTop: 100 / this.ratio + '%',
      }
    },
  },
}
</script>

<style scoped>
.dtinth-embed-container {
  display: block;
  background: var(--vp-c-bg-alt);
  position: relative;
  overflow: hidden;
}

.dtinth-embed-container :global(iframe) {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>