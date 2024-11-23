<script setup>
import { onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useDisplay } from 'vuetify';
import eu from '../assets/euBackground.png';

const router = useRouter();
const { width } = useDisplay()
const description = 'Desenvolvedor Fullstack com experiência prática em soluções inovadoras para sistemas. Apaixonado por tecnologia, busco agregar valor aos projetos por meio da inovação e eficiência.';
const animatedDescription = ref('');
const showButton = ref(false);
const sound = ref(false);
const noSound = ref(false);
const topValue = ref('45vh');
const soundDialog = () => sound.value = true;
const noSoundDialog = () => {
  router.push('/aboutme')
}

onMounted(() => {
  let index = 0;

  function animateText() {
    if (index < description.length) {
      animatedDescription.value += description[index];
      index++;
      setTimeout(animateText, 20);
    } else {
      showButton.value = true;
    }
  }
  animateText();
});

watch(sound, async (newVal, oldVal) => {
  if (newVal != oldVal) {
    noSound.value = true;
    showButton.value = false;
    topValue.value = '37vh';
  }
})
</script>

<template>
  <v-container fluid class="pa-0" style="height: 100vh; width: 100vw;">
    <v-card style="height: 100%; width: 100%; border-radius: 0px;" :image="width < 800 ? '' : eu"
      :style="width < 960 ? { background: 'linear-gradient(to right, rgba(13, 71, 161, 1), rgba(255, 255, 255, 0.9))' } : {}">
      <div
        style="position: relative; background: linear-gradient(to bottom, rgba(57, 0, 255, 0.4), rgba(0, 0, 0, 0.5))">

        <v-card-title class="text-uppercase text-h2"
          style="position: absolute; top: 3vh; left: 0; width: 100%; color: white; text-align: center; padding: 20px; font-weight: 300;">
          Patrick
        </v-card-title>

        <v-card-subtitle class="text-body-2 text-uppercase"
          style="position: absolute; top: 11vh; left: 0; width: 100%; color: white; text-align: center; padding: 20px; font-weight: 300;"
          :style="width < 800 ? { top: '12vh', } : {}">
          Desenvolvedor FullStack
        </v-card-subtitle>
      </div>

      <div class="rounded-circle border-md border-white" v-if="width < 800"
        style="position: absolute; top: 20vh; left: 50%; transform: translateX(-50%);">
        <v-img :width="300" :height="300" aspect-ratio="16/9" cover class="rounded-circle"
          src="../assets/euCircle.png"></v-img>
      </div>

      <v-card-text class="text-h5 text-uppercase" :class="width < 800 ? 'text-center' : ''"
        style="position: absolute; top: 30vh; left: 5vw; max-width: 50%; color: white; padding: 20px; font-weight: 300; line-height: 1.5;"
        :style="{
          top: width < 500 ? '63%' : (width < 800 ? '60%' : '30vh'),
          left: width < 800 ? '50%' : '5vw',
          transform: width < 800 ? 'translate(-50%, -50%)' : 'none',
          minWidth: width < 800 ? '100%' : '',
          fontSize: width < 500 ? '14px !important' : (width < 800 ? '20px !important' : '')
        }">
        {{ animatedDescription }}
      </v-card-text>

      <v-card-actions :style="{
        top: width < 500 ? '68%' : (width < 800 ? '65vh' : (width < 1920 ? '58vh' : topValue)),
        left: width < 800 ? '50%' : '5vw',
        width: width < 800 ? '85vw' : '50%',
        padding: '20px',
        fontSize: '1vw',
        textTransform: 'uppercase',
        display: 'flex',
        justifyContent: 'center',
        position: 'absolute',
        transform: width < 800 ? 'translateX(-50%)' : ''
      }">
        <v-container :style="width < 800 ? { minWidth: '50vw' } : {}">
          <v-row>
            <v-col cols="12" class="w-100">
              <span v-if="showButton == true" class="d-flex justify-center text-white" :style="{
                fontSize: width < 500 ? '2.5vw' : (width < 800 ? '2vw' : '16px')
              }">
                Gostaria de ouvir uma música para relaxar antes de continuarmos?
              </span>

            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" :class="width < 800 ? 'py-0' : ''">
              <v-btn v-if="showButton == true" color="#0d47a1" @click="soundDialog"
                style="background-color: white; min-height: 50px; font-size: 15px; width: 100%;"
                :style="width < 800 ? { fontSize: '15px' } : {}">
                sim
              </v-btn>
            </v-col>
            <v-col cols="6" :class="width < 800 ? 'py-0' : ''">
              <v-btn v-if="showButton == true" color="#0d47a1" @click="noSoundDialog"
                style="background-color: white; min-height: 50px; font-size: 15px; width: 100%;"
                :style="width < 800 ? { fontSize: '15px' } : {}">
                não
              </v-btn>
            </v-col>
            <v-col cols="12" class="mx-auto" style="display: flex; justify-content: center;">
              <v-btn v-if="noSound == true" color="#0d47a1" to="/aboutme"
                style="background-color: white; min-height: 50px; font-size: 15px; width: 50%;"
                :style="width < 800 ? { fontSize: '15px' } : {}">
                Saiba mais
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
</style>
