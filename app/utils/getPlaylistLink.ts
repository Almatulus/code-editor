import type { Lesson } from "~/stores/lessons";

export function getPlaylistLink(playlist: Playlist, lesson?: Lesson) {
  if (!lesson) {
    throw createError({ statusCode: 404, message: "Lesson не был найден" });
  }

  return `/playlist/${getSlug(playlist.title)}/lessons/${getSlug(lesson.title)}`;
}
