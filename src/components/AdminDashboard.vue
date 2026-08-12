<template>
  <div class="admin-container" style="padding: 20px; direction: rtl;">
    <!-- شرط حماية الصفحة: لا يظهر المحتوى إلا لإيميل الآدمن المحدد -->
    <div v-if="userEmail === 'mb837093@gmail.com'">
      <h1>لوحة تحكم الآدمن - مراجعة العقارات</h1>
      
      <div v-if="loading" style="margin-top: 20px;">جاري تحميل العقارات المعلقة...</div>
      
      <div v-else>
        <div v-if="pendingProperties.length === 0" style="margin-top: 20px; color: gray;">
          لا توجد عقارات بانتظار الموافقة حالياً.
        </div>

        <div 
          v-for="prop in pendingProperties" 
          :key="prop.id" 
          class="property-card"
          style="border: 1px solid #ddd; padding: 15px; margin-bottom: 15px; border-radius: 8px; background: #fff;"
        >
          <h3>{{ prop.title }}</h3>
          <p><strong>المدينة:</strong> {{ prop.city }}</p>
          <p><strong>السعر:</strong> {{ prop.price }} {{ prop.currency }}</p>
          <p><strong>نوع العملية:</strong> {{ prop.operation }}</p>
          
          <div style="margin-top: 10px;">
            <button 
              @click="approveProperty(prop.id)" 
              style="background-color: #4CAF50; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; margin-left: 10px;"
            >
              ✅ موافقة ونشر
            </button>
            <button 
              @click="deleteProperty(prop.id)" 
              style="background-color: #f44336; color: white; border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer;"
            >
              ❌ حذف الإعلان
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- في حال دخل أي شخص آخر غير الآدمن -->
    <div v-else style="text-align: center; margin-top: 50px;">
      <h1 style="color: red;">عذراً، ليس لديك صلاحية الدخول لهذه الصفحة!</h1>
      <p>هذه الصفحة مخصصة للآدمن فقط.</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase.js'

const pendingProperties = ref([])
const loading = ref(true)
const userEmail = ref('')

// التحقق من المستخدم وجلب الإيميل والعقارات المعلقة
const initAdmin = async () => {
  loading.value = true
  
  // 1. جلب بيانات المستخدم الحالي من Supabase Auth
  const { data: { user }, error: userError } = await supabase.auth.getUser()
  
  if (userError || !user) {
    userEmail.value = ''
    loading.value = false
    return
  }

  userEmail.value = user.email

  // 2. إذا كان هو الآدمن، نقوم بجلب العقارات المعلقة فقط
  if (userEmail.value === 'mb837093@gmail.com') {
    await fetchPendingProperties()
  } else {
    loading.value = false
  }
}

// دالة جلب العقارات التي حالتها pending
const fetchPendingProperties = async () => {
  const { data, error } = await supabase
    .from('properties')
    .select('*')
    .eq('status', 'pending')
    .order('id', { ascending: false })

  if (error) {
    console.error('خطأ في جلب العقارات المعلقة:', error.message)
  } else {
    pendingProperties.value = data || []
  }
  loading.value = false
}

// دالة الموافقة (تغيير الحالة إلى approved)
const approveProperty = async (id) => {
  const { error } = await supabase
    .from('properties')
    .update({ status: 'approved' })
    .eq('id', id)

  if (error) {
    alert('حدث خطأ أثناء الموافقة على الإعلان')
  } else {
    alert('تمت الموافقة على الإعلان بنجاح وأصبح ظاهراً للعامة!')
    fetchPendingProperties() // تحديث القائمة فوراً
  }
}

// دالة الحذف النهائي
const deleteProperty = async (id) => {
  if (confirm('هل أنتِ متأكدة من حذف هذا الإعلان نهائياً؟')) {
    const { error } = await supabase
      .from('properties')
      .delete()
      .eq('id', id)

    if (error) {
      alert('حدث خطأ أثناء الحذف')
    } else {
      alert('تم حذف الإعلان بنجاح')
      fetchPendingProperties() // تحديث القائمة
    }
  }
}

onMounted(() => {
  initAdmin()
})
</script>