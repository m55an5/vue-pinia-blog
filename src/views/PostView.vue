<script setup>
import { useRoute } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthorStore } from "../stores/authors";
import { usePostStore } from "../stores/posts";
import PostSingle from "../components/PostSingle.vue";

const route = useRoute();
const { getPostAuthor } = storeToRefs(useAuthorStore());
const { fetchAuthors } = useAuthorStore();
const { post, loading, error } = storeToRefs(usePostStore());
const { fetchPost } = usePostStore();

fetchAuthors();
fetchPost(route.params.id);
</script>

<template>
  <div>
    <p v-if="loading">Loading post....</p>
    <p v-if="error">{{ error.message }}</p>
    <div v-if="post">
      <post-single :post="post" :author="getPostAuthor"> </post-single>
    </div>
  </div>
</template>
