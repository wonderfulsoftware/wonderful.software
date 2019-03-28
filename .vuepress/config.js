const twemoji = require('twemoji')
module.exports = {
  title: 'wonderful.software',
  description: 'a website about software engineering',
  ga: 'UA-77075731-1',
  port: 3457,
  head: [['link', { rel: 'icon', href: '/resources/favicon.png' }]],
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
    search: false,
    sidebar: {
      '/elect-live/': [
        '',
        {
          title: 'Setting up the project for success',
          collapsable: false,
          children: [
            'freehand/',
            'user-survey/',
            'mobile-first/',
            // 'mvp/',
            'gatsby/',
            'code-style/',
            // 'netlify/',
            // 'pdd/',
            // 'open-source/',
            // 'deploy-early/',
            // 'static-caching/',
          ],
        },
      ],
    },
    // nav: [{ text: 'หน้าแรก', link: '/' }],
  },
}
