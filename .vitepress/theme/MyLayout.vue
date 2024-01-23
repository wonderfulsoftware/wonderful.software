<script setup>
import DefaultTheme from 'vitepress/theme'
import { useData } from 'vitepress'
import { computed } from 'vue';
import FeedbackForm from './FeedbackForm.vue'
import Giscus from '@giscus/vue';

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
const discussionTerm = computed(() => {
  let path = page.value?.relativePath
  if (!path) return
  if (frontmatter.value.comments === false) return
  path = path.replace(/\.md$/, '')
  path = path.replace(/\/index$/, '/')
  path = '/' + path
  const term = path + ' comments'
  console.log({ term })
  return term
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
    <template #doc-after>
      <div :key="discussionTerm" style="margin-top: 24px; padding-top: 24px; border-top: 1px solid var(--vp-c-divider);"
        v-if="discussionTerm">
        <Giscus id="comments" repo="wonderfulsoftware/wonderful.software" repo-id="MDEwOlJlcG9zaXRvcnkxNDQ4NDMxNTM="
          category="Comments" category-id="DIC_kwDOCKIhkc4Cco9J" mapping="specific" :term="discussionTerm" strict="1"
          reactions-enabled="0" emit-metadata="0" input-position="top" theme="light" lang="th" />
      </div>
    </template>
  </Layout>
</template>

<style scoped>
.draft-alert {
  background-color: var(--vp-custom-block-warning-bg);
  border: 1px solid var(--vp-custom-block-warning-border);
  color: var(--vp-custom-block-warning-text);
  border-radius: 4px;
  font-size: 14px;
  margin-bottom: 16px;
  padding: 16px;
}
</style>