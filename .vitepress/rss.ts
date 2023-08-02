import fs from 'fs'
import RSS from 'rss'
import indexData from '../index.data'

export async function generateRss() {
  const feed = new RSS({
    title: 'wonderful.software',
    description: 'a website about software engineering',
    feed_url: 'https://wonderful.software/rss.xml',
    site_url: 'https://wonderful.software',
  })
  const data = await indexData.load()
  for (const page of data) {
    const url = 'https://wonderful.software' + page.url
    const options = {
      title: page.title,
      description: `<a href="${url}">[Read]</a>`,
      url: url,
      date: new Date(page.date),
    }
    feed.item(options)
  }
  fs.writeFileSync('.vitepress/dist/rss.xml', feed.xml({ indent: true }))
}
