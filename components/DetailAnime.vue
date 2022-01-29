<script setup lang="ts">
import AnimeService from "@/services/anime.service";
const animeService = new AnimeService();
const route = useRoute();

const { data: animeData } = await useAsyncData("anime", () =>
  animeService.getDetailAnime(Number(route.params.id))
);
</script>

<template>
  <h2 class="detail-anime__title">{{ animeData.title }}</h2>
  <div class="detail-anime__wrapper">
    <div class="detail-anime__left-side">
      <div class="detail-anime__banner">
        <img
          :src="animeData.images.webp.large_image_url"
          :lt="animeData.title"
          class="detail-anime__banner-image"
        />
        <iframe
          class="detail-anime__iframe"
          :src="animeData.trailer.embed_url"
        ></iframe>
      </div>
      <p class="detail-anime__item-synopsis">
        <span>Synopsis</span> <br />
        {{ animeData.synopsis }}
      </p>
    </div>
    <div class="detail-anime__right-side">
      <p class="detail-anime__item-title">
        <span>Japanese</span> : {{ animeData.title_japanese }}
      </p>
      <p class="detail-anime__item-title">
        <span>Episodes</span> : {{ animeData.episodes }}
      </p>
      <p class="detail-anime__item-title">
        <span>Rating</span> : {{ animeData.rating }}
      </p>
      <p class="detail-anime__item-title">
        <span>Studio</span> : {{ animeData.studios[0].name }}
      </p>
      <p class="detail-anime__item-title">
        <span>Producer</span> : {{ animeData.producers[0].name }}
      </p>
      <p class="detail-anime__item-title">
        <span>Licensi</span> : {{ animeData.licensors[0].name }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detail-anime {
  &__title {
    background-color: #004269;
    border-radius: 8px;
    color: #fff;
    font-size: 24px;
    margin-bottom: 15px;
    padding: 10px 0;
    text-align: center;

    @media screen and (max-width: 480px) {
      font-size: 20px;
    }
  }

  &__wrapper {
    display: flex;
    justify-content: space-between;
    padding-bottom: 130px;

    @media screen and (max-width: 768px) {
      flex-wrap: wrap;
    }
  }

  &__left-side {
    width: 68.5%;

    @media screen and (max-width: 768px) {
      width: 100%;
    }
  }

  &__banner {
    display: flex;

    @media screen and (max-width: 1024px) {
      flex-wrap: wrap;
      justify-content: center;
    }

    @media screen and (max-width: 768px) {
      flex-wrap: nowrap;
    }
  }

  &__item-synopsis {
    color: #212121;
    text-align: justify;

    span {
      display: block;
      font-size: 22px;
      font-weight: 800;
      margin-top: 10px;
    }
  }

  &__banner-image {
    height: 450px;
    object-fit: contain;
    width: auto;

    @media screen and (max-width: 768px) {
      height: 250px;
    }

    @media screen and (max-width: 480px) {
      display: none;
    }
  }

  &__iframe {
    align-self: flex-start;
    height: 450px;
    width: 65%;

    @media screen and (max-width: 768px) {
      height: 250px;
      width: 100%;
    }
  }

  &__right-side {
    align-self: flex-start;
    background-color: #004269;
    width: 30%;
    padding: 10px 0;

    @media screen and (max-width: 768px) {
      margin: 0 auto 15px;
      order: -1;
      width: 80%;
    }

    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }

  &__item-title {
    color: #f3f3f3;
    margin: 0 8px 5px 8px;

    @media screen and (max-width: 480px) {
      font-size: 14px;
    }

    span {
      display: inline-block;
      width: 25%;
    }
  }
}
</style>
