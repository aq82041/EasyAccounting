<template>
    <div>
        <label class="notes">
            <span class="name">备注：</span>
            <input type="text" placeholder="点我写备注~"
            v-model="value" >
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';

    @Component
    export default class Notes extends Vue{
        value=''
        @Watch('value')
        onValueChanged(newValue: string){
            this.$emit("update:value",newValue)
        }

    }
</script>

<style lang="scss" scoped>
    .notes{
        background:#f5f5f5;
        font-size:14px;
        padding:0 16px;
        display:flex;
        align-items: center;
        > .name{
            padding-right:14px;
        }
        > input{
            height:54px;
            flex-grow:1;
            background:transparent;
            border:none;
        }
    }
</style>