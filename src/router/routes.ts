import { RouteRecordRaw } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('src/views/HomeView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('src/views/NotFoundView.vue'),
  },
] satisfies RouteRecordRaw[];
