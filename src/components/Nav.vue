<template>
    <nav>
        <router-link class="item" to="/statistics" active-class="selected">
            <Icon name="statistics"/>
            统计
        </router-link>
        <router-link class="item" to="/money" active-class="selected">
            <Icon name="money"/>
            记账
        </router-link>
        <router-link class="item" to="/labels" active-class="selected">
            <Icon name="label"/>
            标签
        </router-link>

    </nav>
</template>

<script lang="ts">
    export default {
        name: 'Nav',
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    nav{
        @extend %outerShadow;
        display:flex;
        font-size:12px;
        > .item{
            width:33.33333%;
            display:flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding:4px 0;
            color:#999;
            > .icon{
                width: 32px;
                height: 32px;
            }
        }
        > .selected{
            color:$color-highlight;
        }
    }
</style>