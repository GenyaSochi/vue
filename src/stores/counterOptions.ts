import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counterO', {
  state: () => ({ count: 0, name: 'Иван' }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})