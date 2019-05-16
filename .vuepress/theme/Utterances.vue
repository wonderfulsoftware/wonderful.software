<template>
  <div class="utterances">
    <iframe v-if="inBrowser" class="utterances-frame" :src="src"/>
  </div>
</template>

<style>
.utterances {
  position: relative;
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
}
.utterances-frame {
  position: absolute;
  left: 0;
  right: 0;
  width: 1px;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  border: 0;
}
</style>

<script>
export default {
  props: {
    path: String,
    issueTerm: String,
    title: String,
  },
  data() {
    return { inBrowser: false }
  },
  mounted() {
    this.inBrowser = true
  },
  computed: {
    src() {
      const params = [
        `issue-term=${encodeURIComponent(this.issueTerm)}`,
        'repo=wonderfulsoftware/wonderful.software',
        `pathname=${encodeURIComponent(this.path)}`,
        `origin=${encodeURIComponent(location.origin)}`,
        `url=${encodeURIComponent('https://wonderful.software' + this.path)}`,
        `title=${encodeURIComponent(this.title)}`,
        `description=`,
      ].join('&')
      return `https://utteranc.es/utterances.html?${params}`
    },
  },
}

if (typeof window !== 'undefined') {
  window.addEventListener('message', event => {
    if (event.origin !== 'https://utteranc.es') {
      return
    }
    const data = event.data
    if (data && data.type === 'resize' && data.height) {
      const container = document.querySelector('.utterances-frame')
      if (!container) return
      container.style.height = `${data.height}px`
    }
  })
}
</script>
