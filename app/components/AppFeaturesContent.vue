<script setup lang="ts">
interface Feature {
  title: string;
  iconName: string;
  text: string;
  link: string;
}

const features: Feature[] = [
  {
    title: "Settings",
    iconName: "settings",
    text: `Personalize your workspace to match your unique coding style and
        preferences effortlessly.`,
    link: "/playlists/prettier/lessons/getting-started-with-prettier",
  },
  {
    title: "Keyboard Shortcuts",
    iconName: "fire",
    text: `Streamline your workflow with essential shortcuts that save you time
          and boost efficiency.`,
    link: "/playlists/prettier/lessons/getting-started-with-prettier",
  },
  {
    title: "Extensions",
    iconName: "puzzle",
    text: `Expand your capabilities with powerful extensions tailored to enhance
          your coding experience.`,
    link: "/playlists/prettier/lessons/getting-started-with-prettier",
  },
];
</script>

<template>
  <div class="container grid gap-4 lg:grid-cols-3 lg:gap-8">
    <AppFeaturesCard
      v-for="card in features"
      :key="card.title"
      :feature="card"
    ></AppFeaturesCard>
  </div>
</template>
