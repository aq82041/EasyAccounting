<template>
    <div>
        <ul class="types">
            <li :class="type==='-' && 'selected'"
            @click="selectType('-')">支出</li>
            <li :class="type==='+' && 'selected'"
            @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="js">
    export default {
        name: 'Type',
        data(){
            return{
                type:'-',   //'-'表示支出，'+'表示收入
            }
        },
        methods:{
            selectType(type){
               this.type=type
            }
        }
    };
</script>

<style lang="scss" scoped>
    .types{
        background:#F9B3CB;
        color:white;
        display:flex;
        text-align: center;
        font-size:24px;
        > li{
            width:50%;
            padding:12px 0;
            display:flex;
            justify-content: center;
            align-items: center;
            position:relative;
            &.selected::after{
                content:'';
                display:block;
                position:absolute;
                background:#F66093;
                width:100%;
                bottom:0;
                left:0;
                height:4px;
            }
        }
    }
</style>