import createId from '@/lib/createId';

const localStorageKey="tagList"


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
        const id=createId().toString()
        this.data.push({id:id,name:name})
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
                this.save()
                return 'success'
            }
        }else{
            return 'not found'
        }
    },
    remove(id: string){
        let index=-1
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].id===id){
                index=i
                break
            }
        }
        this.data.splice(index,1)
        this.save()
    }

}

export default tagListModel