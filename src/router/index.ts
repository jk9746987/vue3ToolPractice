import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/i18nPractice',
      name: 'i18nPractice',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/tool/i18nPractice.vue')
    },
    {
      path: '/loginLayout',
      name: 'loginLayout',
      component: () => import('../views/layout/loginLayout.vue')
    }
  ]
})

export default router
