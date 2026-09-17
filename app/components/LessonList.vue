<script setup lang="ts">
const playlistStore = usePlaylistsStore();
const lessonsStore = useLessonsStore();

const lessons = computed(() =>
  lessonsStore
    .getLessonsByPlaylist(
      playlistStore.getPlaylistBySlug(String(useRoute().params.playlistSlug))
        .lessonIds,
    )
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
