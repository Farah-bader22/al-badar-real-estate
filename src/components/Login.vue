<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-slate-100/50 to-slate-100 flex flex-col items-center justify-center p-4 sm:p-6 relative overflow-hidden" dir="rtl">
    
    <!-- خلفية جمالية خفيفة جداً (إضاءة فاخرة باللون الذهبي الخفيف) -->
    <div class="absolute -top-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-32 -left-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none"></div>

    <!-- الشعار والعنوان بتصميم ملكي فاخر -->
    <div class="text-center mb-8 relative z-10 animate-fade-in">
      <div class="w-20 h-20 mx-auto mb-4 bg-white rounded-3xl flex items-center justify-center border-2 border-[#C5A059]/30 shadow-xl shadow-[#C5A059]/5 overflow-hidden p-1.5 transform hover:scale-105 transition duration-300">
        <img src="/public/logo.jpg" alt="شعار البدر" class="w-full h-full object-cover rounded-2xl" />
      </div>
      <h1 class="text-2xl font-black text-slate-900 tracking-wider">البدر للعقارات</h1>
      <p class="text-[#C5A059] text-xs mt-1.5 font-bold tracking-widest uppercase">التميز في العقارات الفلسطينية</p>
    </div>

    <!-- الكارد الأساسي بتصميم زجاجي ناصع ونظيف -->
    <div class="max-w-md w-full bg-white/90 backdrop-blur-xl rounded-[2.5rem] shadow-2xl shadow-slate-200/50 border border-slate-200/80 p-8 sm:p-10 relative z-10">
      
      <div class="text-right mb-6">
        <h2 class="text-xl font-black text-slate-900">أهلاً بك مجدداً</h2>
        <p class="text-xs text-slate-400 mt-1 font-medium">سجل دخولك لاستكشاف أفخم العقارات</p>
      </div>

      <!-- تبديل طرق الدخول (هاتف / بريد) بتصميم فاخر وناعم -->
      <div class="flex bg-slate-100 p-1.5 rounded-2xl mb-6 border border-slate-200/60 shadow-inner">
        <button 
          type="button" 
          @click="loginType = 'phone'"
          :class="loginType === 'phone' ? 'bg-white text-[#C5A059] shadow-md font-extrabold scale-[1.02]' : 'text-slate-500 font-semibold hover:text-slate-800'"
          class="flex-1 py-3 text-xs rounded-xl transition-all duration-300 cursor-pointer"
        >
          رقم الهاتف
        </button>
        <button 
          type="button" 
          @click="loginType = 'email'"
          :class="loginType === 'email' ? 'bg-white text-[#C5A059] shadow-md font-extrabold scale-[1.02]' : 'text-slate-500 font-semibold hover:text-slate-800'"
          class="flex-1 py-3 text-xs rounded-xl transition-all duration-300 cursor-pointer"
        >
          البريد الإلكتروني
        </button>
      </div>

      <form @submit.prevent="handleLogin" class="space-y-4">
        
        <!-- حقل البريد الإلكتروني -->
        <div v-if="loginType === 'email'">
          <label class="block text-xs font-bold text-slate-700 mb-1.5">البريد الإلكتروني</label>
          <input 
            v-model="form.email" 
            type="email" 
            placeholder="example@email.com" 
            required 
            class="w-full px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/10 outline-none bg-slate-50/50 text-sm text-slate-800 transition duration-300"
          />
        </div>

        <!-- حقل رقم الهاتف -->
        <div v-else>
          <label class="block text-xs font-bold text-slate-700 mb-1.5">رقم الهاتف</label>
          <div class="flex items-center border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50 focus-within:border-[#C5A059] focus-within:ring-4 focus-within:ring-[#C5A059]/10 transition duration-300">
            <!-- قائمة مقدمات الدول -->
            <select 
              v-model="form.countryCode" 
              class="bg-slate-100/80 border-l border-slate-200 px-3.5 py-3.5 text-xs font-bold outline-none text-center cursor-pointer text-slate-700 hover:bg-slate-200/50 transition"
            >
              <option value="+970">🇵🇸 +970</option>
              <option value="+972">🇵🇸 +972</option>
              <option value="+962">🇯🇴 +962</option>
              <option value="+966">🇸🇦 +966</option>
              <option value="+971">🇦🇪 +971</option>
              <option value="+20">🇪🇬 +20</option>
              <option value="+1">🇺🇸 +1</option>
            </select>
            <input 
              v-model="form.phone" 
              type="text" 
              placeholder="59XXXXXXX" 
              class="w-full px-4 py-3.5 outline-none bg-transparent text-sm text-left text-slate-800 font-medium" 
              dir="ltr"
            />
          </div>
        </div>

        <!-- كلمة المرور -->
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1.5">كلمة المرور</label>
          <input 
            v-model="form.password" 
            type="password" 
            placeholder="••••••••" 
            required 
            class="w-full px-4 py-3.5 rounded-2xl border border-slate-200/80 focus:border-[#C5A059] focus:ring-4 focus:ring-[#C5A059]/10 outline-none bg-slate-50/50 text-sm text-slate-800 transition duration-300"
          />
        </div>

        <!-- زر تسجيل الدخول (ذهبي ملكي مع ظل متوهج خفيف) -->
        <button 
          type="submit" 
          :disabled="loading" 
          class="w-full bg-gradient-to-r from-[#C5A059] to-[#d4af37] hover:from-[#b08d4c] hover:to-[#c5a059] text-slate-950 font-black py-4 px-4 rounded-2xl transition-all duration-300 shadow-lg shadow-[#C5A059]/20 hover:shadow-xl hover:shadow-[#C5A059]/30 cursor-pointer text-sm mt-3 transform active:scale-[0.98]"
        >
          {{ loading ? 'جاري التحقق...' : 'تسجيل الدخول' }}
        </button>

        <!-- تصفح كضيف -->
        <div class="text-center pt-3">
          <button type="button" @click="continueAsGuest" class="text-slate-500 hover:text-[#C5A059] font-bold text-xs transition duration-300 cursor-pointer flex items-center justify-center gap-1 mx-auto">
            <span>تصفح المنصة كضيف</span>
            <svg class="w-3.5 h-3.5 transform rotate-180" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path></svg>
          </button>
        </div>

        <!-- رسالة الخطأ أو النجاح -->
        <div v-if="message" class="p-3.5 rounded-2xl border text-center text-xs font-bold animate-pulse" :class="messageType === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'">
          {{ message }}
        </div>

      </form>
    </div>

    <!-- رابط إنشاء حساب جديد -->
    <div class="text-center mt-6 relative z-10">
      <span class="text-slate-400 text-xs font-medium">ليس لديك حساب بعد؟ </span>
      <router-link to="/register" class="text-[#C5A059] font-extrabold text-xs hover:underline tracking-wide">
        انضم إلينا الآن
      </router-link>
    </div>

  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

