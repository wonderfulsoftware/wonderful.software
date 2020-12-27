// @ts-check
const jwt = require('jsonwebtoken')

module.exports = (pluginOptions, context) => {
  const { base, iss, key, css } = pluginOptions
  const privateKey = key ? Buffer.from(key, 'base64').toString() : null

  return ({
    name: 'personal-puppeteer-og-image',
    extendPageData: $page => {
      /**
       * @param {string} property
       */
      const hasMetaProperty = property => {
        return ($page.frontmatter.meta || []).find(m => m.property === property)
      }
      /**
       * @param {string} name
       */
      const hasMetaName = name => {
        return ($page.frontmatter.meta || []).find(m => m.name === name)
      }
      /**
       * @param {{ [attribute: string]: string }} tag
       */
      const addMetaTag = tag => {
        if (!$page.frontmatter.meta) {
          $page.frontmatter.meta = []
        }
        $page.frontmatter.meta.push(tag)
      }
      if (!hasMetaProperty('og:image') && privateKey) {
        const url = base + $page.path
        const token = jwt.sign(
          { url, width: 680, height: 680, deviceScaleFactor: 2, css },
          privateKey,
          { algorithm: 'RS256', noTimestamp: true, issuer: iss }
        )
        const screenshotUrl = `https://capture.the.spacet.me/${token}.png`
        addMetaTag({
          property: 'og:image',
          content: screenshotUrl,
        })
      }
      if (!hasMetaName('twitter:title')) {
        addMetaTag({
          name: 'twitter:title',
          content: $page.title,
        })
      }
    },
  })
}
