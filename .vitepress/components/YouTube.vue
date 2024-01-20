<template>
  <EmbedContainer :ratio="720 / 405">
    <iframe width="720" height="405" :src="'https://www.youtube.com/embed/' + props.id + '?rel=0'" frameborder="0"
      allowfullscreen />
  </EmbedContainer>
</template>

<script setup lang="ts">
import EmbedContainer from './EmbedContainer.vue'

const props = defineProps<{
  id: string
}>()
</script>