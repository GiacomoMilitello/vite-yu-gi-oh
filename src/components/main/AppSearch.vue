<script>
import { store } from '../../store'
export default {
  name: "AppSearch",
  data() {
    return {
      store
    }
  }
};
</script>

<template>
    <select
    class="form-select w-25"
    @change="$emit('filter')"
    v-model="store.selectValue"
    name="card-categories"
    id="category-select">
        <option selected value="all">Archetype</option>
        <option v-for="(element, index) in store.cardsArchetype" :key="index" :value="element.archetype_name"> {{ element.archetype_name }}</option>
    </select>

<!-- collegare select ad  archetype -->

</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

// h1 {
//   color: $font-color-second;
//   @include main-font-start;
// }
</style>