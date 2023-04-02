import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/restaurants', component: () => import('pages/RestaurantsPage.vue') },
      { path: '/users', component: () => import('pages/UsersPage.vue') },
      { path: '/orders', component: () => import('pages/OrdersPage.vue') },
    ],
  },
  
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
