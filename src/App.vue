<template>
  <div id="app" @click="onClick">
    <CustomCursor />
    <component :is="pages[currentPage]" class="page" />
  </div>
</template>

<script>
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
        'ContactMe'
      ],
      currentPage: 0
    }
  },
  methods: {
    onClick(e) {
      const { clientY } = e
      const half = window.innerHeight / 2
      if (clientY < half) {
        if (this.currentPage > 0) this.currentPage--
      } else {
        if (this.currentPage < this.pages.length - 1) this.currentPage++
      }
    }
  }
}
</script>

<style>
html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.page {
  width: 100%;
  height: 100%;
}
</style>
