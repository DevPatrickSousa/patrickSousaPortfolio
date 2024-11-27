<script setup>
</script>

<template>
  <v-app-bar class="transparent-bar text-white" style="font-weight: 300;" :elevation="0">
    <v-spacer></v-spacer>
    <div class="d-flex text-white justify-center align-center">
      <v-btn to="/" variant="plain">Início</v-btn>
      <v-btn to="/aboutme" variant="plain">Sobre mim</v-btn>
      <v-btn to="/contact" variant="plain">Conecte-se</v-btn>
    </div>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>

<style scoped>
.transparent-bar {
  background: none !important;
  box-shadow: none !important;
  border: none !important;
}

</style>
