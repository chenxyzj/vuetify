<template>
  <div class="home">
    <TheCount />
    <TwoButtons />

    <hr>
    <EvenOrOdd />
    <hr>
    <TheInput />
  </div>
</template>

<script setup>
  import {useCounterStore} from '@/stores/counter'
  import TheCount from '../components/TheCount.vue'
  import TwoButtons from '../components/TwoButtons.vue';
  import EvenOrOdd from '../components/EvenOrOdd.vue';
  import TheInput from '../components/TheInput.vue';
</script>

