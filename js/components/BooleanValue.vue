
<script setup lang="ts">
const props = defineProps<{
  value: boolean
}>()
</script>

<template>
  <code :data-value="JSON.stringify(props.value)">{{ JSON.stringify(props.value) }}</code>
</template>

<style scoped>
code {
  font-weight: bold;
}

code[data-value="true"] {
  background: var(--vp-c-green-soft);
  color: var(--vp-c-green-1);
}

code[data-value="false"] {
  background: var(--vp-c-red-soft);
  color: var(--vp-c-red-1);
}
</style>