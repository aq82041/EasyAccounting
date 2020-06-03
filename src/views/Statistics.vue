<template>
   <Layout>
       <div class="myTitle">
           <div class="my-text">轻松记账</div>
            <Tabs :data-source="typeList" :value.sync="type" class-prefix="type"/>
       </div>
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



    @Component({
        components: {Tabs},
    })
    export default class Statistics extends Vue {

        type = '-'
        typeList = typeList

        get recordList() {
            return (this.$store.state as myState).recordList
        }

        get resultList() {
            const result: {title: string;items: RecordItem[];total: number}[]=[]
            const {recordList} = this
            if(recordList.length===0){return  []}
            const newList=clone(recordList)
                .filter(r=>r.type===this.type)
                .sort((x,y)=>dayjs(y.date).valueOf()-dayjs(x.date).valueOf())
            if(newList.length===0){return []}
            result.push({title:dayjs(newList[0].date).format('YYYY-MM-DD'),items:[newList[0]],total:newList[0].amount})
            for(let i=1;i<newList.length;i++){
                const current=newList[i]
                const last=result[result.length-1]
                if(dayjs(current.date).isSame(dayjs(last.title),'day')){
                    last.items.push(current)
                    last.total+=current.amount
                }else{
                    result.push({title:dayjs(current.date).format('YYYY-MM-DD'),items:[current],total:current.amount})
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
                return day.format('M月M日')
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
        line-height:36px;
        padding:8px 16px;
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
        padding:200px 0;
        > .icon{
            width:80px;
            height:80px;
            color:#F9B3CB;
        }
        > .text{
            color:#999;
            font-size:14px;
        }
    }
    .myTitle {
        background: #F9B3CB;
        .my-text {
            font-family: "Droid Sans Mono Dotted", serif;
            font-size: 22px;
            text-align: center;
            padding: 4px 0;
            color:white;
        }
    }

</style>