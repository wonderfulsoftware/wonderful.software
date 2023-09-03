<template>
  <p class="code-template">
    <span class="code-template-segment" v-for="segment of segments" :style="segment.style" :class="segment.class"><span>{{
      segment.text }}</span></span>
  </p>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  template: string
}>()

const segments = computed(() => {
  const parts = props.template.split(/\s+::\s+/g)
  return parts.map(part => {
    let type = 'literal'

    if (part.startsWith('[placeholder]')) {
      type = 'placeholder'
      part = part.slice('[placeholder]'.length).trimStart()
    } else if (part.startsWith('[filled]')) {
      type = 'filled'
      part = part.slice('[filled]'.length).trimStart()
    }

    if (part.startsWith("'") && part.endsWith("'")) {
      part = part.slice(1, -1)
    }
    return {
      text: part,
      style: {},
      class: {
        'is-literal': type === 'literal',
        'is-placeholder': type === 'placeholder',
        'is-filled': type === 'filled',
      }
    }
  })
})
</script>

<style scoped>
.code-template {
  display: flex;
  gap: 2px;
  flex-wrap: wrap;
  border: 2px solid rgba(60, 60, 67, 0.12);
  border-radius: 8px;
  padding: 4px;
}

.code-template-segment {
  padding: 0 0.32em;
  border-radius: 4px;
  display: flex;
  align-items: center;
}

.code-template-segment.is-literal {
  font-family: var(--vp-font-family-mono);
  background: #E296AD80;
  font-weight: bold;
  white-space: pre;
}

.code-template-segment.is-filled {
  font-family: var(--vp-font-family-mono);
  background: rgba(60, 60, 67, 0.12);
  font-weight: bold;
  white-space: pre;
}

.code-template-segment.is-placeholder {
  border: 2px dashed rgba(60, 60, 67, 0.25);
}
</style>