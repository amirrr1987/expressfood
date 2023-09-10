import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api } from 'src/boot/axios';
import { useAppConfigStore } from './AppConfigStore';
import _ from "lodash";

import HandelNotify from "src/utils/HandelNotify";
import { useRouter } from 'vue-router';
const router = useRouter()
interface Restaurant {
  name: string,
  description: string,
  address: string,
  pic: string,
  comments: string[],
  menus: string[],
  adminUsername: string,
  adminPassword: string,
  adminConfrimPassword: string,
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
      adminUsername: '',
      adminPassword: '',
      adminConfrimPassword: ''
    }
  })

  const cloneRestaurant = reactive(_.cloneDeep(state.restaurant))

  const resetRestaurant = () => {
    Object.assign(state.restaurant, cloneRestaurant)
  }

  const getRestaurants = async () => {
    appConfigStore.startBar()

    try {
      const { data } = await api.get('/restaurant')
      Object.assign(state.restaurants, data.data)
      HandelNotify.Success({ message: 'Get data successfully' })
      
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
      await api.post('/user', state.restaurant)
      resetRestaurant()
      getRestaurants()
      HandelNotify.Success({ message: 'Create data successfully' })

    } catch (error) {
      console.log(error?.response?.data?.message);
      HandelNotify.Error({ message: error.message })
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
      await getRestaurants()
    } catch (error) {
      console.log('error', error);
    }
    finally {
      appConfigStore.stopBar()
    }
  }


  return { state, getRestaurants, createRestaurants, updateRestaurants, deleteRestaurants, resetRestaurant };
})
