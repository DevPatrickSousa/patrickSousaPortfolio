<template>

  <v-app>
    <menuComponent />

    <ContactComponent />

    <footerComponent />
  </v-app>

</template>

<script setup>
import menuComponent from '@/components/menuComponent.vue';
import footerComponent from '@/components/footerComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue'
</script>
