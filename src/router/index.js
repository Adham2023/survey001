import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import Newproject from '../views/Newproject'
import Newuser from '../views/Newreg'
import Reports from '../views/Reports'
import Projects from '../components/Projects/Projects'
import Assignments from '../views/Assigns.vue'

import { TokenService } from './services/storage.service'

Vue.use(VueRouter)

const routes = [
  
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
        public: true, // Allow access to even if not logged in
        onlyWhenLoggedOut: true
    }
  },
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'assignments',
        name: 'assignments',
        component: Assignments
      },
      {
        path: 'projects',
        name: 'projects',
        component: Projects
      },
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


router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();
  // const loggedIn = !!"token";

  if (!isPublic && !loggedIn) {
      return next({
          path: '/login',
          query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
      });
  }

  // Do not allow user to visit login opage or register page if they are logged in 
  if (loggedIn && onlyWhenLoggedOut) {
      return next('/');
  }

  next();
})





export default router
