import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Users from '../views/Users.vue'


Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  { path: '/', name: 'Home', component: Home},
  { path: '/about', name: 'About', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')},
  { path: '/contact', name: 'Contact', component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue')},
  { path: '/login', name: 'Login', component: Login },
  { path: '/signup', name: 'Signup', component: Signup},
  { path: '/users', name: 'Users', component: Users}
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
