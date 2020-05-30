<template>
    <Layout class-prefix="layout">
        <NumPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <div class="notes">
            <FormItem @update:value="onUpdateNotes" field-name="备注：" placeholder="点我写备注~"/>
        </div>

        <Tags @update:value="onUpdateTags"/>
        <Type :type.sync="record.type"/>
        <Tabs/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumPad from '@/components/MoneyComponents/NumPad.vue';
    import FormItem from '@/components/MoneyComponents/FormItem.vue';
    import Tags from '@/components/MoneyComponents/Tags.vue';
    import Type from '@/components/MoneyComponents/Type.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components: {Tabs, FormItem, Type, Tags, NumPad},
    })
    export default class Money extends Vue{
        get recordList(){
            return this.$store.state.recordList
        }
        record: RecordItem={
            tags:[],
            notes:'',
            type:'-',
            amount:0
        }
        created(){
            this.$store.commit('fetchRecords')
        }
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
            this.$store.commit('createRecord',this.record)
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
