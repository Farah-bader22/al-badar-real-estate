<template>
  <div v-if="modelValue" class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex justify-end" dir="rtl">
    <div class="w-full max-w-xl bg-[#F8F9FA] h-full shadow-2xl flex flex-col justify-between">
      
      <!-- الهيدر -->
      <div class="bg-white px-6 py-4 border-b border-slate-200 flex items-center justify-between sticky top-0 z-10 shrink-0">
        <button @click="prevStep" class="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition">
          <span class="text-lg font-bold">&lsaquo;</span>
        </button>
        <div class="text-center">
          <h3 class="font-bold text-slate-900 text-base">
            {{ wizardStep === 4 ? 'تفاصيل الإعلان' : 'نشر إعلان' }}
          </h3>
          <div class="flex justify-center gap-1.5 mt-1">
            <span :class="['w-2 h-2 rounded-full transition-all duration-300', wizardStep === 1 ? 'bg-[#9C7A2E] w-4' : 'bg-slate-300']"></span>
            <span :class="['w-2 h-2 rounded-full transition-all duration-300', wizardStep === 2 ? 'bg-[#9C7A2E] w-4' : 'bg-slate-300']"></span>
            <span :class="['w-2 h-2 rounded-full transition-all duration-300', wizardStep >= 3 ? 'bg-[#9C7A2E] w-4' : 'bg-slate-300']"></span>
          </div>
        </div>
        <button @click="close" class="text-slate-400 hover:text-slate-700 font-bold text-lg">✕</button>
      </div>

      <!-- محتوى الخطوات مع سكرول مرن وحركات انتقالية -->
      <div class="p-6 space-y-6 flex-1 overflow-y-auto relative">
        <transition name="fade-slide" mode="out-in">
          
          <!-- الخطوة 1 -->
          <div v-if="wizardStep === 1" key="step1" class="space-y-4">
            <h2 class="text-xl font-bold text-slate-900 text-right">ماذا تريد أن تفعل؟</h2>
            <div @click="selectAction('offer')" class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#9C7A2E] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between cursor-pointer group">
              <div class="text-right">
                <h4 class="font-bold text-slate-900 text-base group-hover:text-[#9C7A2E] transition-colors">أريد نشر عقار</h4>
                <p class="text-xs text-slate-500 mt-1">انشر عقارك للبيع أو للإيجار</p>
              </div>
              <div class="w-14 h-14 rounded-2xl bg-[#FDF8E2] text-[#9C7A2E] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>
              </div>
            </div>
            <div @click="selectAction('request')" class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#9C7A2E] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between cursor-pointer group">
              <div class="text-right">
                <h4 class="font-bold text-slate-900 text-base group-hover:text-[#9C7A2E] transition-colors">أبحث عن عقار</h4>
                <p class="text-xs text-slate-500 mt-1">اكتب ما تبحث عنه وسنساعدك في إيجاده</p>
              </div>
              <div class="w-14 h-14 rounded-2xl bg-[#FDF8E2] text-[#9C7A2E] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
            </div>
          </div>

          <!-- الخطوة 2 -->
          <div v-else-if="wizardStep === 2" key="step2" class="space-y-4">
            <h2 class="text-xl font-bold text-slate-900 text-right">بيع أم إيجار؟</h2>
            <div @click="selectOperation('sale')" class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#9C7A2E] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between cursor-pointer group">
              <div class="text-right"><h4 class="font-bold text-slate-900 text-base group-hover:text-[#9C7A2E] transition-colors">للبيع</h4></div>
              <div class="w-14 h-14 rounded-2xl bg-[#FDF8E2] text-[#9C7A2E] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
              </div>
            </div>
            <div @click="selectOperation('rent')" class="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm hover:border-[#9C7A2E] hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-between cursor-pointer group">
              <div class="text-right"><h4 class="font-bold text-slate-900 text-base group-hover:text-[#9C7A2E] transition-colors">للإيجار</h4></div>
              <div class="w-14 h-14 rounded-2xl bg-[#FDF8E2] text-[#9C7A2E] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <svg class="w-7 h-7" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
              </div>
            </div>
          </div>

          <!-- الخطوة 3 -->
          <div v-else-if="wizardStep === 3" key="step3" class="space-y-4">
            <h2 class="text-xl font-bold text-slate-900 text-right">نوع العقار</h2>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div v-for="type in propertyTypes" :key="type.name" @click="selectType(type.name)" class="bg-white p-4 rounded-2xl border border-slate-200 text-center shadow-sm hover:border-[#9C7A2E] hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center py-4 group">
                <div class="w-12 h-12 mb-2 rounded-xl bg-[#FDF8E2] text-[#9C7A2E] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" v-html="type.svg"></svg>
                </div>
                <span class="font-bold text-slate-900 text-xs group-hover:text-[#9C7A2E] transition-colors">{{ type.name }}</span>
              </div>
            </div>
          </div>

          <!-- الخطوة 4: النموذج النهائي -->
          <div v-else-if="wizardStep === 4" key="step4" class="space-y-4 text-right">
            
            <!-- الحالة الأولى: نشر عقار (offer) -->
            <template v-if="formType === 'offer'">
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">عنوان الإعلان *</label>
                <input v-model="formData.title" type="text" placeholder="مثال: شقة 3 غرف في غزة" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] transition-all" />
              </div>

             <div class="space-y-1.5">
  <div class="flex items-center justify-between">
    <label class="text-xs font-bold text-slate-800">السعر (اختياري)</label>
    <!-- خيار تحديد العملة -->
    <div class="flex items-center gap-1 bg-slate-100 p-0.5 rounded-lg border border-slate-200">
      <button 
        type="button" 
        @click="formData.currency = 'ILS'"
        :class="formData.currency === 'ILS' ? 'bg-white text-[#9C7A2E] shadow-xs' : 'text-slate-500 hover:text-slate-800'"
        class="px-2 py-0.5 text-xs font-bold rounded-md transition-all cursor-pointer">
        ₪ شيكل
      </button>
      <button 
        type="button" 
        @click="formData.currency = 'USD'"
        :class="formData.currency === 'USD' ? 'bg-white text-[#9C7A2E] shadow-xs' : 'text-slate-500 hover:text-slate-800'"
        class="px-2 py-0.5 text-xs font-bold rounded-md transition-all cursor-pointer">
        $ دولار
      </button>
    </div>
  </div>
  
  <!-- حقل إدخال السعر (بدون علامة * لأنه صار اختياري) -->
  <input 
    v-model="formData.price" 
    type="number" 
    placeholder="أدخل السعر (اختياري)" 
    class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] transition-all" 
  />
