<template>
  <div class="slides">
    <div class="slide" v-for="(text, key) in data" :key="key">
      <div class="image">
        <div class="image-container">
          <img :src="$withBase(`${base}/${key}`)" />
        </div>
      </div>
      <div class="text">{{text.trim()}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Slides',
  props: ['data', 'base'],
}
</script>

<style lang="stylus" scoped>
.slides {
  margin-top: 20px;
}

.slide {
  display: flex;

  &:not(:first-child) {
    margin-top: 20px;
  }
}

.text {
  white-space: pre-line;
}

.image {
  width: 320px;
  padding-right: 20px;
  flex: none;
}

.image-container {
  position: relative;
  padding-top: 56.25%;
  background: #f5f4f3;

  img {
    position: absolute;
    top: 0;
    left: 0;
  }
}
</style>
