<template>
    <div class="num-pad">
        <div class="output">100</div>
        <div class="buttons">
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button class="remove">删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button class="clear">清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button class="ok">OK</button>
            <button class="zero">0</button>
            <button class="dian">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'NumPad'
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    .num-pad{
        > .output{
            font-size:36px;
            font-family: Consolas,monospace;
            padding:8px 16px;
            text-align: right;
            color:#F9B3CB;
            @extend %innerShadow;
        }
        > .buttons{
            @extend %clearFix;

            > button{
                float:left;
                width:25%;
                height:64px;
                background:white;
                border:none;
                border-top:1px solid black;
                border-right:1px solid black;
                font-size:20px;
                &.ok{
                    height:128px;
                    float:right;
                    border-right:none;
                    border-bottom:1px solid black;
                }
                &.zero{
                    width:50%;
                    border-bottom:1px solid black;
                }
                &.dian{

                    border-bottom:1px solid black;
                }
                &.remove,&.clear{
                    border-right:none;
                }
            }
        }
    }
</style>