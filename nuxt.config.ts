
import type { NuxtConfig } from '@nuxt/types'

const config: NuxtConfig = {
  extends: '@nuxt/ui-pro',
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/fonts',
    '@vueuse/nuxt'
  ],
  ui: {
    icons: ['heroicons', 'simple-icons'],
    safelistColors: ['primary', 'red', 'orange', 'green']
  },
  colorMode: {
    disableTransition: true
  },
  devtools: {
    enabled: true
  },
  typescript: {
    strict: false
  },
  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  buildModules: ["@nuxtjs/pwa"],
  pwa: {
    manifest: {
      name: 'OpticalPOS',
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