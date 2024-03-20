import { createContentLoader } from 'vitepress'

const pages: IndexItem[] = [
  {
    file: 'how-to-learn-almost-anything/index.md',
    date: '2023-09-12',
  },
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
              date: '',
              title: `NOT FOUND - ${url}`,
              authors: [],
            },
          ]
        return [
          {
            url: pageData.url,
            date: p.date,
            title: pageData.frontmatter.title,
            authors: pageData.frontmatter.authors,
          },
        ]
      })
    },
  }
)
