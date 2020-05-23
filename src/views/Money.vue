<template>
    <Layout class-prefix="layout">
        <NumPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <Notes @update:value="onUpdateNotes"/>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <Type :type.sync="record.type"/>{{this.record}}
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumPad from '@/components/MoneyComponents/NumPad.vue';
    import Notes from '@/components/MoneyComponents/Notes.vue';
    import Tags from '@/components/MoneyComponents/Tags.vue';
    import Type from '@/components/MoneyComponents/Type.vue';
    import {Component, Watch} from 'vue-property-decorator';

    type Record={
        tags: string[];
        notes: string;
        type: string;
        amount: number;
        date?: Date;
    }
    @Component({
        components: {Type, Notes,Tags, NumPad},
    })
    export default class Money extends Vue{
        tags=['服饰','餐饮','住房','交通','化妆品']
        record: Record={
            tags:[],
            notes:'',
            type:'-',
            amount:0
        }
        recordList: Record[]=JSON.parse(localStorage.getItem("recordList") || '[]')
        onUpdateTags(tags: string[]){
            this.record.tags=tags
        }
        onUpdateNotes(notes: string){
            this.record.notes=notes
        }
        onUpdateAmount(amount: string){
            this.record.amount=parseFloat(amount)
        }
        saveRecord(){
            const record2=JSON.parse(JSON.stringify(this.record))
            record2.date=new Date()
            this.recordList.push(record2)
        }
        @Watch('recordList')
        onRecordListChanged(){
            localStorage.setItem("recordList",JSON.stringify(this.recordList))
        }

    }
</script>

<style lang="scss">
    .layout-content{
        display:flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
</style>
