const TITLE = 'IX Art Park'
const DESCRIPTION = ''

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: TITLE,
      meta: [
        { charset: 'utf-8' },
        { name: 'initial-scale', content: '1.0' },
        { name: 'viewport', content: 'width=device-width' },
        { name: 'description', content: DESCRIPTION },

        // Open Graph Tags
        { property: 'og:title', content: TITLE },
        {
          property: 'og:description',
          content: DESCRIPTION
        },
        {
          property: 'og:image',
          content: '/images/og.jpg'
        },
        { property: 'og:type', content: 'website' },

        // Twitter Card Tags
        { name: 'twitter:card', content: 'content' },
        {
          name: 'twitter:title',
          content: TITLE
        },
        {
          name: 'twitter:description',
          content: DESCRIPTION
        },
        {
          name: 'twitter:image',
          content: '/images/og.jpg'
        }
      ],
      htmlAttrs: {
        lang: 'en-US'
      }
    }
  },

  css: ['@/assets/scss/main.scss'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/base/_vars.scss" as *;'
        }
      }
    }
  }
})
