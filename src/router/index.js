import { createRouter, createWebHistory } from 'vue-router'
import FromRoman from '../views/FromRomanView.vue'
import FromNumeral from '../views/FromNumeralView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'roman',
      component: FromRoman
    },
    {
      path: '/fromNumeral',
      name: 'numeral',
      component: FromNumeral
    },
  ]
})

export default router
