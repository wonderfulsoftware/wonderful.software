<template>
  <span v-for="segment of segments" :style="segment.style">{{ segment.text }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: any
}>()

const STRING_COLOR = '#6FD1C7'
const UNDEFINED_COLOR = '#81868B'

const segments = computed(() => {
  if (props.value === undefined) {
    return [{ text: 'undefined', style: { color: UNDEFINED_COLOR } }]
  }
  if (props.value === null) {
    return [{ text: 'null', style: { color: UNDEFINED_COLOR } }]
  }
  return [{ text: JSON.stringify(props.value), style: { color: STRING_COLOR } }]
})
</script>