import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        name: 'DashboardIndex',
        component: () => import('src/pages/Dashboard/DashboardIndex.vue')
      },
      {
        path: '/orders',
        component: () => import('src/pages/Orders/OrdersIndex.vue'),
        children: [
          { path: '/orders/', component: () => import('src/pages/Orders/pages/AllOrders.vue') },
          { path: '/orders/new', component: () => import('src/pages/Orders/pages/NewOrders.vue') }
        ]
      },
      {
        path: '/restaurants',
        component: () => import('src/pages/Restaurants/RestaurantsIndex.vue'),
        children: [
          { path: '/restaurants/', name: 'AllRestaurants', component: () => import('src/pages/Restaurants/pages/AllRestaurants.vue') },
          { path: '/restaurants/new', name: 'NewRestaurants', component: () => import('src/pages/Restaurants/pages/NewRestaurants.vue') }
        ]
      },
      {
        path: '/users',
        component: () => import('src/pages/Users/UsersIndex.vue'),
        children: [
          { path: '/users/', component: () => import('src/pages/Users/pages/AllUsers.vue') },
          { path: '/users/new', component: () => import('src/pages/Users/pages/NewUsers.vue') }
        ]
      },
      // { path: '/restaurants', component: () => import('pages/RestaurantsPage.vue') },
      // { path: '/users', component: () => import('pages/UsersPage.vue') },
      // { path: '/orders', component: () => import('src/pages/Orders/pages/AllOrders.vue') },
    ],
  },

  {
    path: '/auth',
    component: () => import('src/pages/Auth/AuthIndex.vue'),
    children: [
      {
        path: '/auth/login',
        component: () => import('src/pages/Auth/pages/TheLogin.vue'),
      },
      {
        path: '/auth/register',
        component: () => import('src/pages/Auth/pages/TheRegister.vue'),
      },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
];

export default routes;
