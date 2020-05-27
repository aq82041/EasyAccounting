<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left"/>
            <span class="title">编辑标签</span>
            <span class="rightIcon"></span>
        </div>
        <div class="form-wrapper">
            <FormItem :value="tag.name" @update:value="UpdateTag" field-name="标签名" placeholder="请输入标签名"/>
        </div>
        <div class="button-wrapper">
            <Button @click="remove" text="删除标签"/>
        </div>

    </Layout>

</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListModel';
    import FormItem from '@/components/MoneyComponents/FormItem.vue';
    import Button from '@/components/Button.vue';
    @Component({
        components: {Button, FormItem}
    })
    export default class EditLabel extends Vue {
        tag?: {id: string;name: string}=undefined
        created(){
            const id=this.$route.params.id
            tagListModel.fetch()
            const tags=tagListModel.data
            const tag=tags.filter(tag=>tag.id===id)[0]
            if(tag){
                this.tag=tag
            }else{
                this.$router.replace('/404')
            }
        }
        UpdateTag(newName: string){
            if(this.tag){
                tagListModel.update(this.tag.id,newName)
            }
        }
        remove(){
            if(this.tag){
                tagListModel.remove(this.tag.id)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .navBar{
        font-size:16px;
        display:flex;
        padding:12px;
        align-items: center;
        justify-content: space-between;
        background: white;
        > .leftIcon{
        }
        > .title{
        }
        > .rightIcon{
            width:16px;
            height:16px;
        }
    }
    .form-wrapper{
        background: white;
        margin-top:10px;
    }
    .button-wrapper{
        text-align: center;
        margin-top:40px;
    }
</style>