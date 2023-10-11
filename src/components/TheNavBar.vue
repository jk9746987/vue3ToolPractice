<template>
    <header>
        <nav class="bg-black text-white h-[50px] flex items-center">
            <ul class="flex justify-between w-full h-full items-center">
                <li class="h-full flex items-center justify-center mx-3 w-20"><RouterLink to="/" class="w-20 text-center">首頁</RouterLink></li>
                <div class="flex h-full items-center justify-center relative mr-4 z-10">
                    <li class="group mx-3 w-20 text-center flex h-full items-center justify-center ">
                        <div>功能實作</div>
                        <ul class="hidden bg-black px-4 group-hover:flex group-hover:flex-col absolute top-[50px]">
                            <li class="text-center my-2 hover:text-yellow-400"><RouterLink to="/i18nPractice">i18n</RouterLink></li>
                            <li class="text-center my-2 hover:text-yellow-400"><RouterLink to="/i18nPractice">i18n</RouterLink></li>
                            <li class="text-center my-2 hover:text-yellow-400"><RouterLink to="/i18nPractice">i18n</RouterLink></li>
                            <li class="text-center my-2 hover:text-yellow-400"><RouterLink to="/i18nPractice">i18n</RouterLink></li>
                        </ul>
                    </li>
                    <li class="group mx-3 w-20 text-center flex h-full items-center justify-center ">
                        <div>切版相關</div>
                        <ul class="hidden bg-black px-4 group-hover:flex group-hover:flex-col absolute top-[50px]">
                            <li class="text-center my-2 hover:text-yellow-400"><RouterLink to="/loginLayout">loginLayout</RouterLink></li>
                            <li class="text-center my-2 hover:text-yellow-400"><RouterLink to="/loginLayout">loginLayout</RouterLink></li>
                            <li class="text-center my-2 hover:text-yellow-400"><RouterLink to="/loginLayout">loginLayout</RouterLink></li>
                            <li class="text-center my-2 hover:text-yellow-400"><RouterLink to="/loginLayout">loginLayout</RouterLink></li>
                        </ul>
                    </li>
                    <li class="">
                        icon
                    </li>
                </div>
            </ul>
        </nav>
    </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
<script setup lang='ts'></script>
<style scoped></style>