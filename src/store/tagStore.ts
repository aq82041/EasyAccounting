import createId from '@/lib/createId';

const localStorageKey="tagList"
const tagStore={
    tagList:[] as Tag[],
    fetchTags(){
        this.tagList=JSON.parse(localStorage.getItem(localStorageKey) || '[]')
        return this.tagList
    },
    saveTags(){
        localStorage.setItem(localStorageKey,JSON.stringify(this.tagList))
    },
    createTag(name: string){
        const names=this.tagList.map(item=>item.name)
        if(names.indexOf(name)>=0){
            window.alert('标签名重复了');
            return 'duplicated'
        }
        const id=createId().toString()
        this.tagList.push({id:id,name:name})
        this.saveTags()
        window.alert('添加成功');
        return 'success'
    },
    removeTag(id: string) {
        let index=-1
        for(let i=0;i<this.tagList.length;i++){
            if(this.tagList[i].id===id){
                index=i
                break
            }
        }
        this.tagList.splice(index,1)
        this.saveTags()
    },
    updateTag (id: string, newName: string) {
        const idList=this.tagList.map(item=>item.id)
        if(idList.indexOf(id)>=0){
            const nameList=this.tagList.map(item=>item.name)
            if(nameList.indexOf(newName)>=0){
                return 'duplicated'
            }else{
                const tag=this.tagList.filter(item=>item.id===id)[0]
                tag.name=newName
                this.saveTags()
                return 'success'
            }
        }else{
            return 'not found'
        }
    },
    findTag(id: string){
        return this.tagList.filter(tag => tag.id === id)[0];
    }

}

tagStore.fetchTags()
export default tagStore;