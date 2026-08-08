<template>
  <div class="min-h-screen bg-gradient-to-b from-slate-50 via-[#FDF8E2]/20 to-slate-50 py-10 px-4 sm:px-6 lg:px-8 pb-32" dir="rtl">
    <div class="max-w-3xl mx-auto space-y-6">
      
      <!-- عنوان الصفحة -->
      <div class="flex items-center justify-between pb-5 border-b border-[#a48232]/20">
        <div>
          <h1 class="text-2xl font-black text-slate-900 tracking-tight">إعدادات الحساب 
            </h1>
          <p class="text-xs text-slate-500 mt-1 tracking-wide">قم بتحديث بياناتك الشخصية، إدارة الأمان، والتواصل الفوري مع الدعم الفني</p>
        </div>
        <router-link to="/" class="px-5 py-2.5 bg-white/90 backdrop-blur-xl border border-[#a48232]/30 rounded-2xl text-slate-700 hover:bg-[#a48232] hover:text-white text-xs font-bold transition-all duration-300 shadow-sm flex items-center gap-2 group">
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
          </svg>
          العودة للرئيسية
        </router-link>
      </div>

      <!-- تنبيهات النجاح أو الخطأ -->
      <transition name="fade">
        <div v-if="successMessage" class="p-4 rounded-2xl bg-emerald-50/90 backdrop-blur-xl border border-emerald-200 text-emerald-700 text-xs font-bold flex items-center gap-2.5 shadow-sm">
          <div class="w-6 h-6 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          {{ successMessage }}
        </div>
      </transition>

      <transition name="fade">
        <div v-if="errorMessage" class="p-4 rounded-2xl bg-rose-50/90 backdrop-blur-xl border border-rose-200 text-rose-600 text-xs font-bold flex items-center gap-2.5 shadow-sm">
          <div class="w-6 h-6 rounded-xl bg-rose-500 text-white flex items-center justify-center shrink-0">
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </div>
          {{ errorMessage }}
        </div>
      </transition>

      <!-- 1. تعديل البيانات الأساسية -->
      <div class="bg-white/95 backdrop-blur-xl rounded-[2rem] border border-[#a48232]/25 p-7 shadow-[0_8px_30px_rgba(164,130,50,0.07)] transition-all duration-300 hover:border-[#a48232]/50">
        <h2 class="text-base font-black text-slate-900 mb-5 flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#FDF8E2] border border-[#a48232]/30 flex items-center justify-center text-[#a48232] shadow-2xs">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          </div>
          البيانات الأساسية
        </h2>

        <form @submit.prevent="updateProfile" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-extrabold text-slate-700 mb-1.5 tracking-wide">الاسم الكامل</label>
              <input 
                type="text" 
                v-model="profileForm.fullName" 
                class="w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 focus:border-[#a48232] focus:ring-2 focus:ring-[#a48232]/20 outline-none transition-all text-slate-800 text-xs font-medium"
                placeholder="أدخل اسمك الكامل"
                required
              />
            </div>
            <div>
              <label class="block text-xs font-extrabold text-slate-700 mb-1.5 tracking-wide">البريد الإلكتروني</label>
              <input 
                type="email" 
                v-model="profileForm.email" 
                disabled
                class="w-full px-4 py-3 rounded-2xl border border-slate-200 bg-slate-100/70 text-slate-400 text-xs cursor-not-allowed font-medium"
              />
              <span class="text-[10px] text-slate-400 mt-1 block">لا يمكن تغيير البريد الإلكتروني مباشرة</span>
            </div>
          </div>

          <div>
            <label class="block text-xs font-extrabold text-slate-700 mb-1.5 tracking-wide">رقم الهاتف</label>
            <input 
              type="tel" 
              v-model="profileForm.phone" 
              class="w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 focus:border-[#a48232] focus:ring-2 focus:ring-[#a48232]/20 outline-none transition-all text-slate-800 text-xs font-medium text-right"
              placeholder="0591234567"
            />
          </div>

          <div class="flex justify-end pt-3">
            <button 
              type="submit" 
              :disabled="loadingProfile"
              class="px-7 py-3 bg-gradient-to-r from-[#a48232] to-[#8c6e26] hover:opacity-95 text-white font-black rounded-2xl text-xs transition-all shadow-lg shadow-[#a48232]/20 disabled:opacity-50 cursor-pointer active:scale-95 tracking-wide"
            >
              {{ loadingProfile ? 'جاري الحفظ...' : 'حفظ التغييرات' }}
            </button>
          </div>
        </form>
      </div>

      <!-- 2. تغيير كلمة المرور -->
      <div class="bg-white/95 backdrop-blur-xl rounded-[2rem] border border-[#a48232]/25 p-7 shadow-[0_8px_30px_rgba(164,130,50,0.07)] transition-all duration-300 hover:border-[#a48232]/50">
        <h2 class="text-base font-black text-slate-900 mb-5 flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#FDF8E2] border border-[#a48232]/30 flex items-center justify-center text-[#a48232] shadow-2xs">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          تغيير كلمة المرور
        </h2>

        <form @submit.prevent="updatePassword" class="space-y-4">
          <div>
            <label class="block text-xs font-extrabold text-slate-700 mb-1.5 tracking-wide">كلمة المرور الجديدة</label>
            <input 
              type="password" 
              v-model="passwordForm.newPassword" 
              class="w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 focus:border-[#a48232] focus:ring-2 focus:ring-[#a48232]/20 outline-none transition-all text-slate-800 text-xs font-medium"
              placeholder="أدخل كلمة المرور الجديدة (6 أحرف على الأقل)"
              required
            />
          </div>

          <div>
            <label class="block text-xs font-extrabold text-slate-700 mb-1.5 tracking-wide">تأكيد كلمة المرور الجديدة</label>
            <input 
              type="password" 
              v-model="passwordForm.confirmPassword" 
              class="w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 focus:border-[#a48232] focus:ring-2 focus:ring-[#a48232]/20 outline-none transition-all text-slate-800 text-xs font-medium"
              placeholder="أعد إدخال كلمة المرور الجديدة"
              required
            />
          </div>

          <div class="flex justify-end pt-3">
            <button 
              type="submit" 
              :disabled="loadingPassword"
              class="px-7 py-3 bg-slate-900 hover:bg-slate-800 text-white font-black rounded-2xl text-xs transition-all shadow-md disabled:opacity-50 cursor-pointer active:scale-95 tracking-wide"
            >
              {{ loadingPassword ? 'جاري التحديث...' : 'تحديث كلمة المرور' }}
            </button>
          </div>
        </form>
      </div>

      <!-- 3. تواصل معنا / الدعم الفني -->
      <div class="bg-white/95 backdrop-blur-xl rounded-[2rem] border border-[#a48232]/25 p-7 shadow-[0_8px_30px_rgba(164,130,50,0.07)] transition-all duration-300 hover:border-[#a48232]/50">
        <h2 class="text-base font-black text-slate-900 mb-2 flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-2xl bg-[#FDF8E2] border border-[#a48232]/30 flex items-center justify-center text-[#a48232] shadow-2xs">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
          </div>
          الدعم الفني وتواصل معنا
        </h2>
        <p class="text-xs text-slate-500 mb-5 tracking-wide">هل تواجه مشكلة أو لديك استفسار؟ أرسل لنا رسالة وسنقوم بالرد في أقرب وقت.</p>

        <form @submit.prevent="sendSupportMessage" class="space-y-4">
          <div>
            <label class="block text-xs font-extrabold text-slate-700 mb-1.5 tracking-wide">موضوع الرسالة</label>
            <input 
              type="text" 
              v-model="supportForm.subject" 
              class="w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 focus:border-[#a48232] focus:ring-2 focus:ring-[#a48232]/20 outline-none transition-all text-slate-800 text-xs font-medium"
              placeholder="مثال: مشكلة في إضافة عقار / استفسار عام"
              required
            />
          </div>

          <div>
            <label class="block text-xs font-extrabold text-slate-700 mb-1.5 tracking-wide">تفاصيل الرسالة</label>
            <textarea 
              v-model="supportForm.message" 
              rows="4" 
              class="w-full px-4 py-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 focus:border-[#a48232] focus:ring-2 focus:ring-[#a48232]/20 outline-none transition-all text-slate-800 text-xs font-medium resize-none"
              placeholder="اشرح المشكلة أو الاستفسار بالتفصيل..."
              required
            ></textarea>
          </div>

          <div class="flex justify-end pt-3">
            <button 
              type="submit" 
              :disabled="loadingSupport"
              class="px-7 py-3 bg-gradient-to-r from-[#a48232] to-[#8c6e26] hover:opacity-95 text-white font-black rounded-2xl text-xs transition-all shadow-lg shadow-[#a48232]/20 disabled:opacity-50 cursor-pointer active:scale-95 tracking-wide"
            >
              {{ loadingSupport ? 'جاري الإرسال...' : 'إرسال الرسالة للدعم' }}
            </button>
          </div>
        </form>
      </div>

    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted } from 'vue'
