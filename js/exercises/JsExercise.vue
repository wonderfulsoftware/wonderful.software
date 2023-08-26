<template>
  <div style="display: flex; flex-direction: column; gap: 1em; margin: 1em 0;">
    <template v-for="question of props.questions">
      <JsExerciseQuestion :question="question" />
    </template>
  </div>
</template>

<script setup lang="ts">
import JsExerciseQuestion from './JsExerciseQuestion.vue';
import { JsQuestion } from './JsQuestion';

const props = defineProps<{
  questions: JsQuestion[]
}>()
</script>
