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

    <!-- الكارد الأساسي بتصميم زجاجي ناصع -->
    <div class="max-w-xl w-full bg-white/90 backdrop-blur-xl border border-slate-200/80 rounded-[2.5rem] shadow-2xl shadow-slate-200/50 p-8 sm:p-10 relative z-10">
      
      <div class="text-right mb-6 border-b border-slate-100 pb-4">
        <h2 class="text-xl font-black text-slate-900">إنشاء حساب جديد</h2>
        <p class="text-slate-400 text-xs mt-1 font-medium">سجل بياناتك وانضم إلى عائلة البدر فوراً</p>
      </div>

      <!-- تبديل طرق التسجيل (هاتف / بريد) -->
      <div class="flex bg-slate-100 p-1.5 rounded-2xl mb-6 border border-slate-200/60 shadow-inner">
        <button 
          type="button" 
          @click="registerType = 'phone'"
          :class="registerType === 'phone' ? 'bg-white text-[#C5A059] shadow-md font-extrabold scale-[1.02]' : 'text-slate-500 font-semibold hover:text-slate-800'"
          class="flex-1 py-3 text-xs rounded-xl transition-all duration-300 cursor-pointer"
        >
          رقم الهاتف
        </button>
        <button 
          type="button" 
          @click="registerType = 'email'"
          :class="registerType === 'email' ? 'bg-white text-[#C5A059] shadow-md font-extrabold scale-[1.02]' : 'text-slate-500 font-semibold hover:text-slate-800'"
          class="flex-1 py-3 text-xs rounded-xl transition-all duration-300 cursor-pointer"
        >
          البريد الإلكتروني
        </button>
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

        <!-- حقل البريد الإلكتروني (يظهر إذا اختار بريد) -->
        <div v-if="registerType === 'email'">
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

        <!-- حقل رقم الهاتف (يظهر إذا اختار هاتف) -->
        <div v-else>
          <label class="block text-xs font-bold text-slate-700 mb-1.5">رقم الهاتف</label>
          <div class="flex items-center border border-slate-200/80 rounded-2xl overflow-hidden bg-slate-50/50 focus-within:border-[#C5A059] focus-within:ring-4 focus-within:ring-[#C5A059]/10 transition duration-300">
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
              required
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

        <!-- زر التسجيل -->
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
import { useRouter } from 'vue-router'
import { supabase } from '../supabase'

export default {
  setup() {
    const router = useRouter()
    const registerType = ref('phone') // افتراضياً التسجيل برقم الهاتف
    const loading = ref(false)
    const message = ref('')
    const messageType = ref('')

    const form = ref({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      countryCode: '+970',
      password: '',
      city: ''
    })

    const registerUser = async () => {
      loading.value = true
      message.value = ''

      try {
        // توليد نفس صيغة الإيميل الموجودة في صفحة تسجيل الدخول تماماً
        const emailToUse = registerType.value === 'email'
          ? form.value.email
          : `${form.value.countryCode.replace('+', '')}${form.value.phone}@jopalaqar.ps`

        const { data, error } = await supabase.auth.signUp({
          email: emailToUse,
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

        setTimeout(() => {
          router.push('/home')
        }, 1000)

   } catch (err) {
        // هذا السطر سيطبع لكِ الخطأ الكامل في الـ Console، بما في ذلك رسالة Supabase التفصيلية
        console.error("تفاصيل خطأ التسجيل من Supabase:", err); 
        
        message.value = 'حدث خطأ أثناء التسجيل: ' + (err.error_description || err.message);
        messageType.value = 'error';
      } finally {
        loading.value = false;
      }
    }

    return { 
      registerType,
      form, 
      loading, 
      message, 
      messageType, 
      registerUser 
    }
  }
}
</script>