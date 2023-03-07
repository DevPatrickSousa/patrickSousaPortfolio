<template >
    <v-container class="fill-height "  >
      <v-responsive class="d-flex  text-center fill-height w-100 ">
        <div id="mainContainer" class="d-flex ">
        <div id="leftCard">
            <v-row class="d-flex flex-column ">
            <v-card  width="500" height="790" color="black" :style="'border: 1px solid white'" class="ml-3  mt-16" elevation="10">
            
            <div id="leftContainer" class="d-flex flex-column  ">
                
            <div id="imgStyle" class="d-flex justify-center mt-4">
            
            <v-img
            id="me"
            max-width="270"
            max-height="260"
            :aspect-ratio="1"
            src="/src/assets/patrickSousa.jpg"
            cover
            >
            </v-img>
            </div>
            
            <div class="">
                <buttonComponentDownload buttonText='Download CV'/>
            </div>
            
            
    
            <v-col cols="auto">
            <div id="description" class="text-center my-3">
                <span>
            Web development enthusiast, I've always had a certain affinity and curiosity in how a site was made, after joining the IT area,
            I already knew that WEB development would be the path i wanted to take and here i'm. Finally, I've been deepening in HTML, CSS, JavaScript and Vue.js.
                </span>
            </div>
            </v-col>
    
            <v-col cols="auto">
            <div  class="text-center my-3">
                <span>Skills</span>
            </div>
            </v-col>
            
         
        <div id="icons">
        
         <v-container  class="text-center" >
            <v-row no-gutters  class="" >
                
            <v-col cols="auto">
                <v-img  id="imgTeste" width="24" height="24" :aspect-ratio="1" src="/src/assets/html-5.png"  class="ml-11 my-3 "></v-img>
                <ratingComponentThree/>
            </v-col>
            <v-col cols="auto">
                <v-img id="imgTeste" width="24" height="24" :aspect-ratio="1" src="/src/assets/css3.png"  class="ml-11 my-3 "></v-img>
                <ratingComponentThree/>
            </v-col>
            <v-col  cols="auto"  >
                <v-img id="imgTeste" width="24" height="24" :aspect-ratio="1" src="/src/assets/javascript.png"  class="ml-11 my-3 "></v-img>
                <ratingComponentTwo/>
            </v-col> 
            <v-col  cols="auto" >
                <v-img id="imgTeste" width="24" height="24" :aspect-ratio="1" src="/src/assets/vuejs.png"  class="ml-11 my-3 "></v-img>
                <ratingComponentTwo/>
            </v-col>
            <v-col cols="auto" >
                <v-img id="imgTeste" width="24" height="24" :aspect-ratio="1" src="/src/assets/react.png"  class="ml-11 my-3 "></v-img>
                <ratingComponentTwo/>
            </v-col>
            <v-col cols="auto" >
                <v-img id="imgTeste" width="24" height="24" :aspect-ratio="1" src="/src/assets/firebase.png"  class="ml-11 my-3 "></v-img>
                <ratingComponentTwo/>
            </v-col>
            <v-col cols="auto"  >
                <v-img id="imgTeste" width="24" height="24" :aspect-ratio="1" src="/src/assets/github.png"  class="ml-11 my-3 "></v-img>
                <ratingComponentTwo/>
            </v-col>
            <v-col cols="auto" >
                <v-img id="imgTeste" width="24" height="24" :aspect-ratio="1" src="/src/assets/sql.png"  class="ml-11 my-3 "></v-img>
                <ratingComponentTwo/>
            </v-col>
            </v-row>
        </v-container>
        
         </div>
        
        </div>
    
        </v-card>
    </v-row>
        </div>
        
        <v-row no-gutters class="d-flex align-center justify-center mt-14"> 
        <div>
            <div id="rightContainer" class="text-center text-white">
                <div id="aboutMeText" class="mb-14">
                    <span>About me</span>
                </div>
              
         <div id="cards">
            <v-row no-gutters class="d-flex align-center text-center ">
                <v-col cols="auto" >
            <v-card id="educationCard" class="d-flex justify-center  align-center text-center  rounded-xl  my-2 ml-sm-5" width="240" height="455px" color="black" :style="'border: 1px solid white'" elevation="6">
                <v-card-text>
                    <span>EDUCATION</span>  
                </v-card-text>
            </v-card>
            </v-col>
            <v-col cols="auto" >
            <v-card id="experienceCard" class="d-flex justify-center align-center text-center  rounded-xl  my-2 ml-sm-5" width="240" height="455px" color="black" :style="'border: 1px solid white'" elevation="6">
                <v-card-text>
                    <span>EXPERIENCE</span>  
                </v-card-text>
            </v-card>
            </v-col>
            <v-col cols="auto" >
            <v-card id="languagesCard" class="d-flex justify-center align-center text-center  rounded-xl  my-2 ml-sm-5" width="240" height="455px" color="black" :style="'border: 1px solid white'" elevation="6">
                <v-card-text>
                    <span>LANGUAGES</span>   
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
         </div>
         
         <div id="cardContainer">
         <v-row no-gutters class="d-flex align-center justify-center text-center ">
            <v-col cols="auto" class="" id="btn1">
            <buttonComponentDialog class="" id="btn1Text"
            dialogText0='FATEC - Analysis and Development of Systems - 2020/present'
            dialogText1='SENAI - Electromechanical Technician - 2018/2019'
            />
            </v-col>
            <v-col cols="auto" class="" id="btn2">
            <buttonComponentDialog id="btn2Text"
            dialogText0='Prefeitura de Santana de Parnaíba - Network Infrastructure internship - 2022/2022'
            dialogText1='Prefeitura de Santana de Parnaíba - Service Desk internship - 2021/2022'                                      
            />
            </v-col>
            <v-col cols="auto" id="btn3">
            <buttonComponentDialog class="" id="btn3Text"
            dialogText0='Portuguese - Native'
            dialogText1='English - Intermediary'  
            />
            </v-col>
        </v-row>
         </div>
         <v-col cols="auto" class="d-flex justify-center align-center  text-center  mb-4">
            <a href="https://www.github.com/DevPatrickSousa" target="_blank" class="text-white">Click here to see more details on my github.</a>
        </v-col>
        </div>
    
        </div>
    </v-row>
         
        </div>
        
      </v-responsive>
        
    </v-container>

        


  </template>
  
  <script setup>

