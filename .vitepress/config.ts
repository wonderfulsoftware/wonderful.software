import { defineConfig } from 'vitepress'
import twemoji from 'twemoji'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'wonderful.software',
  description: 'a website about software engineering',
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: {},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },

  markdown: {
    config: (md) => {
      md.use(require('markdown-it-footnote'))
      md.renderer.rules.softbreak = () =>
        '<span class="เว้นวรรคใหญ่">{{ "\\n" }}</span>'
      md.renderer.rules.text = ((original: any) =>
        function () {
          const text = original.apply(this, arguments)
          return text.replace(/ๆ/g, '<span class="ๆ">ๆ</span>')
        })(md.renderer.rules.text)
      md.renderer.render = ((original: any) =>
        function () {
          return twemoji.parse(original.apply(this, arguments))
        })(md.renderer.render)
    },
  },
})
