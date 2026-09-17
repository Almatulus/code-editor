<script setup lang="ts">
const playlistStore = usePlaylistsStore();
const tagsStore = useTagsStore();

const route = useRoute();
const router = useRouter();

playlistStore.searchQuery = (route.query.search as string)
  ? (route.query.search as string).trim()
  : "";

tagsStore.selectedTagIds = (route.query.tags as string)
  ? (route.query.tags as string).split(",").map(Number)
  : [];

watch(
  () => [playlistStore.searchQuery, tagsStore.selectedTagIds] as const,
  ([searchVal, selectedIds]) => {
    const query: Record<string, string> = {};

    if (searchVal) {
      query.search = searchVal;
    }

    if (selectedIds?.length) {
      query.tags = selectedIds.join(",");
    }

    router.replace({ query });
  },
  { immediate: true },
);
</script>

<template>
  <div class="flex flex-col gap-y-4 md:col-span-1 lg:gap-y-6">
    <AppFormField
      v-model="playlistStore.searchQuery"
      id="search"
      type="search"
      placeholder="Playlist Title"
    />
    <div class="flex flex-col gap-y-2">
      <h3 class="font-semibold sm:text-lg dark:text-white">Tags</h3>
      <TagList />
    </div>
  </div>
</template>
