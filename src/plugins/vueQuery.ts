import { App } from 'vue';
import { VueQueryPlugin, QueryClient } from '@tanstack/vue-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retryOnMount: true,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 1000 * 60 * 10,
      gcTime: 1000 * 60 * 15,
    },
  },
});

export const vueQuery = (app: App) => {
  app.use(VueQueryPlugin, { queryClient });
};
