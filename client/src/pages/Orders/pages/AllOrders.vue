<template>
  <q-page class="q-pa-xl">
    <ADataTable :columns="columns" :data="orders" label="Orders" />
  </q-page>
</template>

<script setup lang="ts">
import ADataTable from 'src/components/DataTable.vue';
import { onMounted, reactive } from 'vue';
import { api } from '../../../boot/axios';
const orders = reactive<any>([]);
onMounted(async () => {
  const { data } = await api.get('/restaurant');
  Object.assign(orders, data.list);
});

const columns = [
  { name: 'name', align: 'top', label: 'name', field: 'name', sortable: true },
  {
    name: 'address',
    align: 'center',
    label: 'address',
    field: 'address',
    sortable: true,
  },
  { name: '_id', align: 'center', label: '_id', field: '_id', sortable: true },
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
