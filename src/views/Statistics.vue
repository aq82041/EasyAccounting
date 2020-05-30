<template>
   <Layout>
       <Tabs :data-source="typeList" :value.sync="type" class-prefix="type"/>
       <Tabs :data-source="intervalList" :value.sync="interval" class-prefix="interval"/>
   </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import Type from '@/components/MoneyComponents/Type.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components: {Tabs, Type},
    })
    export default class Statistics extends Vue{
        type='-'
        typeList=[
            {text:'支出',value:'-'},
            {text:'收入',value:'+'}
        ]
        interval='day'
        intervalList=[
            {text:'按天',value:'day'},
            {text:'按周',value:'week'},
            {text:'按月',value:'month'}
        ]

    }
</script>

<style lang="scss" scoped>
    ::v-deep .interval-tab{
        background:white;
        color:black;
        &.selected{
            background: #F9B3CB;
            color: white;
            &::after{
                display:none;
            }
        }

    }
    ::v-deep .type-tab{
        background:white;
        color:black;
        &.selected{
            background: #F9B3CB;
            color: white;
            &::after{
                display:none;
            }
        }

    }

</style>