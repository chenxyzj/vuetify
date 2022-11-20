<template>
    <div class="counter">
     {{storeCount.count}}
    </div>
</template>

<script setup>
import {useCounterStore} from '@/stores/counter'
const storeCount = useCounterStore()
</script>

<style scoped>  .counter {
    font-size: 60px;
    margin: 20px;
  }
</style>