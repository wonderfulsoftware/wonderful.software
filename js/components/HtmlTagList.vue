<template>
  <div class="html-tag-list">
    <span v-for="tag of allTags" class="html-tag-list-item" :class="classes(tag)">&lt;{{ tag }}&gt;</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  introduced?: string
  acquired?: string
}>()

const allTags = ["a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "search",
  "section",
  "select",
  "slot",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "template",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr"]

const introduced = computed(() => {
  return new Set((props.introduced || '').split(','))
})
const acquired = computed(() => {
  return new Set((props.acquired || '').split(','))
})

const classes = (tag: string) => {
  return {
    'is-introduced': introduced.value.has(tag),
    'is-acquired': acquired.value.has(tag)
  }
}
</script>

<style scoped>
.html-tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25em;
  font-size: clamp(8px, 3vw, 14px);
  font-family: 'Chinese Quotes', 'Inter var', 'Inter', ui-sans-serif,
    system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Helvetica, Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
}

.html-tag-list-item {
  line-height: 1.2;
  font-weight: 500;
  padding: 0.25em 0.5em;
  border-radius: 4px;
  color: black;
  opacity: 0.32;
  box-shadow: inset 0 0 0 2px var(--html-tag-list-item-color);
  --html-tag-list-item-color: var(--vp-c-brand);
}

.html-tag-list-item.is-introduced {
  opacity: 1;
}

.html-tag-list-item.is-acquired {
  opacity: 1;
  box-shadow: 0 0 5px var(--html-tag-list-item-color);
  background: var(--html-tag-list-item-color);
  color: white;
}
</style>