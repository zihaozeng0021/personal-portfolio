<!-- src/App.vue -->
<template>
  <div id="app" @click="onClick">
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
    isInteractive(el) {
      return el && el.closest?.(
          'a, button, input, textarea, select, [role="button"], [role="link"]'
      )
    },
    onClick(e) {
      if (e.target.closest('.nav')) return

      if (this.isInteractive(e.target)) return

      const { clientY } = e
      const half = window.innerHeight / 2
      if (clientY < half && this.currentPage > 0) {
        this.currentPage--
      } else if (clientY >= half && this.currentPage < this.pages.length - 1) {
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
</style>
