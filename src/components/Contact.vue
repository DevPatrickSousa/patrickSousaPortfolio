<script setup>
import formComponent from './formComponent.vue';
import { useDisplay } from 'vuetify';
import { ref, reactive } from 'vue';

const { width } = useDisplay()
const socials = reactive([
 { name: 'linkedin', description: 'Linkedin', imgSrc: '/src/assets/whatsapp.ico', href: 'https://www.linkedin.com/in/devpatricksousa/'},
 { name: 'github', description: 'Github', imgSrc: '/src/assets/whatsapp.ico', href: 'https://github.com/DevPatrickSousa'},
 { name: 'whatsapp', description: '55 (11)94364-6430', imgSrc: '/src/assets/whatsapp.ico', href: 'https://wa.me/5511943646430'},
 { name: 'email', description: 'patrickseven22@hotmail.com', imgSrc: '/src/assets/outlook.ico'},
])
</script>

<template>
  <v-container fluid class="pa-0 fill-height"
    style="background: linear-gradient(to right, rgba(13, 71, 161, 1), rgba(255, 255, 255, 0.9));">
    <v-row class="fill-height">
      <v-col cols="8" class="d-flex flex-column justify-center">
        <div class="d-flex flex-column justify-center align-center">
          <span class="text-center text-h5 text-uppercase text-white"
            :style="width > 1040 ? { maxWidth: '850px', marginLeft: '50px', fontWeight: '300' } : { fontWeight: '300' }">
            Quer conhecer mais sobre meus projetos ou tirar dúvidas? Entre em contato comigo através das minhas redes ou envie um email!
          </span>
        </div>

        <div class="d-flex justify-center align-center" :style="width > 1040 ? { marginLeft: '50px', fontWeight: '300', paddingTop: '40px' } : { fontWeight: '300' }">
          <v-card width="300" variant="tonal" class="mx-2 d-flex justify-center align-center rounded-lg" style="background-color: white;" :style="width > 1040 ? {minHeight: '150px'} : {}" v-for="(card, index) in socials" :key="index">
            <!-- <v-card-text>{{ card.name }}</v-card-text> -->
             <span class="text-body-2 text-uppercase text-center"> in process...</span>
          </v-card>
        </div>



        <!-- <div class="d-flex">
          <div class="d-flex flex-column align-center mt-5">
            <a href="https://wa.me/5511943646430" target="_blank" class="d-flex flex-column align-center">
              <img src="/src/assets/whatsapp.ico" alt="whatsApp" class="mb-3" style="width: 48px; height: 48px;">
              <span class="text-white">55 (11)94364-6430</span>
            </a>
          </div>

          <div class="d-flex flex-column align-center mt-5">
            <img src="/src/assets/outlook.ico" alt="outlook" ALIGN=middle class="mb-3" style="width: 48px; height: 48px;">
            <span class="mx-7 text-white">patrickseven22@hotmail.com</span>
          </div>
        </div> -->



      </v-col>

      <v-col cols="4" class="d-flex justify-center align-center text-center">
        <v-card class="rounded-xl" width="400" elevation="16">
          <v-card-title style=" background-color: #7492C8;">
            <span class="text-h6 text-white" style="font-weight: 300;">Dúvidas? Envie uma mensagem.</span>
          </v-card-title>

          <v-card-text>
            <formComponent />
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-responsive class="d-flex align-center text-center fill-height ">
      <div class="d-flex  mb-12 justify-center text-center text-white">
        <span>Contact</span>
      </div>
      <div class="d-flex justify-center text-center ">
        <v-card class=" rounded-xl" width="1500" height="650" color="black" :style="'border: 1px solid white'">
          <div class="mt-12">
            <a href="https://wa.me/5511943646430" target="_blank"><img src="/src/assets/whatsapp.ico" alt="whatsApp"
                ALIGN=middle>
              <span class="mx-7 mt-5 text-white">55 (11)94364-6430</span></a>
            <img src="/src/assets/outlook.ico" alt="outlook" ALIGN=middle>
            <span class="mx-7 text-white">patrickseven22@hotmail.com</span>
          </div>

          <div class="d-flex justify-center align-center text-center">
            <v-card class="d-flex mt-16 rounded-xl  justify-center align-center  " width="900" height="470"
              variant="outlined">
              <formComponent />
            </v-card>
          </div>
        </v-card>
      </div>
    </v-responsive> -->
</template>

<style>
.v-application__wrap {
  background-color: #89aed2;
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

a {
  text-decoration: none;
}
</style>