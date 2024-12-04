<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const formRef = ref(null)
const formValid = ref(false)
const snackbar = ref(false)
const buttonLoading = ref(false)
const emailRules = ref([
  value => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (pattern.test(value)) return true
    return t('contact.form.rules.invalidEmail')
  },
])
const textRules = ref([
  value => {
    if (value && value.length >= 3) return true
    return t('contact.form.rules.minCharacters')
  }
])

const validate = async () => {
  const { valid } = await formRef.value.validate()

  if (valid) {
    buttonLoading.value = true
    const formElement = formRef.value.$el  // Acessa o DOM do formulário
    const formData = new FormData(formElement)

    try {
      const response = await fetch('https://formsubmit.co/ajax/patrickseven22@hotmail.com', {
        method: 'POST',
        body: formData,
      })

      if (response.ok) {
        snackbar.value = true
        formValid.value = true
        buttonLoading.value = false
      }
    } catch (error) {
      formValid.value = false
      snackbar.value = true
      buttonLoading.value = false
    }
  }
}
</script>

<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-form ref="formRef" @submit.prevent="validate">
        <v-text-field :rules="textRules" class="py-3 rounded-xl" hide-details="auto"
          :label="t('contact.form.formInputName')" type="text" name="name" clearable required rounded
          variant="outlined">
        </v-text-field>

        <v-text-field :rules="emailRules" class="py-3 rounded-xl" hide-details="auto"
          :label="t('contact.form.formInputEmail')" type="email" name="email" clearable required rounded
          variant="outlined">
        </v-text-field>

        <v-textarea :rules="textRules" class="py-3" :label="t('contact.form.formInputMessage')" name="message" clearable
          required rounded variant="outlined">
        </v-textarea>

        <v-btn :loading="buttonLoading" size="small" rounded="pill" color="#0E47A1" variant="outlined" class=""
          width="167px" height="34px" type="submit">
          <span>{{ t('contact.form.formButton') }}</span>
        </v-btn>

        <v-snackbar v-model="snackbar" :color="formValid ? 'success' : 'error'">
          <span v-if="formValid" class="text-center"><strong>{{ t('contact.form.snackBarText') }}</strong></span>
          <span v-else class="text-center"><strong>error</strong></span>
        </v-snackbar>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<style scoped>
button:hover {
  transition: all 0.5s ease;
  background-color: #17366A;
  color: white !important;
}

.v-text-field .v-field--no-label input, .v-text-field .v-field--active input {
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
}
</style>
