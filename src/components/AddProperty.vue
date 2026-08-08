<template>
  <div class="min-h-screen bg-gray-50 flex flex-col items-center justify-start p-4 sm:p-6" dir="rtl">
    
    <!-- القالب الأساسي العريض والمرتب -->
    <div class="max-w-xl w-full bg-white rounded-3xl shadow-lg p-6 sm:p-8 border border-gray-100 my-4">
      
      <!-- الهيدر العلوي: زر الرجوع وعنوان التطبيق -->
      <div class="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
        <h1 class="text-xl font-bold text-gray-800">أضف عقاراً</h1>
        <button class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200 transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- مؤشر الخطوات أو البنر -->
      <div class="flex justify-center items-center gap-1.5 mb-6">
        <span class="w-6 h-1.5 bg-amber-500 rounded-full"></span>
        <span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
        <span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
        <span class="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
      </div>

      <!-- تفاصيل العقار: الأزرار التبادلية (نوع العقار والعملية) -->
      <div class="mb-6">
        <label class="block text-xs font-bold text-gray-400 mb-2 uppercase tracking-wider">تفاصيل العقار</label>
        <div class="flex flex-wrap gap-2">
          <!-- زر نوع العقار -->
          <button type="button" class="flex items-center gap-2 px-4 py-2.5 rounded-full border border-amber-400 bg-amber-50/50 text-amber-700 text-sm font-semibold shadow-xs">
            <span>🏢</span> شقة
          </button>
          <!-- زر نوع العملية -->
          <button type="button" class="flex items-center gap-2 px-4 py-2.5 rounded-full border border-amber-400 bg-amber-50/50 text-amber-700 text-sm font-semibold shadow-xs">
            <span>🔑</span> للبيع
          </button>
          <button type="button" class="flex items-center gap-2 px-4 py-2.5 rounded-full border border-gray-200 bg-white text-gray-600 text-sm font-semibold hover:border-gray-300 transition">
            <span>📋</span> طلبات
          </button>
        </div>
      </div>

      <!-- نموذج الإدخال -->
      <form @submit.prevent="submitProperty" class="space-y-5">
        
        <!-- المدينة -->
        <div>
          <label class="block text-sm font-bold text-gray-800 mb-1.5">المدينة <span class="text-red-500">*</span></label>
          <div class="relative">
            <select v-model="form.city" required class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white text-gray-700 appearance-none">
              <option value="" disabled selected>اختر المدينة</option>
              <option value="نابلس">نابلس</option>
              <option value="رام الله">رام الله</option>
              <option value="الخليل">الخليل</option>
              <option value="جنين">جنين</option>
              <option value="غزة">غزة</option>
            </select>
            <div class="absolute inset-y-0 left-0 flex items-center px-4 pointer-events-none text-gray-400">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <!-- العنوان / الحي أو الشارع -->
        <div>
          <label class="block text-sm font-bold text-gray-800 mb-1.5">العنوان <span class="text-red-500">*</span></label>
          <input 
            v-model="form.title" 
            type="text" 
            placeholder="الحي أو الشارع..." 
            required 
            class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white text-gray-800 placeholder-gray-400"
          />
        </div>

        <!-- رقم التواصل مع علم فلسطين -->
        <div>
          <label class="block text-sm font-bold text-gray-800 mb-1.5">رقم التواصل</label>
          <div class="flex items-center border border-gray-200 rounded-xl overflow-hidden focus-within:ring-2 focus-within:ring-amber-500 bg-white">
            <div class="flex items-center gap-1.5 px-3.5 py-3.5 bg-gray-50 border-left border-gray-200 text-gray-700 font-medium text-sm">
              <!-- علم فلسطين المصغر -->
              <span class="text-base">🇵🇸</span>
              <span>+970</span>
              <svg class="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
            <input 
              v-model="form.phone" 
              type="text" 
              placeholder="XXXX XXX XXX" 
              class="w-full px-4 py-3.5 outline-none bg-transparent text-gray-800 placeholder-gray-400 text-left" 
              dir="ltr"
            />
          </div>
        </div>

        <!-- السعر -->
        <div>
          <label class="block text-sm font-bold text-gray-800 mb-1.5">السعر <span class="text-red-500">*</span></label>
          <input 
            v-model.number="form.price" 
            type="number" 
            placeholder="0" 
            required 
            class="w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white text-gray-800 text-left"
            dir="ltr"
          />
        </div>

        <!-- العملة (أزرار اختيار أفقية مطابقة للصورة) -->
        <div>
          <label class="block text-sm font-bold text-gray-800 mb-1.5">العملة</label>
          <div class="grid grid-cols-3 gap-3">
            <button 
              type="button" 
              @click="form.currency = 'ILS'"
              :class="form.currency === 'ILS' ? 'border-amber-500 bg-amber-50/40 text-amber-800 font-bold shadow-xs' : 'border-gray-200 text-gray-600 bg-white'"
              class="py-3 px-2 rounded-xl border text-sm transition text-center"
            >
              ILS (₪)
            </button>
            <button 
              type="button" 
              @click="form.currency = 'USD'"
              :class="form.currency === 'USD' ? 'border-amber-500 bg-amber-50/40 text-amber-800 font-bold shadow-xs' : 'border-gray-200 text-gray-600 bg-white'"
              class="py-3 px-2 rounded-xl border text-sm transition text-center"
            >
              USD ($)
            </button>
            <button 
              type="button" 
              @click="form.currency = 'JOD'"
              :class="form.currency === 'JOD' ? 'border-amber-500 bg-amber-50/40 text-amber-800 font-bold shadow-xs' : 'border-gray-200 text-gray-600 bg-white'"
              class="py-3 px-2 rounded-xl border text-sm transition text-center"
            >
              JOD (د.أ)
            </button>
          </div>
        </div>

        <!-- الوصف -->
        <div>
          <div class="flex justify-between items-center mb-1.5">
            <label class="text-sm font-bold text-gray-800">الوصف <span class="text-red-500">*</span></label>
          </div>
          <textarea 
            v-model="form.description" 
            rows="4" 
            placeholder="صف العقار..." 
            required 
            maxlength="20"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition bg-white text-gray-800 placeholder-gray-400 resize-none"
          ></textarea>
          <div class="text-left text-xs text-gray-400 mt-1">0/20 min</div>
        </div>

        <!-- زر الإرسال -->
        <button 
          type="submit" 
          :disabled="loading" 
          class="w-full bg-amber-500 hover:bg-amber-600 text-white font-bold py-4 px-4 rounded-xl transition duration-300 shadow-md hover:shadow-lg disabled:opacity-50 cursor-pointer text-base mt-2"
        >
          {{ loading ? 'جاري الحفظ...' : 'إرسال' }}
        </button>

        <!-- رسالة النجاح أو الخطأ -->
        <div v-if="message" :class="messageType === 'success' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-red-50 text-red-700 border-red-200'" class="p-3.5 rounded-xl border text-center font-semibold text-sm">
          {{ message }}
        </div>

      </form>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { supabase } from '../supabase'

export default {
  setup() {
    const form = ref({
      title: '',
      type: 'شقة',
      operation: 'للبيع',
      price: 0,
      currency: 'JOD',
      city: '',
      phone: '',
      description: ''
    })

    const loading = ref(false)
    const message = ref('')
    const messageType = ref('')

    const submitProperty = async () => {
      loading.value = true
      message.value = ''

      try {
        const { error } = await supabase
          .from('properties')
          .insert([form.value])

        if (error) throw error

        message.value = 'تم إرسال العقار بنجاح!'
        messageType.value = 'success'
        
        form.value = {
          title: '',
          type: 'شقة',
          operation: 'للبيع',
          price: 0,
          currency: 'JOD',
          city: '',
          phone: '',
          description: ''
        }
      } catch (err) {
        message.value = 'حدث خطأ: ' + err.message
        messageType.value = 'error'
      } finally {
        loading.value = false
      }
    }

    return {
      form,
      loading,
      message,
      messageType,
      submitProperty
    }
  }
}
</script>