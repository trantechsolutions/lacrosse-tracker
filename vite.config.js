import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { VitePWA } from 'vite-plugin-pwa'  // Import the PWA plugin

// https://vite.dev/config/
export default defineConfig({
  base: '/lacrosse-tracker/',
  plugins: [
    vue(),
    vueDevTools(),
    VitePWA({
      registerType: 'autoUpdate', // Automatically update service worker
      manifest: {
        name: 'Lacrosse GameDay Tracker',
        short_name: 'lacrosse-tracker',
        description: 'Help track lacrosse game live',
        theme_color: '#42b983',
        background_color: '#42b983',
        display: 'standalone', // Makes the app look like a native app
        start_url: './',
        icons: [
          {
            src: './icons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: './icons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
