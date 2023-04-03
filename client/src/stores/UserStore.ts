import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api } from 'src/boot/axios';
import { useAppConfigStore } from './AppConfigStore';
interface State {
  users: string[]
  user: any
}

export const useUserStore = defineStore('userStore', () => {

  const state = reactive<State>({
    users: [],
    user: {}
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
  const createUsers = async () => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.post('/users')
      Object.assign(state.users, data.list)
    } catch (error) {
      console.log('error', error);
    }
  }

  const updateUsers = async ({ userId, userData }: { userId: string, userData: unknown }) => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.put(`/users/${userId}`, userData)
      Object.assign(state.users, data.list)
    } catch (error) {
      console.log('error', error);
    }
  }


  const deleteUsers = async ({ userId }: { userId: string }) => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.delete(`/users/${userId}`)
      Object.assign(state.users, data.list)
      getUsers()
    } catch (error) {
      console.log('error', error);
    }
  }


  return { state, getUsers, createUsers, updateUsers, deleteUsers };
})