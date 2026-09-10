<script setup lang="ts">
const { secondary = false, lg = false } = defineProps<{
  lg?: boolean;
  secondary?: boolean;
}>();

const classes = computed(() => [
  "cursor-pointer rounded-md font-semibold sm:rounded-lg",

  {
    "bg-indigo-600 text-indigo-50 hover:bg-indigo-700": !secondary,
    "bg-gray-100 text-gray-900 hover:bg-gray-200": secondary,
  },

  {
    "px-4 py-1 text-sm sm:px-6 sm:py-2 sm:text-base": !lg,
    "px-6 py-2 sm:px-8 sm:py-3 sm:text-lg": lg,
  },
]);
</script>

<template>
  <NuxtLink v-if="$attrs.to" :to="$attrs.to" :class="classes">
    <slot></slot>
  </NuxtLink>
  <button v-else :class="classes">
    <slot></slot>
  </button>
</template>
