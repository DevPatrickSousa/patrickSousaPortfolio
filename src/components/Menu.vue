<script setup>
import pt from '../assets/pt-br.png'
import en from '../assets/en-us.png'
import { useI18n } from 'vue-i18n'
import { useDisplay } from 'vuetify'

const { locale, t } = useI18n()
const { width } = useDisplay()

const changeLanguage = (lang) => {
  locale.value = lang;
}
</script>

<template>
  <v-app-bar class="transparent-bar text-white" style="font-weight: 300;" :elevation="0">
    <div class="d-flex text-white justify-space-between align-center" style="width: 100%;">
      <div></div>

      <div class="d-flex text-white justify-center align-center" style="flex-grow: 1;" >
        <v-btn to="/" variant="plain" :style="width < 500 ? {fontSize: '12px !important'} : {}">{{ t('menu.firstRoute') }}</v-btn>
        <v-btn to="/aboutme" variant="plain" :style="width < 500 ? {fontSize: '12px !important'} : {}">{{ t('menu.secondRoute') }}</v-btn>
        <v-btn to="/contact" variant="plain" :style="width < 500 ? {fontSize: '12px !important'} : {}">{{ t('menu.thirdRoute') }}</v-btn>
      </div>

      <div class="pr-3">
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props">
              <img :src="locale == 'pt'? pt : en" alt="social.description"
                :style="width > 1040 ? { maxWidth: '30px' } : { maxWidth: '30px' }">
            </v-btn>
          </template>

          <v-list>
            <v-list-item v-if="locale === 'en'">
              <v-btn @click="changeLanguage('pt')">
                <img src="../assets/pt-br.png" alt="social.description"
                  :style="width > 1040 ? { maxWidth: '30px' } : { maxWidth: '30px' }">
              </v-btn>
            </v-list-item>

            <v-list-item v-if="locale === 'pt'">
              <v-btn @click="changeLanguage('en')">
                <img src="../assets/en-us.png" alt="social.description"
                  :style="width > 1040 ? { maxWidth: '30px' } : { maxWidth: '30px' }">
              </v-btn>
            </v-list-item>
          </v-list>
        </v-menu>
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

</style>