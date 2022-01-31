<script setup lang="ts">
import AnimeService from "@/services/anime.service";
const animeService = new AnimeService();
const route = useRoute();

const { data: animeData } = await useAsyncData("anime", () =>
  animeService.getDetailAnime(Number(route.params.id))
);

// const { data: animesData } = await useAsyncData("anime", animeService.getAnime);
</script>

<template>
  <NuxtLayout name="main">
    <main class="main-content">
      <div class="container-large">
        <h2 class="title">{{ animeData.title }}</h2>
        <div class="wrapper">
          <div class="left-side">
            <div class="banner">
              <img
                :src="animeData.images.webp.large_image_url"
                :alt="animeData.title"
                class="banner-image"
              />
              <iframe
                class="youtube-iframe"
                :src="animeData.trailer.embed_url"
              ></iframe>
            </div>
            <p class="item-synopsis">
              <span>Synopsis</span> <br />
              {{ animeData.synopsis ?? "No sypnosis" }}
            </p>
          </div>
          <div class="right-side">
            <p class="item-title">
              <span>Japanese</span> : {{ animeData?.title_japanese ?? "-" }}
            </p>
            <p class="item-title">
              <span>Episodes</span> : {{ animeData?.episodes ?? "-" }}
            </p>
            <p class="item-title">
              <span>Rating</span> : {{ animeData?.rating ?? "No rating's" }}
            </p>
            <p class="item-title">
              <span>Studio</span> : {{ animeData.studios[0]?.name ?? "-" }}
            </p>
            <p class="item-title">
              <span>Producer</span> : {{ animeData.producers[0]?.name ?? "-" }}
            </p>
            <p class="item-title">
              <span>Licensi</span> : {{ animeData.licensors[0]?.name ?? "-" }}
            </p>
          </div>
        </div>
      </div>
    </main>
  </NuxtLayout>
</template>
<style lang="scss" scoped>
.title {
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

.wrapper {
  display: flex;
  justify-content: space-between;
  padding-bottom: 130px;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.left-side {
  width: 68.5%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}

.banner {
  display: flex;

  @media screen and (max-width: 1024px) {
    flex-wrap: wrap;
    justify-content: center;
  }

  @media screen and (max-width: 768px) {
    flex-wrap: nowrap;
  }
}

.item-synopsis {
  color: #212121;
  text-align: justify;

  span {
    display: block;
    font-size: 22px;
    font-weight: 800;
    margin-top: 10px;
  }
}

.banner-image {
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

.youtube-iframe {
  align-self: flex-start;
  height: 450px;
  width: 65%;

  @media screen and (max-width: 768px) {
    height: 250px;
    width: 100%;
  }
}

.right-side {
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

.item-title {
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
</style>