</div>

              <!-- خانة الصورة -->
              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">صورة العقار (من الجهاز)</label>
                <input 
                  type="file" 
                  accept="image/*" 
                  @change="handleImageUpload" 
                  class="w-full bg-white border border-slate-200 rounded-xl px-3 py-2 text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-xs file:font-bold file:bg-[#FDF8E2] file:text-[#9C7A2E] hover:file:bg-[#9C7A2E]/20 cursor-pointer focus:outline-none"
                />
                <div v-if="imagePreview" class="mt-2 relative w-20 h-20 rounded-xl overflow-hidden border border-slate-200 shadow-sm">
                  <img :src="imagePreview" class="w-full h-full object-cover" />
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">العنوان أو الحي *</label>
                <input v-model="formData.address" type="text" placeholder="الحي أو الشارع..." class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] transition-all" />
              </div>

            <div class="space-y-1.5">
  <label class="text-xs font-bold text-slate-800">رقم التواصل *</label>
  <div class="flex gap-2" dir="ltr">
    <input v-model="formData.phone" type="text" placeholder="59XXXXXXX" class="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] text-right transition-all" />
    <select v-model="formData.countryCode" class="bg-white border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] cursor-pointer">
      <option value="+970">+970 🇵🇸</option>
      <option value="+972">+972 🇵🇸</option>
      <option value="+962">+962 🇯🇴</option>
      <option value="+966">+966 🇸🇦</option>
      <option value="+971">+971 🇦🇪</option>
      <option value="+974">+974 🇶🇦</option>
      <option value="+965">+965 🇰🇼</option>
      <option value="+973">+973 🇧🇭</option>
      <option value="+968">+968 🇴🇲</option>
      <option value="+20">+20 🇪🇬</option>
      <option value="+1">+1 🇺🇸</option>
    </select>
  </div>
