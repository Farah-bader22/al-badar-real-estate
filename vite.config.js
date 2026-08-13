import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
    VitePWA({
      registerType: 'prompt', // <--- يضمن تحديث النسخة بشكل سليم
      workbox: {
        cleanupOutdatedCaches: true, // مسح الكاش القديم تلقائياً عند أي تحديث
        skipWaiting: true
      },
      manifest: {
        name: 'البدر العقارية',
        short_name: 'عقارات البدر',
        description: 'منصة لإدارة ونشر العقارات',
        theme_color: '#9C7A2E',
        background_color: '#F8F9FA',
        display: 'standalone',
        dir: 'rtl',
        lang: 'ar',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }),
  ],
})