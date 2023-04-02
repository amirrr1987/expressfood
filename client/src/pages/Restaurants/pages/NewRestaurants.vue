<template>
  <q-page class="q-pa-xl">
    <q-form @submit="submitForm">
      <q-input outlined v-model="newRestaurant.name" label="Name" />
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
import { reactive, ref } from 'vue';

const newRestaurant = reactive({
  name: '',
  description: '',
  address: '',
  pic: '',
  comments: [],
  menus: [],
});
const submitForm = async () => {
  try {
    const data = await api.post('/restaurant', newRestaurant);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
</script>
