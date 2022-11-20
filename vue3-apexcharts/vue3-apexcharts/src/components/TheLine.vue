<!--
 * @Author: chenxyzj 26920259+chenxyzj@users.noreply.github.com
 * @Date: 2022-11-19 16:43:01
 * @LastEditors: chenxyzj 26920259+chenxyzj@users.noreply.github.com
 * @LastEditTime: 2022-11-20 00:31:39
 * @FilePath: /vuetify/vue3-apexcharts/vue3-apexcharts/src/components/TheLine.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div id="chart">
        <apexchart type="line" height="350" ref="chart" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>

<script>
export default {
    name: 'TheLine',
    // components: {
    //     apexchart: VueApexCharts,
    // },
    data() {
        return {
            series: [{
                data: data.slice()
            }],
            chartOptions: {
                chart: {
                    id: 'realtime',
                    height: 350,
                    type: 'line',
                    animations: {
                        enabled: true,
                        easing: 'linear',
                        dynamicAnimation: {
                            speed: 1000
                        }
                    },
                    toolbar: {
                        show: false
                    },
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth'
                },
                title: {
                    text: 'Dynamic Updating Chart',
                    align: 'left'
                },
                markers: {
                    size: 0
                },
                xaxis: {
                    type: 'datetime',
                    range: XAXISRANGE,
                },
                yaxis: {
                    max: 100
                },
                legend: {
                    show: false
                },
            },
        }
    },
    mounted: function () {
        var me = this
        window.setInterval(function () {
            getNewSeries(lastDate, {
                min: 10,
                max: 90
            })

            me.$refs.chart.updateSeries([{
                data: data
            }])
        }, 1000)

        // every 60 seconds, we reset the data to prevent memory leaks
        window.setInterval(function () {
            resetData()

            me.$refs.chart.updateSeries([{
                data
            }], false, true)
        }, 60000)
    },
}
</script>

<style lang="scss" scoped>

</style>