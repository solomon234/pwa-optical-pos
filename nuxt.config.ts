import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  devtools: {
    enabled: true,
  },
  buildModules: ["@nuxtjs/pwa"],
  pwa: {
    manifest: {
      name: 'My app\'s name',
      lang: 'en',
      orientation: 'portrait',
      background_color: '#FFFFFF',
      theme_color: '#F8F8F8',
      icons: [
          {
              src: '/static/sunglasses.svg',
              sizes: '196x196',
              type: 'image/svg+xml',
              purpose: 'any maskable'
          }
      ]
    }
  }
}

export default config