<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-100 flex flex-col items-center justify-center py-10 px-4 sm:px-6 relative overflow-hidden" dir="rtl">
    
    <!-- خلفية جمالية متوهجة بخفة -->
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>

    <!-- العنوان والشعار الفاخر -->
    <div class="text-center mb-8 relative z-10 animate-fade-in">
      <h1 class="text-2xl font-black text-slate-900 tracking-wide">شركة البدر للعقارات والاستثمار</h1>
      <p class="text-[#C5A059] text-xs mt-1.5 font-bold tracking-widest uppercase">بوابتك الأولى لعقارات المستقبل</p>
    </div>

    <!-- الكارد الأساسي بتصميم زجاجي נاصع -->
    <div class="max-w-xl w-full bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 sm:p-10 relative z-10">
      
      <div class="text-right mb-6 border-b border-slate-100 pb-4">
        <h2 class="text-xl font-black text-slate-900">إنشاء حساب جديد</h2>
        <p class="text-slate-400 text-xs mt-1 font-medium">سجل بياناتك وانضم إلى عائلة البدر فوراً</p>
      </div>

      <form @submit.prevent="registerUser" class="space-y-4">
        
        <!-- الاسم الأول واسم العائلة -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1.5">الاسم الأول</label>
            <input 
              v-model="form.firstName" 
              type="text" 
              placeholder="الاسم الأول" 
              required 
              class="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200/80 focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/10 outline-none text-sm text-slate-800 transition duration-300" 
            />
          </div>
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1.5">اسم العائلة</label>
            <input 
              v-model="form.lastName" 
              type="text" 
              placeholder="اسم العائلة" 
              required 
              class="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200/80 focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/10 outline-none text-sm text-slate-800 transition duration-300" 
            />
          </div>
        </div>

        <!-- البريد الإلكتروني -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1.5">البريد الإلكتروني</label>
          <input 
            v-model="form.email" 
            type="email" 
            placeholder="example@email.com" 
            required 
            class="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200/80 focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/10 outline-none text-sm text-slate-800 transition duration-300 text-left font-medium" 
            dir="ltr" 
          />
        </div>

        <!-- كلمة المرور -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1.5">كلمة المرور</label>
          <input 
            v-model="form.password" 
            type="password" 
            placeholder="••••••••" 
            required 
            class="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200/80 focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/10 outline-none text-sm text-slate-800 transition duration-300" 
          />
        </div>

        <!-- المدينة -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1.5">المدينة</label>
          <select 
            v-model="form.city" 
            required 
            class="w-full px-4 py-3.5 rounded-2xl bg-slate-50/50 border border-slate-200/80 focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/10 outline-none text-sm text-slate-800 transition duration-300 cursor-pointer"
          >
            <option value="" disabled selected>اختر المدينة</option>
            <option value="نابلس">نابلس</option>
            <option value="رام الله">رام الله</option>
            <option value="الخليل">الخليل</option>
            <option value="غزة">غزة</option>
            <option value="القدس">القدس</option>
          </select>
        </div>

        <!-- زر التسجيل (ذهبي ملكي مع تأثير حركي) -->
        <button 
          type="submit" 
          :disabled="loading" 
          class="w-full bg-gradient-to-r from-[#C5A059] to-[#d4af37] hover:from-[#b08d4c] hover:to-[#c5a059] text-slate-950 font-black py-4 px-4 rounded-2xl transition-all duration-300 shadow-lg shadow-[#C5A059]/20 hover:shadow-xl hover:shadow-[#C5A059]/30 cursor-pointer text-sm mt-4 transform active:scale-[0.98]"
        >
          {{ loading ? 'جاري إنشاء الحساب...' : 'تسجيل الحساب' }}
        </button>
      </form>

      <!-- رسالة الخطأ أو النجاح -->
      <div v-if="message" class="mt-4 p-3.5 rounded-2xl border text-center text-xs font-bold animate-pulse" :class="messageType === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'">
        {{ message }}
      </div>

    </div>

    <!-- العودة لتسجيل الدخول -->
    <div class="text-center mt-6 relative z-10">
      <span class="text-slate-400 text-xs font-medium">لديك حساب بالفعل؟ </span>
      <router-link to="/login" class="text-[#C5A059] font-extrabold text-xs hover:underline tracking-wide">
        تسجيل الدخول
      </router-link>
    </div>

  </div>
</template>
<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router' // <--- 1. استيراد الموجه
import { supabase } from '../supabase'

export default {
  setup() {
    const router = useRouter() // <--- 2. تفعيل الموجه
    const loading = ref(false)
    const message = ref('')
    const messageType = ref('')

    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      city: ''
    })

    const registerUser = async () => {
      loading.value = true
      message.value = ''

      try {
        const { data, error } = await supabase.auth.signUp({
          email: form.value.email,
          password: form.value.password,
          options: {
            data: {
              first_name: form.value.firstName,
              last_name: form.value.lastName,
              city: form.value.city
            }
          }
        })

        if (error) throw error

        message.value = 'تم إنشاء الحساب بنجاح!'
        messageType.value = 'success'

        // 3. التوجيه تلقائياً للرئيسية بعد النجاح بفترة قصيرة
        setTimeout(() => {
          router.push('/home')
        }, 1000)

      } catch (err) {
        message.value = 'حدث خطأ أثناء التسجيل: ' + err.message
        messageType.value = 'error'
      } finally {
        loading.value = false
      }
    }

    return { form, loading, message, messageType, registerUser }
  }
}
</script>