<script setup lang="ts">
const playlistStore = usePlaylistsStore();

const route = useRoute();
const router = useRouter();

playlistStore.searchQuery = (route.query.search as string)
  ? (route.query.search as string).trim()
  : "";

watch(
  () => playlistStore.searchQuery,
  (val) => {
    router.replace({ query: val ? { search: val } : {} });
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
