// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
     list : [],
  }),
  getters: {
    getList(){
      return this.list
    }
  },
  actions: {
    addList(list){
      this.list.push(list)
    },
    removeList(index){
      this.list.splice(index, 1)
    },
    updateList({index, list}){
      console.log(list)
      if (this.list[index]){
        this.list[index] = list
      }
    }
  },
})
