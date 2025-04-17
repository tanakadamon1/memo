import { createRouter, createWebHistory } from 'vue-router'
import inputMemo from '@/components/inputMemo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: inputMemo
    },
    {
      path: '/input',
      name: 'input',
    },
  ],
})

export default router
