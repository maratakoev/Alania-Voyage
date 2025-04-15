import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/galery',
    name: 'galery',
    // Добавление webpackChunkName для галереи
    component: () => import(/* webpackChunkName: "galery" */ '../views/Galery.vue')
  },
  {
    path: '/routs',
    name: 'routs',
    // Добавление webpackChunkName для галереи
    component: () => import(/* webpackChunkName: "routs" */ '../views/Routs.vue')
  },
  {
    path: '/tours',
    name: 'tours',
    // Добавление webpackChunkName для галереи
    component: () => import(/* webpackChunkName: "tours" */ '../views/Living.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    return { top: 0 }
  }
})

export default router
