<script>
export default {
  name: "AppSearch",
};
</script>

<template>
    <select class="form-select w-25" aria-label="Default select example">
        <option selected>Archetype</option>
        <option value="1">Alien</option>
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