const localStorageKey="recordList"

const model={
    fetch(){
        return JSON.parse(localStorage.getItem(localStorageKey) || '[]') as RecordItem[]
    },
    save(data: RecordItem[]){
        localStorage.setItem(localStorageKey,JSON.stringify(data))
    },
    clone(data: RecordItem | RecordItem[]){
        return JSON.parse(JSON.stringify(data))
    }
}

export default model