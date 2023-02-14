<template >
    <v-container class="fill-height ">
      <v-responsive class="d-flex align-center text-center fill-height ">
        <div class="d-flex mt-1 justify-center text-center text-white">
            <span>Contact</span>
        </div>
        <div class="d-flex justify-center text-center ">
            <v-card class="mt-12 rounded-xl" width="1500" height="700" color="black" :style="'border: 1px solid white'">
                <div class="mt-10">
                  <a href="https://wa.me/5511943646430" target="_blank"><img src="/src/assets/whatsapp.ico" alt="whatsApp" ALIGN=middle>
                    <span class="mx-7 mt-5 text-white">55 (11)94364-6430</span></a>
                    <img src="/src/assets/outlook.ico" alt="outlook" ALIGN=middle>
                    <span class="mx-7 text-white">patrickseven22@hotmail.com</span>
                </div>

                <div class="d-flex justify-center align-center text-center">
                    <v-card class="d-flex mt-16 rounded-xl  justify-center align-center  " width="900" height="510"
                        variant="outlined">

                        <formComponent />


                    </v-card>
                </div>
            </v-card>




        </div>
      </v-responsive>
    </v-container>
  </template>
  
  <script setup>
    import formComponent from './formComponent.vue';
  </script>
  
  
  <style>

.v-application__wrap{
  background-color: #212121;
}
#span-contact {
  height: 25px;
}

#span-number {
  height: 5px;
  width: 36px;
}
img {
  width: 48px;
  height: 48px;
}
a{
  text-decoration: none;
}
  </style>
  