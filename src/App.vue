<!-- src/App.vue -->
<template>
  <div id="app" @click="onClick">
    <div class="lang-switch">
      <button
          :class="['lang-btn', { active: $i18n.locale === 'en' }]"
          @click.stop="setLocale('en')"
      >
        English
      </button>

      <button
          :class="['lang-btn', { active: $i18n.locale === 'zh' }]"
          @click.stop="setLocale('zh')"
      >
        简体中文
      </button>

    </div>

    <NavigationBar
        :current-page="currentPage"
        @update:page="handleNav"
    />

    <CustomCursor />

    <component :is="pages[currentPage]" class="page" />
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'
import CustomCursor from './components/CustomCursor.vue'

import LandingPage from './pages/LandingPage.vue'
import AboutMe from './pages/AboutMe.vue'
import EducationalBackground from './pages/EducationalBackground.vue'
import PersonalProjects from './pages/PersonalProjects.vue'
import WorkExperience from './pages/WorkExperience.vue'
import ContactMe from './pages/ContactMe.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    CustomCursor,
    LandingPage,
    AboutMe,
    EducationalBackground,
    PersonalProjects,
    WorkExperience,
    ContactMe,
  },
  data() {
    return {
      pages: [
        'LandingPage',
        'AboutMe',
        'EducationalBackground',
        'PersonalProjects',
        'WorkExperience',
        'ContactMe',
      ],
      currentPage: 0,
    }
  },
  methods: {
    setLocale(lang) {
      this.$i18n.locale = lang
    },

    isInteractive(el) {
      return (
          el &&
          el.closest?.(
              'a, button, input, textarea, select, [role="button"], [role="link"]'
          )
      )
    },

    onClick(e) {
      if (e.target.closest('.nav')) return

      if (this.isInteractive(e.target)) return

      const { clientY } = e
      const half = window.innerHeight / 2
      if (clientY < half && this.currentPage > 0) {
        this.currentPage--
      } else if (
          clientY >= half &&
          this.currentPage < this.pages.length - 1
      ) {
        this.currentPage++
      }
    },

    handleNav(index) {
      this.currentPage = index
    },
  },
}
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

  background: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

.page {
  width: 100%;
  height: 100%;
}

.lang-switch {
  position: fixed;
  top: 16px;
  left: 16px;
  display: flex;
  gap: 8px;
  z-index: 1000;
}

.lang-btn {
  background: transparent;
  border: 1px solid #fff;
  color: #fff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.2s, color 0.2s;
}

.lang-btn:hover {
  background-color: #fff;
  color: #000;
}

.lang-btn.active {
  background-color: #fff;
  color: #000;
}
</style>
