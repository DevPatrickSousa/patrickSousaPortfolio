<template>
  <v-form fast-fail ref="form" action="https://formsubmit.co/patrickseven22@hotmail.com" method="POST">
    <v-responsive class="mx-auto" min-width="700">

      <v-text-field 
      :rules="textRules"
      class="my-3 text-white"
      hide-details="auto"
      label="Name"
      type="text"
      name="name"
      clearable 
      required>
      </v-text-field>

      <v-text-field 
      :rules="emailRules"
      class="my-3 text-white"
      hide-details="auto"
      label="Email"
      type="email"
      name="email"
      clearable
      placeholder="example@hotmail.com"
      required>
      </v-text-field>

      <input type="hidden" name="_captcha" value="false">
      <input type="hidden" name="_next" value="http://localhost:3000/contact">
      
      <v-textarea 
      :rules="textRules"
      class="my-3 text-white"
      label="Message"
      name="message"
      clearable
      required>
      </v-textarea>


      <v-btn 
      size="small"
      rounded="pill"
      color="black"
      class="mt-4"
      width="167px"
      height="34px"
      variant="outlined"
      type="submit"
      @click="validate">
      <span class="text-white">{{ spanText }}</span>
      </v-btn>

      <v-snackbar v-model="snackbar" color="success">
        <span class="text-white text-center"><strong>{{ text }}</strong></span>
      </v-snackbar>
    </v-responsive>
  </v-form>

</template>


<script>

export default {
  data: () => ({
    spanText: "send",
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
.v-btn--variant-outlined {
  border: thin solid white;
}
</style>

