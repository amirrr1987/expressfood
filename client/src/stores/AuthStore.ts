import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api } from 'src/boot/axios';
import { useAppConfigStore } from './AppConfigStore';
import _ from "lodash";
import HandelNotify from "src/utils/HandelNotify";
interface State {
  user: {
    userName: string,
    password: string
    confirmPassword: string
  }
}
export const useAuthStore = defineStore('authStore', () => {
  const appConfigStore = useAppConfigStore()
  const state = reactive<State>({
    user: {
      userName: '',
      password: '',
      confirmPassword: '',
    }
  })
  const cloneUser = reactive(_.cloneDeep(state.user))
  const resetUser = () => {
    Object.assign(state.user, cloneUser)
  }
  const loginUser = async () => {
    appConfigStore.startBar()
    try {
      const { data } = await api.post('/auth/login', state.user)
      console.log(data);
      appConfigStore.stopBar()
      HandelNotify.Success({ message: 'user login' })
    } catch (error) {
      appConfigStore.stopBar()
      resetUser()
      HandelNotify.Error({ message: error.message })
    }
  }
  const registerUser = async () => {
    appConfigStore.startBar()
    try {
      const { data } = await api.post('/auth/register', state.user)
      console.log(data);
      appConfigStore.stopBar()
      HandelNotify.Success({ message: data.message })
    } catch (error) {
      appConfigStore.stopBar()
      resetUser()


      HandelNotify.Error({ message: error?.response?.data.message })
    }
  }
  return { state, loginUser, registerUser, resetUser };
})