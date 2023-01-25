<template>
   
    <v-app>
      
      <MenuComponent/>
      <v-main class=" d-flex justify-center align-center  bg-grey-darken-4 fill-height">
        <div class="text-center">
          <span>In progress...</span>
        </div>
        
      </v-main>
      <FooterComponent/>
    
    </v-app>
    
  </template>
  
  <script setup>
    import MenuComponent from '@/components/MenuComponent.vue';
    import FooterComponent from '@/components/FooterComponent.vue'
  </script>
  