<template>
    <ul class="tabs">
        <li v-for="data in dataSource" :key="data.value"
        @click="select(data)"
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
    .tabs {
        background: #F9B3CB;
        color: white;
        display: flex;
        text-align: center;
        font-size: 24px;

        > li {
            width: 50%;
            padding: 12px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            &.selected::after {
                content: '';
                position: absolute;
                background: #F66093;
                width: 100%;
                bottom: 0;
                left: 0;
                height: 4px;
            }
        }
    }
</style>