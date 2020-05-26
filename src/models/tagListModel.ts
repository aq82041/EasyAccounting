const localStorageKey="tagList"

type TagListModel={
    data: string[];
    fetch: () => string[];
    save: () => void;
    create: (name: string) => 'success' | 'duplicated';
}
const tagListModel: TagListModel={
    data:[],
    fetch(){
        this.data=JSON.parse(localStorage.getItem(localStorageKey) || '[]')
        return this.data
    },
    save(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.data))
    },
    create(name){
        if(this.data.indexOf(name)>=0){return 'duplicated'}
        this.data.push(name)
        this.save()
        return 'success'
    }

}

export default tagListModel