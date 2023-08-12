<template>
  <div style="background: var(--vp-c-bg-alt); border-radius: 0.5em; padding: 0.01em 1em;">
    <p>{{ props.question.prompt }}</p>
    <p>
      ตอบ:
      <input type="text" class="answer-box" :class="answerClasses" v-model="text" /> 
      <span
        v-show="correct"
        style="color: var(--vp-c-green); font-size: 1.3em; line-height: 1;"
      >
        <iconify-icon icon="mdi:check" inline></iconify-icon>
      </span>
      <span
        v-show="incorrect"
        style="color: var(--vp-c-red); font-size: 1.3em; line-height: 1;"
      >
        <iconify-icon icon="mdi:close" inline></iconify-icon>
      </span>
    </p>
    <p class="hint">
      <button class="hint-btn" :class="hintVisible ? 'is-shown' : ''" @click="showHint">{{ hintVisible ? 'ซ่อนโค้ด' : 'ดูโค้ด' }}</button>
      <span v-show="hintVisible">
        {{' '}}&rarr;{{' '}}
        <code>{{ props.question.code }}</code>
      </span>
    </p>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const text = ref('')
const hintVisible = ref(false)

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
    value = value.replace(/[,_]/g, '')
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

const showHint = () => {
  hintVisible.value = !hintVisible.value
}
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

.hint {
  font-size: 0.8em;
  color: #0009;
}
.hint-btn {
  font: inherit;
  line-height: 1.2;
  background: var(--vp-c-bg-alt);
  border: 1px solid rgba(0, 0, 0, 0.25);
  color: inherit;
  padding: 0.2em 0.5em;
  border-radius: 4px;
  cursor: pointer;
}
.hint code {
  line-height: normal;
  background: var(--vp-c-bg-alt);
  border: 1px solid rgba(0, 0, 0, 0.25);
  user-select: none;
}
</style>