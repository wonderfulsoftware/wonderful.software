const twemoji = require('twemoji')
module.exports = {
  title: 'wonderful.software',
  description: 'a website about software engineering',
  plugins: [
    ['@vuepress/google-analytics', { ga: 'UA-77075731-1' }],
    [
      require('./plugins/personal-puppeteer-og-image'),
      {
        base: 'https://wonderful.software',
        iss: 'wonderful.software',
        key: process.env.PERSONAL_PUPPETEER_PRIVATE_KEY_BASE64,
        css: `.wondersoft .theme-default-content { margin-top: 80px; }`,
      },
    ],
    [require('./plugins/rss')],
  ],
  port: 3457,
  head: [['link', { rel: 'icon', href: '/resources/favicon.png' }]],
  locales: {
    '/': {
      lang: 'th',
    },
  },
  markdown: {
    extendMarkdown: md => {
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
    authors: require('./authors'),
    sidebar: {
      '/elect-live/': [
        '',
        {
          title: 'Overview',
          collapsable: false,
          children: ['overview/'],
        },
        {
          title: 'Setting up the project for success',
          collapsable: false,
          children: [
            'freehand/',
            'user-survey/',
            'mobile-first/',
            'mvp/',
            'gatsby/',
            'code-style/',
            'netlify/',
            'pdd/',
            'open-source/',
            'static-caching/',
            'component-naming/',
            'componentization/',
          ],
        },
        {
          title: 'Engineering and development',
          collapsable: false,
          children: ['dx/', 'immutable/', 'jsdoc/'],
        },
        {
          title: 'Operations and preparing for potential problems',
          collapsable: false,
          children: [
            'control-sheet/',
            'error-boundary/',
            'single-server/',
            'chat-ops/',
          ],
        },
      ],
    },
    // nav: [{ text: 'หน้าแรก', link: '/' }],
  },
}
