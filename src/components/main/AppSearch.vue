<script>
export default {
  name: "AppSearch",
};
</script>

<template>
    <header>
        <select class="form-select" aria-label="Default select example">
            <option selected>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
        </select>

        <!-- collegare select ad  archetype -->
    </header>
</template>

<style lang="scss" scoped>
@use "../../styles/partials/variables" as *;
@use "../../styles/partials/mixins" as *;

// h1 {
//   color: $font-color-second;
//   @include main-font-start;
// }
</style>