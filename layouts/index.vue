<template>
  <div>
    <Header />
    <slot></slot>
    <Footer />
  </div>
</template>

<style lang="scss">
* {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  margin: 0;
  padding: 0;
}

.main-content {
  margin-top: 84px;
  padding: 30px 0;
  position: relative;

  @media screen and (max-width: 768px) {
    padding-top: 119px;
  }
}

.container-large {
  max-width: 1260px;
  margin: auto;
  position: relative;

  @media only screen and(max-width: 1260px) {
    max-width: 1180px;
  }

  @media screen and(max-width: 1180px) {
    max-width: 1024px;
  }

  @media screen and(max-width:1024px) {
    max-width: 960px;
  }

  @media screen and(max-width: 960px) {
    max-width: 768px;
  }

  @media screen and (max-width: 768px) {
    max-width: 576px;
  }

  @media screen and (max-width: 576px) {
    max-width: 100%;
    padding: 0 16px;
  }
}

.container-medium {
  max-width: 970px;
  margin: auto;
  position: relative;
}
</style>
