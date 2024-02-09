<script>
import AppHeader from "./components/header/AppHeader.vue";
import AppSearch from "./components/main/AppSearch.vue";
import CardList from "./components/main/CardList.vue";

export default {
  components: {
    AppHeader,
    AppSearch,
    CardList
  },
};
</script>

<template>

  <AppHeader/>
  
  <main>
    <AppSearch/>
    <CardList/>
  </main>
  
</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
