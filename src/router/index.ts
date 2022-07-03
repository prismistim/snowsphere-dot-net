import { createRouter, createWebHistory } from 'vue-router'

import Home from '/@/pages/Home.vue'
import About from '/@/pages/About.vue'
import Works from '/@/pages/Works.vue'
import WorkDetail from '/@/pages/WorkDetail.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/works',
    name: 'Works',
    component: Works,
  },
  {
    path: '/works/:id',
    name: 'Works/Detail',
    component: WorkDetail
  }
]

export default createRouter({
  history: createWebHistory(),
  routes: routes,
})
