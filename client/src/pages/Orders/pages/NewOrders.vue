<template>
  <q-page class="q-pa-xl">
    <q-form @submit="orderStore.createOrders" class="q-gutter-md">
      <q-input
        outlined
        v-model="orderStore.state.order.pic"
        label="Name"
      />

      <q-input
        outlined
        v-model="orderStore.state.order.name"
        label="Name"
      />
      <q-input
        outlined
        v-model="orderStore.state.order.description"
        label="Description"
      />
      <q-input
        outlined
        type="textarea"
        v-model="orderStore.state.order.address"
        label="Address"
      />

      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { useOrderStore } from 'src/stores/OrderStore';

const orderStore = useOrderStore();
</script>
