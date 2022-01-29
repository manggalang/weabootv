<script setup lang="ts">
import { onBeforeRouteUpdate } from "vue-router";
import AnimeService from "@/services/anime.service";

const route = useRoute();
const animeService = new AnimeService();
const { data: animesData } = await useAsyncData(`anime`, () =>
  animeService.searchAnime(route.query.q)
);

onBeforeRouteUpdate(async (to) => {
  animesData.value = await animeService.searchAnime(to.query.q);
});

console.log(route.query.q);
</script>

<template>
  <NuxtLayout name="index">
    <main class="main-content hm">
      <div class="hm-banner">
        <div class="container-large">
          <h2 class="hm-banner__title">
            Search by keyword {{ $route.query.q }}
          </h2>
          <div class="hm-banner__card-wrapper">
            <CardAnime
              v-for="anime in animesData.data"
              :title="anime.title"
              :episodes="anime.episodes"
              :image="anime.images.webp.large_image_url"
              :mal_id="anime.mal_id"
            />
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>

<style lang="scss" scoped>
.hm-banner {
  &__card-wrapper {
    display: flex;
    flex-wrap: wrap;
    margin-top: 30px;

    @media screen and(max-width: 375px) {
      justify-content: center;
    }
  }
}
</style>
