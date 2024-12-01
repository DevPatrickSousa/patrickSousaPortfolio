<script setup>
import eu from '../assets/euBackground.png'
import euLessResolution from '../assets/euLessResolution.png'
import pt from '../assets/pt-br.png'
import en from '../assets/en-us.png'
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useDisplay } from 'vuetify'
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
const { locale } = useI18n()
const router = useRouter();
const { width } = useDisplay()
const animatedDescription = ref('')
const showButton = ref(false)
const sound = ref(false)
const noSound = ref(false)
const topValue = ref('50vh')
const index = ref(0)

const soundDialog = () => sound.value = true
const noSoundDialog = () => {
  router.push('/aboutme')
}
const changeLanguage = (lang) => {
  locale.value = lang;
}
const animateText = (text) => {
  if (index.value < text.length) {
    animatedDescription.value += text[index.value];
    index.value++;
    setTimeout(() => animateText(text), 20);
  } else {
    showButton.value = true;
  }
};

onMounted(() => {
  animateText(t('home.welcome'));
});

watch(sound, async (newVal, oldVal) => {
  if (newVal != oldVal) {
    noSound.value = true;
    showButton.value = false;
    topValue.value = '50vh';
  }
})

watch(locale, (newLocale, oldLocale) => {
  if (newLocale != oldLocale) {
    animatedDescription.value = ''
    index.value = 0
    showButton.value = false;
    animateText(t('home.welcome'))
  }
});
</script>

