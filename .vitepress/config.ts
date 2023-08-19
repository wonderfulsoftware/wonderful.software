import { HeadConfig, defineConfig } from 'vitepress'
import twemoji from 'twemoji'
import { jsSidebar } from '../js/jsSidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'wonderful.software',
  description: 'a website about software engineering',
  head: [
    ['link', { rel: 'icon', href: '/resources/favicon.png' }],
    [
      'script',
      {
        src: 'https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js',
        integrity: 'sha256-LGPziMiBHh/kxb4WDqOig3cAG03zDunDiHD/1T85K6o=',
        crossorigin: 'anonymous',
        async: '',
      },
    ],
  ],
  appearance: false,
  srcExclude: ['README.md'],

  // Set to VuePress's dist directory for backward compatibility
  outDir: '.vuepress/dist',

  themeConfig: {
    logo: '/resources/logo.svg',

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: {
      '/elect-live/': [
        {
          text: 'บันทึกการพัฒนาเว็บ ELECT Live!',
          link: '/elect-live/',
          items: [
            {
              text: 'Overview',
              items: [
                {
                  text: 'ภาพรวมทั้งหมดของระบบรายงานผลเลือกตั้ง',
                  link: '/elect-live/overview/',
                },
              ],
            },
            {
              text: 'Setting up the project for success',
              collapsed: false,
              items: [
                {
                  text: 'เห็นภาพเดียวกันถึงแม้ไม่ได้อยู่ที่เดียวกัน ด้วยการ Wireframe และ Visualize กันบน Freehand',
                  link: '/elect-live/freehand/',
                },
                {
                  text: 'อย่าลืมสำรวจผู้ใช้ก่อนเริ่มพัฒนา',
                  link: '/elect-live/user-survey/',
                },
                {
                  text: 'ออกแบบเว็บแบบ Mobile-first ไม่ต้องทำงานซ้ำสอง',
                  link: '/elect-live/mobile-first/',
                },
                {
                  text: 'ทำ MVP ทีละหน้า แทนที่จะแบ่งหน้ากันทำแล้วอาจจะไม่เสร็จสักหน้า',
                  link: '/elect-live/mvp/',
                },
                {
                  text: 'เลือกใช้ Gatsby เพราะจะได้เอาเวลามาพัฒนาเว็บ ไม่ใช่มานั่งเซ็ตอัพ webpack, Babel, React Router, ฯลฯ',
                  link: '/elect-live/gatsby/',
                },
                {
                  text: 'ทำให้ทุกคนเขียนโค้ดเป็นสไตล์เดียวกันโดยอัตโนมัติด้วย Prettier, Husky และ lint-staged',
                  link: '/elect-live/code-style/',
                },
                {
                  text: 'ทดสอบโค้ดของคนอื่นโดยไม่ต้อง Checkout มารันเองด้วย Netlify',
                  link: '/elect-live/netlify/',
                },
                {
                  text: 'แบ่งงานใหญ่ๆ เป็นงานย่อยๆ ด้วย Puzzle-Driven Development',
                  link: '/elect-live/pdd/',
                },
                {
                  text: 'เตรียมโปรเจกต์ให้คนจากภายนอกสามารถมาร่วม Contribute ได้',
                  link: '/elect-live/open-source/',
                },
                {
                  text: 'เตรียมรับ Traffic เยอะๆ ด้วย Static files และกลยุทธ์ caching',
                  link: '/elect-live/static-caching/',
                },
                {
                  text: 'ได้ดีไซน์มาอย่าเพิ่งรีบโค้ดทันที มาตั้งชื่อกันก่อน',
                  link: '/elect-live/component-naming/',
                },
                {
                  text: 'แบ่งคอมโพเนนต์ย่อยๆ ยังไงให้ทำงานไปพร้อมๆ กันได้โดยไม่เสียภาพรวมงาน',
                  link: '/elect-live/componentization/',
                },
              ],
            },
            {
              text: 'Engineering and development',
              collapsed: false,
              items: [
                {
                  text: 'นึกถึง User experience (UX) แล้วอย่าลืมนึกถึง Developer experience (DX) ด้วย',
                  link: '/elect-live/dx/',
                },
                {
                  text: 'ย้อนเวลาได้ด้วยการไม่เขียนทับไฟล์เก่า',
                  link: '/elect-live/immutable/',
                },
                {
                  text: 'สละเวลาเขียน JSDoc สักนิด ไม่ใช่แค่ทำให้คนอื่นอ่านโค้ดเราเข้าใจง่ายขึ้น แต่ช่วยให้เขียนโค้ดได้เร็วขึ้นอีกด้วย',
                  link: '/elect-live/jsdoc/',
                },
              ],
            },
            {
              text: 'Operations and preparing for potential problems',
              collapsed: false,
              items: [
                {
                  text: 'สร้าง Control Panel อย่างด่วนๆ ด้วย Google Sheets',
                  link: '/elect-live/control-sheet/',
                },
                {
                  text: 'คอมโพเนนต์เกิดปัญหาอย่าให้มันพังทั้งหน้า ใส่ ErrorBoundary กันไว้ด้วย',
                  link: '/elect-live/error-boundary/',
                },
                {
                  text: 'ทำไมเราถึงรับ Traffic ทั้งหมดด้วยเครื่องเดียว ไม่ใช้พวก Firebase/S3/Google Cloud Storage หรือพวกระบบเก็บข้อมูลที่มัน Auto-scale ได้',
                  link: '/elect-live/single-server/',
                },
                {
                  text: 'ถ้าปล่อยให้ทุกคนปล่อยเวอร์ชั่นใหม่กันเอง สับสนแน่นอน สร้างบอท ChatOps มาทำหน้าที่ Release manager แทนคนดีกว่า',
                  link: '/elect-live/chat-ops/',
                },
              ],
            },
          ],
        },
      ],
      '/js/': jsSidebar,
    },

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
    search: {
      provider: 'local',
      options: {
        exclude: (path) => path.startsWith('/js/'),
      },
    },
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
      // md.renderer.render = ((original: any) =>
      //   function () {
      //     return twemoji.parse(original.apply(this, arguments))
      //   })(md.renderer.render)
    },
  },
  vite: {
    server: {
      headers: {
        'X-Robots-Tag': 'noindex',
      },
    },
  },

  buildEnd: async (siteConfig) => {
    const { generateRss } = await import('./rss')
    await generateRss()
  },

  transformHead: async ({ page, head, pageData }) => {
    const hasMetaProperty = (property: string) => {
      return head.find(([tag, m]) => tag === 'meta' && m.property === property)
    }
    const hasMetaName = (name: string) => {
      return head.find(([tag, m]) => tag === 'meta' && m.name === name)
    }
    const out: HeadConfig[] = []
    if (!hasMetaProperty('og:image')) {
      const image =
        'https://screenshot.source.in.th/image/_/wonderfulsoftware/' +
        page.replace(/\.md$/, '')
      out.push(['meta', { property: 'og:image', content: image }])
    }
    if (pageData.title && !hasMetaName('twitter:title')) {
      out.push(['meta', { name: 'twitter:title', content: pageData.title }])
    }
    return out
  },
})
