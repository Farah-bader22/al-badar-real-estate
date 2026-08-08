<template>
  <div class="min-h-screen bg-[#F8F9FA] font-sans text-slate-900 pb-20" dir="rtl">
    
<!-- 1. شريط التنقل العلوي الاحترافي الفاخر -->
<!-- 1. شريط التنقل العلوي الاحترافي الفاخر -->
<nav class="bg-white/85 backdrop-blur-xl shadow-[0_4px_20px_rgba(164,130,50,0.06)] border-b border-[#a48232]/20 px-6 py-4 flex items-center justify-between sticky top-0 z-40 transition-all duration-300">
      
      <!-- الجهة اليمنى: زر القائمة الجانبية واسم التطبيق -->
      <div class="flex items-center gap-4">
        <button 
          @click="isSidebarOpen = true" 
          class="group px-3.5 py-2 rounded-xl text-[#a48232] bg-[#FDF8E2]/60 hover:bg-[#a48232] hover:text-white border border-[#a48232]/30 transition-all duration-300 cursor-pointer flex items-center gap-2.5 font-bold text-sm shadow-xs">
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <span class="hidden sm:inline tracking-wide">القائمة</span>
        </button>

        <router-link to="/" class="flex items-center gap-2 text-slate-900 font-black text-xl tracking-tight group">
          <span class="bg-gradient-to-r from-slate-900 via-[#a48232] to-[#8c6e26] bg-clip-text text-transparent drop-shadow-xs">البدر للعقارات</span>
        </router-link>
      </div>

</nav>

    <!-- 2. منطقة عرض صفحات الـ Router -->
    <main>
      <router-view @open-add="isAddModalOpen = true" />
    </main>

    <!-- 3. شريط التنقل السفلي الثابت (محدث بالأيقونات الذهبية والاحترافية) -->
    <div class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-6 py-2.5 flex items-center justify-around z-30 shadow-lg">
      
      <!-- زر الإعدادات -->
      <router-link to="/explore" class="text-slate-400 hover:text-[#D4AF37] p-2 transition cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </router-link>
      
      <!-- زر الخريطة -->
      <router-link to="/explore" class="text-slate-400 hover:text-[#D4AF37] p-2 transition cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-.996l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628.996l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
        </svg>
      </router-link>

      <!-- زر الإضافة العائم -->
      <button @click="isAddModalOpen = true" class="w-13 h-13 -mt-6 bg-[#D4AF37] hover:bg-[#c29e31] text-slate-900 rounded-full flex items-center justify-center text-3xl font-bold shadow-md border-4 border-white transition transform active:scale-95 cursor-pointer">
        +
      </button>

      <!-- زر البحث -->
      <router-link to="/explore" class="text-slate-400 hover:text-[#D4AF37] p-2 transition cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </router-link>

      <!-- زر الصفحة الرئيسية -->
      <router-link to="/" class="bg-[#FDF8E2] text-[#D4AF37] p-2.5 rounded-xl transition shadow-2xs cursor-pointer">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="1.8" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </router-link>
    </div>

    <!-- 4. القائمة الجانبية (Sidebar) -->
    <Sidebar v-if="isSidebarOpen" @close="isSidebarOpen = false" />

    <!-- 5. نافذة إضافة إعلان أو طلب منبثقة (Wizard) -->
    <AddAdModal v-model="isAddModalOpen" />

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from './components/Sidebar.vue'
import AddAdModal from './components/AddAdModal.vue'

export default {
  components: {
    Sidebar,
    AddAdModal
  },
  setup() {
    const isSidebarOpen = ref(false)   
    const isAddModalOpen = ref(false)  

    return {
      isSidebarOpen,
      isAddModalOpen
    }
  }
}
</script>