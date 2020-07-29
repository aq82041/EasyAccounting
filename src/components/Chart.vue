<template>
    <div class="chart-wrapper" ref="chart">
        <div class="wrapper" ref="wrapper"></div>
    </div>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import echarts from 'echarts'
    import EChartOption = echarts.EChartOption;

    @Component
    export default class Chart extends Vue {
        @Prop() options?: EChartOption

        mounted(){
            const div=this.$refs.chart as HTMLDivElement
            div.scrollLeft=div.scrollWidth
            if(this.options===undefined){
                return console.error('options为空')
            }
            const myChart=echarts.init(this.$refs.wrapper as HTMLDivElement)
            myChart.setOption(this.options)
        }
    }
</script>

<style lang="scss" scoped>
    .wrapper{
        height:400px;
        width:420%;
    }
    .chart-wrapper{
        overflow:auto;
        &::-webkit-scrollbar {
            display: none;
        }
    }
</style>