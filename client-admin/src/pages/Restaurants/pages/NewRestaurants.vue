<template>
  <q-page class="q-pa-xl">
    <q-form
      @submit.prevent="submitForm"
      @reset="restaurantStore.resetRestaurant"
    >
    
    <div class="row q-col-gutter-md">
        <legend>Create new restaurant:</legend>
        <div class="col-12">
          <q-input
            outlined
            v-model="restaurantStore.state.restaurant.name"
            label="Name"
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>
        <div class="col-6">
          <q-input
            type="textarea"
            outlined
            v-model="restaurantStore.state.restaurant.description"
            label="Description"
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>
        <div class="col-6">
          <q-input
            outlined
            type="textarea"
            v-model="restaurantStore.state.restaurant.address"
            label="Address"
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>

        <div class="col-4">
          <q-input
            outlined
            v-model="restaurantStore.state.restaurant.adminUsername"
            label="Admin username"
            :rules="[(val) => !!val || 'Field is required']"
          />
        </div>
        <div class="col-4">
          <q-input
            outlined
            :type="showPassword ? 'text' : 'password'"
            v-model="restaurantStore.state.restaurant.adminPassword"
            label="Password"
            :rules="[
              (val) =>
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,}$/.test(
                  val
                ) ||
                'Password must contain at least 4 characters, including uppercase, lowercase, number, and symbol',
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="showPassword ? 'visibility_off' : 'visibility'"
                @click="showPassword = !showPassword"
              />
            </template>
          </q-input>
        </div>
        <div class="col-4">
          <q-input
            outlined
            :type="showConfrimPassword ? 'text' : 'password'"
            v-model="restaurantStore.state.restaurant.adminConfrimPassword"
            label="Confirm Password"
            :rules="[
              (val) =>
                val === restaurantStore.state.restaurant.adminPassword ||
                'Passwords do not match',
            ]"
          >
            <template v-slot:append>
              <q-icon
                :name="showConfrimPassword ? 'visibility_off' : 'visibility'"
                @click="showConfrimPassword = !showConfrimPassword"
              />
            </template>
          </q-input>
        </div>
        <div class="col"></div>
      </div>

      <q-btn label="Submit" type="submit" color="primary" />
      <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
    </q-form>
  </q-page>
</template>
<script setup lang="ts">
import { useRestaurantStore } from 'src/stores/RestaurantStore';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const restaurantStore = useRestaurantStore();
const showPassword = ref(false);
const showConfrimPassword = ref(false);

const router = useRouter()

const submitForm = ()=>{
  restaurantStore.createRestaurants()
  router.push({name: 'TheRestaurants'})
}
</script>
