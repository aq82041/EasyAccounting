<template>
   <Layout>
       <div class="tags">
           <router-link class="tag" v-for="tag in tags" :key="tag.id"
           :to=" `/labels/edit/${tag.id}` ">
               <span>{{tag.name}}</span>
               <Icon name="right"/>
           </router-link>

       </div>
       <div class="button-wrapper">
           <Button text="新增标签" @click="createTag" />
       </div>

   </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Button from '@/components/Button.vue';

    @Component({
        components: {Button},
    })
    export default class Labels extends Vue {
        tags=window.tagList
        createTag(){
            const name=window.prompt("请输入标签名")
            if(name){
                window.createTag(name)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tags{
        background:white;
        font-size:16px;
        padding-left:16px;
        > .tag{
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

    }
</style>