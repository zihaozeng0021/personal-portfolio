<template>
  <div id="app">
    <LandingPage />
    <AboutMe />
    <EducationalBackground />
    <PersonalProjects />
    <TheEnd />
  </div>
</template>

<script>
import LandingPage from './pages/LandingPage.vue'
import AboutMe from './pages/AboutMe.vue'
import EducationalBackground from './pages/EducationalBackground.vue'
import PersonalProjects from './pages/PersonalProjects.vue'
import TheEnd from './pages/TheEnd.vue'

export default {
  name: 'App',
  components: {
    LandingPage,
    AboutMe,
    EducationalBackground,
    PersonalProjects,
    TheEnd
  }
}
</script>

<style>
body, html, #app {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>
