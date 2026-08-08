<template>
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-10 pb-32 min-h-screen bg-gradient-to-b from-slate-50 via-[#FDF8E2]/20 to-slate-50 text-slate-900" dir="rtl">

    <!-- حالة التحميل الفاخرة والمبتكرة -->
    <div v-if="loading" class="text-center py-28 flex flex-col items-center justify-center space-y-5">
      <div class="relative">
        <div class="absolute -inset-2 rounded-3xl bg-[#a48232]/20 blur-xl animate-pulse"></div>
        <div class="relative w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-xl text-[#a48232] flex items-center justify-center border border-[#a48232]/30 shadow-lg">
          <svg class="w-8 h-8 animate-spin" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"></path>
          </svg>
        </div>
      </div>
      <p class="text-slate-800 font-black text-sm tracking-widest bg-white/60 px-4 py-1.5 rounded-full border border-[#a48232]/10 shadow-2xs">جاري استعراض عقاراتك المفضلة...</p>
    </div>

    <!-- في حال لم تكن هناك عقارات محفوظة -->
    <div v-else-if="savedProperties.length === 0" class="bg-white/90 backdrop-blur-2xl rounded-[2.5rem] p-14 text-center border border-[#a48232]/30 shadow-[0_10px_40px_rgba(164,130,50,0.08)] mt-6 space-y-5 relative overflow-hidden">
      <div class="absolute -top-16 -left-16 w-48 h-48 bg-[#FDF8E2] rounded-full blur-3xl opacity-80 pointer-events-none"></div>
      <div class="absolute -bottom-16 -right-16 w-48 h-48 bg-[#a48232]/10 rounded-full blur-3xl opacity-80 pointer-events-none"></div>
      
      <div class="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-tr from-[#FDF8E2] to-white text-[#a48232] flex items-center justify-center border border-[#a48232]/40 shadow-md relative z-10 transform hover:scale-105 transition-transform duration-300">
        <svg class="w-10 h-10 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      <div class="relative z-10 space-y-2">
        <h3 class="text-slate-900 font-black text-xl tracking-tight">قائمة المفضلة فارغة حالياً</h3>
        <p class="text-slate-500 text-xs max-w-sm mx-auto tracking-wide leading-relaxed">لم تقم بحفظ أي عقارات حتى الآن. تصفح قسم الاستكشاف وانقر على أيقونة الإعجاب لتخليد أفخم العقارات هنا.</p>
      </div>
    </div>

    <!-- قائمة العقارات المحفوظة -->
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div 
        v-for="item in savedProperties" 
        :key="item.id" 
        class="bg-white/95 backdrop-blur-xl rounded-[2rem] border border-[#a48232]/25 shadow-[0_8px_30px_rgba(164,130,50,0.07)] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(164,130,50,0.12)] hover:border-[#a48232] group"
      >
        <div>
          <!-- صورة العقار -->
          <div class="relative h-60 bg-slate-100 overflow-hidden">
            <img 
              v-if="item.image" 
              :src="item.image" 
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
              alt="صورة العقار" 
            />
            <div v-else class="flex flex-col items-center justify-center h-full text-[#a48232] bg-gradient-to-br from-[#FDF8E2]/60 to-slate-100 text-xs font-bold gap-2.5">
              <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-xs border border-[#a48232]/20">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"></path>
                </svg>
              </div>
              <span class="tracking-wide">لا توجد صورة متوفرة</span>
            </div>

            <!-- تدرج لوني خفيف فوق الصورة لتحسين رؤية العناصر -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>

            <!-- شارة النوع الذهبية الفاخرة -->
            <div class="absolute top-4 right-4 flex gap-1.5 z-10">
              <span class="bg-gradient-to-r from-[#a48232] to-[#8c6e26] text-white text-[11px] font-black px-4 py-1.5 rounded-xl shadow-lg backdrop-blur-md border border-white/20 tracking-wider">
                {{ item.type || 'عقار' }}
              </span>
            </div>

            <!-- زر الإزالة من المفضلة (طراز داكن مونوكروم فاخر بلا لون أحمر) -->
            <button 
              @click="removeFromFavorites(item.id)" 
              class="absolute top-4 left-4 w-11 h-11 rounded-2xl bg-slate-900/60 backdrop-blur-xl shadow-lg hover:bg-slate-900 text-[#a48232] flex items-center justify-center transition-all duration-300 cursor-pointer border border-[#a48232]/40 group/btn z-10 active:scale-95"
              title="إزالة من المفضلة"
            >
              <svg class="w-5 h-5 fill-current transition-transform duration-300 group-hover/btn:scale-110" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
              </svg>
            </button>
          </div>

          <!-- تفاصيل العقار الداخلية -->
          <div class="p-6 space-y-4">
            <h3 class="font-black text-slate-900 text-lg line-clamp-1 tracking-tight group-hover:text-[#a48232] transition-colors duration-300">
              {{ item.title || 'عقار بدون عنوان' }}
            </h3>
            
            <!-- الموقع -->
            <p class="text-slate-500 text-xs font-medium flex items-center gap-2">
              <span class="w-7 h-7 rounded-xl bg-[#FDF8E2] flex items-center justify-center text-[#a48232] border border-[#a48232]/20 shrink-0">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                </svg>
              </span>
              <span class="tracking-wide">غزة - {{ item.city || item.address || 'حي رمال' }}</span>
            </p>

            <!-- تفاصيل المساحة ونوع العرض بتصميم راقي -->
            <div class="border-t border-slate-100 pt-3.5 flex items-center justify-between text-xs">
              <div class="flex items-center gap-2 bg-[#FDF8E2]/50 px-3 py-1.5 rounded-xl border border-[#a48232]/20 shadow-2xs">
                <svg class="w-4 h-4 text-[#a48232]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0-4.5L15 15"></path>
                </svg>
                <span class="font-extrabold text-[#a48232]">{{ item.area ? item.area + ' م²' : 'المساحة غير متوفرة' }}</span>
              </div>
              <span class="text-slate-400 font-medium">نوع العرض: <strong class="text-slate-800 font-bold">{{ item.operation === 'sale' ? 'للبيع' : 'للإيجار' }}</strong></span>
            </div>
          </div>
        </div>

        <!-- السعر والمالك بالأسفل بطراز ملكي فاخر -->
        <div class="px-6 pb-6 pt-3 border-t border-slate-100 flex items-center justify-between bg-slate-50/60">
          <div class="flex flex-col">
            <span class="text-[10px] text-slate-400 font-bold uppercase tracking-wider">السعر المطلوب</span>
            <span class="font-black text-[#a48232] text-xl tracking-tight">
              {{ item.price ? '$' + Number(item.price).toLocaleString() : 'السعر عند الاتصال' }}
            </span>
          </div>
          
          <div class="flex items-center gap-1.5 bg-white px-3.5 py-2 rounded-2xl border border-slate-200/70 shadow-2xs">
            <div class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span class="text-xs text-slate-700 font-bold tracking-wide">{{ item.owner || 'مستخدم المنصة' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase.js'

export default {
  setup() {
    const savedProperties = ref([])
    const loading = ref(true)

    const fetchSavedProperties = async () => {
      loading.value = true
      try {
        const favoriteIds = JSON.parse(localStorage.getItem('favorite_properties') || '[]')
        
        if (favoriteIds.length === 0) {
          savedProperties.value = []
          loading.value = false
          return
        }

        const { data, error } = await supabase
          .from('properties')
          .select('*')
          .in('id', favoriteIds)

        if (error) throw error
        savedProperties.value = data || []
      } catch (err) {
        console.error('خطأ في جلب العقارات المحفوظة:', err.message)
      } finally {
        loading.value = false
      }
    }

    const removeFromFavorites = (id) => {
      let favoriteIds = JSON.parse(localStorage.getItem('favorite_properties') || '[]')
      favoriteIds = favoriteIds.filter(favId => favId !== id)
      localStorage.setItem('favorite_properties', JSON.stringify(favoriteIds))
      
      savedProperties.value = savedProperties.value.filter(item => item.id !== id)
    }

    onMounted(() => {
      fetchSavedProperties()
    })

    return {
      savedProperties,
      loading,
      removeFromFavorites
    }
  }
}
</script>