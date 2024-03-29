<template>
  <span v-for="segment of segments" :style="segment.style">{{ segment.text }}</span>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  value: any
}>()

const STRING_COLOR = '#6FD1C7'
const NUMBER_COLOR = '#9980FF'
const FUNCTION_COLOR = '#fe8d59'
const UNDEFINED_COLOR = '#81868B'
const ELEMENT_COLOR = '#7cacf8'
const ATTRIBUTE_NAME_COLOR = '#a8c7fa'
const ATTRIBUTE_VALUE_COLOR = '#fe8d59'

type Segment = {
  text: string
  style: Record<string, string>
}
type ElementDescription = {
  $tagName: string
  attributes?: Record<string, string>
}
type FunctionDescription = {
  $fn: string
}
type ArrowFunctionDescription = {
  $arrow: string
}

const segments = computed(() => {
  const value = props.value
  if (value === undefined) {
    return [{ text: 'undefined', style: { color: UNDEFINED_COLOR } }]
  }
  if (value === null) {
    return [{ text: 'null', style: { color: UNDEFINED_COLOR } }]
  }
  if (value && typeof value === 'object') {
    if (value.$tagName) {
      return generateElementSegments(value)
    }
    if (value.$fn) {
      return generateFunctionSegments(value)
    }
    if (value.$arrow) {
      return generateArrowFunctionSegments(value)
    }
  }
  return [{ text: JSON.stringify(value), style: { color: typeof value === 'number' || typeof value === 'boolean' ? NUMBER_COLOR : STRING_COLOR } }]
})

const generateElementSegments = (element: ElementDescription) => {
  const segments: Segment[] = []
  segments.push({ text: '<' + element.$tagName, style: { color: ELEMENT_COLOR } })
  if (element.attributes) {
    for (const [key, value] of Object.entries(element.attributes)) {
      segments.push({ text: ' ', style: { color: ELEMENT_COLOR } })
      segments.push({ text: key, style: { color: ATTRIBUTE_NAME_COLOR } })
      segments.push({ text: '="', style: { color: ELEMENT_COLOR } })
      segments.push({ text: value, style: { color: ATTRIBUTE_VALUE_COLOR } })
      segments.push({ text: '"', style: { color: ELEMENT_COLOR } })
    }
  }
  segments.push({ text: '>', style: { color: ELEMENT_COLOR } })
  return segments
}

const generateFunctionSegments = (fn: FunctionDescription) => {
  const segments: Segment[] = []
  segments.push({ text: 'ƒ ', style: { color: FUNCTION_COLOR, 'font-style': 'italic' } })
  segments.push({ text: fn.$fn, style: { 'font-style': 'italic' } })
  return segments
}

const generateArrowFunctionSegments = (fn: ArrowFunctionDescription) => {
  const segments: Segment[] = []
  segments.push({ text: fn.$arrow, style: { 'font-style': 'italic' } })
  return segments
}
</script>