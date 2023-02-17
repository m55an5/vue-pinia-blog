import { defineStore } from "pinia";
import { usePostStore } from "./posts";

export const useCommentStore = defineStore("comment", {
  state: () => ({
    comments: [],
  }),
  getters: {
    getPostComments: (state) => {
      const postStore = usePostStore();
      return state.comments.filter((post) => post.postId === postStore.post.id);
    },
  },
  actions: {
    async fetchComments() {
      this.comments = [];
      this.comments = await fetch(
        "https://jsonplaceholder.typicode.com/comments"
      ).then((response) => response.json());
    },
  },
});
