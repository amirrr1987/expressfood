<template>
  <q-drawer
    v-model="drawer"
    show-if-above
    :width="200"
    :breakpoint="500"
    bordered
    :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'"
  >
    <q-scroll-area class="fit">
      <q-list bordered>
        <router-link to="/" class="text-indigo-8 the-navbar">
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="home" />
            </q-item-section>
            <q-item-section>Dashboard</q-item-section>
          </q-item>
        </router-link>

        <q-separator />

        <q-expansion-item
          group="somegroup"
          icon="group"
          label="Users"
          header-class="text-indigo-8"
        >
          <router-link to="/users/new" class="text-blue-grey-6 the-navbar">
            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>
              <q-item-section ne>New user</q-item-section>
            </q-item>
          </router-link>
          <router-link to="/users" class="text-blue-grey-6 the-navbar">
            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>
              <q-item-section>All Users</q-item-section>
            </q-item>
          </router-link>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item
          group="somegroup"
          icon="shopping_cart"
          label="Orders"
          header-class="text-indigo-8"
        >
          <router-link to="/orders/new" class="text-blue-grey-6 the-navbar">
            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>
              <q-item-section ne>New Orders</q-item-section>
            </q-item>
          </router-link>
          <router-link to="/orders" class="text-blue-grey-6 the-navbar">
            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>
              <q-item-section>All Orders</q-item-section>
            </q-item>
          </router-link>
        </q-expansion-item>

        <q-separator />

        <q-expansion-item
          group="somegroup"
          icon="restaurant"
          label="Restaurants"
          header-class="text-indigo-8"
        >
          <router-link to="/restaurants/new" class="text-blue-grey-6 the-navbar">
            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>
              <q-item-section ne>New restaurants</q-item-section>
            </q-item>
          </router-link>
          <router-link to="/restaurants" class="text-blue-grey-6 the-navbar">
            <q-item clickable v-ripple>
              <q-item-section avatar> </q-item-section>
              <q-item-section>All restaurants</q-item-section>
            </q-item>
          </router-link>
        </q-expansion-item>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>
<script setup lang="ts">
</script>
<style>
.the-navbar{
  text-decoration: none;
}
</style>
