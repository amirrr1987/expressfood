import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api } from 'src/boot/axios';
import { useAppConfigStore } from './AppConfigStore';
interface Restaurant {
  name: string,
  description: string,
  address: string,
  pic: string,
  comments: string[],
  menus: string[],
}
interface State {
  restaurants: string[]
  restaurant: Restaurant
}
const appConfigStore = useAppConfigStore()

export const useRestaurantStore = defineStore('restaurantStore', () => {

  const state = reactive<State>({
    restaurants: [],
    restaurant: {
      name: '',
      description: '',
      address: '',
      pic: '',
      comments: [],
      menus: [],
    }
  })

  const getRestaurants = async () => {
    appConfigStore.startBar()
    try {
      const { data } = await api.get('/restaurant')
      Object.assign(state.restaurants, data.list)
    } catch (error) {
      console.log('error', error);
    }
    finally {
      appConfigStore.stopBar()
    }
  }

  const createRestaurants = async () => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.startBar()
    try {
      await api.post('/restaurant', state.restaurant)
    } catch (error) {
      console.log('error', error);
    }
    finally {
      appConfigStore.stopBar()
    }
  }

  const updateRestaurants = async () => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.startBar()
    try {
      const { data } = await api.get('/restaurant')
      Object.assign(state.restaurants, data.list)
    } catch (error) {
      console.log('error', error);
    }
    finally {
      appConfigStore.stopBar()
    }
  }

  const deleteRestaurants = async () => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.startBar()
    try {
      const { data } = await api.get('/restaurant')
      Object.assign(state.restaurants, data.list)
      getRestaurants()
    } catch (error) {
      console.log('error', error);
    }
    finally {
      appConfigStore.stopBar()
    }
  }


  return { state, getRestaurants, createRestaurants, updateRestaurants, deleteRestaurants };
})