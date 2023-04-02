<template>
  <q-page class="q-pa-xl">
    <q-form @submit="submitForm">
      <q-input outlined v-model="newRestaunts.name" label="Name" />
      <q-input
        outlined
        v-model="newRestaunts.description"
        label="Description"
      />
      <q-input outlined v-model="newRestaunts.address" label="Address" />
      <q-btn type="submit" label="Submit" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const newRestaunts = reactive({
  name: '',
  description: '',
  address: '',
});

const submitForm = () => {
  console.log(newRestaunts);
};
</script>
