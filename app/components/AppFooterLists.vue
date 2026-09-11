<script setup lang="ts">
const list = [
  {
    title: "Popular Playlists",
    links: [
      {
        label: "Prettier",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
      {
        label: "GitLens",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
      {
        label: "Live Share",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
    ],
  },
  {
    title: "Configurations",
    links: [
      {
        label: "Settings",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
      {
        label: "Keyboard Shortcuts",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
      {
        label: "Code Snippets",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
    ],
  },
  {
    title: "Socials",
    links: [
      {
        label: "YouTube",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
      {
        label: "Telegram",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
      {
        label: "GitHub",
        link: "/playlists/prettier/lessons/getting-started-with-prettier",
      },
    ],
  },
];
</script>

<template>
  <div class="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
    <AppFooterList v-for="item in list" :key="item.title" :list="item" />
  </div>
</template>
