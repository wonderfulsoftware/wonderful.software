import { createContentLoader } from 'vitepress'

// - path: /programming-and-motivation/
// date: 2021-03-14
// - path: /elect-live/
// date: 2019-03-29
// - path: /answers/2018-09-11-React-setState.html
// date: 2018-09-11
// - path: /answers/2017-11-14-JavaScript-semicolon.html
// date: 2017-11-14
const pages: IndexItem[] = [
  {
    file: 'programming-and-motivation/index.md',
    date: '2021-03-14',
  },
  {
    file: 'elect-live/index.md',
    date: '2019-03-29',
  },
  {
    file: 'answers/2018-09-11-React-setState.md',
    date: '2018-09-11',
  },
  {
    file: 'answers/2017-11-14-JavaScript-semicolon.md',
    date: '2017-11-14',
  },
]

interface IndexItem {
  file: string
  date: string
}

export default createContentLoader(
  pages.map((p) => p.file),
  {
    transform(rawData) {
      const map = new Map(
        rawData.map((page) => {
          return [page.url, page]
        })
      )
      return pages.flatMap((p) => {
        const url =
          '/' + p.file.replace(/\.md$/, '.html').replace(/\/index\.html$/, '/')
        const pageData = map.get(url)
        if (!pageData)
          return [
            {
              url: '#',
              title: `NOT FOUND - ${url}`,
              authors: [],
            },
          ]
        return [
          {
            url: pageData.url,
            title: pageData.frontmatter.title,
            authors: pageData.frontmatter.authors,
          },
        ]
      })
    },
  }
)
