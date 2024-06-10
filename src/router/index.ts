import { createRouter, createWebHistory } from 'vue-router'
import autenticacionRoutes from '../modules/autenticacion/routes'
import dashboardRoutes from '../modules/dashboard/routes'
// import { useAutenticacionStore } from '@/stores/use-autenticacion.store'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...autenticacionRoutes,
    ...dashboardRoutes,
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../components/ui/NotFoundComponent.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem('auth/isAuthenticated') !== 'true') {
      next({name: 'Login'})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
