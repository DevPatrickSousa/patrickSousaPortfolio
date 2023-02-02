<template>
    <v-rating
      v-model="rating"
      readonly
      active-color="yellow-accent-4"
      size="16"
    ></v-rating>
</template>

<script >
  export default {
    data: () => ({
      rating: 2,
    }),
  }
</script>

<style>

</style>
