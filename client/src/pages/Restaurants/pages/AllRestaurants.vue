<template>
  <q-page class="q-pa-xl">
    <q-table
      title="props.label"
      :rows="restaurantStore.state.restaurants"
      :columns="columns"
      row-key="name"
    >
  
  </q-table>

    <q-ajax-bar
      ref="bar"
      position="bottom"
      color="accent"
      size="10px"
      skip-hijack
    />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';

import { useRestaurantStore } from 'src/stores/RestaurantStore';

const restaurantStore = useRestaurantStore();

onMounted(async () => {
  await restaurantStore.getRestaurants();
});

const columns = [
  { name: '_id', align: 'center', label: '_id', field: '_id', sortable: true },
  { name: 'name', align: 'top', label: 'name', field: 'name', sortable: true },
  {
    name: 'address',
    align: 'center',
    label: 'address',
    field: 'address',
    sortable: true,
  },
  {
    name: 'description',
    align: 'center',
    label: 'description',
    field: 'description',
    sortable: true,
  },
  {
    name: 'pic',
    align: 'center',
    label: 'pic',
    field: 'pic',
    sortable: true,
  },
  {
    name: 'score',
    align: 'top',
    label: 'score',
    field: 'score',
    sortable: true,
  },
  {
    name: 'action',
    align: 'center',
    label: 'action',
    field: 'action',
    sortable: true,
  },
];
</script>
