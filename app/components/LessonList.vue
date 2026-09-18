<script setup lang="ts">
const playlistStore = usePlaylistsStore();
const lessonsStore = useLessonsStore();

const route = useRoute();

const playlistSlug = playlistStore.getPlaylistBySlug(
  String(route.params.playlistSlug),
);

if (!playlistSlug) {
  throw404("PlaylistSlug не существует");
}

const lessons = computed(() =>
  lessonsStore
    .getLessonsByPlaylist(playlistSlug.lessonIds)
    .map((lesson, index) => {
      return { ...lesson, number: index + 1 };
    }),
);
</script>

<template>
  <ul class="flex flex-col gap-y-1">
    <LessonListItem
      v-for="lesson in lessons"
      :key="lesson.id"
      :lesson="lesson as NumberedLesson"
    />
  </ul>
</template>
