<script setup lang="ts">
import AnimeService from "@/services/anime.service";
const animeService = new AnimeService();
const { data: animesData } = await useAsyncData("anime", animeService.getAnime);

definePageMeta({
  layout: "index",
});
</script>

<template>
  <main class="main-content">
    <div class="container-large">
      <DetailAnime />
    </div>
  </main>
</template>
