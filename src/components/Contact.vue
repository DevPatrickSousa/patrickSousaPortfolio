<script setup>
import formComponent from './formComponent.vue';
import github from '../assets/github.png'
import whatsapp from '../assets/whatsapp.ico'
import linkedin from '../assets/linkedin.png'
import { useDisplay } from 'vuetify';
import { useI18n } from 'vue-i18n'
import { ref, reactive } from 'vue';

const { name, width } = useDisplay()
const { t } = useI18n();
const socials = reactive([
  { name: 'linkedin', description: 'Linkedin', imgSrc: linkedin, href: 'https://www.linkedin.com/in/devpatricksousa/' },
  { name: 'github', description: 'Github', imgSrc: github, href: 'https://github.com/DevPatrickSousa' },
  { name: 'whatsapp', description: '55 (11)94364-6430', imgSrc: whatsapp, href: 'https://wa.me/5511943646430' },
])
</script>

<template>
  <v-container fluid class="fill-height pa-0">
    <v-row class="fill-height" no-gutters="" style="background: radial-gradient(at center, #0E47A1, #1E1D1D)">
      <v-col sm="12" md="8" lg="8" class="d-flex flex-column justify-center">
        <div class="d-flex flex-column justify-center align-center">
          <span class="text-center text-h5 text-uppercase text-white"
            :class="name === 'sm' ? 'text-body-1 !important' : ''"
            :style="width > 1040 ? { maxWidth: '1000px', marginLeft: '50px', fontWeight: '300' } : { fontWeight: '300', maxWidth: '400px', paddingTop: '50px' }">
            {{ t('contact.title') }}
          </span>
        </div>

        <div class="d-flex justify-center align-center"
          :style="width > 1040 ? { marginLeft: '50px', fontWeight: '300', paddingTop: '40px' } : { fontWeight: '300', paddingTop: '30px' }">
          <a :href="social.href" target="_blank" class="d-flex flex-column align-center"
            v-for="(social, index) in socials" :key="index">
            <img :src="social.imgSrc" :alt="social.description" class="mx-5"
              :style="width > 1040 ? { maxWidth: '70px' } : { maxWidth: '40px' }">
          </a>
        </div>
      </v-col>

      <v-col sm="12" md="4" lg="4" class="d-flex justify-center align-center text-center">
        <v-card class="rounded-xl" :width="width > 1040 ? 400 : 300" elevation="16">
          <v-card-title style=" background-color: #17366A;">
            <span v-if="width > 1040" class="text-h6 text-white" style="font-weight: 300;">{{ t('contact.cardTitle') }}</span>
            <span v-if="width < 1040" class="text-h6 text-white" style="font-weight: 300;">{{ t('contact.cardTitleMobile') }}</span>
          </v-card-title>
          <v-card-text>
            <formComponent />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.v-application__wrap {
  background: url('../assets/teste.png');
}

#span-contact {
  height: 25px;
}

#span-number {
  height: 5px;
  width: 36px;
}

a {
  text-decoration: none;
}

img:hover {
  transform: scale(1.1);
  transition: all 0.3s ease;
}
</style>