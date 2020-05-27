const localStorageKey="tagList"

type Tag={
    id: string;
    name: string;
}
type TagListModel={
    data: Tag[];
    fetch: () => Tag[];
    save: () => void;
    create: (name: string) => 'success' | 'duplicated'; //联合类型
    update: (id: string,newName: string) => 'success' | 'duplicated' | 'not found';
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
    },
    update(id: string,newName: string){
        const idList=this.data.map(item=>item.id)
        if(idList.indexOf(id)>=0){
            const nameList=this.data.map(item=>item.name)
            if(nameList.indexOf(newName)>=0){
                return 'duplicated'
            }else{
                const tag=this.data.filter(item=>item.id===id)[0]
                tag.name=newName
                tag.id=newName
                this.save()
                return 'success'
            }
        }else{
            return 'not found'
        }
    }

}

export default tagListModel