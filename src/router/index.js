// Composables
import { createRouter, createWebHistory } from 'vue-router'
import aboutMe from '@/views/aboutMe'
import Contact from '@/views/Contact.vue'

const routes = [
  {

    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '/',
        name: 'Home',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
      },

    ],

  },
  
  
  
  {
    path: '/aboutme',
    name:'aboutMe',
    component: aboutMe
  },
  {
    path: '/contact',
    name:'contact',
    component: Contact
  },
  


]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
