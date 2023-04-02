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

    <the-navbar />

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import TheNavbar from 'src/components/TheNavbar.vue';
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
