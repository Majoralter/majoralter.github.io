// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: "github-pages",
  },

  app: {
    pageTransition: { name: "page", mode: "out-in" },
    baseURL: "/majoralter.github.io/",

    head: {
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/tailwindcss",
    "@vueuse/nuxt",
    "nuxt-og-image",
  ],

  image: {
    quality: 80,
    format: ["webp"],
  },

  content: {
    build: {
      markdown: {
        highlight: {
          theme: "rose-pine",
        },
      },
    },
  },
});
