<!-- src/pages/LandingPage.vue -->
<template>
  <section class="page landing-page">
    <MeltBall>
      <div class="text-block">
        <div class="line1">
          <span class="font1">{{ $t('landing.line1.prefix') }} </span>
          <span class="font1-alt">{{ $t('landing.line1.name') }}</span>
        </div>

        <div class="line2">
          <span class="prefix">{{ $t('landing.line2.prefix') }} </span>
          <span class="font2">{{ $t('landing.line2.welcome') }}</span>
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

.landing-page .center-ball-container {
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

/* ========== Smaller screens (≤ 1200px) ========== */
@media (max-width: 1200px) {
  .line1 {
    font-size: 1.4rem;
    margin-bottom: 1.2rem;
  }
  .font1-alt {
    font-size: 1.6rem;
  }
  .line2 {
    font-size: 1.0rem;
  }
  .prefix {
    font-size: 1.1rem;
  }
}

/* ========== Ultra-wide screens (≥ 2560px) ========== */
@media (min-width: 2560px) {
  .line1 {
    font-size: 7rem;
    margin-bottom: 3rem;
  }
  .font1-alt {
    font-size: 8rem;
  }
  .line2 {
    font-size: 6rem;
  }
  .prefix {
    font-size: 9rem;
  }
}
</style>
