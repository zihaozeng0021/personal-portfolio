<!-- src/pages/WorkExperience.vue -->
<template>
  <section class="work-experience">
    <div class="container">
      <h1 class="title">{{ $t('experience.title') }}</h1>
      <div class="divider"></div>
      <p class="subtitle">
        {{ $t('experience.description') }}
      </p>
    </div>
  </section>
</template>

<style scoped>
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.work-experience {
  height: 100vh;
  width: 100vw;
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.container {
  text-align: center;
  max-width: 600px;
  padding: 0 16px;
  animation: fadeInUp 1s ease-out both;
}

.title {
  color: #fff;
  font-size: 2.5rem;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 8px;
  position: relative;
  text-transform: uppercase;
}

.divider {
  width: 80px;
  height: 2px;
  background-color: #fff;
  margin: 0 auto 24px;
  border-radius: 2px;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.3s both;
}

.subtitle {
  color: #ddd;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.5px;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.subtitle:hover {
  color: #fff;
  transition: color 0.3s ease;
}

</style>

<script setup>
</script>
