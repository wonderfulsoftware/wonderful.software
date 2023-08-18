<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue';
import FeedbackForm from './FeedbackForm.vue'

const { Layout } = DefaultTheme
const { page } = useData()

const frontmatter = computed(() => {
  return page.value?.frontmatter ?? {}
})
const feedback = computed(() => {
  if (frontmatter.value.draft) {
    return frontmatter.value.feedback !== false
  }
  return !!frontmatter.value.feedback
})

</script>

<template>
  <Layout>
    <template #doc-before>
      <template v-if="page.frontmatter.draft">
        <div class="draft-alert">
          <strong>This page is a draft.</strong> It may be incomplete or contain inaccuracies.
          <span v-if="feedback">
            {{ ' ' }}
            If you have any comment, please feel free to <a href="#feedback-form" style="font-weight: 500">leave some
              feedback</a>!
          </span>
        </div>
      </template>
    </template>
    <template #doc-footer-before>
      <template v-if="feedback">
        <div class="feedback-form" id="feedback-form" :key="page.relativePath">
          <FeedbackForm />
        </div>
      </template>
    </template>
  </Layout>
</template>

<style scoped>
.draft-alert {
  background-color: #fffbe6;
  border: 1px solid #ffe58f;
  color: #54492f;
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 16px;
}
</style>