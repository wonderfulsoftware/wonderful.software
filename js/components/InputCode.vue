<template>
  <span v-for="segment of segments" :style="segment.style">{{ segment.text }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  code: string
}>()

const STRING_COLOR = '#E3905E'

const segments = computed(() => {
  return [{ text: props.code, style: { color: STRING_COLOR } }]
})
</script>