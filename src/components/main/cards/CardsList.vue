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
  <h1>CIAOO</h1>
  <div class="d-flex flex-wrap border">
    <Card
    v-for="(element, index) in store.cardsList"
    :key="index"
    :propsElement="element"/>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

</style>