</div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">المساحة (م²) *</label>
                <input v-model="formData.area" type="number" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] transition-all" />
              </div>
            </template>

            <!-- الحالة الثانية: أبحث عن عقار (request) -->
            <template v-else>
<div class="space-y-1.5">
  <label class="text-xs font-bold text-slate-800">المدينة *</label>
  <select v-model="formData.city" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] transition-all">
    <option value="">اختر المنطقة</option>
    <option value="شمال غزة">شمال غزة</option>
    <option value="غزة">غزة</option>
    <option value="وسط غزة">وسط غزة</option>
    <option value="جنوب غزة">جنوب غزة</option>
  </select>
</div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">رقم التواصل *</label>
                <div class="flex gap-2" dir="ltr">
                  <input v-model="formData.phone" type="text" placeholder="59XXXXXXX" class="flex-1 bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] text-right transition-all" />
                  <select v-model="formData.countryCode" class="bg-white border border-slate-200 rounded-xl px-3 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] cursor-pointer">
                    <option value="+970">+970 🇵🇸</option>
                          <option value="+972">+972 🇵🇸</option>
                    <option value="+962">+962 🇯🇴</option>
                    <option value="+966">+966 🇸🇦</option>
                    <option value="+971">+971 🇦🇪</option>
                    <option value="+974">+974 🇶🇦</option>
                    <option value="+965">+965 🇰🇼</option>
                    <option value="+973">+973 🇧🇭</option>
                    <option value="+968">+968 🇴🇲</option>
                    <option value="+20">+20 🇪🇬</option>
                    <option value="+1">+1 🇺🇸</option>
                  </select>
                </div>
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">السعر المتوقع *</label>
                <input v-model="formData.price" type="number" placeholder="السعر التقريبي" class="w-full bg-white border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#9C7A2E] transition-all" />
              </div>

              <div class="space-y-1.5">
                <label class="text-xs font-bold text-slate-800">وصف الطلب *</label>
                <textarea v-model="formData.description" rows="4" placeholder="صف ما تبحث عنه بالتفصيل..." class="w-full bg-white border border-slate-200 rounded-xl p-4 text-sm focus:outline-none focus:border-[#9C7A2E] resize-none transition-all"></textarea>
              </div>
            </template>

          </div>
        </transition>
      </div>

      <!-- التذييل -->
      <div class="bg-white p-4 border-t border-slate-200 sticky bottom-0 z-10 shrink-0">
        <button @click="submitForm" :disabled="loading" class="w-full bg-[#9C7A2E] hover:bg-[#866826] active:scale-[0.99] text-white font-bold py-3.5 rounded-2xl shadow-sm transition-all duration-200 disabled:opacity-50">
          {{ loading ? 'جاري الحفظ...' : (wizardStep === 4 ? (formType === 'offer' ? 'نشر الإعلان' : 'إرسال الطلب') : 'التالي') }}
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.25s ease-in-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateX(-15px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(15px);
}
</style>

<script>
import { ref, reactive, watch } from 'vue'
import { supabase } from '../supabase.js'
import { useToast } from "vue-toastification"

