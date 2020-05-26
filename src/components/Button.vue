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
        background:#F9B3CB;
        color:white;
        border:none;
        border-radius:4px;
        padding:8px;
    }
</style>