<template>
<v-hover  v-slot="{ isHovering, props }" open-delay="150">
        <v-btn color="black" v-bind="props" :elevation="isHovering ? 8 : 2" :class="{ 'on-hover': isHovering }" size="small"
          rounded="pill"  class="mt-4" width="167px" height="34px" variant="outlined" to="/aboutme">
          <span  class="text-white">{{ buttonText }}</span>
          
        </v-btn>
      </v-hover>
</template>


<script >


export default{
    data(){
        return{
            buttonText: 'see more'
        }
    }
    
}
</script>

<style>
.v-btn--variant-outlined {
    border: thin solid white;
}

  
</style>