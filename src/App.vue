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

      store.apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
        if (store.selectValue !== "all") {
          store.apiUrl += `?archetype=${store.selectValue}`
        } else {
          store.apiUrl = 'https://db.ygoprodeck.com/api/v7/cardinfo.php'
        }

      axios
      .get( store.apiArchetype )
      .then( res => {
        console.log ( res.data )
        store.cardsArchetype = res.data

        // store.loading = false

      })
      setTimeout(() => {
        axios
          .get(store.apiUrl)
          .then(res => {
            console.log(res.data)
            store.cardsList = res.data.data

            store.loading = false
          })
      }, 2000)
    }
  },
  mounted() {
    this.getCards()
  }
};
</script>

<template>

  <AppHeader/>
  
  <main class="text-center p-5">
    <div v-if="(store.loading)" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <AppSearch @filter="getCards"/>
    <CardsList/>
  </main>

</template>

<style lang="scss">
@use "./styles/general.scss";
@use "./styles/partials/variables" as *;
@use "./styles/partials/mixins" as *;

  main{
    background-color: $yu-color;
  }

</style>
