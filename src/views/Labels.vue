<template>
   <Layout>
       <ol class="tags">
           <li v-for="tag in tags" :key="tag.id">
               <span>{{tag.name}}</span>
               <Icon name="right"/>
           </li>

       </ol>
       <div class="button-wrapper"><button class="create" @click="createTag">新建标签</button></div>

   </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';
    tagListModel.fetch()
    @Component
    export default class Labels extends Vue {
        tags=tagListModel.data
        createTag(){
            const name=window.prompt("请输入标签名")
            if(name){
                const message=tagListModel.create(name)
                if(message==='duplicated'){
                    window.alert('标签名重复')
                }else{window.alert('添加成功')}
            }
        }

    }
</script>

<style lang="scss" scoped>
    .tags{
        background:white;
        font-size:16px;
        padding-left:16px;
        > li{
            display:flex;
            justify-content: space-between;
            align-items: center;
            padding:10px 0;
            border-bottom: 1px solid #e6e6e6;
            > svg{
                color:#666;
                margin-right:16px;
                width:16px;
                height:16px;
            }
        }
    }
    .button-wrapper{

        text-align: center;
        margin-top:40px;
        > .create{
            background:#F9B3CB;
            color:white;
            border:none;
            border-radius:4px;
            padding:8px;
        }
    }
</style>