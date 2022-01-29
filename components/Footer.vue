<template>
  <footer class="footer">
    <div class="container-large">
      <NuxtLink to="/" class="footer__logo">
        <h1>ウィアブー</h1>
        <span>Tv</span>
      </NuxtLink>
      <p class="footer__copyright">
        Copyright &copy 2022 <span>ウィアブーTv</span>
      </p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  background-color: #004269;
  padding: 30px 0;
  text-align: center;
  width: 100%;

  &__logo {
    align-items: center;
    color: #fff;
    display: flex;
    justify-content: center;
    text-decoration: none;
    font-weight: bold;

    span {
      font-size: 18px;
    }
  }

  &__copyright {
    color: #fff;

    span {
      font-weight: bold;
    }
  }
}
</style>
