import { defineStore } from "pinia";
import { usePostStore } from "./posts";

export const useAuthorStore = defineStore("author", {
  state: () => ({
    authors: [],
  }),
  getters: {
    getPostAuthor: (state) => {
      const postStore = usePostStore();
      return state.authors.find(
        (author) => author.id === postStore.post.userId
      );
    },
  },
  actions: {
    async fetchAuthors() {
      this.authors = [];
      this.authors = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      ).then((response) => response.json());
    },
  },
});
