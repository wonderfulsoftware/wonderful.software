const twemoji = require('twemoji')
module.exports = {
  title: 'wonderful.software',
  description: 'a website about software engineering',
  ga: 'UA-77075731-1',
  port: 3457,
  locales: {
    '/': {
      lang: 'th'
    }
  },
  markdown: {
    config: md => {
      md.use(require('markdown-it-footnote'))
      md.renderer.render = (original =>
        function() {
          return twemoji.parse(original.apply(this, arguments))
        })(md.renderer.render)
    }
  },
  themeConfig: {
    logo: '/resources/logo.svg',
    // sidebar: [
    // ],
    search: false,
    nav: [{ text: 'หน้าแรก', link: '/' }]
  }
}
