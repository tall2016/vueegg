import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
  ,
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "about" */ '../views/table.vue')
  }
  ,
  {
    path: '/movies',
    name: 'movies',
    component: () => import(/* webpackChunkName: "about" */ '../views/movies.vue')
  }
  ,
  {
    path: '/upload',
    name: 'upload',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload.vue')
  }
  ,
  {
    path: '/upload2',
    name: 'upload2',
    component: () => import(/* webpackChunkName: "about" */ '../views/upload2.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let isLogin = localStorage.getItem("token");
  if (to.name !== 'Login' && !isLogin) next({
      name: 'Login'
  })
  else next()
  
})

export default router
