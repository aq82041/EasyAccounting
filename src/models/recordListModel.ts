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
    clone(data: RecordItem | RecordItem[]){
        return JSON.parse(JSON.stringify(data))
    }
}

export default recordListModel