import Vue from 'vue'
import Vuex from 'vuex'
import clone from '@/lib/clone';
import createId from '@/lib/createId';
import router from '@/router';

Vue.use(Vuex)

const store= new Vuex.Store({
  state: {
    recordList: [],
    tagList:[],
    currentTag: undefined
  } as myState,
  mutations: {
    fetchRecords(state){
      state.recordList=JSON.parse(localStorage.getItem("recordList") || '[]') as RecordItem[]
    },
    saveRecords(state){
      localStorage.setItem("recordList",JSON.stringify(state.recordList))
    },
    createRecord(state,record: RecordItem){
      const record2=clone(record)
      record2.createdAt=record2.createdAt ||new Date().toISOString()
      state.recordList.push(record2)
      store.commit('saveRecords')
    },
    fetchTags(state){
      state.tagList=JSON.parse(localStorage.getItem("tagList") || '[]')
    },
    saveTags(state){
      localStorage.setItem("tagList",JSON.stringify(state.tagList))
    },
    createTag(state,name: string){
      const names=state.tagList.map(item=>item.name)
      if(names.indexOf(name)>=0){
        window.alert('标签名重复了');
        return
      }
      const id=createId().toString()
      state.tagList.push({id:id,name:name})
      store.commit('saveTags')
      window.alert('添加成功');
    },
    removeTag(state,id: string) {
      let index=-1
      for(let i=0;i<state.tagList.length;i++){
        if(state.tagList[i].id===id){
          index=i
          break
        }
      }
      if(index!==-1){
        state.tagList.splice(index,1)
        store.commit('saveTags')
        window.alert('删除成功')
        router.back()
      }else{
        window.alert('删除失败')
      }

    },
    findTag(state,id: string){
      store.commit('fetchTags')
      state.currentTag= state.tagList.filter(tag => tag.id === id)[0];
    },
    updateTag (state,payload: {id: string; newName: string}) {
      const {id,newName}=payload
      const idList=state.tagList.map(item=>item.id)
      if(idList.indexOf(id)>=0){
        const nameList=state.tagList.map(item=>item.name)
        if(nameList.indexOf(newName)>=0){
          window.alert('标签重复了')
        }else{
          const tag=state.tagList.filter(item=>item.id===id)[0]
          tag.name=newName
          store.commit('saveTags')
        }
      }
    },
  },
})


export default store;