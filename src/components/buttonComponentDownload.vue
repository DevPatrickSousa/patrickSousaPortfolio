<template>
    <v-hover v-slot="{ isHovering, props }" open-delay="150">
        <v-btn color="black" v-bind="props" :elevation="isHovering ? 8 : 2" :class="{ 'on-hover': isHovering }" size="small"
            rounded="pill" class="mt-4" width="250px" height="34px" variant="outlined" :href="href" download>
            <span class="text-white">{{ buttonText }}</span>
        </v-btn>
    </v-hover>
</template>
    
    
<script>

export default {
    data() {
        return {
            href: "patrickSousa.pdf"
        }
    },
    props: {
        buttonText: String
    }

}
</script>
    
<style>
.v-btn--variant-outlined {
    border: thin solid white;
}
</style>