import { supabase } from '../supabase'

export default {
  name: 'SettingsView',
  setup() {
    const successMessage = ref('')
    const errorMessage = ref('')
    const loadingProfile = ref(false)
    const loadingPassword = ref(false)
    const loadingSupport = ref(false)

    const profileForm = reactive({
      fullName: '',
      email: '',
      phone: ''
    })

    const passwordForm = reactive({
      newPassword: '',
      confirmPassword: ''
    })

    const supportForm = reactive({
      subject: '',
      message: ''
    })

    // جلب بيانات المستخدم الحالية عند تحميل الصفحة
    onMounted(async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser()
        if (user) {
          profileForm.email = user.email || ''
          profileForm.fullName = user.user_metadata?.name || user.user_metadata?.full_name || ''
          profileForm.phone = user.user_metadata?.phone || ''
        }
      } catch (err) {
        console.error('خطأ في جلب بيانات المستخدم:', err.message)
      }
    })

    const showSuccess = (msg) => {
      successMessage.value = msg
      errorMessage.value = ''
      setTimeout(() => { successMessage.value = '' }, 4000)
    }

    const showError = (msg) => {
      errorMessage.value = msg
      successMessage.value = ''
      setTimeout(() => { errorMessage.value = '' }, 4000)
    }

    // تحديث البيانات الأساسية عبر Supabase Auth metadata
    const updateProfile = async () => {
      loadingProfile.value = true
      try {
        const { error } = await supabase.auth.updateUser({
          data: { 
            name: profileForm.fullName,
            phone: profileForm.phone 
          }
        })
        if (error) throw error
        showSuccess('تم تحديث البيانات الأساسية بنجاح')
      } catch (err) {
        showError('فشل التحديث: ' + err.message)
      } finally {
        loadingProfile.value = false
      }
    }

    // تغيير كلمة المرور
    const updatePassword = async () => {
      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        showError('كلمتا المرور غير متطابقتين')
        return
      }
      if (passwordForm.newPassword.length < 6) {
        showError('يجب أن تكون كلمة المرور 6 أحرف على الأقل')
        return
      }

      loadingPassword.value = true
      try {
        const { error } = await supabase.auth.updateUser({
          password: passwordForm.newPassword
        })
        if (error) throw error
        showSuccess('تم تغيير كلمة المرور بنجاح')
        passwordForm.newPassword = ''
        passwordForm.confirmPassword = ''
      } catch (err) {
        showError('فشل تغيير كلمة المرور: ' + err.message)
      } finally {
        loadingPassword.value = false
      }
    }

    // إرسال رسالة الدعم الفني
    const sendSupportMessage = async () => {
      loadingSupport.value = true
      try {
        // يمكنك ربطها بجدول support_messages في Supabase أو إرسال إشعار
        // كمثال سنقوم بمحاكاة إرسال ناجح وتفريغ الحقول
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        showSuccess('تم إرسال رسالتك إلى فريق الدعم بنجاح، سنتواصل معك قريباً.')
        supportForm.subject = ''
        supportForm.message = ''
      } catch (err) {
        showError('حدث خطأ أثناء الإرسال، يجدر المحاولة لاحقاً.')
      } finally {
        loadingSupport.value = false
      }
    }

    return {
      successMessage,
      errorMessage,
      loadingProfile,
      loadingPassword,
      loadingSupport,
      profileForm,
      passwordForm,
      supportForm,
      updateProfile,
      updatePassword,
      sendSupportMessage
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>