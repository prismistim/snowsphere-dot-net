import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/style.css'
import '@fontsource/ubuntu'
import '@fontsource/ubuntu-mono'
import '@fontsource/material-icons-rounded'
import '@fontsource-variable/fira-code'
import '@fontsource/heebo'

createApp(App).use(router).mount('#app')
