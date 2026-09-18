<script setup lang="ts">
const route = useRoute();
const lessonSlug = route.params.lessonSlug;

const lessonStore = useLessonsStore();

const lesson = computed(() => lessonStore.getLessonBySlug(String(lessonSlug)));
</script>

<template>
  <div class="flex flex-col gap-y-6 md:gap-y-8 lg:col-span-2">
    <PlaylistLessonVideo />
    <PlaylistLessonContent :title="lesson?.title" :text="lesson?.description" />
  </div>
</template>
