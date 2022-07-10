import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from '@/router';
import App from './App.vue';

const app = createApp(App).use(router).use(createPinia());

app.mount('#app');
