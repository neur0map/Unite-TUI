// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  css: ["~/assets/css/main.css"],
  modules: [
    "nuxt-icon",
    "nuxt-headlessui",
    "@nuxthq/studio",
    "@nuxt/content",
    "@nuxt/image",
  ],
  headlessui: {
    prefix: "Headless",
  },
  image: {
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
      "2xl": 1536,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  content: {
    experimental: {
      search: true,
    },
    markdown: {
      anchorLinks: false,
    },
    highlight: {
      theme: {
        default: "github-dark-high-contrast",
        dark: "github-dark-high-contrast",
      },
      langs: [
        "js",
        "ts",
        "vue",
        "css",
        "scss",
        "sass",
        "html",
        "bash",
        "md",
        "mdc",
        "json",
        "json5",
        "jsonc",
        "tsx",
      ],
    },
  },
});
