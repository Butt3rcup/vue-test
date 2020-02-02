/*
 * @Author:
 * @Date: 2020-01-30 23:58:06
 * @LastEditors  : Ly
 * @LastEditTime : 2020-02-02 04:42:50
 * @FilePath: \test-vue\src\router\index.js
 * @Description:
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Login from '../components/Login'
import Home from '../components/Home'
import Welcome from '../components/Welcome'
import Users from '../components/user/Users'
const Login = () => import('../components/Login')
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },

  {
    path: '/login',

    component: Login
  },
  {
    path: '/home',
    component: resolve => require(['@/components/Home'], resolve),
    redirect: '/welcome',
    children: [
      { path: '/welcome', component: resolve => require(['@/components/Welcome'], resolve) },
      {
        path: '/users',
        component: resolve => require(['@/components/user/Users'], resolve)
      }
    ]
  }
]
const router = new VueRouter({
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const token = window.sessionStorage.getItem('token')
  if (!token) {
    return next('/login')
  }
  next()
})
