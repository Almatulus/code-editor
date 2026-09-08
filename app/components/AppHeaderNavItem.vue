<script lang="ts" setup>
const {
  linkClasses = "font-semibold hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-200",
  link = "/",
} = defineProps<{ linkClasses?: string; link?: string }>();
</script>

<template>
  <li>
    <NuxtLink :to="link" :class="linkClasses"> <slot></slot></NuxtLink>
  </li>
</template>
