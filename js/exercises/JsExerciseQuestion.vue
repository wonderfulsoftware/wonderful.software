<template>
  <div style="background: var(--vp-c-bg-alt); border-radius: 0.5em; padding: 0.01em 1em;">
    <p>{{ props.question.prompt }}</p>
    <p>
      ตอบ:
      <input type="text" class="answer-box" :class="answerClasses" v-model="text" /> <span v-show="correct"
        style="color: var(--vp-c-green)"><iconify-icon icon="mdi:check" inline></iconify-icon>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const text = ref('')

const props = defineProps<{
  question: JsQuestion
}>()

export interface JsQuestion {
  prompt: string
  code: string
  answer: string
  type?: 'number'
}

const answer = computed(() => {
  let value = text.value.trim()
  if (props.question.type === 'number') {
    value = value.replace(/,/g, '')
  }
  return value
})
const correct = computed(() => {
  return answer.value === props.question.answer
})
const incorrect = computed(() => {
  return !!answer.value && answer.value !== props.question.answer
})
const answerClasses = computed(() => {
  return {
    'is-correct': correct.value,
    'is-incorrect': incorrect.value,
  }
})
</script>

<style scoped>
.answer-box {
  font: inherit;
  background: #fff;
  border: 1px solid rgba(0, 0, 0, 0.25);
  padding: 0 0.2em;
  border-radius: 4px;
}

.answer-box.is-correct {
  border-color: var(--vp-c-green);
}

.answer-box.is-incorrect {
  border-color: var(--vp-c-red);
}
</style>