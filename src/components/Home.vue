<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-32 text-slate-900" dir="rtl">
    
    <div class="w-full px-4 sm:px-6 py-5 space-y-5">

      <div class="bg-white rounded-3xl shadow-xs border border-slate-200/60 p-4 relative overflow-hidden">
        <div class="bg-gradient-to-b from-slate-100 to-slate-200 rounded-2xl h-52 flex flex-col items-center justify-center relative overflow-hidden border border-slate-200/60 px-4">
          
          <div class="w-24 h-24 rounded-full bg-slate-900 border-2 border-[#a48232]/50 shadow-md flex items-center justify-center mb-3 overflow-hidden p-1">
            <img src="/public/logo.jpg" alt="شركة البدر للعقارات والاستثمار" class="w-full h-full object-cover rounded-full" />
          </div>

          <div class="text-center">
            <h4 class="text-sm font-bold tracking-wider text-slate-900 uppercase">شركة البدر للعقارات</h4>
            <p class="text-[10px] tracking-widest text-slate-500 mt-0.5">REAL ESTATE & INVESTMENT</p>
          </div>

        </div>

        <div class="flex justify-center gap-2 mt-3.5">
          <span class="w-6 h-2 bg-[#a48232] rounded-full"></span>
          <span class="w-2.5 h-2.5 bg-slate-200 rounded-full"></span>
        </div>
      </div>

      <!-- 2. أزرار الخدمات الثلاثة العلوية -->
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
        
        <!-- إعلانات موثقة -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#a48232] hover:shadow-sm transition-all duration-300 flex items-center gap-3.5 cursor-pointer group">
          <div class="w-11 h-11 rounded-xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="#a48232" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"/></svg>
          </div>
          <div class="text-right">
            <h4 class="font-bold text-slate-900 text-sm">إعلانات موثقة</h4>
            <p class="text-[11px] text-slate-500 mt-0.5">موثقة ومراجعة بعناية</p>
          </div>
        </div>

        <!-- تواصل آمن -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#a48232] hover:shadow-sm transition-all duration-300 flex items-center gap-3.5 cursor-pointer group">
          <div class="w-11 h-11 rounded-xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="#a48232" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"/></svg>
          </div>
          <div class="text-right">
            <h4 class="font-bold text-slate-900 text-sm">تواصل آمن</h4>
            <p class="text-[11px] text-slate-500 mt-0.5">تحدث مباشرة مع البائع</p>
          </div>
        </div>

        <!-- عرض الخريطة -->
        <div class="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs hover:border-[#a48232] hover:shadow-sm transition-all duration-300 flex items-center gap-3.5 cursor-pointer group">
          <div class="w-11 h-11 rounded-xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
            <svg class="w-5 h-5" fill="none" stroke="#a48232" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-.996l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628.996l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>
          </div>
          <div class="text-right">
            <h4 class="font-bold text-slate-900 text-sm">عرض الخريطة</h4>
            <p class="text-[11px] text-slate-500 mt-0.5">تصفح حسب الموقع</p>
          </div>
        </div>

      </div>

      <!-- 3. تصفح العقارات -->
      <div>
        <div class="flex justify-between items-center mb-3 px-1">
          <h3 class="font-bold text-slate-900 text-base border-r-4 border-[#a48232] pr-2.5">تصفح العقارات</h3>
          <button @click="goToExplore('', '', 'offers')" class="text-xs font-bold text-[#a48232] hover:opacity-80 transition flex items-center gap-1">
            عرض الكل <span>&lsaquo;</span>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-3.5">
          <!-- للبيع -->
          <div @click="goToExplore('', 'sale', 'offers')" class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between cursor-pointer hover:border-[#a48232] hover:shadow-sm transition-all duration-300 h-36 group">
            <div class="flex justify-between items-start">
              <span class="text-xs font-semibold text-[#a48232] flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">استكشف الآن <span>&lsaquo;</span></span>
              <div class="w-11 h-11 rounded-xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center shadow-2xs">
                  <svg class="w-5 h-5" fill="none" stroke="#a48232" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/><path stroke-linecap="round" stroke-linejoin="round" d="M6 6h.008v.008H6V6z"/></svg>
              </div>
            </div>
            <div class="text-right">
              <h4 class="font-bold text-slate-900 text-xl tracking-tight">للبيع</h4>
            </div>
          </div>

          <!-- للإيجار -->
          <div @click="goToExplore('', 'rent', 'offers')" class="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between cursor-pointer hover:border-[#a48232] hover:shadow-sm transition-all duration-300 h-36 group">
            <div class="flex justify-between items-start">
              <span class="text-xs font-semibold text-[#a48232] flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">استكشف الآن <span>&lsaquo;</span></span>
              <div class="w-11 h-11 rounded-xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center shadow-2xs">
                  <svg class="w-5 h-5" fill="none" stroke="#a48232" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"/></svg>
              </div>
            </div>
            <div class="text-right">
              <h4 class="font-bold text-slate-900 text-xl tracking-tight">للإيجار</h4>
            </div>
          </div>
        </div>

        <!-- بطاقة الطلبات -->
        <div @click="goToExplore('', '', 'requests')" class="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex items-center justify-between cursor-pointer hover:border-[#a48232] hover:shadow-sm transition-all duration-300 group">
          <div class="text-right">
            <span class="text-xs font-semibold text-[#a48232] flex items-center gap-1 group-hover:translate-x-[-2px] transition-transform">استكشف الآن <span>&lsaquo;</span></span>
            <h4 class="font-bold text-slate-900 text-base mt-1">طلبات</h4>
            <p class="text-xs text-slate-500 mt-0.5">مشترون ومستأجرون يبحثون عن عقار</p>
          </div>
          <div class="w-12 h-12 rounded-xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center shadow-2xs shrink-0">
            <svg class="w-6 h-6" fill="none" stroke="#a48232" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/></svg>
          </div>
        </div>
      </div>

      <!-- 4. نوع العقار -->
      <div>
        <h3 class="font-bold text-slate-900 text-base mb-3 px-1 border-r-4 border-[#a48232] pr-2.5">نوع العقار</h3>
        
        <div class="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-3">
          <div v-for="type in propertyTypes" :key="type.name" @click="goToExplore(type.name, '', 'offers')" class="bg-white p-3.5 rounded-2xl border-t-4 border-t-[#a48232] border-x border-b border-slate-200/80 text-center shadow-2xs hover:shadow-sm transition-all duration-300 cursor-pointer flex flex-col items-center justify-center py-4 group">
            <!-- لاحظ أن الأيقونات هنا تدار ديناميكياً عبر v-html، تأكد من تعديل الـ SVG في مصفوفة propertyTypes ليكون stroke="#a48232" -->
            <div class="w-11 h-11 mb-2.5 rounded-xl bg-[#FDF8E2] text-[#a48232] flex items-center justify-center group-hover:scale-105 transition-transform" v-html="type.iconSvg"></div>
            <span class="font-bold text-slate-800 text-xs tracking-tight">{{ type.name }}</span>
          </div>
        </div>
      </div>

    </div>

    <!-- 5. شريط التنقل السفلي الثابت -->
    <div class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-6 py-2.5 flex items-center justify-around z-30 shadow-lg">
        
      <router-link to="/settings" class="text-slate-400 hover:text-[#a48232] p-2 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" onmouseover="this.style.stroke='#a48232'" onmouseout="this.style.stroke='currentColor'"><path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
      </router-link>
      
      <button class="text-slate-400 hover:text-[#a48232] p-2 transition cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" onmouseover="this.style.stroke='#a48232'" onmouseout="this.style.stroke='currentColor'"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-.996l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628.996l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>
      </button>

      <button @click="isWizardOpen = true" class="w-13 h-13 -mt-6 bg-[#a48232] hover:bg-[#8c6e26] text-white rounded-full flex items-center justify-center shadow-md border-4 border-white transition-transform active:scale-95 cursor-pointer">
        <svg class="w-7 h-7" fill="none" stroke="white" stroke-width="2.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"></path>
        </svg>
      </button>

      <router-link to="/explore" class="text-slate-400 hover:text-[#a48232] p-2 transition">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24" onmouseover="this.style.stroke='#a48232'" onmouseout="this.style.stroke='currentColor'"><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/></svg>
      </router-link>

      <router-link to="/" class="bg-[#FDF8E2] text-[#a48232] p-2.5 rounded-xl transition shadow-2xs">
        <svg class="w-6 h-6" fill="none" stroke="#a48232" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>
      </router-link>
    </div>

    <AddAdModal v-model="isWizardOpen" />

  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AddAdModal from './AddAdModal.vue'

export default {
  components: {
    AddAdModal
  },
  setup() {
    const router = useRouter()
    const isWizardOpen = ref(false)
const goToExplore = (category = '', operation = '', tab = 'offers') => {
  const queryObj = {
    tab: tab
  }

  // إذا تم تحديد قسم (مثل شقة، بيت...) أضفه
  if (category) {
    queryObj.category = category
  }

  // إذا تم تحديد عملية (sale أو rent) أرسل مفتاحاً واحداً موحداً فقط لمنع التضارب
  if (operation) {
    queryObj.operation = operation
  }

  router.push({
    path: '/explore',
    query: queryObj
  })
}

    const propertyTypes = ref([
      { 
        name: 'شقة', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21"/></svg>' 
      },
      { 
        name: 'بيت', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"/></svg>' 
      },
      { 
        name: 'شاليه', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"/></svg>' 
      },
      { 
        name: 'أرض', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-.996l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628.996l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"/></svg>' 
      },
      { 
        name: 'محل', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.37 3h13.259a1.5 1.5 0 011.05.44l3.121 3.12a3 3 0 01-.621 4.72"/></svg>' 
      },
      { 
        name: 'مكتب', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.035-.84 1.875-1.875 1.875H5.625c-1.035 0-1.875-.84-1.875-1.875v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.75c0-1.035-.84-1.875-1.875-1.875H5.625c-1.035 0-1.875.84-1.875 1.875v3.739c0 .644.295 1.254.75 1.661m16.5 0h-16.5m16.5 0L18 9.75m-12 4.4l3.75-4.4m7.5 0l3.75 4.4M12 9.75v10.5"/></svg>' 
      },
      { 
        name: 'مستودع', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"/></svg>' 
      },
      { 
        name: 'سكن طلابي', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 01-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.005 11.5c.355 0 .707-.02 1.058-.06A53.955 53.955 0 0115 19.75m-7.5-.5v.5a2.25 2.25 0 002.25 2.25h1.5a2.25 2.25 0 002.25-2.25v-.5"/></svg>' 
      },
      { 
        name: 'فندق', 
        iconSvg: '<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12h19.5m-18-6.75a2.25 2.25 0 012.25-2.25h13.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-13.5a2.25 2.25 0 01-2.25-2.25V5.25zM6 9.75h.008v.008H6V9.75zm3 0h.008v.008H9V9.75z"/></svg>' 
      }
    ])

    return {
      isWizardOpen,
      propertyTypes,
      goToExplore
    }
  }
}
</script>