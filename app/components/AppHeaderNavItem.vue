<script lang="ts" setup>
const {
  linkClasses = "font-semibold hover:text-indigo-600 dark:text-gray-200 dark:hover:text-indigo-200",
} = defineProps<{ linkClasses?: string }>();
</script>

<template>
  <li>
    <a href="#" :class="linkClasses"> <slot></slot></a>
  </li>
</template>
