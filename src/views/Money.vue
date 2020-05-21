<template>
    <Layout class-prefix="layout">
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
        <div>
            <label class="notes">
                <span class="name">备注：</span>
                <input type="text" placeholder="在这里输入备注">
            </label>
        </div>
        <div class="labels">
            <div class="new">
                <button>新增标签</button>
            </div>
            <ul class="current">
                <li>服饰</li>
                <li>餐饮</li>
                <li>住房</li>
                <li>交通</li>
                <li>服饰</li>
                <li>服饰</li>
                <li>服饰</li>
                <li>餐饮</li>
                <li>住房</li>
                <li>交通</li>
                <li>服饰</li>
                <li>服饰</li>
                <li>服饰</li>


            </ul>

        </div>
        <div>
            <ul class="types">
                <li class="selected">支出</li>
                <li>收入</li>
            </ul>
        </div>



    </Layout>

</template>

<script lang="ts">
    export default {
        name: 'Money',
    };
</script>

<style lang="scss">
    .layout-content{
        display:flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
</style>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";

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

    .labels{
        padding:16px;
        font-size:14px;
        flex-grow: 1;
        display:flex;
        flex-direction: column-reverse;
        overflow: auto;
        > .current{
            display:flex;
            flex-wrap: wrap;

            > li{
                background:#F9B3CB;
                color:white;
                height:24px;
                border-radius:12px;
                padding:0 12px;
                margin-right:8px;
                display:flex;
                align-items: center;
                justify-content: center;
                margin-top:6px;
            }
        }
        > .new{
            padding-top:16px;
            > button{
                background:transparent;
                border:none;
                border-bottom: 1px solid;
                color:#999;
                padding:0 2px;
            }
        }
    }

    .notes{
        background:#f5f5f5;
        font-size:14px;
        padding:0 16px;
        display:flex;
        align-items: center;
        > .name{
            padding-right:16px;
        }
        > input{
            height:54px;
            flex-grow:1;
            background:transparent;
            border:none;
        }
    }

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