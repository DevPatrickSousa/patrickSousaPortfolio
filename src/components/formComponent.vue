<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height ">
      <v-form fast-fail ref="form" action="https://formsubmit.co/patrickseven22@hotmail.com" method="POST">
        <v-text-field :rules="textRules" class="my-3 rounded-xl" hide-details="auto" label="nome" type="text"
          name="name" clearable required rounded variant="outlined">
        </v-text-field>

        <v-text-field :rules="emailRules" class="my-3 rounded-xl border-thin" hide-details="auto" label="Email"
          type="email" name="email" clearable placeholder="example@hotmail.com" required rounded variant="outlined">
        </v-text-field>

        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_next" value="https://patrick-sousa.vercel.app/">

        <v-textarea :rules="textRules" class="my-3" label="Mensagem" name="message" clearable required rounded
          variant="outlined">
        </v-textarea>

        <v-btn size="small" rounded="pill" color="#7492C8" variant="outlined" class="" width="167px" height="34px"
          type="submit" @click="validate">
          <span class="">{{ spanText }}</span>
        </v-btn>

        <v-snackbar v-model="snackbar" color="success">
          <span class="text-center"><strong>{{ text }}</strong></span>
        </v-snackbar>
      </v-form>
    </v-responsive>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    spanText: "enviar",
    snackbar: false,
    text: "the form was sent successfully !!!",
    valid: true,
    emailRules: [
      value => !!value || 'Required.',
      value => (value || '').length <= 50 || 'Max 50 characters',
      value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    ],
    textRules: [
      value => !!value || 'Required.',
      value => (value && value.length >= 3) || 'Min 3 characters',
    ],

  }),

  methods: {
    async validate() {
      const { valid } = await this.$refs.form.validate()

      if (valid) this.snackbar = true
    },

  },
}
</script>

<style>
button:hover {
  transform: scale(1.03);
  transition: all 0.3s ease;
  background-color: #7492C8;
  color: white !important;
}
</style>