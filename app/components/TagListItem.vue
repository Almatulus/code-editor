<script setup lang="ts">
const props = defineProps<{
  selected: boolean;
}>();

defineEmits(["click"]);

const classes = computed(() => [
  "w-full rounded-md px-3 py-2 text-left text-sm  sm:rounded-lg dark:text-gray-300 transition-colors cursor-pointer",
  props.selected
    ? "bg-indigo-600 text-white hover:bg-indigo-700"
    : "text-gray-300 hover:bg-gray-700",
]);
</script>

<template>
  <li>
    <button :class="classes" @click="$emit('click')">
      <slot></slot>
    </button>
  </li>
</template>
