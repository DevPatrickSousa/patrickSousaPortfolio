<template>
    <v-text-field 
    class="my-3" 
    hide-details="auto"
    label="Name"
    type="text"
    name="name"
    required>
    </v-text-field>

    <v-text-field 
    class="my-3" 
    hide-details="auto"
    label="Email"
    type="email"
    name="email"
    placeholder="exemplo@hotmail.com"
    required>
    </v-text-field>

    <v-textarea class="my-3" label="Message" name="message"></v-textarea>

    <v-hover v-slot="{ isHovering, props }" open-delay="150">
        <v-btn v-bind="props" :elevation="isHovering ? 8 : 2" :class="{ 'on-hover': isHovering }" size="small"
          rounded="pill" color="black" class="mt-4" width="167px" height="34px" outlined type="submit">
          <span><strong class="text-white">{{ spanText }}</strong></span>
          
        </v-btn>
      </v-hover>
</template>


<script>

export default{
    data(){
        return{
            spanText: "send"
        }
    }
}
</script>


<style>

</style>

