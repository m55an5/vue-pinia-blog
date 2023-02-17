<script setup>
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useAuthorStore } from "../stores/authors";

const { authors } = storeToRefs(useAuthorStore());
const { fetchAuthors } = useAuthorStore();

fetchAuthors();
</script>

<template>
  <main>
    <div v-if="authors">
      <p v-for="author in authors" :key="author.id">
        <RouterLink :to="`/author/${author.username}`">
          {{ author.name }}
        </RouterLink>
      </p>
    </div>
  </main>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
