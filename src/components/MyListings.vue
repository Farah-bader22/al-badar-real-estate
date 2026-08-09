<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-8 pb-32" dir="rtl">
    
    <!-- حالة التحميل الفاخرة -->
    <div v-if="loading" class="text-center py-16 flex flex-col items-center justify-center space-y-3">
      <div class="w-12 h-12 rounded-2xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center animate-pulse border border-[#a48232]/20">
        <svg class="w-6 h-6 animate-spin" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </div>
      <p class="text-slate-600 font-bold text-sm tracking-wide">جاري تحميل منشوراتك
        ...</p>
    </div>

    <!-- في حال لم تكن هناك منشورات -->
    <div v-else-if="listings.length === 0" class="bg-white/80 backdrop-blur-xl rounded-3xl p-10 text-center shadow-[0_4px_25px_rgba(164,130,50,0.05)] border border-[#a48232]/20 mt-6 relative overflow-hidden">
      <div class="absolute -top-12 -left-12 w-32 h-32 bg-[#FDF8E2] rounded-full blur-2xl opacity-60"></div>
      
      <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center border border-[#a48232]/30 shadow-xs">
        <svg class="w-8 h-8" fill="none" stroke="#a48232" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      </div>
      <h3 class="text-slate-900 font-extrabold text-lg mb-1">ليس لديك أي إعلانات منشورة حتى الآن</h3>
      <p class="text-slate-500 text-xs tracking-wide">اضغط على زر الإضافة (+) في الأسفل لنشر أول عقار أو طلب
      </p>
    </div>

    <!-- قائمة العقارات والطلبات الخاصة بالمستخدم -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <div v-for="item in listings" :key="item.id" class="bg-white/90 backdrop-blur-md rounded-2xl shadow-[0_4px_20px_rgba(164,130,50,0.06)] border border-[#a48232]/20 overflow-hidden flex flex-col justify-between hover:border-[#a48232] hover:shadow-md transition-all duration-300 group">
        <div>
          <!-- صورة العقار (تظهر فقط إذا لم يكن الطلب عبارة عن Request) -->
          <div v-if="item.category && item.category.trim().toLowerCase() !== 'request'" class="h-44 bg-slate-100 relative overflow-hidden">
            <img v-if="item.image" :src="item.image" alt="عقار" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            <div v-else class="w-full h-full flex items-center justify-center text-[#a48232] bg-[#FDF8E2]/50 text-3xl">
              <svg class="w-10 h-10" fill="none" stroke="#a48232" stroke-width="1.6" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-3.375M5.25 5.25h3.375" />
              </svg>
            </div>
            <span class="absolute top-3 right-3 bg-slate-900/80 text-white text-[10px] font-bold px-3 py-1 rounded-xl backdrop-blur-md border border-white/10 shadow-xs">
              عرض عقار
            </span>
          </div>
          <div v-else class="px-5 pt-5">
            <span class="bg-[#FDF8E2] text-[#a48232] text-[10px] font-extrabold px-3 py-1 rounded-xl border border-[#a48232]/30 shadow-2xs inline-flex items-center gap-1.5">
              <svg class="w-3.5 h-3.5" fill="none" stroke="#a48232" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              طلب عقار
            </span>
          </div>

          <!-- التفاصيل -->
          <div class="p-5">
            <h3 class="font-bold text-slate-900 text-base mb-1.5 line-clamp-1 group-hover:text-[#a48232] transition-colors">{{ item.title }}</h3>
            <p class="text-slate-500 text-xs mb-3.5 flex items-center gap-1">
              <svg class="w-3.5 h-3.5 text-[#a48232]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              غزة - {{ item.city || item.address || 'حي رمال' }} - {{ item.type }}
            </p>
            <div class="flex items-center justify-between font-extrabold text-[#a48232] text-base pt-2 border-t border-slate-100">
              <span>{{ item.price ? item.price + ' ' + (item.currency || '₪') : 'السعر عند الاتصال' }}</span>
              <span class="text-slate-400 text-xs font-semibold bg-slate-100 px-2.5 py-1 rounded-lg">{{ item.area ? item.area + ' م²' : '' }}</span>
            </div>
          </div>
        </div>

        <!-- أزرار الإدارة (حذف الإعلان) -->
        <div class="px-5 pb-4 pt-0 flex items-center justify-between">
          <span class="text-[11px] text-slate-400 font-medium">بواسطة: <span class="text-slate-700 font-bold">{{ item.owner || 'مستخدم' }}</span></span>
          <button 
            @click="deleteListing(item.id)" 
            class="text-red-500 hover:text-white text-xs font-bold px-3.5 py-2 rounded-xl hover:bg-red-500 transition-all duration-200 cursor-pointer flex items-center gap-1.5 shadow-2xs">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
            </svg>
            حذف الإعلان
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase'
import { useToast } from "vue-toastification"
import Swal from 'sweetalert2'

export default {
  setup() {
    const toast = useToast()
    const listings = ref([])
    const loading = ref(true)

    const fetchMyListings = async () => {
      try {
        loading.value = true
        const { data: { user } } = await supabase.auth.getUser()
        
        if (!user) {
          listings.value = []
          return
        }

        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .eq('user_id', user.id)
          .order('id', { ascending: false })

        if (error) throw error
        listings.value = data || []
      } catch (err) {
        console.error('خطأ في جلب المنشورات:', err.message)
        toast.error('حدث خطأ أثناء جلب إعلاناتك.')
      } finally {
        loading.value = false
      }
    }

    const deleteListing = async (id) => {
      // نافذة مخصصة بحجم أصغر وتصميم أنيق متناسق
      const result = await Swal.fire({
        title: 'هل تريد حذف الإعلان؟',
        text: "لن يمكنك التراجع بعد الحذف",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444', // أحمر هادئ
        cancelButtonColor: '#9ca3af',   // رمادي هادئ
        confirmButtonText: 'نعم، احذفه',
        cancelButtonText: 'إلغاء',
        width: '320px', // تصغير عرض النافذة بالكامل
        customClass: {
          popup: 'text-sm rounded-2xl p-4',
          title: 'text-lg font-bold',
          htmlContainer: 'text-xs text-gray-500',
          confirmButton: 'px-4 py-2 text-xs rounded-lg',
          cancelButton: 'px-4 py-2 text-xs rounded-lg'
        }
      })

      if (!result.isConfirmed) return

      try {
        const { error } = await supabase
          .from('properties')
          .delete()
          .eq('id', id)

        if (error) throw error

        listings.value = listings.value.filter(item => item.id !== id)
        toast.success('تم حذف الإعلان بنجاح.')
      } catch (err) {
        toast.error('فشل حذف الإعلان: ' + err.message)
      }
    }

    onMounted(() => {
      fetchMyListings()
    })

    return {
      listings,
      loading,
      deleteListing
    }
  }
}
</script>