import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/index.vue'
import Fuga from '../pages/fuga.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/fuga',
    name: 'fuga',
    component: Fuga
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
