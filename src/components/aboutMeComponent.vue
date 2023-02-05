<template>
    <v-main class="bg-grey-darken-4 fill-height ">

        
        <div id="mainContainer" class="d-flex " >
            <v-card class="" height="850" width="500" color="black" :style="'border: 1px solid white'" elevation="10">
            <div id="leftContainer" class="d-flex flex-column mx-7 ">
                
            
            <div id="imgStyle">
            <v-img
            id="me"
            width="270"
            height="260"
            :aspect-ratio="1"
            src="/src/assets/patrickSousa.jpg"
            cover
            >
            </v-img>
            </div>
            
            <div id="button" class="my-5 d-flex justify-center ">
                <buttonComponentDownload buttonText='Download CV'/>
            </div>
            
            
    
            
    
            <div id="descriptionSpan" class=" ml-3">
             
                <span>
            Web development enthusiast, I've always had a certain affinity and curiosity in how a site was made, after joining the IT area,
            I already knew that WEB development would be the path i wanted to take and here i'm. Finally, I've been deepening in HTML, CSS, JavaScript and Vue.js.
                </span>
             
            
            </div>
            
    
            <div id="skillsSpan" class="text-center my-3">
                <span>Skills</span>
            </div>
            
            

         <div id="icons" class="text-center my-3 ml-3">
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
        </v-card>

         <div class="d-flex justify-center align-center mt-14">
            <div class="text-center">
                <div id="aboutMeText" class="ml-6 mb-14">
                    <span>About me</span>
                </div>
         <div id="cardContainer" class="d-flex justify-end align-center text-center ml-16" >
            <v-card  class="d-flex justify-center align-center text-center mr-6 rounded-xl" width="280px" height="455px" color="black" :style="'border: 1px solid white'" elevation="6">
                <v-card-text>
                    <span class="text-white">EDUCATION</span>  
                </v-card-text>
            </v-card>

            <v-card class="d-flex justify-center align-center text-center mr-6 rounded-xl" width="280px" height="455px" color="black" :style="'border: 1px solid white'" elevation="6">
                <v-card-text>
                    <span>EXPERIENCE</span>  
                </v-card-text>
            </v-card>
            <v-card class="d-flex justify-center align-center text-center mr-6 rounded-xl" width="280px" height="455px" color="black" :style="'border: 1px solid white'" elevation="6">
                <v-card-text>
                    <span>LANGUAGES</span>   
                </v-card-text>
            </v-card>
         </div>
         <div id="cardContainer" class="d-flex justify-end align-center ml-16 mx-2">
            <div class="mt-4 ml-14">
            <buttonComponentDialog
            dialogText0='FATEC - Analysis and Development of Systems - 2020/present'
            dialogText1='SENAI - Electromechanical Technician - 2018/2019'
            />
            </div>
            <div class="mt-4 ml-14">
            <buttonComponentDialog 
            dialogText0='Prefeitura de Santana de Parnaíba - Network Infrastructure internship - 2022/2022'
            dialogText1='Prefeitura de Santana de Parnaíba - Service Desk internship - 2021/2022'                                      
            />
            </div>
            <div class="mt-4 ml-13 mr-7">
            <buttonComponentDialog
            dialogText0='Portuguese - Native'
            dialogText1='English - Intermediary'  
            />
            </div>
         </div>
         <div id="githubText" class="d-flex justify-center align-center mt-14 text-center ml-16">
            <a href="https://www.github.com/DevPatrickSousa" target="_blank">Click here to see more details on my github.</a>
         </div>
        </div>
        
        </div>
        
         
        </div>
    </v-main>
    

</template>

<script setup>

import buttonComponentDownload from './buttonComponentDownload.vue';
import buttonComponentDialog from './buttonComponentDialog.vue';
import ratingComponentThree from './ratingComponentThree.vue';
import ratingComponentTwo from './ratingComponentTwo.vue';


</script>



<style>
#me {
  border-radius: 130px;
  max-width: 408px;
}
#skillsSpan{
    max-width: 408px;
    
}
#container{
    width: 800px;
}
#button{
    
    max-width: 408px;
}
#icons{
    max-width: 408px;
}
#descriptionSpan{
    max-width: 408px;
    max-height: 200px;
}
#mainContainer{
    max-height: 968px;
}
#leftContainer{
    margin-top: 100px;
    max-height: 500px;
    max-width: 100vw;
}

#cardContainer{
    position: relative;
    left: 200px;
}

#aboutMeText{
    position: relative;
    left: 200px;
}
#imgPlusButton{
    max-width: 408px;
}
#imgStyle{
    max-width: 408px;
    margin-left: 74px;
}
#githubText{
    position: relative;
    left: 200px;
}
a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

a:hover{
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
}

</style>