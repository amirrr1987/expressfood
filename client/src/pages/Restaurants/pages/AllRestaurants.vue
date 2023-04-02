<template>
  <q-page class="q-pa-xl">
    {{ restaurants }}
    <q-table
      title="props.label"
      :rows="restaurants"
      :columns="columns"
      row-key="name"
    />

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
import { onMounted, reactive } from 'vue';
import { api } from '../../../boot/axios';
const restaurants = reactive<any>([]);
onMounted(async () => {
  const { data } = await api.get('/restaurant');
  console.log(data.list);

  Object.assign(restaurants, data.list);
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
