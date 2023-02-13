// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Contact from '@/views/Contact.vue'
import aboutMe from '@/views/aboutMe.vue'
const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
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
  {
    path: '/contact',
    name:'contact',
    component: Contact,
    props: true,
  },
  {
    path: '/aboutme',
    name:'aboutme',
    component: aboutMe,
    props: true,
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
