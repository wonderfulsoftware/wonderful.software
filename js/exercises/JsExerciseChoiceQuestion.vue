<template>
  <div style="display: flex; flex-direction: column; gap: 4px; margin-bottom: 16px;">
    <div v-for="choice, index of question.choices">
      <button class="choice" :class="{
        'is-selected': selectedChoice === choice,
        'is-correct': revealedChoices.includes(index) && choice.correct,
      }" @click="selectChoice(choice)">
        <div class="radio"></div>
        <div style="flex: 1">{{ choice.answer }}</div>
        <template v-if="revealedChoices.includes(index)">
          <span v-show="choice.correct" style="color: var(--vp-c-green); font-size: 1.3em; line-height: 1;">
            <iconify-icon icon="mdi:check" inline></iconify-icon>
          </span>
          <span v-show="!choice.correct" style="color: var(--vp-c-red); font-size: 1.3em; line-height: 1;">
            <iconify-icon icon="mdi:close" inline></iconify-icon>
          </span>
        </template>
      </button>
    </div>
  </div>
  <p v-if="disabled && question.explanation" style="font-size: 0.8em; color: #0009">{{ question.explanation }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { JsChoiceQuestion } from './JsQuestion';

const selectedChoice = ref<JsChoiceQuestion['choices'][number] | null>(null)
const revealedChoices = ref<number[]>([])
const disabled = ref(false)

function selectChoice(choice) {
  if (disabled.value) return
  selectedChoice.value = choice
  revealedChoices.value.push(props.question.choices.indexOf(choice))
  if (choice.correct) {
    disabled.value = true
  }
}

const props = defineProps<{
  question: JsChoiceQuestion
}>()
</script>

<style scoped>
.choice {
  --choice-border: rgba(0, 0, 0, 0.25);
  --choice-selected-bg: #fff;
  --choice-radio-color: var(--vp-c-red);
  --choice-radio-bg: transparent;
  --choice-radio-border: var(--choice-border);
  border: 1px solid var(--choice-border);
  border-radius: 0.33em;
  width: 100%;
  font: inherit;
  appearance: none;
  text-align: left;
  display: flex;
  padding: 0.5em 0.5em;
  gap: 0.5em;
  align-items: center;
}

.choice.is-selected {
  background: var(--choice-selected-bg);
  --choice-radio-bg: #fff;
}

.choice.is-correct {
  --choice-selected-bg: #efe;
  --choice-border: var(--vp-c-green);
  --choice-radio-color: var(--vp-c-green);
}

.radio {
  flex: none;
  border: 1px solid var(--choice-radio-border);
  width: 24px;
  height: 24px;
  border-radius: 100%;
  position: relative;
  background: var(--choice-radio-bg);
}

.choice.is-selected .radio::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background: var(--choice-radio-color);
}
</style>