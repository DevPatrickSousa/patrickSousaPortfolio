<script setup>
import { onMounted, ref, watch } from 'vue';

const animatedDescription = ref('');
const showButton = ref(false);
const sound = ref(false);
const noSound = ref(false);
const topValue = ref('42vh');
const description = 'Desenvolvedor Fullstack com experiência prática em soluções inovadoras para sistemas. Apaixonado por tecnologia, busco agregar valor aos projetos por meio da inovação e eficiência.';

onMounted(() => {
  let index = 0;

  function animateText() {
    if (index < description.length) {
      animatedDescription.value += description[index];
      index++;
      setTimeout(animateText, 50);
    } else {
      showButton.value = true;
    }
  }
  animateText();
});

const soundDialog = () => sound.value = true;
const noSoundDialog = () => {
  showButton.value = false;
  noSound.value = true;
  topValue.value = '37vh';
}

watch(sound, async (newVal, oldVal) => {
  if (newVal != oldVal) {
    noSound.value = true;
    showButton.value = false;
    topValue.value = '37vh';
  }
})
</script>

<template>
  <v-card color="black" elevation="10" style="height: 100%; width: 100%; border-radius: 0;" image="../assets/euBackground.png">
    <div style="position: relative; background: linear-gradient(to bottom, rgba(57, 0, 255, 0.4), rgba(0, 0, 0, 0.5))">

      <v-card-title class="text-uppercase text-h2"
        style="position: absolute; top: 3vh; left: 0; width: 100%; color: white; text-align: center; padding: 20px; font-weight: 300;">
        Patrick
      </v-card-title>

      <v-card-subtitle class="text-body-2 text-uppercase"
        style="position: absolute; top: 11vh; left: 0; width: 100%; color: white; text-align: center; padding: 20px; font-weight: 300;">
        Desenvolvedor FullStack
      </v-card-subtitle>
    </div>

    <v-card-text class="text-h5 text-uppercase"
      style="position: absolute; top: 30vh; left: 5vw; max-width: 50%; color: white; padding: 20px; font-weight: 300; line-height: 1.5;">
      {{ animatedDescription }}
    </v-card-text>

    <v-card-actions
      :style="{ top: topValue, position: 'absolute', left: '5vw', width: '50%', padding: '20px', fontSize: '1vw', textTransform: 'uppercase', display: 'flex', justifyContent: 'center' }">
      <v-container>
        <v-row>
          <v-col cols="12">
            <span v-if="showButton == true" class="d-flex justify-center" style="font-size: 16px;">
              Gostaria de ouvir uma música para relaxar antes de continuarmos?
            </span>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <v-btn v-if="showButton == true" color="#0d47a1" @click="soundDialog"
              style="background-color: white; min-height: 50px; font-size: 15px; width: 100%;">
              sim
            </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn v-if="showButton == true" color="#0d47a1" @click="noSoundDialog"
              style="background-color: white; min-height: 50px; font-size: 15px; width: 100%;">
              não
            </v-btn>
          </v-col>
          <v-col cols="12" class="mx-auto" style="display: flex; justify-content: center;">
            <v-btn v-if="noSound == true" color="#0d47a1" to="/aboutme"
              style="background-color: white; min-height: 50px; font-size: 15px; width: 50%;">
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
</template>

<style scoped>
.v-main {
  background-color: #212121;
}

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
