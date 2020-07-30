<template>
    <div class="num-pad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputContent" class="one">1</button>
            <button @click="inputContent" class="two">2</button>
            <button @click="inputContent" class="three">3</button>
            <button @click="remove" class="remove">删除</button>
            <button @click="inputContent" class="four">4</button>
            <button @click="inputContent" class="five">5</button>
            <button @click="inputContent" class="six">6</button>
            <button @click="clear" class="clear">清空</button>
            <button @click="inputContent" class="seven">7</button>
            <button @click="inputContent" class="eight">8</button>
            <button @click="inputContent" class="nine">9</button>
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
            this.$emit("submit",this.output)
            this.output='0'
        }
    }
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

    .num-pad {
        background:white;
        > .output {
            font-size: 36px;
            font-family: Consolas, monospace;
            padding: 0 16px;
            text-align: right;
            color: rgb(76, 62, 98);
            @extend %innerShadow;
            height: 54px;
            line-height:54px;
        }

        > .buttons {
            @extend %clearFix;
            > button {
                float: left;
                width: 25%;
                height: 58px;
                border: none;
                font-size: 18px;
                color:white;
                &.ok {
                    height: 116px;
                    float: right;
                    background: #4c3e62;
                }
                &.zero {
                    width: 50%;
                    background: #655a78;
                }
                &.one{background:#a9a3b3}
                &.two,&.four{background: #9890a4}
                &.three,&.five,&.seven{background:#877e95}
                &.six,&.eight,&.remove{background:#766c87}
                &.nine,&.clear{background: #655a78}
                &.dian{background:#5d5071}
            }
        }
    }
</style>