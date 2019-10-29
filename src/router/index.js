import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Newproject from '../views/Newproject'
import Newuser from '../views/Newreg'
import Reports from '../views/Reports'
Vue.use(VueRouter)

const routes = [
  
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'reports',
        name: 'reports',
        component: Reports
      },
      {
        path: 'newproject',
        name: 'newproject',
        component: Newproject
      },
      {
        path: 'newuser',
        name: 'newuser',
        component: Newuser
      },
      {
        path: 'about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
