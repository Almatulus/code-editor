<script setup lang="ts">
defineProps<{
  list: {
    title: string;
    links: string[];
  };
}>();
</script>

<template>
  <div class="flex flex-col gap-y-3 sm:gap-y-4">
    <AppFooterListHeading>{{ list.title }} </AppFooterListHeading>
    <ul class="flex flex-col gap-y-1 sm:gap-y-2">
      <AppFooterLinksItem v-for="link in list.links" :key="link">{{
        link
      }}</AppFooterLinksItem>
    </ul>
  </div>
</template>
