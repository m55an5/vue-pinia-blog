<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { usePostStore } from "../stores/posts";
import { useAuthorStore } from "../stores/authors";
import Author from "../components/AuthorSingle.vue";

const route = useRoute();
const { authors } = storeToRefs(useAuthorStore());
const { getPostsPerAuthor } = storeToRefs(usePostStore());
const { fetchPosts } = usePostStore();

const getAuthorByUserName = computed(() => {
  return authors.value.find(
    (author) => author.username === route.params.username
  );
});

fetchPosts();
</script>

<template>
  <div>
    <author
      :author="getAuthorByUserName"
      :posts="getPostsPerAuthor(getAuthorByUserName.id)"
    >
    </author>
  </div>
</template>
