// https://vitepress.dev/guide/custom-theme
import Theme from 'vitepress/theme'
import './style.css'
import MyLayout from './MyLayout.vue'
import AuthorList from '../components/AuthorList.vue'
import EmbedContainer from '../components/EmbedContainer.vue'
import YouTube from '../components/YouTube.vue'

export default {
  extends: Theme,
  Layout: MyLayout,
  enhanceApp({ app, router, siteData }) {
    app.component('AuthorList', AuthorList)
    app.component('EmbedContainer', EmbedContainer)
    app.component('YouTube', YouTube)
  },
}
