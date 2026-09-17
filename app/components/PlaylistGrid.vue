<script setup lang="ts">
import { usePlaylistsStore, type Playlist } from "~/stores/playlists";

const playlistStore = usePlaylistsStore();
const tagsStore = useTagsStore();

const filteredPlaylists = computed(() =>
  playlistStore.playlists
    .filter((playlist) =>
      playlist.title
        .toLocaleLowerCase()
        .includes(playlistStore.searchQuery.toLocaleLowerCase()),
    )
    .filter((playlist) =>
      tagsStore.selectedTagIds.every((tag) => playlist.tagIds.includes(tag)),
    ),
);
</script>

<template>
  <div
    class="col-span-1 grid gap-2 sm:gap-4 md:col-span-2 lg:grid-cols-2 xl:col-span-3 xl:grid-cols-3"
  >
    <PlaylistGridItem
      v-for="playlist in filteredPlaylists"
      :key="playlist.title"
      :playlist="playlist"
    />
    <p
      v-if="filteredPlaylists.length === 0"
      class="col-span-full text-center text-gray-400"
    >
      No playlists found
    </p>
  </div>
</template>