export default {
  setup() {
    const router = useRouter()
    const loginType = ref('phone')
    const form = ref({ 
      email: '', 
      phone: '', 
      countryCode: '+970', 
      password: '' 
    })
    const loading = ref(false)
    const message = ref('')
    const messageType = ref('')

    const handleLogin = async () => {
      loading.value = true
      message.value = ''
      try {
        const emailToUse = loginType.value === 'email' 
          ? form.value.email 
          : `${form.value.countryCode.replace('+', '')}${form.value.phone}@jopalaqar.ps`

        const { data, error } = await supabase.auth.signInWithPassword({
          email: emailToUse,
          password: form.value.password
        })
        if (error) throw error
        
        message.value = 'تم تسجيل الدخول بنجاح!'
        messageType.value = 'success'
        
        // التوجيه تلقائياً للصفحة الرئيسية بعد النجاح بفترة قصيرة
        setTimeout(() => {
          router.push('/')
        }, 1000)

      } catch (err) {
        message.value = 'خطأ في البيانات المدخلة: ' + err.message
        messageType.value = 'error'
      } finally {
        loading.value = false
      }
    }

    // دالة تصفح كضيف لتنتقل للرئيسية مباشرة
    const continueAsGuest = () => {
      router.push('/')
    }

    return { 
      loginType, 
      form, 
      loading, 
      message, 
      messageType, 
      handleLogin, 
      continueAsGuest 
    }
  }
}
</script>