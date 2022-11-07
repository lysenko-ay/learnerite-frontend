// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: 'Learnerite',
  },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  publicRuntimeConfig: {
    API_BASE_URL: process.env.API_BASE_URL,
    API_SOCKET_URL: process.env.API_SOCKET_URL,
  },
});
