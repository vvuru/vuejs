import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import KakaoLogin from '../views/KakaoLogin.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/kakaologin',
    name: 'kakaologin',
    component: KakaoLogin,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
