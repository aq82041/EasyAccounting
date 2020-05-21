<template>
    <div class="tags">
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
        </ul>
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Tags'
    };
</script>

<style lang="scss" scoped>
    .tags{
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
</style>