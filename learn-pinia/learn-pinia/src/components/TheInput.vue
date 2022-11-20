<template>
    <div>
        <input type="number" v-model="storeCounter.count">
    </div>
</template>

<script setup>
    import {useCounterStore} from '@/stores/counter'
    const storeCounter = useCounterStore()
</script>