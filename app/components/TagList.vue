<script setup lang="ts">
const tagsStore = useTagsStore();
</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <TagListItem
      v-for="tag in tagsStore.tags"
      :selected="tagsStore.selectedTagIds.includes(tag.id)"
      :key="tag.id"
      @click="tagsStore.toggleTag(tag.id)"
      >{{ tag.name }}</TagListItem
    >
  </ul>
</template>
