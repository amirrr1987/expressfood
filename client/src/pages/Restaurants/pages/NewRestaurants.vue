<template>
  <q-page class="q-pa-xl">
    <q-form @submit="restaurantStore.createRestaurants">
      <q-input outlined v-model="restaurantStore.state.restaurant.name" label="Name" />
      <q-input
        outlined
        v-model="newRestaurant.description"
        label="Description"
      />
      <q-input outlined v-model="newRestaurant.address" label="Address" />
      <q-btn type="submit" label="Submit" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { api } from 'src/boot/axios';
import { useRestaurantStore } from 'src/stores/RestaurantStore';
import { reactive, ref } from 'vue';

const restaurantStore = useRestaurantStore();
const newRestaurant = reactive({
  name: '',
  description: '',
  address: '',
  pic: '',
  comments: [],
  menus: [],
});

</script>
