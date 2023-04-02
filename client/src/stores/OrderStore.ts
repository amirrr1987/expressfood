import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api } from 'src/boot/axios';
import { useAppConfigStore } from './AppConfigStore';
interface State {
  orders: string[]
}

export const useOrderStore = defineStore('orderStore', () => {

  const state = reactive<State>({
    orders: []
  })

  const getOrders = async () => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.get('/orders')
      Object.assign(state.orders, data.list)
    } catch (error) {
      console.log('error', error);
    }
  }
  const createOrders = async () => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.post('/orders')
      Object.assign(state.orders, data.list)
    } catch (error) {
      console.log('error', error);
    }
  }

  const updateOrders = async ({ orderId, orderData }: { orderId: string, orderData: unknown }) => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.put(`/orders/${orderId}`, orderData)
      Object.assign(state.orders, data.list)
    } catch (error) {
      console.log('error', error);
    }
  }


  const deleteOrders = async ({ orderId }: { orderId: string }) => {
    const appConfigStore = useAppConfigStore()
    appConfigStore.trigger()
    try {
      const { data } = await api.delete(`/orders/${orderId}`)
      Object.assign(state.orders, data.list)
    } catch (error) {
      console.log('error', error);
    }
  }


  return { state, getOrders, createOrders, updateOrders, deleteOrders };
})