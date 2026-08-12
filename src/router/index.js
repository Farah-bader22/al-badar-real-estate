import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'
import Explore from '../components/Explore.vue'
import SavedProperties from '../components/SavedProperties.vue'
import MyListings from '../components/MyListings.vue'
import Settings from '../components/Settings.vue'
import AdminDashboard from '../components/AdminDashboard.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component: Home
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
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminDashboard // <--- 2. إضافة المسار هنا
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router