<template>
    <section class="loginLayout w-full flex-center-center h-[calc(100vh-50px)] bg-cover bg-center animate-animateBg" :style="{ backgroundImage: `url(${bgImage})`}">
        <div class="relative w-[400px] h-[450px] bg-red-500 rounded-[20px] flex-center-center border-white border-2 border-opacity-50 bg-transparent backdrop-blur-lg sm:border-none">
            <form action="" class="sm:w-[290px]">
                <h2 class="pb-5 text-4xl text-white text-center">Login</h2>
                <div class="group relative text-white flex w-[310px] my-8 border-b-white border-b-2">
                    <span class="absolute right-2 bottom-1 text-white text-xl">
                        <img class="mr-1" src="@/assets/loginLayout/mail.png" alt="">
                    </span>
                    <input type="text" required class="input w-full mb-2 ml-2 pr-11 h-1/2 bg-transparent border-none outline-none text-white peer">
                    <label for="" class="absolute top-1/2 -translate-y-1/2 left-2 transition-all duration-200 group-focus-within:-top-4 peer-valid:-top-4">Email</label>
                </div>
                <div class="group relative text-white flex w-[310px] mb-4 border-b-white border-b-2">
                    <span class="absolute right-2 bottom-1 text-white text-xl">
                        <img class="mr-1" src="@/assets/loginLayout/lock.png" alt="">
                    </span>
                    <input type="password" required class="input w-full mb-2 ml-2 pr-11 h-1/2 bg-transparent border-none outline-none text-white peer">
                    <label for="" class="absolute top-1/2 -translate-y-1/2 left-2 transition-all duration-200 group-focus-within:-top-4 peer-valid:-top-4">Password</label>
                </div>
                <div class="mr-4 flex justify-between">
                    <label class="text-white"><input type="checkbox" class="mr-1"> Remember me</label>
                    <a href="#" class="text-white hover:underline">Forget Password?</a>
                </div>
                <button type="submit" class="mt-3 w-full h-10 bg-white rounded-full cursor-pointer text-black font-medium">Login</button>
                <div class="text-white text-center mt-6">
                    <p>Don't have an account? <a href="#" class="font-bold hover:underline">Register</a></p>
                </div>
            </form>
        </div>
    </section>
</template>
<script setup lang='ts'>
import bgImage from '@/assets/loginLayout/bg.jpg';
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
.loginLayout{
    font-family: 'Poppins', sans-serif;
}

/* section{
    background-image: url('@/assets/loginLayout/bg.jpg');
} */
</style>