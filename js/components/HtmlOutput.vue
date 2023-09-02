<template>
  <div class="html-output" :style="style">
    <div class="title-bar">
      {{ props.title || 'index.html' }}
    </div>
    <iframe :srcdoc="props.html" style="width: 100%; height: 100%; border: none;"></iframe>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  html: string
  title?: string
  height?: number
}>()

const style = computed(() => ({
  height: props.height ? `${props.height}px` : '320px'
}))
</script>

<style scoped>
.html-output {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.24);
}

.title-bar {
  padding: 4px 8px;
  background: linear-gradient(to bottom, white, var(--vp-c-bg-alt));
  color: var(--vp-c-text-light-2);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.05);
  text-align: center;
  font-size: 14px;
  font-weight: bold;
}

.html-output>iframe {
  background: white;
}
</style>