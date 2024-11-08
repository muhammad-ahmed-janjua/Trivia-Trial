import './assets/main.css';
import 'primeicons/primeicons.css';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import router from './router';

import { createPinia } from 'pinia';
import { useAuthStore } from './store/auth'
import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App);
app.use(createPinia())
app.use(router);
app.use(Toast);

const authStore = useAuthStore();
authStore.setCsrfToken();

app.mount('#app');
