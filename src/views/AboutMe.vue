<template>

  <v-app>
    <menuComponent />
    <v-main class=" d-flex justify-center align-center  bg-grey-darken-4 fill-height">
      <div class="text-center">
        <span>In progress...</span>
      </div>
    </v-main>
    <footerComponent />
  </v-app>

</template>

<script setup>
import menuComponent from '@/components/menuComponent.vue';
import footerComponent from '@/components/footerComponent.vue'
</script>
