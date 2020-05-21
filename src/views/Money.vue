<template>
    <Layout class-prefix="layout">
        <NumPad/>
        <Notes/>
        <Tags/>
        <Type/>
    </Layout>
</template>

<script lang="ts">
    import NumPad from '@/components/MoneyComponents/NumPad.vue';
    import Notes from '@/components/MoneyComponents/Notes.vue';
    import Tags from '@/components/MoneyComponents/Tags.vue';
    import Type from '@/components/MoneyComponents/Type.vue';
    export default {
        name: 'Money',
        components: {Type, Notes,Tags, NumPad},
    };
</script>

<style lang="scss">
    .layout-content{
        display:flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
</style>
