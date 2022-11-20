/*
 * @Author: chenxyzj 26920259+chenxyzj@users.noreply.github.com
 * @Date: 2022-11-19 16:29:33
 * @LastEditors: chenxyzj 26920259+chenxyzj@users.noreply.github.com
 * @LastEditTime: 2022-11-19 16:32:40
 * @FilePath: /vuetify/vue3-apexcharts/vue3-apexcharts/src/main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
import VueApexCharts from "vue3-apexcharts";
import App from './App.vue'

import './assets/main.css'

createApp(App).use(VueApexCharts).mount('#app')
