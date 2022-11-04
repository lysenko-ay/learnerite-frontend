// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Learnerite',
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content'],
  ssr: false,
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
  },
});
