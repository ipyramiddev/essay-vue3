module.exports = {
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'renderer', content: 'webkit' },
      { hid: 'keywords', name: 'keywords', content: 'VueBlog, Vuejs, Nodejs, 服务端渲染'},
      { hid: 'description', name: 'description', content: 'VueBlog是一个基于Vuejs开发的小型博客应用，让你可以为所欲为的分享自己的知识和创作'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'alternate', type: 'application/rss+xml', title: 'RSS 2.0', href: '/rss.xml' },
      { rel: 'stylesheet', type: 'text/css', href: '//at.alicdn.com/t/font_620064_hrymm1e94nnlv7vi.css' }
    ]
  },
  css: ['~assets/css/main.scss', 'highlight.js/styles/github.css'],
  loading: { color: '#42B983' },
  build: {
    vendor: ['axios'],
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  manifest: {
    name: 'VueBlog',
    description: 'A blog system',
    theme_color: '#42B983'
  },
  modules: ['@nuxtjs/pwa', '@nuxtjs/axios'],
  plugins: ['~/plugins/components.js', '~/plugins/filters.js']
}
