import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Dashboard/IndexPage.vue') },

      {
        path: '/orders',
        component: () => import('src/pages/Orders/IndexOrders.vue'),
        children: [
          { path: '/orders/', component: () => import('src/pages/Orders/pages/AllOrders.vue') },
          { path: '/orders/new', component: () => import('src/pages/Orders/pages/NewOrders.vue') }
        ]
      },


      {
        path: '/restaurants',
        component: () => import('src/pages/Restaurants/IndexRestaurants.vue'),
        children: [
          { path: '/restaurants/', component: () => import('src/pages/Restaurants/pages/AllRestaurants.vue') },
          { path: '/restaurants/new', component: () => import('src/pages/Restaurants/pages/NewRestaurants.vue') }
        ]
      },



      
      {
        path: '/users',
        component: () => import('src/pages/Users/IndexUsers.vue'),
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

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/ErrorNotFound.vue'),
  },
];

export default routes;
