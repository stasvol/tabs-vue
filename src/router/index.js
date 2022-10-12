import {createRouter, createWebHashHistory, createWebHistory} from 'vue-router'
import store from "@/store";

const routes = [
  {
    path: '/',
    name: 'name',
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
    name: 'photo',
    component: () => import('@/views/PhotoView'),
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

// const routerPatch = store.state?.name?.name
// let router

 const router = createRouter({
        history: createWebHashHistory(process.env.BASE_URL),
      // hash: createWebHashHistory(),
        routes
  })

// if (store.state?.name?.name) {
//     router = createRouter({
//     history: createWebHashHistory(process.env.BASE_URL),
//     // hash: createWebHashHistory(),
//     routes
//   })
// }

// router.beforeEach((to, from, next)=> {
//   if (store.state.name) {
//     console.log(store.state.name)
//   }
// })

export default router

