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
  <div class="cards-line px-2 pb-3">
    <div class="info">
        <figure>
            <img class="img-fluid" :src="propsElement.card_images[0].image_url" alt="">
        </figure>
        <h3 class="text-white text-center mt-4">{{ propsElement.name }}</h3>
        <h5 class="text-center fw-light mb-4">{{ propsElement.archetype }}</h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/partials/variables" as *;
@use "../../../styles/partials/mixins" as *;

    .cards-line{
        width: calc(100% / 5);
        background-color: white;
        .info{
            background-color: $yu-color;
            height: 100%;
        figure{
        width: 100%;
        }
        h3{
            font-size: 140%;
        }
        }
    }
    
</style>