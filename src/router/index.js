import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tarefas',
    component: () => import('../views/Tarefas.vue')
  },
  {
    path: '/sobre',
    name: 'About',
  
    component: () => import('../views/About.vue')
  },
  {

    path:'/avalia',
    name: 'Rate',

    componente: () => import('../views/Rate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
