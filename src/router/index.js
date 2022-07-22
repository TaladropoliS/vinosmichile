import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vinos',
    name: 'vinos',
    component: () => import(/* webpackChunkName: "vinos" */ '../views/Vinos.vue')
  },
  {
    path: '/promocion',
    name: 'promocion',
    component: () => import(/* webpackChunkName: "promocion" */ '../views/Promocion.vue')
  },
  {
    path: '/accesorios',
    name: 'accesorios',
    component: () => import(/* webpackChunkName: "accesorios" */ '../views/Accesorios.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import(/* webpackChunkName: "checkout" */ '../views/CheckOut.vue')
  },
  {
    path: '/confirmacion',
    name: 'confirmacion',
    component: () => import(/* webpackChunkName: "confirmacion" */ '../views/Confirmacion.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notfound',
    component: () => import(/* webpackChunkName: "notfound" */ '../views/NotFoundVue.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
