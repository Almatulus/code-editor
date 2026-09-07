<script setup lang="ts">
const list = [
  {
    title: "Popular Playlists",
    links: ["Prettier", "GitLens", "Live Share"],
  },
  {
    title: "Configurations",
    links: ["Settings", "Keyboard Shortcuts", "Code Snippets"],
  },
  {
    title: "Socials",
    links: ["YouTube", "Telegram", "GitHub"],
  },
];
</script>

<template>
  <div class="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
    <AppFooterList v-for="item in list" :key="item.title" :list="item" />
  </div>
</template>
