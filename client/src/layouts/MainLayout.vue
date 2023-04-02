<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

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
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="home" />
            </q-item-section>
            <q-item-section>Dashboard</q-item-section>
          </q-item>

          <q-separator spaced />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="group" />
            </q-item-section>
            <q-item-section>Users</q-item-section>
          </q-item>
          <q-list>
            <router-link to="/users/new" class="menu-link">
              <q-item clickable v-ripple>
                <q-item-section avatar> </q-item-section>
                <q-item-section ne>New user</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/users" class="menu-link">
              <q-item clickable v-ripple>
                <q-item-section avatar> </q-item-section>
                <q-item-section>All Users</q-item-section>
              </q-item>
            </router-link>
          </q-list>

          <q-separator spaced />
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="list" />
            </q-item-section>
            <q-item-section>Orders</q-item-section>
          </q-item>
          <q-list>
            <router-link to="/orders/new" class="menu-link">
              <q-item clickable v-ripple>
                <q-item-section avatar> </q-item-section>
                <q-item-section ne>New order</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/orders" class="menu-link">
              <q-item clickable v-ripple>
                <q-item-section avatar> </q-item-section>
                <q-item-section>All order</q-item-section>
              </q-item>
            </router-link>
          </q-list>

          <q-separator spaced />

          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="primary" name="restaurant" />
            </q-item-section>
            <q-item-section>Restaurants</q-item-section>
          </q-item>
          <q-list>
            <router-link to="/restaurants/new" class="menu-link">
              <q-item clickable v-ripple>
                <q-item-section avatar> </q-item-section>
                <q-item-section ne>New restaurants</q-item-section>
              </q-item>
            </router-link>
            <router-link to="/restaurants" class="menu-link">
              <q-item clickable v-ripple>
                <q-item-section avatar> </q-item-section>
                <q-item-section>All restaurants</q-item-section>
              </q-item>
            </router-link>
          </q-list>
        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const menuList = [
  {
    icon: 'inbox',
    label: 'Dashboard',
    separator: true,
    route: '/',
  },
  {
    icon: 'send',
    label: 'Orders',
    separator: false,
    route: '/orders',
  },
  {
    icon: 'group',
    label: 'Users',
    separator: false,
    route: '/users',
  },
  {
    icon: 'restaurant',
    label: 'Restaurants',
    separator: true,
    route: '/restaurants',
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false,
    route: '/settings',
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false,
    route: '/feedback',
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false,
    route: '/help',
  },
];

const drawer = ref(false);
const leftDrawerOpen = ref(false);

const toggleLeftDrawer = () => {
  leftDrawerOpen.value = !leftDrawerOpen.value;
};
</script>
<style>
.menu-link {
  text-decoration: none;
  color: #414141;
}
</style>
