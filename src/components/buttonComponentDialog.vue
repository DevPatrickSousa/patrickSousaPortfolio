<template>
    <v-hover  v-slot="{ isHovering, props }" open-delay="150">
            <v-btn color="black" v-bind="props" :elevation="isHovering ? 8 : 2" :class="{ 'on-hover': isHovering }" size="small"
              rounded="pill"  class="mt-4" width="250px" height="34px" variant="outlined" to="/aboutme">
              <span class="text-white">{{ spanText }}</span>
              <v-dialog v-model="dialog" activator="parent">
        <v-card height="300">
          <v-card-text>
            <div class="d-flex justify-center align-center text-center">
                <span>{{ dialogText }}</span>
            </div>
            
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
              
            </v-btn>
          </v-hover>
    </template>
    
    
    <script>
    
    
    export default{
        data(){
            return{
                spanText: 'see more',
                dialog: false
            }
        },
        props:{
            dialogText: String
        }
        
    }
        
    </script>
    
    <style>
    .v-btn--variant-outlined {
        border: thin solid white;
    }
    
      
    </style>