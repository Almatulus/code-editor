<script setup lang="ts">
interface Item {
  label: string;
  link: string;
}

defineProps<{
  list: {
    title: string;
    links: Item[];
  };
}>();
</script>

<template>
  <div class="flex flex-col gap-y-3 sm:gap-y-4">
    <AppFooterListHeading>{{ list.title }} </AppFooterListHeading>
    <ul class="flex flex-col gap-y-1 sm:gap-y-2">
      <AppFooterListItem
        v-for="item in list.links"
        :key="item.link"
        :link="item.link"
        :target="item.link.startsWith('http') ? '_blank' : undefined"
        >{{ item.label }}</AppFooterListItem
      >
    </ul>
  </div>
</template>
