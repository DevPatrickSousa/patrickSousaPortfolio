<template>
    <v-container class="fill-height ">
    <v-responsive class="d-flex align-center text-center fill-height ">
        <v-row class="d-flex align-center justify-center">
            <v-col cols="auto">
    <v-hover   v-slot="{ isHovering, props }" open-delay="150">
            <v-btn color="black" v-bind="props" :elevation="isHovering ? 8 : 2" :class="{ 'on-hover': isHovering }" size="small"
              rounded="pill"  width="210px" height="30px" variant="outlined" to="/aboutme">
              <span class="text-white" >{{ buttonText }}</span>
              <v-dialog v-model="dialog" activator="parent" transition="dialog-bottom-transition" overlay-color="black">
        <v-card height="127" >
          <v-card-text>
            <div class="d-flex justify-center align-center text-center">
                <span ><strong>{{ dialogText0 }} <br> {{ dialogText1 }}</strong></span>
                
            </div>
            
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
              
            </v-btn>
            
          </v-hover>
        </v-col>
        </v-row>
        </v-responsive>
  </v-container>
    </template>
    
    
    <script>
    
    
    export default{
        data(){
            return{
              buttonText: 'see more',
              dialog: false
            }
        },
        props:{
            dialogText0: String,
            dialogText1: String
        }
        
    }
        
    </script>
    
    <style>
    .v-btn--variant-outlined {
        border: thin solid white;
    }
    
      
    </style>