<!-- src/pages/LandingPage.vue -->
<template>
  <section class="page landing-page">
    <MeltBall>
      <div class="text-block">
        <div class="line1">
          <span class="font1">Hi, I AM </span>
          <span class="font1-alt">ZIHAO ZENG</span>
        </div>

        <div class="line2">
          <span class="prefix">Hi, I AM </span>
          <span class="font2">WELCOME TO MY PORTFOLIO</span>
        </div>
      </div>
    </MeltBall>
  </section>
</template>

<script setup>
import MeltBall from '../components/CenterBall.vue'
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

.text-block {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.line1 {
  font-family: Arial, sans-serif;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 2rem;
  color: #fff;
}

.font1-alt {
  font-family: Arial Black, sans-serif;
  font-size: 5rem;
  font-weight: 800;
  color: #fff;
}

.line2 {
  font-family: Georgia, serif;
  font-size: 3rem;
  font-weight: 700;
  line-height: 1;
  color: #fff;
}

.prefix {
  font-family: Arial, sans-serif;
  font-size: 5rem;
  font-weight: 700;
  visibility: hidden;
}
</style>
