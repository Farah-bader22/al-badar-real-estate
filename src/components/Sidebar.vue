<template>
  <!-- طبقة التعتيم الخلفية -->
  <div class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex justify-start transition-opacity" dir="rtl" @click.self="$emit('close')">
    
    <!-- صندوق القائمة الجانبية -->
    <div class="w-80 sm:w-96 bg-white h-full shadow-2xl flex flex-col justify-between p-6 overflow-y-auto border-l border-amber-100 text-right text-slate-800">
      
      <div>
        <!-- رأس القائمة -->
        <div class="flex items-center justify-between pb-5 border-b border-amber-100/60">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-white border border-[#b89735]/40 flex items-center justify-center overflow-hidden shadow-sm p-0.5">
              <img src="/public/logo.jpg" alt="البدر للعقارات" class="w-full h-full object-cover rounded-lg" />
            </div>
            <span class="font-bold text-slate-900 text-lg tracking-tight">البدر للعقارات</span>
          </div>

          <button @click="$emit('close')" class="text-slate-400 hover:text-[#b89735] p-2 rounded-xl hover:bg-amber-50 transition-all duration-200 cursor-pointer">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>

        <!-- بطاقة معلومات المستخدم -->
        <div class="mt-6 bg-gradient-to-br from-amber-50/50 via-white to-white border border-amber-200/60 rounded-2xl p-4 flex items-center justify-between shadow-sm">
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-2xl bg-[#b89735] text-white font-bold text-lg flex items-center justify-center shadow-md shadow-[#b89735]/25">
              {{ userInitials }}
            </div>
            <div class="text-right overflow-hidden">
              <h3 class="font-bold text-slate-900 text-base truncate">{{ userName }}</h3>
              <span class="inline-block mt-1 px-3 py-0.5 bg-amber-100/80 text-[#9a7b2a] text-[11px] font-bold rounded-full border border-amber-200/60">
                مستخدم نشط
              </span>
            </div>
          </div>
        </div>

        <!-- تصفح العقارات -->
        <div class="mt-8">
          <p class="text-[11px] font-extrabold text-[#b89735] uppercase tracking-wider mb-3 px-2">تصفح العقارات</p>
          <nav class="space-y-1.5">
            <router-link to="/home" @click="$emit('close')" class="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-600 hover:bg-amber-50 hover:text-[#b89735] transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-[#b89735] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span class="text-sm">الرئيسية</span>
            </router-link>

            <router-link to="/explore" @click="$emit('close')" class="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-600 hover:bg-amber-50 hover:text-[#b89735] transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-[#b89735] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
              <span class="text-sm">استكشف</span>
            </router-link>

            <router-link to="/settings" @click="$emit('close')" class="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-600 hover:bg-amber-50 hover:text-[#b89735] transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-[#b89735] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <span class="text-sm">الإعدادات</span>
            </router-link>
            
            <!-- رابط الآدمن (يظهر فقط لمحمد) -->
            <router-link v-if="isAdmin" to="/admin" @click="$emit('close')" class="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-600 hover:bg-amber-50 hover:text-[#b89735] transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-[#b89735] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h1m1 0a2 2 0 012-2v6a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
              </svg>
              <span class="text-sm">لوحة تحكم الآدمن</span>
            </router-link>
          </nav>
        </div>

        <!-- قسم الحساب -->
        <div class="mt-6">
          <p class="text-[11px] font-extrabold text-[#b89735] uppercase tracking-wider mb-3 px-2">الحساب</p>
          <nav class="space-y-1.5">
            <router-link to="/my-listings" @click="$emit('close')" class="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-600 hover:bg-amber-50 hover:text-[#b89735] transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-[#b89735] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
              </svg>
              <span class="text-sm">منشوراتي</span>
            </router-link>
            <router-link to="/favorites" @click="$emit('close')" class="flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-slate-600 hover:bg-amber-50 hover:text-[#b89735] transition-all group">
              <svg class="w-5 h-5 text-slate-400 group-hover:text-[#b89735] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
              <span class="text-sm">العقارات المحفوظة</span>
            </router-link>
          </nav>
        </div>
      </div>

      <!-- زر تسجيل الخروج -->
      <div class="pt-4 border-t border-amber-100 mt-6">
        <button @click="handleLogout" class="w-full flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl border border-red-100 bg-red-50/50 hover:bg-red-100/70 text-red-600 font-semibold transition-all duration-200 cursor-pointer shadow-xs">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
          </svg>
          <span class="text-sm">تسجيل الخروج</span>
        </button>
        <div class="text-center mt-5 mb-2">
          <p class="text-xs font-semibold text-gray-500 tracking-wide">إعداد: المهندسة فرح محمد بدر</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

export default {
  emits: ['close'],
  setup(props, { emit }) {
    const router = useRouter()
    const userName = ref('زائر المنصة')
    const isAdmin = ref(false) // حالة الآدمن
    
    const userInitials = computed(() => {
      return userName.value ? userName.value.charAt(0).toUpperCase() : 'م'
    })

    onMounted(async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          // التحقق من إيميل الآدمن
          if (user.email === 'mb837093@gmail.com') {
            isAdmin.value = true
          }

          const first = user.user_metadata?.first_name || ''
          const last = user.user_metadata?.last_name || ''
          const fullName = user.user_metadata?.name || ''

          if (fullName) {
            userName.value = fullName
          } else if (first || last) {
            userName.value = `${first} ${last}`.trim()
          } else if (user.email) {
            userName.value = user.email.split('@')[0]
          }
        }
      } catch (err) {
        console.error('خطأ في جلب بيانات المستخدم:', err.message)
      }
    })

    const handleLogout = async () => {
      await supabase.auth.signOut()
      emit('close')
      router.push('/')
    }

    return { 
      userName, 
      userInitials, 
      handleLogout,
      isAdmin 
    }
  }
}
</script>

<style scoped>
.router-link-active {
  background-color: rgba(184, 151, 53, 0.12) !important;
  color: #9a7b2a !important;
  border-right: 3px solid #b89735;
}
.router-link-active svg {
  color: #b89735 !important;
}
</style>