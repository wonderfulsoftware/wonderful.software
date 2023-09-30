
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
  background: var(--vp-c-green-dimm-2);
  color: var(--vp-c-green-darker);
}

code[data-value="false"] {
  background: var(--vp-c-red-dimm-2);
  color: var(--vp-c-red-darker);
}
</style>