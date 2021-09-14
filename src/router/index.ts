import { createRouter, createWebHistory } from 'vue-router'

import Home from '/@/pages/Home.vue'
import Fuga from '../pages/fuga.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fuga',
    name: 'Fuga',
    component: Fuga
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes
})
