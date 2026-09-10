import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  app: {
    head: {
      title: "Code Editor",
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    [
      "@nuxtjs/google-fonts",
      {
        display: "swap",
        families: {
          "Open Sans": {
            wght: "300..800",
            ital: "300..800",
          },
        },
      },
    ],
    "@nuxt/icon",
  ],

  icon: {
    mode: "svg",
    aliases: {
      code: "heroicons:code-bracket-square-solid",
      settings: "heroicons:cog-6-tooth-16-solid",
      fire: "heroicons:fire-16-solid",
      puzzle: "heroicons:puzzle-piece-solid",
      plane: "heroicons:paper-airplane-solid",
      bars: "heroicons:bars-3-16-solid",
      xMark: "heroicons:x-mark-16-solid",
      codeBracket: "heroicons:code-bracket-16-solid",
      globe: "heroicons:globe-alt-solid",
    },
  },
});
