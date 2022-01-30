// @ts-check
const fs = require('fs')
const RSS = require('rss')

module.exports = (pluginOptions, context) => {
  return {
    name: 'rss',
    async generated(pagePaths) {
      const feed = new RSS({
        title: 'wonderful.software',
        description: 'a website about software engineering',
        feed_url: 'https://wonderful.software/rss.xml',
        site_url: 'https://wonderful.software',
      })
      const homePage = context.pages.find(p => p.path === '/')
      for (const { path, date } of homePage.frontmatter.pages) {
        const page = context.pages.find(p => p.path === path)
        if (!page) {
          continue
        }
        const url = 'https://wonderful.software' + page.path
        const options = {
          title: page.title,
          description: `<a href="${url}">[Read]</a>`,
          url: url,
          date: new Date(date),
        }
        feed.item(options)
      }
      fs.writeFileSync(context.outDir + '/rss.xml', feed.xml({ indent: true }))
    },
  }
}
