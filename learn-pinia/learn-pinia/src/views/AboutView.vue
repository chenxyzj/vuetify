<template>
  <div class="about">
    <h1>About</h1>
    <div class="button">
      <button @click="storeCount.increaseCount">{{storeCount.count}}</button>
    </div>
  </div>
</template>

<script setup>
  import { useCounterStore } from '@/stores/counter';

  const storeCount = useCounterStore()
</script>

<style>
  button{
    font-size: 60px;
  }
</style>

