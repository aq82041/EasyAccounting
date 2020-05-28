<template>
    <Layout class-prefix="layout">
        <NumPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <div class="notes">
            <FormItem @update:value="onUpdateNotes" field-name="备注：" placeholder="点我写备注~"/>
        </div>

        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <Type :type.sync="record.type"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumPad from '@/components/MoneyComponents/NumPad.vue';
    import FormItem from '@/components/MoneyComponents/FormItem.vue';
    import Tags from '@/components/MoneyComponents/Tags.vue';
    import Type from '@/components/MoneyComponents/Type.vue';
    import {Component, Watch} from 'vue-property-decorator';

    import recordListModel from '@/models/recordListModel';
    import tagListModel from '@/models/tagListModel';


    const recordList=recordListModel.fetch()
    const tagList=tagListModel.fetch()

    @Component({
        components: {FormItem, Type, Tags, NumPad},
    })
    export default class Money extends Vue{
        tags=tagList
        record: RecordItem={
            tags:[],
            notes:'',
            type:'-',
            amount:0
        }
        recordList: RecordItem[]=recordList
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
            const record2=recordListModel.clone(this.record)
            record2.date=new Date()
            this.recordList.push(record2)
        }
        @Watch('recordList')
        onRecordListChanged(){
            recordListModel.save()
        }

    }
</script>

<style lang="scss">
    .layout-content{
        display:flex;
        flex-direction: column-reverse;
        justify-content: space-between;
    }
    .notes{
        padding:3px 0;
    }
</style>
