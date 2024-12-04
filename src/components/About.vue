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
const tabFormacao = ref('fatec')
const tabExperiencia = ref('skyler')
const progress = ref(0)
const interval = ref(-1)
const formacaoDialog = ref(false)
const experienciaDialog = ref(false)
const projetosDialog = ref(false)
const activeIndex = ref(null)
const showCardFullDetails = ref(false)
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
              <v-card-subtitle class="text-uppercase text-xl-text-body-4 text-sm-text-body-1"
                :class="width < 540 ? '' : 'text-center'" style="font-weight: 200;">
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
                      <v-card v-if="activeIndex === 0" class="w-100 h-100 d-flex flex-column rounded-xl" width="500"
                        style="top: 0; background-color: white;">
                        <v-card-text class="d-flex justify-center align-center text-center text-black">
                          <h2 class="text-h5">In progress...</h2>
                          <!-- <p class="text-medium-emphasis">
                            0.
                          </p> -->
                        </v-card-text>
                        <!-- <v-card-actions class="justify-center">
                          <v-btn color="primary" class="text-uppercase" @click="projetosDialog = false">
                            {{ t('about.buttons.lessDetails') }}
                          </v-btn>
                        </v-card-actions> -->
                      </v-card>

                      <v-card v-if="activeIndex === 1" class="w-100 h-100 d-flex flex-column rounded-xl" width="500"
                        style="top: 0; background-color: white;">
                        <v-card-text class="d-flex justify-center align-center text-center text-white">
                          <h2 class="text-h5 text-black">In progress...</h2>
                          <!-- <p class="text-medium-emphasis">
                            1.
                          </p> -->
                        </v-card-text>
                        <!-- <v-card-actions class="justify-center">
                          <v-btn color="primary" class="text-uppercase" @click="projetosDialog = false">
                            {{ t('about.buttons.lessDetails') }}
                          </v-btn>
                        </v-card-actions> -->
                      </v-card>

                      <v-card v-if="activeIndex === 2" class="w-100 h-100 d-flex flex-column rounded-xl" width="500"
                        style="top: 0; background-color: white;">
                        <v-card-text class="d-flex justify-center align-center text-center text-white">
                          <h2 class="text-h5 text-black">In progress...</h2>
                          <!-- <p class="text-medium-emphasis">
                            2.
                          </p> -->
                        </v-card-text>
                        <!-- <v-card-actions class="justify-center">
                          <v-btn color="primary" class="text-uppercase" @click="projetosDialog = false">
                            {{ t('about.buttons.lessDetails') }}
                          </v-btn>
                        </v-card-actions> -->
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
      <v-row no-gutters="">
        <v-col cols="12">
          <v-card style="background: rgba(255, 255, 255, 1);" class="rounded-xl">
            <v-card-title class="d-flex justify-space-between">
              <div>
                <v-btn density="default" icon="mdi-swap-horizontal"
                  @click="tabFormacao = tabFormacao === 'fatec' ? 'senai' : 'fatec'"></v-btn>
              </div>

              <div class="rounded-circle border-md">
                <v-img v-if="tabFormacao == 'fatec'" :width="width < 400 ? 200 : '200px'"
                  :height="width < 400 ? 200 : '200px'" aspect-ratio="16/9" cover class="rounded-circle"
                  src="../assets/logoFatec.jpg"></v-img>

                <v-img v-if="tabFormacao == 'senai'" :width="width < 400 ? 200 : '200px'"
                  :height="width < 400 ? 200 : '200px'" aspect-ratio="16/9" cover class="rounded-circle"
                  src="../assets/senaiLogo.jpg"></v-img>
              </div>

              <v-btn density="default" :icon="showCardFullDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="showCardFullDetails = !showCardFullDetails"></v-btn>
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols=6>
                  <v-card elevation="16">
                    <v-card-title style="background-color: #192B4C;" class="text-center">
                      <span class="text-body-2 px-2 text-white text-center">
                        {{ tabFormacao === 'fatec' ?
                          t('about.firstCard.details.fatecDetails.firstRowKey')
                          :
                          t('about.firstCard.details.senaiDetails.firstRowKey') }}
                      </span>
                    </v-card-title>
                  </v-card>
                </v-col>

                <v-col cols=6>
                  <v-card>
                    <v-card-title style="background-color: #192B4C;" class="text-center">
                      <span class="text-body-2 px-2 text-white">{{ tabFormacao === 'fatec' ?
                        t('about.firstCard.details.fatecDetails.secondRowKey')
                        :
                        t('about.firstCard.details.senaiDetails.secondRowKey') }}</span>
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col cols=6 class="pr-3">
                  <v-card elevation="0">
                    <v-card-title class="text-center">
                      <span class="text-body-2 px-2"> {{ tabFormacao === 'fatec' ?
                        t('about.firstCard.details.fatecDetails.firstRowValue')
                        :
                        t('about.firstCard.details.senaiDetails.firstRowValue') }}
                      </span>
                    </v-card-title>
                  </v-card>
                </v-col>

                <v-col cols=6 class="pl-3">
                  <v-card elevation="0">
                    <v-card-title class="text-center">
                      <span class="text-body-2 px-2">{{ tabFormacao === 'fatec' ?
                        t('about.firstCard.details.fatecDetails.secondRowValue')
                        :
                        t('about.firstCard.details.senaiDetails.secondRowValue') }}
                      </span>
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>

            <v-expand-transition>
              <div v-show="showCardFullDetails == true">
                <v-divider></v-divider>
                <v-card-text>
                  <span class="text-center">{{ tabFormacao === 'fatec' ?
                    t('about.firstCard.details.fatecDetails.description')
                    :
                    t('about.firstCard.details.senaiDetails.description') }}</span>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
    </v-dialog>
    <!-- experience dialog-->
    <v-dialog v-model="experienciaDialog" max-width="500" :style="name === 'md' ? { maxWidth: '400px' } : {}">
      <v-row no-gutters="">
        <v-col cols="12">
          <v-card style="background: rgba(255, 255, 255, 1);" class="rounded-xl">
            <v-card-title class="d-flex justify-space-between">
              <div>
                <v-btn density="default" icon="mdi-swap-horizontal"
                  @click="tabExperiencia = tabExperiencia === 'skyler' ? 'prefeitura' : 'skyler'"></v-btn>
              </div>

              <div class="rounded-circle border-md">
                <v-img v-if="tabExperiencia == 'skyler'" :width="width < 400 ? 200 : '200px'"
                  :height="width < 400 ? 200 : '200px'" aspect-ratio="16/9" cover class="rounded-circle"
                  src="../assets/skylerLogo.webp"></v-img>

                <v-img v-if="tabExperiencia == 'prefeitura'" :width="width < 400 ? 200 : '200px'"
                  :height="width < 400 ? 200 : '200px'" aspect-ratio="16/9" cover class="rounded-circle"
                  src="../assets/prefeituraLogo.png"></v-img>
              </div>

              <v-btn density="default" :icon="showCardFullDetails ? 'mdi-chevron-up' : 'mdi-chevron-down'"
                @click="showCardFullDetails = !showCardFullDetails"></v-btn>
            </v-card-title>

            <v-card-text>
              <v-row>
                <v-col cols=6>
                  <v-card elevation="16">
                    <v-card-title style="background-color: #192B4C;" class="text-center">
                      <span class="text-body-2 px-2 text-white text-center">
                        {{ tabExperiencia === 'skyler' ?
                          t('about.secondCard.details.skylerDetails.firstRowKey')
                          :
                          t('about.secondCard.details.spbDetails.firstRowKey') }}
                      </span>
                    </v-card-title>
                  </v-card>
                </v-col>

                <v-col cols=6>
                  <v-card>
                    <v-card-title style="background-color: #192B4C;" class="text-center">
                      <span class="text-body-2 px-2 text-white">{{ tabExperiencia === 'skyler' ?
                        t('about.secondCard.details.skylerDetails.secondRowKey')
                        :
                        t('about.secondCard.details.spbDetails.secondRowKey') }}</span>
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>

              <v-row no-gutters>
                <v-col cols=6 class="pr-3">
                  <v-card elevation="0">
                    <v-card-title class="text-center">
                      <span class="text-body-2 px-2"> {{ tabExperiencia === 'skyler' ?
                        t('about.secondCard.details.skylerDetails.firstRowValue')
                        :
                        t('about.secondCard.details.spbDetails.firstRowValue') }}
                      </span>
                    </v-card-title>
                  </v-card>
                </v-col>

                <v-col cols=6 class="pl-3">
                  <v-card elevation="0">
                    <v-card-title class="text-center">
                      <span class="text-body-2 px-2">{{ tabExperiencia === 'skyler' ?
                        t('about.secondCard.details.skylerDetails.secondRowValue')
                        :
                        t('about.secondCard.details.spbDetails.secondRowValue') }}
                      </span>
                    </v-card-title>
                  </v-card>
                </v-col>
              </v-row>
            </v-card-text>

            <v-expand-transition>
              <div v-show="showCardFullDetails == true">
                <v-divider></v-divider>
                <v-card-text>
                  <span class="text-center">{{ tabExperiencia === 'skyler' ?
                    t('about.secondCard.details.skylerDetails.description')
                    :
                    t('about.secondCard.details.spbDetails.description') }}</span>
                </v-card-text>
              </div>
            </v-expand-transition>
          </v-card>
        </v-col>
      </v-row>
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

.border-md {
  border-color: #1E1D1D !important;
  border-width: 4px !important;
}
</style>
