<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

defineProps<{
  id: string;
  error?: string | null;
}>();
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <AppLabel v-if="$slots.default" :for="id"><slot></slot></AppLabel>
    <AppInput :id="id" v-bind="$attrs" />
    <p
      class="mt-2 rounded-lg bg-red-100 p-3 text-red-500 dark:bg-red-900/20 dark:text-red-400"
      v-if="error"
    >
      {{ error }}
    </p>
  </div>
</template>
