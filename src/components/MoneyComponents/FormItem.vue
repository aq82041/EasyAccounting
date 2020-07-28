<template>
    <div>
        <label class="notes">
            <span class="name">{{fieldName}}</span>
            <input v-if="type==='date'" type="date" :placeholder="placeholder"
                   :value="x(value)" @change="onValueChanged($event.target.value)" >

            <input v-else type="text" :placeholder="placeholder"
            :value="value" @change="onValueChanged($event.target.value)" >
        </label>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import dayjs from 'dayjs'
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class FormItem extends Vue{
        @Prop() fieldName: string | undefined
        @Prop() placeholder: string | undefined
        @Prop({default:''}) value!: string
        @Prop() type?: string

        onValueChanged(newValue: string){
            console.log(newValue)
            this.$emit("update:value",newValue)
        }
        x(isoString: string){
            return dayjs(isoString).format('YYYY-MM-DD')
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
            height:42px;
            flex-grow:1;
            background:transparent;
            border:none;
            font-size:14px;
        }
    }
</style>