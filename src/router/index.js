import Vue from 'vue'
import VueRouter from 'vue-router'
import Ingreso from '../views/Ingreso.vue'
import Login from '../views/Login.vue'
import ListadoIngresos from '../views/ListadoIngresos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Ingreso',
    component: Ingreso
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Login
  },
  {
    path: '/listado-ingresos',
    name: 'ListadoIngresos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ListadoIngresos
  }
]

const router = new VueRouter({
  routes
})

export default router
