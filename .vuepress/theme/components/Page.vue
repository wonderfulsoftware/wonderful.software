<template>
  <DefaultThemePage
    :sidebarItems="sidebarItems"
    @click="onClick"
  ></DefaultThemePage>
</template>

<script>
import DefaultThemePage from '@parent-theme/components/Page.vue'
import littlefoot from 'littlefoot'
import 'littlefoot/dist/littlefoot.css'

let latestLf

function setupFootnotes() {
  if (latestLf) {
    latestLf.unmount()
  }
  latestLf = littlefoot({
    buttonTemplate: `<button
  aria-expanded="false"
  aria-label="Footnote <% number %>"
  class="littlefoot__button"
  id="<% reference %>"
  title="See Footnote <% number %>"
/>
  <% number %>
</button>`,
  })
}

window.setupFootnotes = setupFootnotes

export default {
  props: ['sidebarItems'],
  components: { DefaultThemePage },
  mounted() {
    setupFootnotes()
  },
  updated() {
    setupFootnotes()
  },
  methods: {
    onClick() {},
  },
}
</script>

<style>
.wondersoft .littlefoot__button {
  position: relative;
  display: inline-block;
  font: inherit;
  font-size: 80%;
  color: #da3567;
  appearance: none;
  cursor: pointer;
  background: transparent;
  border: 1px solid #da3567;
  padding: 0;
  border-radius: 1.25em;
  width: 1.25em;
  height: 1.25em;
  line-height: 1em;
  margin-left: 0.5ex;
}
.wondersoft .footnotes-sep {
  display: none;
}
.wondersoft .littlefoot-footnote__content {
  word-wrap: break-word;
  display: block;
}
</style>
