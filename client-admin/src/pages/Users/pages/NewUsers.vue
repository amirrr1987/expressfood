<template>
  <q-page class="q-pa-xl">
    <q-form @submit="userStore.createUsers" class="q-gutter-md">
      <q-input outlined v-model="userStore.state.user.pic" label="Name" />

      <q-input outlined v-model="userStore.state.user.name" label="Name" />
      <q-input
        outlined
        v-model="userStore.state.user.description"
        label="Description"
      />
      <q-input
        outlined
        type="textarea"
        v-model="userStore.state.user.address"
        label="Address"
      />

      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </q-form>
  </q-page>
</template>

<script setup lang="ts">
import { useUserStore } from 'src/stores/UserStore';

const userStore = useUserStore();
</script>
