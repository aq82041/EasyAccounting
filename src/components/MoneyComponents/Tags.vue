<template>
    <div class="tags">
        <div class="new">
            <button @click="createTag">新增标签</button>
        </div>
        <ul class="current">
            <li v-for="tag in tagList" :key="tag.name"
            @click="toggle(tag.name)"
                :class="{selected:selectedTags.indexOf(tag.name)>=0}">{{tag.name}}</li>
        </ul>
    </div>
</template>

<script lang="ts">
    import {Component} from 'vue-property-decorator';
    import {TagHelper} from '@/mixins/TagHelper';
    import {mixins} from 'vue-class-component';

    @Component({
        computed:{
            tagList(){
                return this.$store.state.tagList
            }
        }
    })
   export default class Tags extends mixins(TagHelper){
        beforeCreate(){
            this.$store.commit('fetchTags')
        }
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
                padding:0 10px;
                margin-right:10px;
                display:flex;
                align-items: center;
                justify-content: center;
                margin-top:6px;
                &.selected{
                    background:rgb(76, 62, 98);
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