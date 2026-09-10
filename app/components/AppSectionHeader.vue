<script setup lang="ts">
const { type = "page" } = defineProps<{
  title: string;
  description: string;
  type?: "page" | "section";
}>();

const classes = computed(() => [
  "text-center dark:text-white",
  type === "page"
    ? "text-4xl font-black sm:text-5xl"
    : "text-2xl font-bold sm:text-4xl",
]);

const descriptionClasses = computed(() => [
  "text-center sm:text-lg dark:text-gray-300",
  type === "page" ? "mt-2 text-gray-600 sm:mt-3" : "mt-1 text-gay-600 sm:mt-2",
]);
</script>

<template>
  <div class="container max-w-screen-sm">
    <h1 v-if="type === 'page'" :class="classes">{{ title }}</h1>
    <h2 v-else :class="classes">
      {{ title }}
    </h2>
    <p :class="descriptionClasses">
      {{ description }}
    </p>
  </div>
</template>
