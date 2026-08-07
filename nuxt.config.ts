import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  nitro: {
    preset: 'github-pages'
  },
  app: {
    baseURL: 'https://Majoralter.github.io/site'
  },
  routeRules: {
    "/about": { ssr: false },
  },

  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxt/image"],
});