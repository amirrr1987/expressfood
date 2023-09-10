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
  { name: '_id', align: 'left', label: 'Id', field: '_id', sortable: true },
  { name: 'name', align: 'left', label: 'Name', field: 'name', sortable: true },
  {
    name: 'address',
    align: 'left',
    label: 'Address',
    field: 'address',
    sortable: true,
  },
  {
    name: 'description',
    align: 'left',
    label: 'Description',
    field: 'description',
    sortable: true,
  },
  {
    name: 'pic',
    align: 'left',
    label: 'Picture',
    field: 'pic',
    sortable: true,
  },
  {
    name: 'score',
    align: 'left',
    label: 'Score',
    field: 'score',
    sortable: true,
  },
  {
    name: 'action',
    align: 'left',
    label: 'Action',
    field: 'action',
    sortable: true,
  },
];
</script>
