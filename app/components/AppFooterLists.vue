<script setup lang="ts">
const { playlists } = usePlaylistsStore();
const { getLessonById } = useLessonsStore();

const list = [
  {
    title: "Popular Playlists",
    links: playlists.slice(4, 7).map((playlist) => {
      let lesson;

      if (playlist.lessonIds[0]) {
        lesson = getLessonById(playlist.lessonIds[0]);
      }

      return {
        label: playlist.title,
        link: getPlaylistLink(playlist, lesson),
      };
    }),
  },
  {
    title: "Configurations",
    links: playlists.slice(0, 3).map((playlist) => {
      let lesson;

      if (playlist.lessonIds[0]) {
        lesson = getLessonById(playlist.lessonIds[0]);
      }

      return {
        label: playlist.title,
        link: getPlaylistLink(playlist, lesson),
      };
    }),
  },
  {
    title: "Socials",
    links: [
      {
        label: "YouTube",
        link: "https://www.youtube.com/",
      },
      {
        label: "Telegram",
        link: "https://web.telegram.org",
      },
      {
        label: "GitHub",
        link: "github.com",
      },
    ],
  },
];
</script>

<template>
  <div class="flex flex-col gap-y-8 sm:flex-row sm:gap-x-16">
    <AppFooterList v-for="item in list" :key="item.title" :list="item" />
  </div>
</template>
