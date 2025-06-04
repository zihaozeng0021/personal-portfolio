<!-- src/App.vue -->
<template>
  <div
      id="app"
      :class="{ 'is-mobile': isMobileOrTablet }"
      @click="onClick"
  >
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
        :is-mobile="isMobileOrTablet"
        @update:page="handleNav"
    />

    <CustomCursor v-if="!isMobileOrTablet" />


    <div v-if="isMobileOrTablet" class="pages-container">
      <div
          v-for="(pageName, index) in pages"
          :key="index"
          :id="`page-${index}`"
          class="page-wrapper"
      >
        <component :is="pageName" class="page" />
      </div>
    </div>

    <component
        v-else
        :is="pages[currentPage]"
        class="page"
    />
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
      isMobileOrTablet: false,
      mobileBreakpoint: 768,
    }
  },
  mounted() {
    this.checkIsMobileOrTablet()
    window.addEventListener('resize', this.checkIsMobileOrTablet)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkIsMobileOrTablet)
  },
  methods: {
    setLocale(lang) {
      this.$i18n.locale = lang
    },
    checkIsMobileOrTablet() {
      this.isMobileOrTablet = window.innerWidth <= this.mobileBreakpoint
    },
    onClick(e) {
      if (this.isMobileOrTablet) return

      if (e.target.closest('.nav')) return
      const isInteractive = (el) =>
          el && el.closest && el.closest('a, button, input, textarea, select, [role="button"], [role="link"]')
      if (isInteractive(e.target)) return

      const { clientY } = e
      const half = window.innerHeight / 2

      if (clientY < half && this.currentPage > 0) {
        this.currentPage--
      } else if (clientY >= half && this.currentPage < this.pages.length - 1) {
        this.currentPage++
      }
    },
    handleNav(index) {
      if (this.isMobileOrTablet) {
        const el = document.getElementById(`page-${index}`)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      } else {
        this.currentPage = index
      }
    },
    onTouchStart(e) {
      return
    },
    onTouchEnd(e) {
      return
    },
  },
}
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
  background: #000;
  color: #fff;
  font-family: 'Inter', sans-serif;
}

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}

.page {
  width: 100%;
  height: 100%;
}

.page-wrapper {
  width: 100%;
  height: auto;
}

.pages-container {
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 60px;
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

.is-mobile {
  cursor: default;
}

@media (min-width: 2560px) {
  .lang-btn {
    font-size: 1.8rem;
    padding: 8px 16px;
  }
  .nav button {
    font-size: 28px !important;
  }
}

@media (max-width: 768px) {
  html,
  body {
    overflow-y: auto;
    height: auto;
  }
  #app {
    height: auto;
    overflow-y: auto;
  }
  .page {
    height: auto;
  }
}
</style>
