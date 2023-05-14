import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import '@fontsource/ubuntu'
import '@fontsource/ubuntu-mono'
import '@fontsource/material-icons-rounded'

createApp(App).use(router).mount('#app')
