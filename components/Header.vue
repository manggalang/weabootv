<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
const keyword = ref("");
const router = useRouter();

async function handleSubmit() {
  if (keyword.value !== "") {
    router.push(`/anime-search?q=${keyword.value}`);
  }
}
</script>

<template>
  <header class="header">
    <div class="container-large container">
      <NuxtLink to="/" class="logo">
        <h1>ウィアブー</h1>
        <span>Tv</span>
      </NuxtLink>
      <div class="menu-container">
        <nav class="menu-wrapper">
          <NuxtLink to="/" class="menu-item menu-item--active">Home</NuxtLink>
          <NuxtLink to="/about" class="menu-item">About</NuxtLink>
        </nav>
        <form @submit.prevent="handleSubmit">
          <input
            type="text"
            placeholder="search here..."
            class="menu-search"
            v-model="keyword"
          />
        </form>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  background-color: #fff;
  box-shadow: 1px 2px 15px rgb(0 0 0 / 10%);
  padding: 16px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
}
.container {
  align-items: center;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
}

.logo {
  align-items: center;
  display: flex;
  font-weight: bold;
  text-decoration: none;

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 100%;
  }

  h1 {
    color: #004269;
  }

  span {
    color: #004269;
    font-size: 18px;
  }
}

.menu-container {
  align-items: center;
  display: flex;

  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
}

.menu-wrapper {
  align-items: center;
  display: flex;
}

.menu-item {
  color: #212121;
  transition: 0.3s ease-in-out;
  text-decoration: none;
  margin-right: 36px;

  @media screen and (max-width: 480px) {
    margin-right: 10px;
  }

  &--active {
    color: #004269;
    font-weight: bold;
  }

  &:hover {
    color: #004269;
  }
}
.menu-search {
  border: 1px solid #212121;
  border-radius: 5px;
  outline: none;
  padding: 8px 5px;
  transition: 0.5s ease-in-out;
  width: 250px;

  @media screen and (max-width: 480px) {
    width: 160px;
  }

  &:focus {
    border: 1px solid #004269;
  }
}
</style>
