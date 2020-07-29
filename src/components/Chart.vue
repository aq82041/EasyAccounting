<template>
    <div class="chart-wrapper" ref="chart">
        <div class="wrapper" ref="wrapper"></div>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';
    import echarts from 'echarts'
    import EChartOption = echarts.EChartOption;
    import ECharts = echarts.ECharts;

    @Component
    export default class Chart extends Vue {
        @Prop() options?: EChartOption
        myChart?: ECharts
        mounted(){
            const div=this.$refs.chart as HTMLDivElement
            div.scrollLeft=div.scrollWidth
            if(this.options===undefined){
                return console.error('options为空')
            }
            this.myChart=echarts.init(this.$refs.wrapper as HTMLDivElement)
            this.myChart.setOption(this.options)

        }
        @Watch('options')
        onOptionsChange(newValue: EChartOption){
            this.myChart!.setOption(newValue)
        }

        }
</script>

<style lang="scss" scoped>
    .wrapper{
        height:30vh;
        width:420%;
    }
    .chart-wrapper{
        overflow:auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>