<script setup>
import { RouterLink } from "vue-router";
defineProps(["posts", "author"]);
</script>

<template>
  <div>
    <h1>{{ author.name }}</h1>
    <p>{{ posts.length }} posts written.</p>
    <p v-for="post in posts" :key="post.id">
      <RouterLink :to="`/post/${post.id}`">{{ post.title }}</RouterLink>
    </p>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
