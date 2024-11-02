import { RouteRecordRaw } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('src/views/HomeView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('src/views/NotFoundView.vue'),
  },
] satisfies RouteRecordRaw[];
