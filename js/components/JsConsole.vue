<template>
  <div class="language-js-console root">
    <pre class="pre"><code class="code-line" v-if="props.input"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 1L6 5L2 9" stroke="#919191" stroke-width="1.5"/>
</svg><span class="code-text"><InputCode :code="props.input" /></span></code><code class="code-line" v-if="props.output"><svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L2 5L6 1" stroke="#919191" stroke-width="1.5"/>
<circle cx="8" cy="5" r="1" fill="#919191"/>
</svg><span><OutputValue :value="props.output?.value" /></span></code><code class="code-line is-error" v-if="props.error"><svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11C8.53757 11 11 8.53757 11 5.5C11 2.46243 8.53757 0 5.5 0C2.46243 0 0 2.46243 0 5.5C0 8.53757 2.46243 11 5.5 11ZM7.46967 8.53033L5.5 6.56066L3.53033 8.53033L2.46967 7.46967L4.43934 5.5L2.46967 3.53033L3.53033 2.46967L5.5 4.43934L7.46967 2.46967L8.53033 3.53033L6.56066 5.5L8.53033 7.46967L7.46967 8.53033Z" fill="#D37067"/>
</svg><span>{{ props.error }}</span></code></pre>
  </div>
</template>

<script setup lang="ts">
import InputCode from './InputCode.vue';
import OutputValue from './OutputValue.vue';

const props = defineProps<{
  input?: string
  error?: string
  output?: { value: any }
}>()
</script>

<style scoped>
.pre {
  display: flex;
  flex-direction: column;
  gap: 0.5em;
}

.root {
  background: #202124 !important;
}

.root .code-line {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

code>span {
  flex: 1
}

code>svg {
  flex: none;
}

.code-line.is-error {
  color: #D37067;
  background: #240201;
  border: 1px solid #530B06;
  border-left-width: 0;
  border-right-width: 0;
}
</style>