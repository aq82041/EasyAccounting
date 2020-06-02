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
        background: #F9B3CB;
        color:white;
        padding:16px 80px;
        font-size:20px;
        display: flex;
        > .tabs-item{
                padding:0 10px;
                width:50%;
                text-align: center;
                border:2px solid white;
                border-radius:18px;
                &.selected{
                    background:white;
                    color:#F9B3CB;
                    &::after{
                        display:none;
                    }
                }
        }


    }
</style>