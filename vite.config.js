import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['icon.svg'],
      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico,mp3,webmanifest}']
      },
      manifest: {
        name: 'Quran Learn - Noorani Qaida',
        short_name: 'Quran Learn',
        description: 'Learn to read the Quran from the very basics (Noorani Qaida) in Bangla and English.',
        theme_color: '#0d5c46',
        background_color: '#faf6ec',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ],
  server: {
    host: true
  }
})
