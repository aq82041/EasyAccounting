<template>
    <Layout class-prefix="layout">
        <NumPad/>
        <Notes/>
        <Tags :data-source.sync="tags"/>
        <Type/>
    </Layout>
</template>

<script lang="js">
    import NumPad from '@/components/MoneyComponents/NumPad.vue';
    import Notes from '@/components/MoneyComponents/Notes.vue';
    import Tags from '@/components/MoneyComponents/Tags.vue';
    import Type from '@/components/MoneyComponents/Type.vue';
    export default {
        name: 'Money',
        components: {Type, Notes,Tags, NumPad},
        data(){
            return {
                tags:['服饰','餐饮','住房','交通','化妆品']
            }
        }
    };
</script>

<style lang="scss">
    .layout-content{
        display:flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
</style>
