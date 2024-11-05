import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import Components from 'unplugin-vue-components/vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      vue(),
      Components({
        dts: true,
      })],
    resolve: {
      alias: {
        src: path.resolve(__dirname, './src'),
      },
    },
    server: {
      proxy: {
        '/api': {
          target: `${env.VITE_BASE_URL}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  };
});
