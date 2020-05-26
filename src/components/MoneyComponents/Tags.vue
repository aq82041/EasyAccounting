<template>
    <div class="tags">
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag.name"
            @click="toggle(tag)"
                :class="{selected:selectedTags.indexOf(tag)>=0}">{{tag.name}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
   export default class Tags extends Vue{
       @Prop(Array) dataSource: string[] | undefined
        selectedTags: string[]=[]
        toggle(tag: string){
           const index=this.selectedTags.indexOf(tag)
           if(index>=0){
               this.selectedTags.splice(index,1)
           }else{
               this.selectedTags.push(tag)
           }
           this.$emit("update:value",this.selectedTags)
        }
        create(){
           const name=window.prompt('请输入标签名')
            if(name===''){
                window.alert('标签名不能为空')
            }else{
                if(this.dataSource){
                    this.$emit('update:dataSource',[...this.dataSource,{id:name,name:name}])
                }
            }
        }

   }
</script>

<style lang="scss" scoped>
    .tags{
        padding:16px;
        font-size:14px;
        flex-grow: 1;
        display:flex;
        flex-direction: column-reverse;
        overflow: auto;
        background:white;
        > .current{
            display:flex;
            flex-wrap: wrap;

            > li{
                background:#E8E8E8;
                color:#484848;
                height:24px;
                border-radius:12px;
                padding:0 12px;
                margin-right:10px;
                display:flex;
                align-items: center;
                justify-content: center;
                margin-top:6px;
                &.selected{
                    background:#F9B3CB;
                    color:white;
                }
            }
        }
        > .new{
            padding-top:16px;
            > button{
                background:transparent;
                border:none;
                border-bottom: 1px solid;
                color:#999;
                padding:0 2px;
            }
        }
    }
</style>