import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

// استيراد مكتبة الـ Toast والتصميم الخاص بها
import Toast from "vue-toastification"
import "vue-toastification/dist/index.css"

const app = createApp(App)

app.use(router)

// إعداد وتفعيل الـ Toast مع دعم اللغة العربية (RTL)
app.use(Toast, {
  position: "top-right",
  timeout: 3000,
  closeOnClick: true,
  pauseOnFocusLoss: true,
  pauseOnHover: true,
  draggable: true,
  rtl: true
})

app.mount('#app')