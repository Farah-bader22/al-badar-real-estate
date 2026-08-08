import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Explore from '../components/Explore.vue'
import SavedProperties from '../components/SavedProperties.vue'
import MyListings from '../components/MyListings.vue'
import Settings from '../components/Settings.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login // أصبحت صفحة تسجيل الدخول هي الصفحة الرئيسية عند فتح التطبيق
  },
  {
    path: '/home',
    name: 'home',
    component: Home // نقلنا الصفحة الرئيسية العادية إلى هذا المسار
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings
  },
  {
    path: '/my-listings',
    name: 'my-listings',
    component: MyListings
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: SavedProperties
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router