import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
        meta: {
          isAuthRequired: true,
        },
      },
      {
        path: '/games',
        name: 'GamesDashboard',
        component: () => import('pages/GamesDashboard.vue'),
      },
      {
        path: '/games/:name/:mainhash?',
        name: 'TagDashboard',
        component: () => import('pages/TagsDashboard.vue'),
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('pages/LoginPage.vue'),
    meta: {
      isAuthRequired: false,
    },
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
