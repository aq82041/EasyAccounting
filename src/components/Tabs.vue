<template>
        <ul class="tabs">
            <li v-for="data in dataSource" :key="data.value"
            @click="select(data)" class="tabs-item"
                :class="{selected:value===data.value,[classPrefix+'-tab']:classPrefix}">
                {{data.text}}
            </li>
        </ul>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Tabs extends Vue{
        @Prop() dataSource!: {text: string;value: string}[]
        @Prop(String) classPrefix?: string
        @Prop(String) value: string|undefined
        select(data: {text: string;value: string}){
          this.$emit("update:value",data.value)
        }
    }
</script>

<style lang="scss" scoped>
    .tabs{
        background: rgb(76, 62, 98);
        color:white;
        padding:24px 80px 16px 80px;
        font-size:16px;
        display: flex;
        > .tabs-item{
                padding:0 8px;
                width:50%;
                text-align: center;
                border:1px solid white;
                &:first-child{
                    border-radius:6px 0 0 6px;
                }
                &:last-child{
                    border-radius:0 6px 6px 0;
                }


                &.selected{
                    background:white;
                    color:rgb(76, 62, 98);
                    &::after{
                        display:none;
                    }
                }
        }


    }
</style>