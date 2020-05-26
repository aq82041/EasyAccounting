<template>
    <div>
        <label class="notes">
            <span class="name">{{fieldName}}</span>
            <input type="text" :placeholder="placeholder"
            v-model="value" >
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop, Watch} from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue{
        @Prop() fieldName: string | undefined
        @Prop() placeholder: string | undefined
        value=''
        @Watch('value')
        onValueChanged(newValue: string){
            this.$emit("update:value",newValue)
        }

    }
</script>

<style lang="scss" scoped>
    .notes{
        font-size:14px;
        padding:0 16px;
        display:flex;
        align-items: center;
        > .name{
            padding-right:14px;
        }
        > input{
            height:48px;
            flex-grow:1;
            background:transparent;
            border:none;
        }
    }
</style>