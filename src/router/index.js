import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'nameUser',
    component: () => import('@/views/NameUserView')
  },

  {
    path: '/phone',
    name: 'phone',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/PhoneView.vue')
  },
  {
    path: '/photo',
    name: 'home',
    component: () => import('@/views/PhotoView')
  },
  {
    path: '/choose',
    name: 'choose',
    component: () => import('../views/ChooseView')
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/views/Modal')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
