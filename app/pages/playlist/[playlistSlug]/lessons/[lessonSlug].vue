<script setup lang="ts">
const route = useRoute();
const lessonSlug = route.params.lessonSlug;

const lessonStore = useLessonsStore();

const lesson = lessonStore.getLessonBySlug(String(lessonSlug));
if (!lesson) {
  throw404("Playlist не найден");
}
</script>

<template>
  <div class="flex flex-col gap-y-6 md:gap-y-8 lg:col-span-2">
    <PlaylistLessonVideo :title="lesson.title" />
    <PlaylistLessonContent :title="lesson.title" :text="lesson.description" />
  </div>
</template>
