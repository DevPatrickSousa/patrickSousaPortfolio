<template>
  <v-main class=" d-flex justify-center align-center  bg-grey-darken-4 fill-height">
    <div class="text-center">
      <span class="myFont  ">HEY THERE, I'M <strong class="text-black">PATRICK</strong>!</span>
      <v-divider class="mt-2 mb-2" ength="650px"></v-divider>
      <span class="myFont2 ">Web developer</span>
      <v-divider class="mt-2" length="650px"></v-divider>
      <v-hover v-slot="{ isHovering, props }" open-delay="150">
        <v-btn v-bind="props" :elevation="isHovering ? 8 : 2" :class="{ 'on-hover': isHovering }" size="small"
          rounded="pill" color="black" class="mt-4" width="167px" height="34px" outlined to="/aboutMe">
          <span><strong class="text-white">See more</strong></span>
        </v-btn>
      </v-hover>
    </div>




  </v-main>
</template>

<script setup>
  //
</script>

<style>
#center {
  width: 650px;
}

.myFont {
  font-family: 'Finger Paint', cursive;
  font-size: 48px;
}

.myFont2 {
  font-family: 'Finger Paint', cursive;
  font-size: 16px;
}

.fb-btn.v-btn--outlined {
  border: thin solid #CCCCCC;
}
</style>
