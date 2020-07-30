<template>
    <button class="button" @click="$emit('click',$event)">{{text}}</button>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class Button extends Vue {
        @Prop() text!: string
    }
</script>

<style lang="scss" scoped>
    .button{
        background:rgb(76, 62, 98);
        color:white;
        border:none;
        border-radius:4px;
        padding:8px;
    }
</style>