const twemoji = require('twemoji')
module.exports = {
  title: 'wonderful.software',
  description: 'a website about software engineering',
  ga: 'UA-77075731-1',
  port: 3457,
  locales: {
    '/': {
      lang: 'th',
    },
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'))
      md.renderer.rules.softbreak = () =>
        '<span class="เว้นวรรคใหญ่">&#10;</span>'
      md.renderer.rules.text = (original =>
        function() {
          const text = original.apply(this, arguments)
          return text.replace(/ๆ/g, '<span class="ๆ">ๆ</span>')
        })(md.renderer.rules.text)
      md.renderer.render = (original =>
        function() {
          return twemoji.parse(original.apply(this, arguments))
        })(md.renderer.render)
    },
  },
  themeConfig: {
    logo: '/resources/logo.svg',
    // sidebar: [
    // ],
    search: false,
    nav: [{ text: 'หน้าแรก', link: '/' }],
  },
}
