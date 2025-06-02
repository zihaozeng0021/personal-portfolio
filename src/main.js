// src/main.js
import { createApp } from 'vue'
import App from './App.vue'

import { createI18n } from 'vue-i18n'

import zh from './languages/zh.json'
import en from './languages/en.json'

const messages = {
    zh,
    en
}

const i18n = createI18n({
    legacy: false,
    locale: 'en',
    fallbackLocale: 'zh',
    messages
})

const app = createApp(App)
app.use(i18n)
app.mount('#app')
