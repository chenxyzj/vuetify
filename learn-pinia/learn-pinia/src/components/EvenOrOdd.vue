<template>
    <div class="even-odd">
        This count is {{ storeCounter.evenOrOdd }}
    </div>
</template>

<script setup>
    import {useCounterStore} from '@/stores/counter'
    const storeCounter = useCounterStore()
</script>