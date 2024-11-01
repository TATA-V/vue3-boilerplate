import { RouteRecordRaw } from 'vue-router';

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('src/pages/HomePage.vue'),
  },
] satisfies RouteRecordRaw[];
