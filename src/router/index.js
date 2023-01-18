// Composables
import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from '@/views/AboutMe.vue'
import Contact from '@/views/Contact.vue'
import Home from '@/views/Home.vue'
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
    path: '/aboutMe',
    name:'aboutMe',
    component: AboutMe
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
