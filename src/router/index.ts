import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../pages/home.vue')
  },
  {
    path: '/about',
    component: () => import('../pages/about.vue')
  },
  {
    path: '/restricted',
    component: () => import('../pages/restricted.vue')
  },
  {
    path: '/login',
    component: () => import('../pages/login.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
  })

export default router
