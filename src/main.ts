import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { router } from './router';
import { vueQuery } from './plugins/vueQuery';

const app = createApp(App);
app.use(router);
vueQuery(app);
app.mount('#app');
