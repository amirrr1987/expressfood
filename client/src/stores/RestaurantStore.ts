import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api } from 'src/boot/axios';
import { useAppConfigStore } from './AppConfigStore';
interface State {
  restaurants: string[]
}

export const useRestaurantStore = defineStore('restaurantStore', () => {

  const state = reactive<State>({
    restaurants: []
  })

  const getRestaurants = async () => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.get('/restaurants')
      Object.assign(state.restaurants, data.list)
    } catch (error) {
      console.log('error', error);
    }
  }


  return { state, getRestaurants };
})