export default {
  props: {
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const toast = useToast()
    const wizardStep = ref(1)
    const formType = ref('offer') 
    const loading = ref(false)

    const imageFile = ref(null)
    const imagePreview = ref(null)

    const formData = reactive({
      title: '',
      operation: 'sale',
      type: 'شقة',
      price: null,
      address: '',
      phone: '',
      area: null,
      city: '',
      description: '',
      image: ''
    })

    const handleImageUpload = (event) => {
      const file = event.target.files[0]
      if (file) {
        imageFile.value = file
        imagePreview.value = URL.createObjectURL(file)
      }
    }

    const uploadImageToSupabase = async () => {
      if (!imageFile.value) return formData.image || null
      
      try {
        const file = imageFile.value
        const fileExt = file.name.split('.').pop()
        const fileName = `${Date.now()}_${Math.random().toString(36).substring(2)}.${fileExt}`
        const filePath = `${fileName}`

        const { error: uploadError } = await supabase.storage
          .from('property-images')
          .upload(filePath, file)

        if (uploadError) throw uploadError

        const { data } = supabase.storage
          .from('property-images')
          .getPublicUrl(filePath)

        return data.publicUrl
      } catch (error) {
        console.error('خطأ أثناء رفع الصورة:', error.message)
        toast.warning('فشل رفع الصورة، سيتم النشر بدونها أو بالرابط القديم.')
        return formData.image || null
      }
    }

    watch(() => props.modelValue, (val) => {
      if (val) {
        wizardStep.value = 1
        formData.title = ''
        formData.price = null
        formData.address = ''
        formData.phone = ''
        formData.area = null
        formData.city = ''
        formData.description = ''
        formData.image = ''
        imageFile.value = null
        imagePreview.value = null
      }
    })

    const selectAction = (type) => {
      formType.value = type
      wizardStep.value++
    }

    const selectOperation = (op) => {
      formData.operation = op
      wizardStep.value++
    }

    const selectType = (typeName) => {
      formData.type = typeName
      wizardStep.value++
    }

    const close = () => {
      emit('update:modelValue', false)
    }
const submitForm = async () => {
      if (wizardStep.value < 4) {
        wizardStep.value++
        return
      }

      loading.value = true
      try {
        const { data: { user }, error: userError } = await supabase.auth.getUser()

        if (userError || !user) {
          toast.error('الرجاء تسجيل الدخول بحسابك الحقيقي أولاً لكي يتم نشر الإعلان باسمك مباشرة!')
          loading.value = false
          return
        }

        const firstName = user.user_metadata?.first_name || ''
        const lastName = user.user_metadata?.last_name || ''
        const metadataName = user.user_metadata?.name || ''
        
        const realOwnerName = metadataName.trim() ||
          ((firstName || lastName) ? `${firstName} ${lastName}`.trim() : 
          user.email.split('@')[0])
          
        const firstLetter = realOwnerName.charAt(0) || 'م'

        const finalImageUrl = await uploadImageToSupabase()

        // 1. تحديد ما إذا كان المستخدم الحالي هو الآدمن
        const ADMIN_EMAIL = "mb837093@gmail.com"
        const isAdmin = user.email === ADMIN_EMAIL

        // 2. إرسال البيانات مع إضافة حقل الـ status
        const { error } = await supabase
          .from('properties')
          .insert([
            {
              title: formType.value === 'offer' ? formData.title : `طلب: ${formData.type} في ${formData.city}`,
              type: formData.type,
              operation: formData.operation,
              price: formData.price,
              city: formData.city || formData.address,
              description: formData.description || formData.title,
              phone: formData.phone,
              category: formType.value, 
              image: formType.value === 'offer' ? finalImageUrl : null,      
              area: formData.area || null,
              owner: realOwnerName,       
              avatar: firstLetter,      
              user_id: user.id,          
              // هنا الإضافة: إذا كان الآدمن (approved)، وإذا شخص آخر (pending)
              status: isAdmin ? 'approved' : 'pending' 
            }
          ])

        if (error) throw error

        // 3. تعديل رسالة النجاح لتناسب الحالتين
        if (isAdmin) {
          toast.success('تم نشر الإعلان بنجاح!')
        } else {
          toast.success('تم إرسال إعلانك بنجاح، وهو بانتظار موافقة الإدارة لينشر.')
        }
        
        close()
      } catch (err) {
        console.error('خطأ أثناء النشر:', err.message)
        toast.error('حدث خطأ أثناء النشر: ' + err.message)
      } finally {
        loading.value = false
      }
    }

    const prevStep = () => {
      if (wizardStep.value > 1) {
        wizardStep.value--
      } else {
        close()
      }
    }

    const propertyTypes = ref([
      { name: 'شقة', svg: '<path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>' },
      { name: 'بيت', svg: '<path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>' },
      { name: 'شاليه', svg: '<path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>' },
      { name: 'أرض', svg: '<path stroke-linecap="round" stroke-linejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>' },
      { name: 'محل', svg: '<path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>' },
      { name: 'مكتب', svg: '<path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>' }
    ])

    return {
      wizardStep,
      formType,
      propertyTypes,
      formData,
      loading,
      imagePreview,
      handleImageUpload,
      selectAction,
      selectOperation,
      selectType,
      submitForm,
      prevStep,
      close
    }
  }
}
</script>