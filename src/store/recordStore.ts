import clone from '@/lib/clone';

const localStorageKey="recordList"

const recordStore={
    recordList: [] as RecordItem[],
    fetchRecords(){
        this.recordList=JSON.parse(localStorage.getItem(localStorageKey) || '[]') as RecordItem[]
        return this.recordList
    },
    saveRecords(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.recordList))
    },
    createRecord(record: RecordItem){
        const record2=clone(record)
        record2.date=new Date()
        this.recordList && this.recordList.push(record2)
        this.saveRecords()
    }
}

recordStore.fetchRecords()

export default recordStore