// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/tailwindcss'],
  css: ['./assets/app.css'],
  pages: true,
  compatibilityDate: '2025-03-12',
});
