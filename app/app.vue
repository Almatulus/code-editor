<script setup lang="ts">
import AppFeatures from "./components/AppFeatures.vue";
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
import AppHero from "./components/AppHero.vue";
import AppNewsLetter from "./components/AppNewsLetter.vue";
</script>

<template>
  <div class="dark flex min-h-screen flex-col dark:bg-gray-800">
    <AppHeader />
    <main>
      <AppHero />
      <AppFeatures />
      <AppNewsLetter />
    </main>
    <AppFooter />
  </div>
</template>
