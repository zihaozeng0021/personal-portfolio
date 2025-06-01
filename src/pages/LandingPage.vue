< !-- src/pages/LandingPage.vue -->
<template>
  <section class="page landing-page">
    <MeltBall>
      <h1>aaaa</h1>
      <p>aaaa</p>
    </MeltBall>
  </section>
</template>

<script setup>
import MeltBall from '../components/MeltBall.vue'
</script>

<style scoped>
.landing-page {
  height: 100vh;
  width: 100vw;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.landing-page .melt-ball-container {
  background-color: inherit;
}




</style>


