<template>
    <Layout class-prefix="layout">
        <NumPad @update:value="onUpdateAmount" @submit="saveRecord"/>
        <div class="createdAt">
            <FormItem type="date" :value.sync="record.createdAt" field-name="日期：" placeholder="点我选择日期~"/>
        </div>

        <div class="notes">
            <FormItem :value.sync="record.notes" field-name="备注：" placeholder="点我写备注~"/>
        </div>

        <Tags @update:value="onUpdateTags"/>
        <Tabs :data-source="typeList" :value.sync="record.type"/>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import NumPad from '@/components/MoneyComponents/NumPad.vue';
    import FormItem from '@/components/MoneyComponents/FormItem.vue';
    import Tags from '@/components/MoneyComponents/Tags.vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import typeList from '@/constant/typeList';

    @Component({
        components: {Tabs, FormItem, Tags, NumPad},
    })
    export default class Money extends Vue{
        get recordList(){
            return this.$store.state.recordList
        }
        record: RecordItem={
            tags:[],
            notes:'',
            type:'-',
            amount:0,
            createdAt:new Date().toISOString()
        }
        typeList=typeList
        created(){
            this.$store.commit('fetchRecords')
        }
        onUpdateTags(tags: string[]){
            this.record.tags=tags
        }
        onUpdateAmount(amount: string){
            this.record.amount=parseFloat(amount)
        }
        saveRecord(){
            if(this.record.tags.length===0){
                window.alert('请选中或自行添加一个标签')
                this.record.notes=''
                return
            }
            this.$store.commit('createRecord',this.record)
            window.alert('保存成功')
            this.record.notes=''
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
