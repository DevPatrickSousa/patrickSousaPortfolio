<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const changeLanguage = (lang) => {
  locale.value = lang; 
}
</script>

<template>
  <v-app-bar class="transparent-bar text-white" style="font-weight: 300;" :elevation="0">
    <div class="d-flex text-white justify-space-between align-center" style="width: 100%;">
      <div></div>

      <div class="d-flex text-white justify-center align-center" style="flex-grow: 1;">
        <v-btn to="/" variant="plain">Início</v-btn>
        <v-btn to="/aboutme" variant="plain">Sobre mim</v-btn>
        <v-btn to="/contact" variant="plain">Conecte-se</v-btn>
      </div>

      <div class="px-3">
        <v-btn-toggle v-model="locale">
          <v-btn @click="changeLanguage('pt')">
            <img src="../assets/pt-br.png" alt="social.description" 
              :style="width > 1040 ? { maxWidth: '30px' } : { maxWidth: '30px' }">
          </v-btn>

          <v-btn @click="changeLanguage('en')">
            <img src="../assets/en-us.png" alt="social.description" 
              :style="width > 1040 ? { maxWidth: '30px' } : { maxWidth: '30px' }">
          </v-btn>

        </v-btn-toggle>
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped>
.transparent-bar {
  background: none !important;
  box-shadow: none !important;
  border: none !important;
}

.v-btn-group .v-btn {
  background: none;
}
</style>