import clone from '@/lib/clone';

const localStorageKey="recordList"

const recordListModel={
    data:[] as RecordItem [],
    fetch(){
        this.data=JSON.parse(localStorage.getItem(localStorageKey) || '[]') as RecordItem[]
        return this.data
    },
    save(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.data))
    },
    create(record: RecordItem){
        const record2=clone(record)
        record2.date=new Date()
        this.data.push(record2)
        this.save()
    }
}

export default recordListModel