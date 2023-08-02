import { defineConfig } from 'vitepress'
import twemoji from 'twemoji'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'wonderful.software',
  description: 'a website about software engineering',
  head: [['link', { rel: 'icon', href: '/resources/favicon.png' }]],
  appearance: false,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: {},

    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/wonderfulsoftware/wonderful.software',
      },
      {
        icon: {
          svg: '<svg role="img" width="32" height="32" viewBox="0 0 416 416" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: block"><path fill-rule="evenodd" clip-rule="evenodd" d="M53 128.8l-16-8.2a192 192 0 1094.7-88.9l7.1 16.6A174 174 0 1153 128.8z" fill="#B71B44"></path> <path d="M94.7 92.3L82 126.5 62.6 95.7l-36.4-1.4 23.3-28-9.9-35.1 33.9 13.5 30.3-20.3-2.4 36.4L130 83.3l-35.3 9z" fill="#E296AD"></path></svg>',
        },
        link: 'https://webring.wonderful.software/#wonderful.software',
        ariaLabel: 'วงแหวนเว็บ',
      },
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
