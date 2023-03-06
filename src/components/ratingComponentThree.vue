<template >
  <v-container class="fill-height ">
    <v-responsive class="d-flex align-center text-center fill-height ">
      <v-row class="d-flex align-center justify-center">
        <v-col cols="auto">
          <v-rating v-model="rating" readonly active-color="yellow-accent-4" size="16">
          </v-rating>
        </v-col>
      </v-row>
    </v-responsive>
  </v-container>
</template>
  
<script >
export default {
  data: () => ({
    rating: 3,
  }),
}
</script>

<style></style>
  