<template >
    <v-container class="fill-height ">
      <v-responsive class="d-flex justify-center align-center text-center fill-height ">
    <div class="text-center">
      <span class="myFont text-white">HEY THERE, I'M <strong class="text-black">PATRICK</strong>!</span>
      <v-divider class="mt-2 mb-2" ></v-divider>
      <span class="myFont2 text-white">Web developer</span>
      <v-divider class="mt-2" thickness></v-divider>
      <buttonComponentWithTo/>

      
    </div>




  </v-responsive>
    </v-container>
  </template>
  
  <script setup>
    import buttonComponentWithTo from './buttonComponentWithTo.vue';
  </script>
  
  
  <style>
  .v-main{
    background-color: #212121;
  }
  .myFont {
  font-family: 'Finger Paint', cursive;
  font-size: 48px;
}

.myFont2 {
  font-family: 'Finger Paint', cursive;
  font-size: 16px;
}
.v-divider{
    color: white;
}

.fb-btn.v-btn--outlined {
  border: thin solid #CCCCCC;
}



  </style>
  