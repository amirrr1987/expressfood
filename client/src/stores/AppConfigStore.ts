import { defineStore } from 'pinia';
import { reactive } from 'vue';
interface State {
  bar: any
}

export const useAppConfigStore = defineStore('appConfigStore', () => {

  const state = reactive<State>({
    bar: null
  })


  const startBar = () => {
    state.bar.start()
  }

  const stopBar = () => {
    state.bar.stop()
  }

  return { state, startBar, stopBar };
})