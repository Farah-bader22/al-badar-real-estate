import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Explore from '../components/Explore.vue' // استيراد صفحة استكشف
import SavedProperties from '../components/SavedProperties.vue' // استيراد صفحة العقارات المحفوظة الجديدة
import MyListings from '../components/MyListings.vue'
import Settings from '../components/Settings.vue' // استيراد صفحة الإعدادات الحقيقية

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/explore',
    name: 'explore',
    component: Explore // ربط المسار بمكون Explore الصحيح
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings // ربط المسار بمكون Settings الحقيقي
  },
  {
    path: '/my-listings',
    name: 'my-listings',
    component: MyListings // تم ربطها بصفحة منشوراتي الحقيقية بنجاح
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: SavedProperties // تم ربطها بصفحة العقارات المحفوظة الحقيقية بنجاح
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router