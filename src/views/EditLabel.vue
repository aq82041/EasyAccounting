<template>
    <Layout>
        <div class="navBar">
            <Icon class="leftIcon" name="left" @click="goBack"/>
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
    import FormItem from '@/components/MoneyComponents/FormItem.vue';
    import Button from '@/components/Button.vue';
    @Component({
        components: {Button, FormItem}
    })
    export default class EditLabel extends Vue {
        tag?: Tag=undefined
        created(){
            const id=this.$route.params.id
            if(window.findTag(id)){
                this.tag=window.findTag(id)
            }else{
                this.$router.replace('/404')
            }
        }
        UpdateTag(newName: string){
            if(this.tag){
                window.updateTag(this.tag.id,newName)
            }
        }
        remove(){
            if(this.tag){
                window.removeTag(this.tag.id)
                window.alert('删除成功')
                this.$router.back()
            }
        }
        goBack(){
            this.$router.back()
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