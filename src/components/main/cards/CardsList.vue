<script>
import Card from './Card.vue'
import { store } from '../../../store'
export default {
  name: "CardsList",
  components: {
    Card
  },
  data (){
    return{
      store
    }
  }
};
</script>

<template>
  
  <div class="d-flex flex-wrap p-4 bg-white mt-4">
    <h5 class="text-white bg-black text-start p-2 mb-0 mx-2 w-100">Found {{ store.cardsList.length }} cards</h5>
    <Card
    v-for="(element, index) in store.cardsList"
    :key="index"
    :propsElement="element"/>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

  h5{
    font-size: 100%;
  }

</style>