<template>
    <div class="bg-[#F5F5F5] h-screen">
        <TheNavBar />
        <RouterView />
    </div>

</template>

<script setup lang="ts">
import TheNavBar from './components/TheNavBar.vue'
import { RouterView } from 'vue-router';
</script>


<style scoped>

</style>
