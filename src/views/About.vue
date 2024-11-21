<template>
  <v-app>
    <Menu />
    <v-main>
      <aboutMeComponent />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import aboutMeComponent from '@/components/About.vue';
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';
</script>

<style scoped>
.v-main {
  background: linear-gradient(to right, rgba(13, 71, 161, 1), rgba(232, 240, 242, 0.7));
}
</style>
