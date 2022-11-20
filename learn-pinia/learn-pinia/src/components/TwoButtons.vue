<template>
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>    
</template>

<script setup>
    import {useCounterStore} from '@/stores/counter'
    const storeCounter = useCounterStore()
</script>

<style>
  .buttons button{
    font-size: 40px;
    margin: 10px;
  }
</style>