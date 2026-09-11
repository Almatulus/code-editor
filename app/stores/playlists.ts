import { defineStore } from "pinia";

export interface Playlist {
  id: number;
  title: string;
  description: string;
  tagIds: number[];
}

export const usePlaylistsStore = defineStore("playlists", () => {
  const playlists = ref<Playlist[]>([
    {
      id: 1,
      title: "Prettier",
      description: ` Automatically format your code to ensure consistent style across your
        project.`,
      tagIds: [14, 1, 3],
    },
    {
      id: 2,
      title: "GitLens",
      description: `Supercharge Git within VS Code with commit visualization and blame annotations. `,
      tagIds: [15, 2, 4],
    },
    {
      id: 3,
      title: "Live Share",
      description: ` Real-time collaborative development from the comfort of your favorite editor. `,
      tagIds: [16, 3, 5],
    },
    {
      id: 4,
      title: "ESLint",
      description: ` Find and fix problems in your JavaScript/TypeScript code automatically. `,
      tagIds: [14, 1, 3],
    },
    {
      id: 5,
      title: "Code Runner",
      description: ` Run code snippets in multiple programming languages with a single click. `,
      tagIds: [14, 1, 3],
    },
    {
      id: 6,
      title: "REST Client",
      description: ` Send HTTP requests and view responses directly in Visual Studio Code. `,
      tagIds: [14, 1, 3],
    },
    {
      id: 7,
      title: "REST Client",
      description: ` Send HTTP requests and view responses directly in Visual Studio Code. `,
      tagIds: [14, 1, 3],
    },
    {
      id: 8,
      title: "REST Client",
      description: ` Send HTTP requests and view responses directly in Visual Studio Code. `,
      tagIds: [14, 1, 3],
    },
  ]);

  return { playlists };
});
