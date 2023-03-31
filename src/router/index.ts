// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/music',
        name: 'Music',
        // route level code-splitting
        component: () => import('@/views/Music.vue'),
      },
      {
        path: '/nerdy',
        name: 'Nerdy',
        // route level code-splitting
        component: () => import('@/views/Nerdy.vue'),
      },
      {
        path: '/contact',
        name: 'Contact',
        // route level code-splitting
        component: () => import('@/views/Contact.vue'),
      },
      {
        path: '',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
