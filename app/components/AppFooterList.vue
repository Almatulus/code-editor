<script setup lang="ts">
interface Item {
  label: string;
  link: string;
}

defineProps<{
  list: {
    label: string;
    links: Item[];
  };
}>();
</script>

<template>
  <div class="flex flex-col gap-y-3 sm:gap-y-4">
    <AppFooterListHeading>{{ list.label }} </AppFooterListHeading>
    <ul class="flex flex-col gap-y-1 sm:gap-y-2">
      <AppFooterListItem
        v-for="item in list.links"
        :key="item.link"
        :link="item.link"
        >{{ item.label }}</AppFooterListItem
      >
    </ul>
  </div>
</template>