<template>
  <v-container fluid class="pa-0" style="height: 100vh; width: 100vw;">
    <v-card style="height: 100%; width: 100%; border-radius: 0px;"
      :image="width < 1200 ? '' : (width < 1220 ? euLessResolution : eu)"
      :style="width < 1200 ? { background: '#0E47A1', background: 'radial-gradient(at center, #0E47A1, #1E1D1D)' } : {}">
      <div style="position: absolute; top: 2vh; left: 100%; transform: translateX(-100%);">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn variant="plain" class="mr-3" v-bind="props" style="background: none !important;">
              <img :src="locale == 'pt' ? pt : en" alt="social.description"
                :style="width > 1040 ? { maxWidth: '30px' } : { maxWidth: '30px' }">
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-if="locale === 'pt'">
              <v-btn @click="changeLanguage('en')">
                <img src="../assets/en-us.png" alt="social.description"
                  :style="width > 1040 ? { maxWidth: '30px' } : { maxWidth: '30px' }" />
              </v-btn>
            </v-list-item>

            <v-list-item v-if="locale === 'en'">
              <v-btn @click="changeLanguage('pt')">
                <img src="../assets/pt-br.png" alt="social.description"
                  :style="width > 1040 ? { maxWidth: '30px' } : { maxWidth: '30px' }" />
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>

      <v-card-title class="text-h1 text-center text-uppercase" :class="width < 500 ? 'text-h3 !important' : 'none'"
        style="position: absolute; max-width: 50%; color: white; font-weight: 200;" :style="{
          top: width < 400 ? '12vh' : (width < 500 ? '12vh' : (width < 1200 ? '10vh' : '20vh')),
          left: width < 1200 ? '50%' : '5vw',
          transform: width < 1200 ? 'translate(-50%, -50%)' : 'none',
          minWidth: width < 1200 ? '100%' : '50%',
        }">
        Patrick
      </v-card-title>

      <v-card-subtitle class="text-body-2 text-center text-uppercase pt-0"
        :class="width < 500 ? 'text-caption !important' : 'none'"
        style="position: absolute; max-width: 50%; color: white; font-weight: 200;" :style="{
          top: width < 400 ? '17vh' : (width < 500 ? '16vh' : (width < 1200 ? '16vh' : '35vh')),
          left: width < 1200 ? '50%' : '5vw',
          transform: width < 1200 ? 'translate(-50%, -50%)' : 'none',
          minWidth: width < 1200 ? '100%' : '50%',
        }">
        {{ t('home.subtitle') }}
      </v-card-subtitle>

      <div class="rounded-circle border-md" v-if="width < 1200"
        style="position: absolute; top: 22vh; left: 50%; transform: translateX(-50%);" :style="{
          top: width < 400 ? '20vh' : (width < 500 ? '18.5vh' : (width < 1200 ? '20vh' : '')),
        }">
        <v-img :width="width < 400 ? 200 : 320" :height="width < 400 ? 200 : 320" aspect-ratio="16/9" cover
          class="rounded-circle" src="../assets/euCircle.png"></v-img>
      </div>

      <v-card-text class="text-h5 text-uppercase" :class="width < 1200 ? 'text-center' : ''"
        style="position: absolute; max-width: 50%; color: white; padding: 20px; font-weight: 300; line-height: 1.5;"
        :style="{
          top: width < 400 ? '60vh' : (width < 500 ? '60vh' : (width < 1200 ? '60%' : '40vh')),
          left: width < 1200 ? '50%' : '5vw',
          transform: width < 1200 ? 'translate(-50%, -50%)' : 'none',
          minWidth: width < 1200 ? '100%' : '',
          fontSize: width < 600 ? '14px !important' : (width < 1200 ? '14px !important' : '20px !important')
        }">
        {{ animatedDescription }}
      </v-card-text>

      <v-card-actions :style="{
        top: width < 400 ? '67vh' : (width < 1200 ? '65vh' : (width < 1920 ? '53vh' : topValue)),
        left: width < 1200 ? '50%' : '5vw',
        width: width < 1200 ? '85vw' : '50%',
        padding: '20px',
        fontSize: '1vw',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        transform: width < 1200 ? 'translateX(-50%)' : ''
      }">
        <v-container class="px-0" :style="width < 1200 ? { minWidth: '50vw' } : {}">
          <v-row>
            <v-col cols="12" class="w-100 pl-0">
              <span v-if="showButton == true" class="d-flex justify-center text-white" :style="{
                fontSize: width < 500 ? '2.5vw' : (width < 1200 ? '2vw' : '16px'),
                fontWeight: 300
              }">
                {{ t('home.music') }}
              </span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" :class="width < 990 ? 'py-0' : ''">
              <v-btn v-if="showButton == true" rounded="lg" color="#0d47a1" @click="soundDialog"
                style="background-color: white; min-height: 50px; font-size: 15px; width: 100%;"
                :style="width < 990 ? { fontSize: '15px' } : {}">
                {{ t('home.buttons.confirm') }}
              </v-btn>
            </v-col>
            <v-col cols="6" :class="width < 990 ? 'py-0' : ''">
              <v-btn v-if="showButton == true" rounded="lg" color="#0d47a1" @click="noSoundDialog"
                style="background-color: white; min-height: 50px; font-size: 15px; width: 100%;"
                :style="width < 990 ? { fontSize: '15px' } : {}">
                {{ t('home.buttons.cancel') }}
              </v-btn>
            </v-col>
            <v-col cols="12" class="mx-auto" style="display: flex; justify-content: center;">
              <v-btn v-if="noSound == true" rounded="lg" color="#0d47a1" to="/aboutme"
                style="background-color: white; min-height: 50px; font-size: 15px; width: 50%;"
                :style="width < 990 ? { fontSize: '15px' } : {}">
                {{ t('home.buttons.details') }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-card-actions>

      <v-dialog v-model="sound" style="max-height: 700px; max-width: 700px" transition="dialog-bottom-transition">
        <v-card>
          <iframe width="100%" height="344" src="https://www.youtube.com/embed/IxzSRhke-mA?autoplay=1&start=44"
            title="MOÇA SAI DA SACADA, PF" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen>
          </iframe>
        </v-card>
      </v-dialog>
    </v-card>
  </v-container>
</template>

<style scoped>
.myFont {
  @font-face {
    font-family: 'Helvetica';
    src: url('../fonts/Helvetica.ttf') format('truetype');
  }

  font-family: 'Helvetica',
  sans-serif;
  font-size: 28px;
}

.myFont2 {
  font-family: 'Finger Paint', cursive;
  font-size: 20px;
}

.v-divider {
  color: white;
}

.letter {
  display: inline-block;
  white-space: pre;
}

.text-black {
  color: black;
}

.v-btn:hover,
.v-btn:active,
.v-btn:focus {
  background-color: #0d47a1 !important;
  color: white !important;
  transform: scale(1.05);
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out;
}

.v-list-item .v-btn:hover,
.v-btn:active,
.v-btn:focus {
  background-color: none !important;
}

.v-btn--variant-elevated {
  box-shadow: none !important;
}

.v-list .v-list-item .v-btn:hover {
  background: none !important;
}
</style>
