<script>
import AppHeader from "./components/header/AppHeader.vue";
import AppSearch from "./components/main/AppSearch.vue";
import CardsList from "./components/main/cards/CardsList.vue";

import { store } from './store'
import axios from 'axios'

export default {
  components: {
    AppHeader,
    AppSearch,
    CardsList
  },
  data(){
    return{
      store
    }
  },
  methods: {
    getCards(){

      store.loading = true

      axios
      .get( store.apiUrl )
      .then( res => {
        console.log ( res.data )
        store.cardsList = res.data.data

        store.loading = false

      })
    }
  },
  mounted() {
    this.getCards()
  }
};
</script>

<template>

  <AppHeader/>
  
  <main class="container text-center ">
    <div v-if="(store.loading)" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <AppSearch/>
    <CardsList/>
  </main>

</template>

<style lang="scss">
@use "./styles/general.scss";
</style>
