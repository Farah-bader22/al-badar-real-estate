<template>
  <div class="min-h-screen bg-[#F8F9FA] pb-36 text-slate-900" dir="rtl">
    
    <!-- 1. التبديل الرئيسي بين (عروض) و (طلبات) -->
    <div class="p-4 space-y-4">
      <div class="bg-slate-200/70 p-1.5 rounded-2xl flex gap-2">
        <button 
          @click="activeTab = 'offers'"
          :class="['flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer', activeTab === 'offers' ? 'bg-[#a48232] text-white shadow-md shadow-[#a48232]/25' : 'text-slate-600 hover:text-slate-900']">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
          </svg>
          <span>عروض</span>
        </button>
        <button 
          @click="activeTab = 'requests'"
          :class="['flex-1 py-3 rounded-xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer', activeTab === 'requests' ? 'bg-[#a48232] text-white shadow-md shadow-[#a48232]/25' : 'text-slate-600 hover:text-slate-900']">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"></path>
          </svg>
          <span>طلبات</span>
        </button>
      </div>

      <!-- 2. شريط البحث الفوري وأيقونة الفلاتر -->
      <div class="flex items-center gap-2">
        <!-- زر فتح نافذة الفلاتر -->
        <button @click="showFilterModal = true" class="relative w-12 h-12 shrink-0 rounded-2xl bg-white border border-amber-200/60 shadow-sm flex items-center justify-center text-[#a48232] hover:bg-amber-50/40 transition cursor-pointer">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
          </svg>
          <span v-if="activeFiltersCount > 0" class="absolute -top-1 -right-1 bg-[#a48232] text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow">
            {{ activeFiltersCount }}
          </span>
        </button>

        <!-- حقل البحث -->
        <div class="relative flex-1">
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="ابحث عن منطقة، حي، أو مواصفات..." 
            class="w-full bg-white border border-amber-200/60 rounded-2xl py-3 pr-11 pl-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#a48232] shadow-sm text-right"
          />
          <span class="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </span>
          <span v-if="searchQuery" @click="searchQuery = ''" class="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-red-500 cursor-pointer text-xs">✕</span>
        </div>
      </div>

      <!-- شريط الفلاتر النشطة السريعة -->
      <div v-if="activeFiltersCount > 0" class="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        <div v-if="appliedFilters.category && appliedFilters.category !== 'الكل'" class="bg-white border border-amber-200/60 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm flex items-center gap-2 shrink-0">
          <span class="text-slate-400 cursor-pointer hover:text-red-500" @click="clearFilter('category')">✕</span>
          <span>{{ appliedFilters.category }}</span>
        </div>

        <div v-if="appliedFilters.operation && appliedFilters.operation !== 'الكل'" class="bg-white border border-amber-200/60 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm flex items-center gap-2 shrink-0">
          <span class="text-slate-400 cursor-pointer hover:text-red-500" @click="clearFilter('operation')">✕</span>
          <span>{{ appliedFilters.operation === 'sale' ? 'للبيع' : 'للإيجار' }}</span>
        </div>

        <div v-if="appliedFilters.city && appliedFilters.city !== 'الكل'" class="bg-white border border-amber-200/60 px-3 py-1.5 rounded-xl text-xs font-bold shadow-sm flex items-center gap-2 shrink-0">
          <span class="text-slate-400 cursor-pointer hover:text-red-500" @click="clearFilter('city')">✕</span>
          <span>{{ appliedFilters.city }}</span>
        </div>

        <button @click="resetAllFilters" class="text-xs font-bold text-slate-500 hover:underline px-2 shrink-0">
          مسح الكل
        </button>
      </div>

      <!-- عدد النتائج -->
      <div class="text-xs font-bold text-slate-500 px-1">
        {{ filteredList.length }} نتيجة مطابقة
      </div>

      <!-- حالة التحميل -->
      <div v-if="loading" class="text-center py-12 text-slate-400 font-bold">
        جاري تحميل عقارات قطاع غزة...
      </div>

      <!-- حالة عدم وجود بيانات -->
      <div v-else-if="filteredList.length === 0" class="text-center py-16 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-2">
        <div class="w-12 h-12 mx-auto rounded-2xl bg-amber-50 text-[#a48232] flex items-center justify-center">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path>
          </svg>
        </div>
        <p class="text-sm font-bold text-slate-600">لا توجد عقارات مطابقة لبحثك في قطاع غزة</p>
      </div>

      <!-- 3. قائمة العقارات -->
      <div v-else class="space-y-4">
        <div v-for="item in filteredList" :key="item.id" class="bg-white rounded-3xl border border-amber-200/50 shadow-sm overflow-hidden">
          
          <!-- صاحب الإعلان -->
          <div class="p-4 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-[#FDF8E2] text-[#a48232] font-bold flex items-center justify-center text-sm shadow-inner">
                {{ item.avatar || 'غ' }}
              </div>
              <div class="text-right">
                <h4 class="font-bold text-slate-900 text-sm">{{ item.owner || 'مستخدم المنصة' }}</h4>
                <p class="text-[10px] text-slate-400">قطاع غزة</p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button 
                @click="toggleFavorite(item)" 
                class="w-9 h-9 rounded-xl hover:bg-amber-50/50 flex items-center justify-center text-[#a48232] transition cursor-pointer">
                <svg class="w-5 h-5" :fill="isFavorite(item.id) ? 'currentColor' : 'none'" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                </svg>
              </button>
              <button class="w-8 h-8 rounded-full hover:bg-slate-50 flex items-center justify-center text-slate-400">⋮</button>
            </div>
          </div>

          <!-- صورة العقار (تختفي إذا كان الطلب request) -->
          <div v-if="item.category && item.category.trim().toLowerCase() !== 'request'" class="relative h-64 bg-slate-100">
            <img :src="item.image || 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800'" alt="property" class="w-full h-full object-cover" />
            <span class="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full">
              {{ item.operation === 'sale' ? 'للبيع' : 'للإيجار' }}
            </span>
            <span class="absolute bottom-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold px-3 py-1.5 rounded-2xl shadow-sm flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#a48232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              {{ item.type }}
            </span>
          </div>

          <!-- التفاصيل -->
          <div class="p-4 space-y-3 text-right">
            <h3 class="font-bold text-slate-900 text-base">{{ item.title }}</h3>
            
            <div class="inline-block bg-[#FDF8E2] border border-amber-200/80 px-4 py-2 rounded-2xl">
              <span class="font-black text-slate-900 text-base">{{ item.price || 0 }} {{ item.currency || '₪' }}</span>
            </div>

            <p class="text-xs text-slate-500 flex items-center gap-1.5">
              <svg class="w-4 h-4 text-[#a48232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              غزة - {{ item.city || item.address || 'حي رمال' }}
            </p>

            <!-- معلومات إضافية -->
            <div class="flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-600">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-[#a48232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
                </svg>
                المساحة: {{ item.area || 'غير متوفرة' }} م²
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4 text-[#a48232]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                للتواصل: {{ item.phone || 'غير متوفر' }}
              </span>
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- نافذة الفلاتر المنبثقة (Bottom Sheet Modal) مع مسافة آمنة بالأسفل -->
    <div v-if="showFilterModal" class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-end justify-center transition-opacity">
      <div class="bg-white w-full max-w-lg rounded-t-[35px] max-h-[85vh] overflow-y-auto p-6 pb-12 space-y-6 shadow-2xl animate-slide-up">
        
        <!-- رأس النافذة -->
        <div class="flex items-center justify-between border-b border-slate-100 pb-4">
          <button @click="showFilterModal = false" class="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 transition cursor-pointer">
            ✕
          </button>
          <h3 class="text-base font-black text-slate-900">فلترة عقارات غزة</h3>
          <div class="w-9"></div>
        </div>

        <div class="space-y-6 text-right">
          
          <!-- 1. ترتيب حسب -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <span class="text-xs font-bold text-[#a48232] bg-[#FDF8E2] px-3 py-1 rounded-full">ترتيب حسب</span>
            </div>
            <div class="flex flex-wrap gap-2 justify-end">
              <button 
                v-for="sort in sortOptions" 
                :key="sort.value"
                @click="tempFilters.sortBy = sort.value"
                :class="['px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer', tempFilters.sortBy === sort.value ? 'bg-[#a48232] text-white border-[#a48232] shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50']">
                {{ sort.label }}
              </button>
            </div>
          </div>

          <!-- 2. نوع العقار -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <span class="text-xs font-bold text-[#a48232] bg-[#FDF8E2] px-3 py-1 rounded-full">نوع العقار</span>
            </div>
            <div class="flex flex-wrap gap-2 justify-end">
              <button 
                v-for="cat in propertyTypes" 
                :key="cat"
                @click="tempFilters.category = cat"
                :class="['px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer', tempFilters.category === cat ? 'bg-[#a48232] text-white border-[#a48232] shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50']">
                {{ cat }}
              </button>
            </div>
          </div>

          <!-- 3. نوع العملية -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <span class="text-xs font-bold text-[#a48232] bg-[#FDF8E2] px-3 py-1 rounded-full">نوع العملية</span>
            </div>
            <div class="flex flex-wrap gap-2 justify-end">
              <button 
                v-for="op in operationTypes" 
                :key="op.value"
                @click="tempFilters.operation = op.value"
                :class="['px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer', tempFilters.operation === op.value ? 'bg-[#a48232] text-white border-[#a48232] shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50']">
                {{ op.label }}
              </button>
            </div>
          </div>

          <!-- 4. مناطق قطاع غزة -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <span class="text-xs font-bold text-[#a48232] bg-[#FDF8E2] px-3 py-1 rounded-full">المنطقة في غزة</span>
            </div>
            <div class="relative">
              <select 
                v-model="tempFilters.city"
                class="w-full bg-white border border-slate-200 rounded-2xl py-3 px-4 text-xs font-bold text-slate-700 appearance-none focus:outline-none focus:border-[#a48232] shadow-sm text-right">
                <option value="الكل">جميع مناطق غزة</option>
                <option v-for="city in gazaCitiesList" :key="city" :value="city">{{ city }}</option>
              </select>
              <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">▼</span>
            </div>
          </div>

          <!-- 5. نطاق السعر -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <span class="text-xs font-bold text-[#a48232] bg-[#FDF8E2] px-3 py-1 rounded-full">نطاق السعر</span>
            </div>
            <div class="grid grid-cols-2 gap-3">
              <div class="space-y-1">
                <span class="text-[10px] text-slate-400 block text-right">الحد الأقصى</span>
                <input 
                  type="number" 
                  v-model.number="tempFilters.maxPrice" 
                  placeholder="∞" 
                  class="w-full bg-white border border-slate-200 rounded-2xl py-2.5 px-4 text-xs font-bold text-slate-800 text-center focus:outline-none focus:border-[#a48232]" />
              </div>
              <div class="space-y-1">
                <span class="text-[10px] text-slate-400 block text-right">الحد الأدنى</span>
                <input 
                  type="number" 
                  v-model.number="tempFilters.minPrice" 
                  placeholder="0" 
                  class="w-full bg-white border border-slate-200 rounded-2xl py-2.5 px-4 text-xs font-bold text-slate-800 text-center focus:outline-none focus:border-[#a48232]" />
              </div>
            </div>
          </div>

          <!-- 6. العملة -->
          <div class="space-y-2">
            <div class="flex justify-end">
              <span class="text-xs font-bold text-[#a48232] bg-[#FDF8E2] px-3 py-1 rounded-full">العملة</span>
            </div>
            <div class="flex flex-wrap gap-2 justify-end">
              <button 
                v-for="curr in currencyTypes" 
                :key="curr"
                @click="tempFilters.currency = curr"
                :class="['px-4 py-2 rounded-full text-xs font-bold transition-all border cursor-pointer', tempFilters.currency === curr ? 'bg-[#a48232] text-white border-[#a48232] shadow-sm' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50']">
                {{ curr }}
              </button>
            </div>
          </div>

        </div>

        <!-- أزرار التطبيق والمسح -->
        <div class="flex gap-3 pt-4 border-t border-slate-100 pb-4">
          <button 
            @click="applyFilters"
            class="flex-1 bg-[#a48232] hover:bg-[#8c6e26] text-white py-3.5 rounded-2xl font-black text-sm shadow-md shadow-[#a48232]/25 transition cursor-pointer">
            تطبيق
          </button>
          <button 
            @click="resetAllFilters"
            class="flex-1 bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 py-3.5 rounded-2xl font-black text-sm transition cursor-pointer">
            مسح
          </button>
        </div>

      </div>
    </div>

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

  </div>
</template>

<script>
import { ref, computed, onMounted, reactive, watch } from 'vue'
import { useRoute } from 'vue-router'
import { supabase } from '../supabase.js'

export default {
  setup() {
    const route = useRoute()
    
    const activeTab = ref(route.query.tab || 'offers')
    const properties = ref([])
    const loading = ref(true)
    const showFilterModal = ref(false)
    const searchQuery = ref('')

    const sortOptions = [
      { label: 'الأحدث', value: 'newest' },
      { label: 'الأقدم', value: 'oldest' },
      { label: 'السعر: من الأقل', value: 'price_asc' },
      { label: 'السعر: من الأعلى', value: 'price_desc' },
    ]

    const propertyTypes = ['الكل', 'شقة', 'بيت', 'أرض', 'شاليه', 'محل', 'مكتب', 'مستودع', 'سكن طلابي', 'فندق']
    const operationTypes = [
      { label: 'الكل', value: 'الكل' },
      { label: 'للبيع', value: 'sale' },
      { label: 'للإيجار', value: 'rent' }
    ]
    const currencyTypes = ['الكل', 'ILS', 'USD', 'JOD']
    
    const gazaCitiesList = [
      'غزة (المدينة)',
      'الشيخ رضوان',
      'الرمال',
      'الدرج',
      'التفاح',
      'الشجاعية',
      'الزيتون',
      'النصيرات',
      'دير البلح',
      'خان يونس',
      'رفح',
      'جباليا',
      'بيت لاهيا',
      'بيت حانون',
      'المغازي',
      'البريج',
      'الزوايدة',
      'عبسان الكبيرة'
    ]

    const appliedFilters = reactive({
      sortBy: 'newest',
      category: 'الكل',
      operation: 'الكل',
      city: 'الكل',
      minPrice: null,
      maxPrice: null,
      currency: 'الكل'
    })

    const tempFilters = reactive({ ...appliedFilters })

    const favorites = ref(JSON.parse(localStorage.getItem('favorite_properties') || '[]'))

    const isFavorite = (id) => favorites.value.includes(id)

    const toggleFavorite = (item) => {
      const index = favorites.value.indexOf(item.id)
      if (index > -1) {
        favorites.value.splice(index, 1)
      } else {
        favorites.value.push(item.id)
      }
      localStorage.setItem('favorite_properties', JSON.stringify(favorites.value))
    }

const parseQueryFilters = () => {
      if (route.query.tab) {
        activeTab.value = route.query.tab
      }
      
      // التقاط نوع العقار (إذا وُجد في الرابط نحدثه، وإلا فلا نمسح القديم عشوائياً)
      if (route.query.category || route.query.type) {
        const val = route.query.category || route.query.type
        appliedFilters.category = val
        tempFilters.category = val
      }

      // التقاط نوع العملية (sale أو rent)
      const opVal = route.query.operation || route.query.type
      if (opVal && (opVal === 'sale' || opVal === 'rent' || opVal.includes('بيع') || opVal.includes('إيجار'))) {
        appliedFilters.operation = opVal
        tempFilters.operation = opVal
      }

      if (route.query.city) {
        appliedFilters.city = route.query.city
        tempFilters.city = route.query.city
      }
    }

const fetchProperties = async () => {
      loading.value = true
      try {
        let query = supabase
          .from('properties')
          .select('*')

        // سنقوم بجلب كل العقارات دون أي شروط معقدة أولاً لنرى هل الداتابيز ترد أم لا!
        const { data, error } = await query.order('id', { ascending: false })

        if (error) throw error
        
        // --- ضعي هذه الطباعة لنرى ماء في جعبة الداتابيز ---
        console.log("كل العقارات القادمة من Supabase:", data)
        console.log("الرابط الحالي:", route.query)
        // ------------------------------------------------

        properties.value = data || []
      } catch (err) {
        console.error('خطأ في جلب العقارات:', err.message)
      } finally {
        loading.value = false
      }
    }

  // جلب البيانات ومطابقة الفلاتر بمجرد تحميل الصفحة أو تغير الرابط تماماً
    const initPage = () => {
      parseQueryFilters()
      fetchProperties()
    }

    onMounted(() => {
      initPage()
    })

    // مراقبة مسار الـ URL بالكامل وليس فقط الـ query لضمان الاستجابة
    watch(() => route.fullPath, () => {
      initPage()
    })

    const activeFiltersCount = computed(() => {
      let count = 0
      if (appliedFilters.category && appliedFilters.category !== 'الكل') count++
      if (appliedFilters.operation && appliedFilters.operation !== 'الكل') count++
      if (appliedFilters.city && appliedFilters.city !== 'الكل') count++
      if (appliedFilters.minPrice !== null && appliedFilters.minPrice > 0) count++
      if (appliedFilters.maxPrice !== null && appliedFilters.maxPrice !== '') count++
      if (appliedFilters.currency && appliedFilters.currency !== 'الكل') count++
      return count
    })

    const applyFilters = () => {
      Object.assign(appliedFilters, tempFilters)
      showFilterModal.value = false
    }

    const resetAllFilters = () => {
      const resetObj = {
        sortBy: 'newest',
        category: 'الكل',
        operation: 'الكل',
        city: 'الكل',
        minPrice: null,
        maxPrice: null,
        currency: 'الكل'
      }
      Object.assign(appliedFilters, resetObj)
      Object.assign(tempFilters, resetObj)
      searchQuery.value = ''
      showFilterModal.value = false
    }

    const clearFilter = (filterKey) => {
      if (filterKey === 'category') {
        appliedFilters.category = 'الكل'
        tempFilters.category = 'الكل'
      }
      if (filterKey === 'operation') {
        appliedFilters.operation = 'الكل'
        tempFilters.operation = 'الكل'
      }
      if (filterKey === 'city') {
        appliedFilters.city = 'الكل'
        tempFilters.city = 'الكل'
      }
    }
const filteredList = computed(() => {
      let result = properties.value.filter(item => {
        const isRequestTab = activeTab.value === 'requests'
        const itemIsRequest = item.category && item.category.trim().toLowerCase() === 'request'
        
        if (isRequestTab && !itemIsRequest) return false
        if (!isRequestTab && itemIsRequest) return false

        if (searchQuery.value.trim() !== '') {
          const query = searchQuery.value.trim().toLowerCase()
          const title = (item.title || '').toLowerCase()
          const city = (item.city || item.address || '').toLowerCase()
          const type = (item.type || '').toLowerCase()
          if (!title.includes(query) && !city.includes(query) && !type.includes(query)) {
            return false
          }
        }

        if (appliedFilters.category && appliedFilters.category !== 'الكل') {
          if ((item.type || '').trim().toLowerCase() !== appliedFilters.category.trim().toLowerCase()) return false
        }

        if (appliedFilters.operation && appliedFilters.operation !== 'الكل') {
          const itemOp = (item.operation || '').trim().toLowerCase()
          const targetOp = appliedFilters.operation.trim().toLowerCase()
          
          const isSaleMatch = (targetOp === 'sale' && (itemOp === 'sale' || itemOp.includes('بيع')))
          const isRentMatch = (targetOp === 'rent' && (itemOp === 'rent' || itemOp.includes('إيجار') || itemOp.includes('ايجار')))
          
          if (!isSaleMatch && !isRentMatch && itemOp !== targetOp) {
            return false
          }
        }

        if (appliedFilters.city && appliedFilters.city !== 'الكل') {
          const itemCity = (item.city || item.address || '').trim().toLowerCase()
          const targetCity = appliedFilters.city.replace(' (المدينة)', '').trim().toLowerCase()
          if (!itemCity.includes(targetCity)) return false
        }

        if (appliedFilters.minPrice !== null && appliedFilters.minPrice !== '' && appliedFilters.minPrice > 0) {
          if (Number(item.price || 0) < Number(appliedFilters.minPrice)) return false
        }

        if (appliedFilters.maxPrice !== null && appliedFilters.maxPrice !== '') {
          if (Number(item.price || 0) > Number(appliedFilters.maxPrice)) return false
        }

        if (appliedFilters.currency && appliedFilters.currency !== 'الكل') {
          if ((item.currency || '₪').trim().toUpperCase() !== appliedFilters.currency.trim().toUpperCase()) return false
        }

        return true
      })

      return result.sort((a, b) => {
        if (appliedFilters.sortBy === 'newest') return b.id - a.id
        if (appliedFilters.sortBy === 'oldest') return a.id - b.id
        if (appliedFilters.sortBy === 'price_asc') return (a.price || 0) - (b.price || 0)
        if (appliedFilters.sortBy === 'price_desc') return (b.price || 0) - (a.price || 0)
        return 0
      })
    })

    return {
      activeTab,
      properties,
      loading,
      showFilterModal,
      searchQuery,
      sortOptions,
      propertyTypes,
      operationTypes,
      currencyTypes,
      gazaCitiesList,
      tempFilters,
      appliedFilters,
      activeFiltersCount,
      filteredList,
      applyFilters,
      resetAllFilters,
      clearFilter,
      isFavorite,
      toggleFavorite
    }
  }
}
</script>