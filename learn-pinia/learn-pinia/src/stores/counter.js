import { defineStore } from 'pinia'

//// Setup Store
import { ref, computed } from 'vue'
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function increaseCount() {
    count.value ++
  }

  const decreaseCount = () => {
    count.value --
  }

  const evenOrOdd = computed(() => {
    if(count.value % 2 === 0) return 'even'
    else return 'odd' 
  })

  return {count,  evenOrOdd, increaseCount, decreaseCount}
})



//// Options Store
// export const useCounterStore = defineStore('counter',{
//   // state() {
//   //   return {
//   //     count: 0
//   //   }
//   // },

//   state: ()=>{
//     return {
//       count: 0
//     }
//   },
//   getters: {
//     evenOrOdd: (state) => {
//       if(state.count % 2 === 0 ) return 'even'
//       else return 'odd'
//     }
//   },
//   actions:{
//     increaseCount() {
//       this.count++
//     },
//     decreaseCount () {
//       this.count--
//     }
//   }
// })