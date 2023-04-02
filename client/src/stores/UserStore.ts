import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api } from 'src/boot/axios';
import { useAppConfigStore } from './AppConfigStore';
interface State {
  users: string[]
}

export const useUserStore = defineStore('userStore', () => {

  const state = reactive<State>({
    users: []
  })

  const getUsers = async () => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.get('/users')
      Object.assign(state.users, data.list)
    } catch (error) {
      console.log('error', error);
    }
  }


  return { state, getUsers };
})