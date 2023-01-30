<template>
    <v-main class="bg-grey-darken-4 fill-height">
        <div class="d-flex mt-2 justify-center text-center ">
            <span>Contact</span>
        </div>

        <div class="d-flex justify-center text-center">
            <v-card class="mt-16 rounded-xl " variant="outlined" width="1500" height="700">
                <div class="mt-10">
                    <img src="/src/assets/whatsapp.ico" alt="whatsApp" ALIGN=middle>
                    <span class="mx-7 mt-5">55 (11)94364-6430</span>
                    <img src="/src/assets/outlook.ico" alt="outlook" ALIGN=middle>
                    <span class="mx-7">patrickseven22@hotmail.com</span>
                </div>

                <div class="d-flex justify-center align-center text-center">
                    <v-card class="d-flex mt-16 rounded-xl  justify-center align-center  " width="900" height="510"
                        variant="outlined">
                        <form action="https://formsubmit.co/patrickseven22@hotmail.com" method="POST">
                            <v-responsive class="mx-auto" min-width="700">
                                <formComponent/>
                            </v-responsive>
                        </form>
                    </v-card>
                </div>
            </v-card>




        </div>




    </v-main>
</template>

<script setup>
import formComponent from './formComponent.vue';
</script>

<style>
#span-contact {
    height: 25px;

}

#span-number {
    height: 5px;
    width: 36px;
}

img {
    width: 48px;
    height: 48px;

}
</style>