<script setup lang="ts">
defineProps<{
  tagList: string[];
}>();
</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <TagListItem v-for="tag in tagList" :key="tag">{{ tag }}</TagListItem>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Development
      </button>
    </li>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Design
      </button>
    </li>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Utility
      </button>
    </li>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Integration
      </button>
    </li>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Testing
      </button>
    </li>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Debugging
      </button>
    </li>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Formatting
      </button>
    </li>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Collaboration
      </button>
    </li>
    <li>
      <button
        class="w-full rounded-md px-3 py-2 text-left text-sm text-gray-600 hover:bg-gray-100 sm:rounded-lg dark:text-gray-300 dark:hover:bg-gray-700"
      >
        Documentation
      </button>
    </li>
  </ul>
</template>
