<template>
    <div class="m-5">
        <div v-for="(item, index) in arr2" :key="index">
        {{ item }}
        </div>
        <div>objRef.name: {{ objRef.name }}</div>
        <div>objRef.inObj.name: {{ objRef.inObj.name }}</div>
        <div>objReactive.name: {{ objReactive.name }}</div>
        <div>objReactive.inObj.name: {{ objReactive.inObj.name }}</div>
        <button @click="addObjRef" class="bg-red-300 mr-5">addObjRef</button>
        <button @click="addObjReactive" class="bg-red-300">addObjReactive</button>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from 'vue'

const arr = ref<number[]>([1,2,3,4,5])
const arr2 = arr.value.map(item => {
    return item * 2
})

const objRef = ref({
    name: '1234',
    inObj: {
        name: '2234',
        num: 0
    },
})

const objReactive = reactive({
    name: '1234',
    inObj: {
        name: '2234',
        num: 0
    },
})

const addObjRef = () => {
    objRef.value.inObj.num++
}

const addObjReactive = () => {
    objReactive.inObj.num++
}

console.log(arr)
console.log(objRef)
console.log(objReactive)

watch(() => objRef.value.inObj.num,(newVal) => {
    console.log('objRef', newVal)
})

watch(() => objReactive.inObj.num,(newVal) => {
    console.log('objReactive', newVal)
})

setTimeout(() => {
    objRef.value.name = '2234'
    objReactive.name = '2234'
    objRef.value.inObj.name = '3234'
    objReactive.inObj.name = '3234'
},1000)

</script>

<style scoped>
</style>
    