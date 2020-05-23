<template>
    <div class="num-pad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent">1</button>
            <button @click="inputContent">2</button>
            <button @click="inputContent">3</button>
            <button @click="remove" class="remove">删除</button>
            <button @click="inputContent">4</button>
            <button @click="inputContent">5</button>
            <button @click="inputContent">6</button>
            <button @click="clear" class="clear">清空</button>
            <button @click="inputContent">7</button>
            <button @click="inputContent">8</button>
            <button @click="inputContent">9</button>
            <button  @click="ok" class="ok">OK</button>
            <button @click="inputContent" class="zero">0</button>
            <button @click="inputContent" class="dian">.</button>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NumPad extends Vue {
        output = '0';

        inputContent(event: MouseEvent) {
            const button=(event.target as HTMLButtonElement)
            const input=button.textContent as string
            if(this.output.length===16){return}
            if(this.output==='0'){
                if('0123456789'.indexOf(input)>=0){
                    this.output=input
                }else{
                    this.output+=input;
                }
                return
            }
            if(this.output.indexOf('.')>=0 && input==='.'){return}
            this.output+=input;
        }
        remove(){
            if(this.output.length===1){
                this.output='0'
            }else{
                this.output=this.output.slice(0,-1)
            }
        }
        clear(){
            this.output='0'
        }
        ok(){
            this.$emit("update:value",this.output)
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .num-pad {
        > .output {
            font-size: 36px;
            font-family: Consolas, monospace;
            padding: 8px 16px;
            text-align: right;
            color: #F9B3CB;
            @extend %innerShadow;
            height: 66px;
        }

        > .buttons {
            @extend %clearFix;

            > button {
                float: left;
                width: 25%;
                height: 58px;
                background: white;
                border: none;
                border-top: 1px solid black;
                border-right: 1px solid black;
                font-size: 20px;

                &.ok {
                    height: 116px;
                    float: right;
                    border-right: none;
                    border-bottom: 1px solid black;
                }

                &.zero {
                    width: 50%;
                    border-bottom: 1px solid black;
                }

                &.dian {

                    border-bottom: 1px solid black;
                }

                &.remove, &.clear {
                    border-right: none;
                }
            }
        }
    }
</style>