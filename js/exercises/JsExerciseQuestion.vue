<template>
  <div style="background: var(--vp-c-bg-alt); border-radius: 0.5em; padding: 0.01em 1em;">
    <p>{{ props.question.prompt }}</p>
    <JsExerciseInputQuestion v-if="props.question.type === 'number'" :question="props.question" />
    <JsExerciseInputQuestion v-if="props.question.type === 'string'" :question="props.question" />
    <JsExerciseChoiceQuestion v-if="props.question.type === 'choice'" :question="props.question" />
  </div>
</template>

<script setup lang="ts">
import JsExerciseChoiceQuestion from './JsExerciseChoiceQuestion.vue';
import JsExerciseInputQuestion from './JsExerciseInputQuestion.vue'
import { JsQuestion } from './JsQuestion';

const props = defineProps<{
  question: JsQuestion
}>()
</script>

<style scoped></style>