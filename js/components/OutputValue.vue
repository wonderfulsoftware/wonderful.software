<template>
  <span v-for="segment of segments" :style="segment.style">{{ segment.text }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: any
}>()

const STRING_COLOR = '#6FD1C7'

const segments = computed(() => {
  return [{ text: JSON.stringify(props.value), style: { color: STRING_COLOR } }]
})
</script>