import buttonComponentDownload from './buttonComponentDownload.vue';
  import buttonComponentDialog from './buttonComponentDialog.vue';
  import ratingComponentThree from './ratingComponentThree.vue';
  import ratingComponentTwo from './ratingComponentTwo.vue';
  </script>

<script>
  import { useDisplay } from 'vuetify'

  export default {
    setup () {
      // Destructure only the keys we want to use
      const {  mdAndUp } = useDisplay()

      return {  mdAndUp }
    }
  }
</script>
  
  
  <style>
  .v-main{
    background-color: #212121;
  }
  #me{
    border-radius: 130px;
    
  }
  #description{
    font-size: 13px;
  }
  a{
    text-decoration: none;
    color: #000000
  }
  a:hover{
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
    filter: drop-shadow(15px 10px 5px rgba(0,0,0,.5));
}
#cardContainer .v-row{
    margin: 0;
  }

  @media screen and (max-width: 700px){
   #leftCard .v-card{
        max-width: 145px;
        max-height: 535px;
    }
    #cards{
        margin-left: 20px;
    }
    #cards .v-card{
        max-width: 72px;
        max-height: 200px;
        
    }
    #cards .v-card span{
        font-size: 7px;
        
    }
    #cardContainer #btn1{
        max-width: 94px;
        max-height: 530px;
    }
    #btn1Text span{
        font-size: 6px;
    }
    #cardContainer #btn2{
        max-width: 94px;
        max-height: 530px;
    }
    #btn2Text span{
        font-size: 7px;
    }
    #cardContainer #btn3{
        max-width: 94px;
        max-height: 530px;
    }
    #btn3Text span{
        font-size: 7px;
    }
    #educationCard{
        margin-right: 20px;
    }
    #experienceCard{
        margin-right: 20px;
    }
    
  }

  @media screen and (min-width: 700px){
    #leftCard .v-card{
        max-width: 500px;
        min-height: 840px;
    }
    #cards .v-card{
        max-width: 155px;
        max-height: 370px;
        
    }
    #cardContainer #btn1{
        max-width: 180px;
        max-height: 530px;
    }
    #btn1Text span{
        font-size: 6px;
    }
    #cardContainer #btn2{
        max-width: 180px;
        max-height: 530px;
    }
    #btn2Text span{
        font-size: 7px;
    }
    #cardContainer #btn3{
        max-width: 180px;
        max-height: 530px;
    }
    #btn3Text span{
        font-size: 7px;
    }
    

  }
  @media screen and (min-width: 1280px){
    #leftCard .v-card{
        max-width: 482px;
        max-height: 535px;
        
    }
    
    #cards .v-card{
        max-width: 192px;
        max-height: 420px;
        
    }
    #cards .v-card span{
        font-size: 12px;
        
    }
    #cardContainer #btn1{
        max-width: 225px;
        max-height: 530px;
        
        
    }
    #btn1Text span{
        font-size: 10px;
    }
    #cardContainer #btn2{
        max-width: 225px;
        max-height: 530px;
        margin-left: 10px;
    }
    #btn2Text span{
        font-size: 10px;
    }
    #cardContainer #btn3{
        max-width: 225px;
        max-height: 530px;
        margin-left: 10px;
    }
    #btn3Text span{
        font-size: 10px;
    }
    #educationCard{
        margin-right: 20px;
    }
    #experienceCard{
        margin-right: 20px;
    }
    
  }

  @media screen and (min-width: 1920px){
    #leftCard .v-card{
        max-width: 482px;
        max-height: 535px;
        
    }
    
    #cards .v-card{
        max-width: 240px;
        max-height: 455px;
        
    }
    #cards .v-card span{
        font-size: 16px;
        
    }
    #cardContainer #btn1{
        max-width: 268px;
        max-height: 530px;
        padding: 0;
        margin: 0;
        margin-left: 5px;
    }
    #btn1Text span{
        font-size: 12px;
    }
    #cardContainer #btn2{
        max-width: 268px;
        max-height: 530px;
        padding: 0;
        margin: 0;
        margin-left: 15px;
    }
    #btn2Text span{
        font-size: 12px;
    }
    #cardContainer #btn3{
        max-width: 268px;
        max-height: 530px;
        padding: 0;
        margin: 0;
        margin-left: 15px;
    }
    #btn3Text span{
        font-size: 12px;
    }
    
    

  }
  

    

  </style>
  