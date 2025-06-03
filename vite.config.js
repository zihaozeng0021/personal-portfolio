// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path from 'node:path'

export default defineConfig({
  base: '/personal-portfolio/',
  plugins: [
    vue(),
    VueI18nPlugin({
      include: path.resolve(__dirname, './src/languages/**')
    })
  ]
})
