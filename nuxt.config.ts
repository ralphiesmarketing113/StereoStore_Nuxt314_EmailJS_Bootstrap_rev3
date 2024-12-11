// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/',
    head: {
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: 'stylesheet', href: 'https://awesome-lib.css' }
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }', type: 'text/css' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        // { children: 'JavaScript is required' }
      ]
    }
  },

  alias: {
    // 'images': fileURLToPath(new URL('./assets/images', import.meta.url)),
    // 'style': fileURLToPath(new URL('./assets/style', import.meta.url)),
  },

  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      }
    }
  },

  modules: ['nuxt-gtag'],
  gtag: {
    enabled: process.env.NODE_ENV === 'production',
    id: 'G-XXXXXXXXXX'
  },
})