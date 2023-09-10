<template>
  <q-page>
    <div class="form-center">
      <q-form @submit="authStore.loginUser" @reset="authStore.registerUser">
        <q-card class="my-card">
          <img src="https://cdn.quasar.dev/img/mountains.jpg" />

          <q-card-section class="q-gutter-md">
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
            <q-btn label="Login" type="submit" color="primary" icon="login" :to="{ name: 'TheLogin' }" />

            <q-btn
              label="Register"
              type="reset"
              color="primary"
              flat
              class="q-ml-sm"
              :to="{ name: 'TheRegister' }"
            />
          </q-card-section>
        </q-card>
      </q-form>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useAuthStore } from 'src/stores/AuthStore';
const authStore = useAuthStore();
</script>

<style lang="scss">
.form-center {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  div {
    max-width: 500px;
  }
}
</style>
