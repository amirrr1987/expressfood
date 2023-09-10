<template>
  <div class="">

    <q-table :title="props.label" :rows="props.data" :columns="props.columns" row-key="name">
    <template v-slot:body="props">
      <q-tr :props="props">
        <q-img
          :src="props.row.pic"
          spinner-color="white"
          style="height:40px; max-width:140px"
        />
      </q-tr>
    </template>
  </q-table>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string,
  columns : [],
  data: []
}
const props = withDefaults(defineProps<Props>(),{})

</script>
