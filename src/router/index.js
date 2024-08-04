import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: () => import('../views/HomeView.vue'),
    meta: { isLogged: true }
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: () => import('../components/UserLogin.vue')
  },
  {
    path: '/registration',
    name: 'RegistrationUser',
    component: () => import('../components/RegistrationUser.vue')
  }
]

const router = createRouter({
  history: createWebHistory('/User-registration/'),
  routes
})

export default router
