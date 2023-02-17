<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useCommentStore } from "../stores/comments";
import Comment from "./CommentSingle.vue";

defineProps(["post", "author"]);

const { getPostComments } = storeToRefs(useCommentStore());
const { fetchComments } = useCommentStore();

fetchComments();
</script>

<template>
  <div>
    <div>
      <h2>{{ post.title }}</h2>
      <p v-if="author">
        Written by:
        <RouterLink to="`/author/${author.username}`">
          {{ author.name }} |
          <span>Comments: {{ getPostComments.length }}</span>
        </RouterLink>
      </p>
      <p>{{ post.body }}</p>
    </div>
    <hr />
    <h3>Comments:</h3>
    <comment :comments="getPostComments"></comment>
  </div>
</template>
