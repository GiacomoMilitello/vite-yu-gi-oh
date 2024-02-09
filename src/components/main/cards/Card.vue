<script>
export default {
  name: "Card",
  props:[
    'propsElement'
  ],
  data(){
    return{

    }
  }
};
</script>

<template>
  <div class="cards-line px-2 border">
    <figure>
        <img class="img-fluid" :src="propsElement.card_images[0].image_url" alt="">
    </figure>
    <h3>{{ propsElement.name }}</h3>
    <h5>{{ propsElement.archetype }}</h5>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

    .cards-line{
        width: calc(100% / 5);
        
    }
    figure{
        width: 100%;
    }
</style>