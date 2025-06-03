// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/personal-portfolio/',
  plugins: [vue()],
})
