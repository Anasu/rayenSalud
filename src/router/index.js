import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agregar',
    name: 'Agregar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Agregar.vue')
  },
  {
    path: '/ver',
    name: 'Detalle',
    component: () => import(/* webpackChunkName: "about" */ '../views/Detalle.vue')
  },
  {
    path: '/editar',
    name: 'Editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Editar.vue')
  },
  {
    path: '/*',
    name: 'Not-Found',
    component: () => import(/* webpackChunkName: "about" */ '../views/NotFound.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
