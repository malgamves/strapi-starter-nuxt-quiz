export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'StrapiConf Quizz',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Welcome to the official StrapiConf Quizz App' },
      { hid: 'og:image', property: 'og:image', content: 'https://strapiconf-api-prod.strapi.io/uploads/small_Strapi_Conf_Break_Ad_8194b66a3a.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: "StrapiConf Quizz"
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: "Welcome to the official StrapiConf Quizz App"
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: "https://strapiconf-api-prod.strapi.io/uploads/small_Strapi_Conf_Break_Ad_8194b66a3a.png"
      },
      {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: "StrapiConf Quizz"
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: "StrapiConf Quizz"
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: "Welcome to the official StrapiConf Quizz App"
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: "https://strapiconf-api-prod.strapi.io/uploads/small_Strapi_Conf_Break_Ad_8194b66a3a.png"
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: "https://strapiconf-api-prod.strapi.io/uploads/small_Strapi_Conf_Break_Ad_8194b66a3a.png"
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: "StrapiConf Quizz"
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/fonts/poppins.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
  ],

  apollo: {
    clientConfigs: {
      default: {
        httpEndpoint: process.env.API_URL || 'http://localhost:1337/graphql',
      }
    }
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  router: {
    base: '/quizz/'
  }
}
