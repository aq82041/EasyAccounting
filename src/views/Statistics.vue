<template>
   <Layout>
       <Tabs :data-source="typeList" :value.sync="type" class-prefix="type"/>
       <Chart :options="chartOptions" />
       <ul v-if="resultList.length>0">
           <li v-for="(value,index) in resultList" :key="index">
               <h3 class="title">{{beautify(value.title)}}  <span>￥{{value.total}}</span></h3>
               <ul>
                   <li v-for="(item,index) in value.items" :key="index" class="record">
                       <span>{{item.tags[0] || '无'}}</span>
                       <span class="note">{{item.notes}}</span>
                       <span class="amount">{{type}}{{item.amount}}</span>
                   </li>
               </ul>
           </li>
       </ul>
       <div class="else" v-else>
           <Icon name="goCount"/>
           <div class="text">暂时没有记录，去记一笔吧~</div>
       </div>
   </Layout>
</template>

<script lang="ts">
    import Vue from 'vue'
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import typeList from '@/constant/typeList';
    import dayjs from 'dayjs';
    import clone from '@/lib/clone';
    import Chart from '@/components/Chart.vue'
    import _ from 'lodash'

    @Component({
        components: {Tabs ,Chart},
    })
    export default class Statistics extends Vue {

        type = '-'
        typeList = typeList

        get chartOptions(){
            const today=dayjs()
            let array=[],date
            for(let i=0;i<=29;i++){
                date=today.subtract(i,'day').format('YYYY-MM-DD')
                const item=_.find(this.resultList,{title:date})
                array.push({date:today.subtract(i,'day').format('M-D')
                    ,value:item? item.total:0})
            }
            array=array.reverse()
            return {
                xAxis: {
                    type: 'category',
                    data: array.map(obj=>obj.date),
                    axisTick:{
                        alignWithLabel:true
                    },
                    axisLine:{
                        lineStyle:{
                            color:'#666'
                        }
                    }
                },
                yAxis: {
                    type: 'value',
                    show:false
                },
                tooltip:{
                    show:true,
                    triggerOn:'click',
                    formatter: '{c}',
                    position:'top'
                },
                grid: {
                    left: 0,
                    top: 40,
                    right: 0,
                    bottom:40
                },
                series: [{
                    data: array.map(obj=>obj.value),

                    type: 'line',
                    symbolSize:10,
                    itemStyle:{
                        color:'#666'
                    },
                    symbol:'circle'
                }]

            }
        }

        get recordList() {
            return (this.$store.state as myState).recordList
        }

        get resultList() {
            const result: {title: string;items: RecordItem[];total: number}[]=[]
            const {recordList} = this
            if(recordList.length===0){return  []}
            const newList=clone(recordList)
                .filter(r=>r.type===this.type)
                .sort((x,y)=>dayjs(y.createdAt).valueOf()-dayjs(x.createdAt).valueOf())
            if(newList.length===0){return []}
            result.push({title:dayjs(newList[0].createdAt).format('YYYY-MM-DD'),items:[newList[0]],total:newList[0].amount})
            for(let i=1;i<newList.length;i++){
                const current=newList[i]
                const last=result[result.length-1]
                if(dayjs(current.createdAt).isSame(dayjs(last.title),'day')){
                    last.items.push(current)
                    last.total+=current.amount
                }else{
                    result.push({title:dayjs(current.createdAt).format('YYYY-MM-DD'),items:[current],total:current.amount})
                }
            }
            return result
        }

        beforeCreate() {
            this.$store.commit('fetchRecords')
        }
        beautify(string: string){
            const day=dayjs(string)
            const now=dayjs()
            if(day.isSame(now,'day')){
                return '今天'
            }else if(day.isSame(now.subtract(1,'day'),'day')){
                return '昨天'
            }else if(day.isSame(now.subtract(2,'day'),'day')){
                return '前天'
            }else if(day.isSame(now,'year')) {
                return day.format('M月D日')
            }else {
                return day.format('YYYY年M月D日')
            }
        }

    }
</script>

<style lang="scss" scoped>
    .title{
        padding:4px 16px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size:16px;
        color:#999;
    }
    .record{
        background: white;
        display:flex;
        justify-content: space-between;
        align-content: center;
        line-height:32px;
        padding:4px 16px;
        > .amount{

        }
    }
    .note{
        margin-right: auto;
        margin-left: 16px;
        color:#999;
    }
    .else{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding:120px 0;
        > .icon{
            width:80px;
            height:80px;
            color:rgb(76, 62, 98);
        }
        > .text{
            color:#999;
            font-size:14px;
        }
    }


</style>