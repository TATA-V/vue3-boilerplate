import { RouteRecordRaw } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('src/pages/HomePage.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('src/pages/NotFoundPage.vue'),
  },
] satisfies RouteRecordRaw[];
