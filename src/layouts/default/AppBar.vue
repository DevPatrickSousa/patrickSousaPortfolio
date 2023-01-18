<template>
    <v-app-bar title="Patrick Sousa" class="text-white bg-grey-darken-4" :elevation="0" >
      

      
      <v-btn to="/home" variant="text">Home</v-btn>
      <v-btn to="/aboutMe" variant="text">About me</v-btn>
      <v-btn to="/contact" variant="text">Contact</v-btn>
    </v-app-bar>

    <v-footer class="d-flex justify-center bg-grey-darken-4" app absolute >
      <span claszs="text-white">© {{ new Date().getFullYear() }}. Patrick Sousa</span>
    </v-footer>
</template>

<script setup>
  //
</script>
