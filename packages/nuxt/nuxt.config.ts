// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    public: {
      NEXT_URL: process.env.APP_ENV === 'production' ? 'https://next-dot-nuxt-to-next.an.r.appspot.com/' : 'http://localhost:3002/'
    }
  }
})
