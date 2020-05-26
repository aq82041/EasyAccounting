const localStorageKey="tagList"

type Tag={
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
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
        // data=[{id:1,name:1},{id:2,name:2}]
        const names=this.data.map(item=>item.name)
        if(names.indexOf(name)>=0){return 'duplicated'}
        this.data.push({id:name,name:name})
        this.save()
        return 'success'
    }

}

export default tagListModel