<template>
  <q-page>
    <div class="form-center">
      <q-form
        @submit="authStore.loginUser"
        @reset="authStore.registerUser"
        class="q-gutter-md"
        style="width: 500px"
      >
        <q-input
          filled
          v-model="authStore.state.user.userName"
          label="Username"
        />
        <q-input
          filled
          type="password"
          v-model="authStore.state.user.password"
          label="Password"
        />
        <div>
          <q-btn label="Submit" type="submit" color="primary" />
          <q-btn
            label="Reset"
            type="reset"
            color="primary"
            flat
            class="q-ml-sm"
          />
          <router-link class="text-primary" to="/auth/register"
            >Register</router-link
          >
        </div>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useAuthStore } from 'src/stores/AuthStore';
const authStore = useAuthStore();
</script>

<style>
.form-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
