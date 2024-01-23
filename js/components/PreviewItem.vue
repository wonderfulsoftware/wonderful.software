<template>
  <div class="preview-item">
    <img :src="props.image" class="ws-rounded-with-shadow" />
    <div class="preview-item-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  image: string
}>()
</script>

<style scoped>
.preview-item {
  display: flex;
  gap: 1.5em;
  margin: 32px 0;
  align-items: flex-start;
}

.preview-item img {
  width: 128px;
  height: 128px;
  background: var(--vp-c-bg-alt);
}

.preview-item-content {
  flex: 1;
  min-width: 0;
  font-size: 16px;
}

.preview-item-content.preview-item-content>>>p {
  line-height: 28px;
}

.preview-item-content.preview-item-content>>>p:first-child {
  margin-top: 0;
}

.preview-item-content.preview-item-content>>>p:last-child {
  margin-bottom: 0;
}
</style>