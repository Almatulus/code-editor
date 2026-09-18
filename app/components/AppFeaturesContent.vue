<script setup lang="ts">
const { playlists } = usePlaylistsStore();
const { getLessonById } = useLessonsStore();

const features = ["settings", "fire", "puzzle"].map((icon, index) => {
  let lesson;
  const playlist = playlists[index];

  if (playlist && playlist.lessonIds[0]) {
    lesson = getLessonById(playlist.lessonIds[0]);
  } else {
    throw "Playlist не найден";
  }

  return {
    title: playlist.title,
    description: playlist.description,
    link: getPlaylistLink(playlist, lesson),
    icon,
  };
});
</script>

<template>
  <div class="container grid gap-4 lg:grid-cols-3 lg:gap-8">
    <AppFeaturesCard
      v-for="card in features"
      :key="card.title"
      :feature="card"
    ></AppFeaturesCard>
  </div>
</template>
