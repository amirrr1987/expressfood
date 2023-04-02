<template>
  <q-page class="q-pa-xl">
    <q-form @submit="restaurantStore.createRestaurants">
      <q-input outlined v-model="restaurantStore.state.restaurant.name" label="Name" />
      <q-input
        outlined
        v-model="restaurantStore.state.restaurant.description"
        label="Description"
      />
      <q-input outlined v-model="restaurantStore.state.restaurant.address" label="Address" />
      <q-btn type="submit" label="Submit" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { useRestaurantStore } from 'src/stores/RestaurantStore';

const restaurantStore = useRestaurantStore();


</script>
