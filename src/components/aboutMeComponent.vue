<template>
    <v-main class="bg-grey-darken-4 fill-height ">

        
        
        

        <div id="container" class="text-center">
            
            
        <div id="imgPlusButton" class=" mx-9  mt-16">
            
        <v-img
        id="me"
        width="270"
        height="260"
        :aspect-ratio="1"
        src="/src/assets/patrickSousa.jpg"
        cover class="ml-16">
        </v-img>

        

        <div id="descriptionSpan" class="text-justify ">
            <div id="button" class="my-5 ">
                <buttonComponent />
            </div>

        <span>
        Web development enthusiast, I've always had a certain affinity and curiosity in how a site was made, after joining the IT area,
        I already knew that WEB development would be the path i wanted to take and here i'm. Finally, I've been deepening in HTML, CSS, JavaScript and Vue.js.
        </span>
        
        


        <div id="skillsSpan" class="text-center my-3">
            <span>Skills</span>
        </div>
        

     <div>
        <v-row align="start" no-gutters style="max-height: 408px;">
        <v-col>
            <v-img width="24" height="24" :aspect-ratio="1" src="/src/assets/html-5.png"  class=" my-3 "></v-img>
            <ratingComponentThree/>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
            <v-img width="24" height="24" :aspect-ratio="1" src="/src/assets/css3.png"  class=" my-3 "></v-img>
            <ratingComponentThree/>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
            <v-img width="24" height="24" :aspect-ratio="1" src="/src/assets/javascript.png"  class=" my-3 "></v-img>
            <ratingComponentTwo/>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
            <v-img width="24" height="24" :aspect-ratio="1" src="/src/assets/vuejs.png"  class=" my-3 "></v-img>
            <ratingComponentTwo/>
        </v-col>

      </v-row>

      <v-row align="start" no-gutters style="max-height: 408px;">
        <v-col>
            <v-img width="24" height="24" :aspect-ratio="1" src="/src/assets/react.png"  class=" my-3 "></v-img>
            <ratingComponentTwo/>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
            <v-img width="24" height="24" :aspect-ratio="1" src="/src/assets/firebase.png"  class=" my-3 "></v-img>
            <ratingComponentTwo/>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
            <v-img width="24" height="24" :aspect-ratio="1" src="/src/assets/github.png"  class=" my-3 "></v-img>
            <ratingComponentTwo/>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
            <v-img width="24" height="24" :aspect-ratio="1" src="/src/assets/sql.png"  class=" my-3 "></v-img>
            <ratingComponentTwo/>
        </v-col>

      </v-row>
      
     </div>
      
     
      
      
            
            
        
        
        
    </div>
        </div>
        
    <br>
        
        
        </div>
        

    </v-main>


</template>

<script setup>
import buttonComponent from './buttonComponent.vue';
import ratingComponentThree from './ratingComponentThree.vue';
import ratingComponentTwo from './ratingComponentTwo.vue';
</script>


<style>
#me {
  border-radius: 130px;
}
#descriptionSpan{
    max-width: 408px;
    max-height: 136px;
}
#skillsSpan{
    max-width: 408px;
    
}
#container{
    width: 800px;
}
#button{
    margin-left: 75px;
}


</style>