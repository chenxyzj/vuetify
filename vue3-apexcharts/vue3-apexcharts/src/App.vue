<!--
 * @Author: chenxyzj 26920259+chenxyzj@users.noreply.github.com
 * @Date: 2022-11-19 16:29:33
 * @LastEditors: chenxyzj 26920259+chenxyzj@users.noreply.github.com
 * @LastEditTime: 2022-11-19 16:48:10
 * @FilePath: /vuetify/vue3-apexcharts/vue3-apexcharts/src/App.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<script>
import TheChart from './components/TheChart.vue'
import TheLine from './components/TheLine.vue'
export default{
  name: 'App',
  components:{
    TheChart,
    TheLine
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
  </header>

  <main>
    <TheChart />
  </main>
  <div>
    <TheLine />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
