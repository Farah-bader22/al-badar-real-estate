import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from '../supabase.js' // تأكدي من مسار استيراد supabase الصحيح لديكِ
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
    component: AdminDashboard,
    meta: { requiresAdmin: true } // <--- أضفنا هذه العلامة لحماية المسار
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// حارس التنقل (Navigation Guard) لمنع أي شخص عدا الآدمن من الدخول
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAdmin) {
    const { data: { user } } = await supabase.auth.getUser()
    
    // التحقق هل المستخدم مسجل دخوله وإيميله هو إيميل الآدمن
    if (user && user.email === 'mb837093@gmail.com') {
      next() // السماح بالدخول
    } else {
      alert('غير مسموح لك بالدخول لهذه الصفحة!')
      next('/home') // توجيهه إلى الصفحة الرئيسية أو صفحة تسجيل الدخول
    }
  } else {
    next() // باقي المسارات طبيعية
  }
})

export default router