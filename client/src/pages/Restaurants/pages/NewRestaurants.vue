<template>
  <q-page class="q-pa-xl">
    <q-form @submit="restaurantStore.createRestaurants" @reset="restaurantStore.resetRestaurant" class="q-gutter-md">
      <legend>Create new restaurant:</legend>
      <q-input
        outlined
        v-model="restaurantStore.state.restaurant.pic"
        label="Name"
      />

      <q-input
        outlined
        v-model="restaurantStore.state.restaurant.name"
        label="Name"
      />
      <q-input
        outlined
        v-model="restaurantStore.state.restaurant.description"
        label="Description"
      />
      <q-input
        outlined
        type="textarea"
        v-model="restaurantStore.state.restaurant.address"
        label="Address"
      />

      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { useRestaurantStore } from 'src/stores/RestaurantStore';

const restaurantStore = useRestaurantStore();
</script>
