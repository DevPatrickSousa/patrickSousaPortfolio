<template>
<v-hover v-slot="{ isHovering, props }" open-delay="150">
        <v-btn v-bind="props" :elevation="isHovering ? 8 : 2" :class="{ 'on-hover': isHovering }" size="small"
          rounded="pill" color="black" class="mt-4" width="167px" height="34px" outlined to="/aboutme">
          <span><strong class="text-white">{{ spanText }}</strong></span>
          
        </v-btn>
      </v-hover>
</template>


<script >


export default{
    data(){
        return{
            spanText: 'see more'
        }
    }
    
}
</script>

<style>

</style>