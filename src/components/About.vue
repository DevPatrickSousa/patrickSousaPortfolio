<script setup>
import { reactive, ref, computed, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
import { useI18n } from 'vue-i18n'
import flightSearch from '../assets/flightSearchUpdated.webp';
import flightInfo from '../assets/flightInfo.webp';
import appMakeUp from '../assets/appMakeUp.webp';
import javascript from '../assets/js.png';
import vue from '../assets/vue.png';
import nuxt from '../assets/nuxt.png';
import vuetify from '../assets/vuetify.jpg';
import primevue from '../assets/primevue.webp';
import python from '../assets/python.png';
import django from '../assets/django.png';
import rn from '../assets/rn.webp';
import chrome from '../assets/chrome.png';

const { name, mobile, width } = useDisplay()
const { t } = useI18n();
const tabFormacao = ref(null)
const tabExperiencia = ref(null)
const progress = ref(0)
const interval = ref(-1)
const formacaoDialog = ref(false)
const experienciaDialog = ref(false)
const projetosDialog = ref(false)
const activeIndex = ref(null);
const items = ref([
  { src: flightSearch, description: 'flight search' },
  { src: flightInfo, description: 'flight info' },
  { src: appMakeUp, description: 'AppMakeUp' },
])
const stacks = reactive([
  { name: 'Javascript', rating: 'avançado', img: javascript },
  { name: 'Vue', rating: 'avançado', img: vue },
  { name: 'Nuxt', rating: 'básico', img: nuxt },
  { name: 'Vuetify', rating: 'avançado', img: vuetify },
  { name: 'PrimeVue', rating: 'avançado', img: primevue },
  { name: 'Python', rating: 'intermediário', img: python },
  { name: 'Django', rating: 'intermediário', img: django },
  { name: 'React native', rating: 'intermediário', img: rn },
  { name: 'Chrome extensions', rating: 'básico', img: chrome }
])

function openProjectsDialog(index) {
  activeIndex.value = index;
  projetosDialog.value = true;
}

onMounted(() => {
  interval.value = setInterval(() => {
    if (progress.value === 100) {
      return (progress.value = 0)
    }
    progress.value += 20
  }, 1000)
})

const skillsCard = computed(() => {
  switch (name.value) {
    case 'xs': return 220
    case 'sm': return 400
    case 'md': return 820
    case 'lg': return 820
    case 'xl': return 815
    case 'xxl': return 1200
  }

  return undefined
})
</script>

<template>
  <v-container fluid class="pa-0 fill-height" style="background: #182E51;">
    <v-row class="d-flex ma-0 fill-height" no-gutters>
      <v-col cols="12" md="6" class="d-flex flex-column pr-0" :class="width < 960 ? '' : ''"
        :style="width < 960 ? { marginBottom: '16px' } : {}">
        <v-card max-width="100%" :height="width < 960 ? '100%' : '100%'" color="black" class="" elevation="0"
          image="../assets/euCard.png" style="border-bottom-right-radius: 0px; border-top-right-radius: 0px;"
          :style="width < 960 ? { background: '#0d47a1' } : {}" :class="width < 960 ? '' : 'v-img__img--cover'">
          <v-row no-gutters>
            <v-col cols="12">
              <v-card-title :class="width < 540 ? '' : 'text-center'" :style="{
                paddingTop: width < 400 ? '60px' : (width < 500 ? '60px' : (width < 600 ? '60px' : '60px')),
              }">
                <span class="text-uppercase text-h2 text-sm-text-body-2" style="font-weight: 200;" :style="{
                  fontSize: width < 400 ? '14px' : (width < 500 ? '16px' : (width < 600 ? '16px' : '16px')),
                }">Patrick</span>
              </v-card-title>
              <v-card-subtitle class="text-uppercase text-xl-text-body-4 text-sm-text-body-1" :class="width < 540 ? '' : 'text-center'"
                style="font-weight: 200;">
                {{ t('about.subtitle') }}
              </v-card-subtitle>
            </v-col>
          </v-row>

          <v-row class="d-flex flex-column h-100 pl-2">
            <v-col cols="12" md="6" class="d-flex flex-column fill-height" style="height: fit-content;">
              <div class="d-flex justify-start align-center" v-for="(stack, index) in stacks" :key="index"
                style="margin-top: 2px; margin-bottom: 2px;">
                <v-progress-circular :model-value="name === 'sm' ? progress = 100 : progress" :rotate="360"
                  :size="name === 'sm' ? 30 : name === 'md' ? 60 : name === 'lg' ? 70 : 70" :width="5" color="white"
                  class="mr-3">
                  <template v-slot:default>
                    <div class="bg-white rounded-circle">
                      <v-img :src="stack.img" contain class="rounded-circle"
                        :width="name === 'sm' ? 20 : name === 'md' ? 50 : name === 'lg' ? 60 : 60"
                        :height="name === 'sm' ? 20 : name === 'md' ? 50 : name === 'lg' ? 60 : 60" />
                    </div>
                  </template>
                </v-progress-circular>

                <div class="d-flex flex-column text-white text-uppercase text-body-2" style="font-weight: 200;">
                  <span>{{ stack.name }}</span>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <v-col md="6" class="d-flex flex-column w-100 min-h-100" :style="width < 960 ? { minHeight: '150px' } : {}">
        <v-row class="d-flex w-100" no-gutters>
          <v-col md="6" class="d-flex align-stretch w-100 h-100 pl-0 pb-0" :class="width < 960 ? 'pr-3' : ''">
            <div class="column text-white text-uppercase d-flex align-stretch w-100" style="position: relative;">
              <v-card class="d-flex flex-column align-center justify-center text-center text-uppercase w-100 h-100"
                color="surface-variant" image="../assets/book-opac.jpg" style="border-radius: 0px;"
                :style="width < 960 ? { borderRadius: '4px' } : {}">
                <template v-slot:title>
                  <span class="text-uppercase text-h5" :class="width < 960 ? 'text-h6' : ''"
                    style="font-weight: 200;">{{ t('about.firstCard.title') }}</span>
                </template>
                <template v-slot:actions>
                  <v-btn class="text-uppercase" color="white" variant="outlined" block @click="formacaoDialog = true"
                    style="font-weight: 200;">
                    {{ t('about.buttons.moreDetails') }}
                  </v-btn>
                </template>
              </v-card>
            </div>
          </v-col>

          <v-col md="6" class="d-flex w-100 pl-0 pb-0 pr-0"
            :style="width < 960 ? { minHeight: '400px', paddingBottom: '16px' } : {}">
            <div class="column text-white text-uppercase d-flex w-100" style="position: relative;">
              <v-card class="d-flex flex-column align-center justify-center text-center text-uppercase w-100"
                color="surface-variant" image="../assets/xp-opac.jpg"
                style="border-bottom-right-radius: 0px; border-top-left-radius: 0px;"
                :style="width < 960 ? { borderRadius: '4px' } : {}">
                <template v-slot:title>
                  <span class="text-uppercase text-h5" :class="width < 960 ? 'text-h6' : ''"
                    style="font-weight: 200;">{{ t('about.secondCard.title') }}</span>
                </template>
                <template v-slot:actions>
                  <v-btn class="text-uppercase" color="white" variant="outlined" block @click="experienciaDialog = true"
                    style="font-weight: 200;">
                    {{ t('about.buttons.moreDetails') }}
                  </v-btn>
                </template>
              </v-card>
            </div>
          </v-col>
        </v-row>

        <v-row class="d-flex justify-end align-end w-100" no-gutters style="max-height: 400px; min-width: 100%;">
          <v-col cols="12" class="pl-0 pt-0 h-100" :class="width < 960 ? 'pt-3' : ''"
            :style="width < 960 ? { marginBottom: '16px' } : { borderBottomRightRadius: '4px' }">
            <v-carousel :show-arrows="hover" hide-delimiters cycle class="h-100 min-w-100"
              :style="width < 960 ? { borderRadius: '4px' } : { borderBottomRightRadius: '4px' }">
              <v-carousel-item v-for="(item, index) in items" :key="index">
                <v-img :src="item.src" class="h-100 w-100" cover>
                  <template #default>
                    <div class="overlay position-absolute w-100 h-100 d-flex flex-column align-center justify-center"
                      :style="name === 'md' || name === 'sm' ? { borderRadius: '4px' } : { borderBottomRightRadius: '4px' }"
                      style="top: 0;">
                      <span class="text-h5 text-white text-uppercase px-4" :class="width < 960 ? 'text-h6' : ''"
                        style="font-weight: 300; padding-top: 10px; padding-bottom: 10px; font-weight: 200;">{{
                          item.description }}</span>
                      <v-btn class="text-uppercase pa-2" color="white" variant="outlined"
                        @click="openProjectsDialog(index)" style="font-weight: 200;">
                        {{ t('about.buttons.moreDetails') }}
                      </v-btn>
                    </div>

                    <v-dialog v-model="projetosDialog" max-width="500"
                      :style="width < 960 ? { maxWidth: '400px' } : {}">
                      <v-card v-if="activeIndex === 0" class="w-100 h-100 d-flex flex-column" width="500"
                        style="top: 0; background-color: white;">
                        <v-card-text class="text-center text-black">
                          <h2 class="text-h5">index 0</h2>
                          <p class="text-medium-emphasis">
                            0.
                          </p>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                          <v-btn color="primary" class="text-uppercase" @click="projetosDialog = false">
                            {{ t('about.buttons.lessDetails') }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>

                      <v-card v-if="activeIndex === 1" class="w-100 h-100 d-flex flex-column" width="500"
                        style="top: 0; background-color: white;">
                        <v-card-text class="text-center text-white">
                          <h2 class="text-h5 text-black">index 1</h2>
                          <p class="text-medium-emphasis">
                            1.
                          </p>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                          <v-btn color="primary" class="text-uppercase" @click="projetosDialog = false">
                            {{ t('about.buttons.lessDetails') }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>

                      <v-card v-if="activeIndex === 2" class="w-100 h-100 d-flex flex-column" width="500"
                        style="top: 0; background-color: white;">
                        <v-card-text class="text-center text-white">
                          <h2 class="text-h5 text-black">index 2</h2>
                          <p class="text-medium-emphasis">
                            2.
                          </p>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                          <v-btn color="primary" class="text-uppercase" @click="projetosDialog = false">
                            {{ t('about.buttons.lessDetails') }}
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </template>
                </v-img>
              </v-carousel-item>
            </v-carousel>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    <!-- formacao dialog-->
    <v-dialog v-model="formacaoDialog" max-width="500" :style="name === 'md' ? { maxWidth: '400px' } : {}">
      <v-card class="w-100 h-100 d-flex flex-column " width="500"
        style="bottom: 0; background: rgba(255, 255, 255, 1);">
        <v-tabs v-model="tabFormacao" class="d-flex justify-between"
          style="background: linear-gradient(to right, rgba(13, 71, 161, 1), rgba(255, 255, 255, 0.1));">
          <v-tab value="fatec" class="text-white flex-grow-1 text-center">{{
            t('about.firstCard.details.fatecDetails.name')
          }}</v-tab>
          <v-tab value="senai" class="text-white flex-grow-1 text-center">{{
            t('about.firstCard.details.senaiDetails.name')
          }}</v-tab>
        </v-tabs>

        <v-card-text class="pb-0 px-0">
          <v-row>
            <v-col cols="12" class="py-0">
              <v-img v-if="tabFormacao == 'fatec'" width="100%" aspect-ratio="16/9" cover style="max-height: 185px;"
                src="../assets/fatec.png"></v-img>
              <v-img v-if="tabFormacao == 'senai'" width="100%" aspect-ratio="16/9" cover style="max-height: 185px;"
                src="../assets/senai.jpg"></v-img>
            </v-col>
            <v-divider :thickness="5" class=" px-3"></v-divider>
          </v-row>
          <v-row>
            <v-col cols="12" class="py-0">
              <v-tabs-window v-model="tabFormacao">
                <v-tabs-window-item value="fatec">
                  <v-row align="center">
                    <v-col cols="6" style="border-right: 4px solid rgba(0, 0, 0, 0.12);">
                      <span class="text-body-2 px-2">{{ t('about.firstCard.details.fatecDetails.firstRowKey') }}</span>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center">
                      <span class="text-body-2 text-center">{{ t('about.firstCard.details.fatecDetails.firstRowValue')
                        }}</span>
                    </v-col>
                  </v-row>

                  <v-row align="center" class="mt-0">
                    <v-col cols="6" style="border-right: 4.5px solid rgba(0, 0, 0, 0.12);">
                      <span class="text-body-2 px-2">{{ t('about.firstCard.details.fatecDetails.secondRowKey') }}</span>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center">
                      <span class="text-body-2">{{ t('about.firstCard.details.fatecDetails.secondRowValue') }}</span>
                    </v-col>
                  </v-row>

                  <v-divider :thickness="5" class="mt-2 px-3"></v-divider>

                  <v-row>
                    <v-col cols="12" class="d-flex justify-center">
                      <span class="text-body-2 px-2 py-1">{{ t('about.firstCard.details.fatecDetails.description')
                        }}</span>
                    </v-col>
                  </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="senai">
                  <v-row align="center">
                    <v-col cols="6" style="border-right: 4px solid rgba(0, 0, 0, 0.12);">
                      <span class="text-body-2 px-2">{{ t('about.firstCard.details.senaiDetails.firstRowKey') }}</span>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center">
                      <span class="text-body-2 ">{{ t('about.firstCard.details.senaiDetails.firstRowValue') }}</span>
                    </v-col>
                  </v-row>

                  <v-row align="center" class="mt-0">
                    <v-col style="border-right: 4px solid rgba(0, 0, 0, 0.12);">
                      <span class="text-body-2 px-2">{{ t('about.firstCard.details.senaiDetails.secondRowKey') }}</span>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center">
                      <span class="text-body-2">{{ t('about.firstCard.details.senaiDetails.secondRowValue') }}</span>
                    </v-col>
                  </v-row>

                  <v-divider :thickness="5" class="mt-2 px-3"></v-divider>

                  <v-row>
                    <v-col cols="12" class="d-flex justify-center">
                      <span class="text-body-2 text-justify px-2 py-1">{{
                        t('about.firstCard.details.senaiDetails.description') }}</span>
                    </v-col>
                  </v-row>
                </v-tabs-window-item>
              </v-tabs-window>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="mt-auto pa-3">
          <v-btn class="text-uppercase pa-3" append-icon="mdi-chevron-right" color="#0d47a1" variant="outlined" block
            @click="formacaoDialog = false" style="font-weight: 400;">
            {{ t('about.buttons.lessDetails') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- experience dialog-->
    <v-dialog v-model="experienciaDialog" max-width="500" :style="name === 'md' ? { maxWidth: '400px' } : {}">
      <v-card class="w-100 h-100 d-flex flex-column " width="500"
        style="bottom: 0; background: rgba(255, 255, 255, 1);">
        <v-tabs v-model="tabExperiencia" class="d-flex justify-between"
          style="background: linear-gradient(to right, rgba(13, 71, 161, 1), rgba(255, 255, 255, 0.1));">
          <v-tab value="skyler" class="text-white flex-grow-1 text-center">{{ t('about.secondCard.details.skylerDetails.name') }}</v-tab>
          <v-tab value="prefeitura" class="text-white flex-grow-1 text-center">{{ t('about.secondCard.details.spbDetails.name') }}</v-tab>
        </v-tabs>

        <v-card-text class="pb-0 px-0">
          <v-row>
            <v-col cols="12" class="py-0">
              <v-img v-if="tabExperiencia == 'skyler'" width="100%" aspect-ratio="16/9" cover style="max-height: 185px;"
                src="../assets/skyler.png"></v-img>
              <v-img v-if="tabExperiencia == 'prefeitura'" width="100%" aspect-ratio="16/9" cover
                style="max-height: 185px;" src="../assets/spb.png"></v-img>
            </v-col>
            <v-divider :thickness="5" class=" px-3"></v-divider>
          </v-row>
          <v-row>
            <v-col cols="12" class="py-0">
              <v-tabs-window v-model="tabExperiencia">
                <v-tabs-window-item value="skyler">
                  <v-row align="center">
                    <v-col cols="6" style="border-right: 4px solid rgba(0, 0, 0, 0.12);">
                      <span class="text-body-2 px-2">{{ t('about.secondCard.details.skylerDetails.firstRowKey') }}</span>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center">
                      <span class="text-body-2 text-center">{{ t('about.secondCard.details.skylerDetails.firstRowValue') }}</span>
                    </v-col>
                  </v-row>

                  <v-row align="center" class="mt-0">
                    <v-col cols="6" style="border-right: 4.5px solid rgba(0, 0, 0, 0.12);">
                      <span class="text-body-2 px-2">{{ t('about.secondCard.details.skylerDetails.secondRowKey') }}</span>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center">
                      <span class="text-body-2">{{ t('about.secondCard.details.skylerDetails.secondRowValue') }}</span>
                    </v-col>
                  </v-row>

                  <v-divider :thickness="5" class="mt-2 px-3"></v-divider>

                  <v-row>
                    <v-col cols="12" class="d-flex justify-center">
                      <span class="text-body-2 px-2 py-1">{{ t('about.secondCard.details.skylerDetails.description') }}</span>
                    </v-col>
                  </v-row>
                </v-tabs-window-item>

                <v-tabs-window-item value="prefeitura">
                  <v-row align="center">
                    <v-col cols="6" style="border-right: 4px solid rgba(0, 0, 0, 0.12);">
                      <span class="text-body-2 px-2">{{ t('about.secondCard.details.spbDetails.firstRowKey') }}</span>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center">
                      <span class="text-body-2 ">{{ t('about.secondCard.details.spbDetails.firstRowValue') }}</span>
                    </v-col>
                  </v-row>

                  <v-row align="center" class="mt-0">
                    <v-col style="border-right: 4px solid rgba(0, 0, 0, 0.12);">
                      <span class="text-body-2 px-2">{{ t('about.secondCard.details.spbDetails.secondRowKey') }}</span>
                    </v-col>

                    <v-col cols="6" class="d-flex justify-center">
                      <span class="text-body-2">{{ t('about.secondCard.details.spbDetails.secondRowValue') }}</span>
                    </v-col>
                  </v-row>

                  <v-divider :thickness="5" class="mt-2 px-3"></v-divider>

                  <v-row>
                    <v-col cols="12" class="d-flex justify-center">
                      <span class="text-body-2 text-justify px-2 py-1">{{ t('about.secondCard.details.spbDetails.description') }}</span>
                    </v-col>
                  </v-row>
                </v-tabs-window-item>
              </v-tabs-window>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-actions class="mt-auto pa-3">
          <v-btn class="text-uppercase pa-3" append-icon="mdi-chevron-right" color="#0d47a1" variant="outlined" block
            @click="experienciaDialog = false" style="font-weight: 400;">
            {{ t('about.buttons.lessDetails') }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<style scoped>
.gradient-text {
  background: linear-gradient(to right, #170165, #00000080);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
}

.carousel-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

button:hover {
  transform: scale(1.03);
  transition: all 0.3s ease;
}
</style>
