<script setup lang="ts">
const playlists = [
  {
    title: "Prettier",
    text: ` Automatically format your code to ensure consistent style across your
        project.`,
    tags: ["Utility", "Formatting"],
  },
  {
    title: "GitLens",
    text: `Supercharge Git within VS Code with commit visualization and blame annotations. `,
    tags: ["Development", "Collaboration"],
  },
  {
    title: "Live Share",
    text: ` Real-time collaborative development from the comfort of your favorite editor. `,
    tags: [" Development", "Collaboration"],
  },
  {
    title: "ESLint",
    text: ` Find and fix problems in your JavaScript/TypeScript code automatically. `,
    tags: ["Development", "Debugging"],
  },
  {
    title: "Code Runner",
    text: ` Run code snippets in multiple programming languages with a single click. `,
    tags: ["Development", "Utility"],
  },
  {
    title: "REST Client",
    text: ` Send HTTP requests and view responses directly in Visual Studio Code. `,
    tags: ["Development", "Utility"],
  },
  {
    title: "REST Client",
    text: ` Send HTTP requests and view responses directly in Visual Studio Code. `,
    tags: ["Development", "Utility"],
  },
  {
    title: "REST Client",
    text: ` Send HTTP requests and view responses directly in Visual Studio Code. `,
    tags: ["Development", "Utility"],
  },
];
</script>

<template>
  <div
    class="col-span-1 grid gap-2 sm:gap-4 md:col-span-2 lg:grid-cols-2 xl:col-span-3 xl:grid-cols-3"
  >
    <PlaylistGridItem
      v-for="playlist in playlists"
      :key="playlist.title"
      :playlist="playlist"
    />
  </div>
</template>
