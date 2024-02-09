<script>
export default {
  name: "AppHeader",
};
</script>

<template>
  <header class="d-flex align-items-center gap-3 p-2 px-5">
    <figure>
      <img class="img-fluid" src="../../../src/img/logo.png" alt="">
    </figure>
    <h1 class="fs-2">Yu-Gi-Oh Api</h1>
  </header>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

  figure{
    max-width: 125px;
  }
</style>
