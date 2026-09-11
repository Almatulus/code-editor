<script setup lang="ts">
const { getPlaylistBySlug } = usePlaylistsStore();

const playlist = getPlaylistBySlug(useRoute().params.playlistSlug);
</script>

<template>
  <section class="flex flex-col gap-y-8 pt-24 pb-12 sm:py-16 md:gap-y-12">
    <AppSectionHeader
      :title="playlist.title"
      :description="playlist.description"
    />

    <div class="container grid grid-cols-1 gap-y-8 lg:grid-cols-3 lg:gap-x-8">
      <PlaylistLessons />
      <NuxtPage />
    </div>
  </section>
</template>
