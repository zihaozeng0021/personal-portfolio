<!-- src/pages/ContactMe.vue -->
<template>
  <section class="contact-page">
    <div class="contact-container">
      <h1 class="thank-you">Thank You for Visiting</h1>
      <div class="divider"></div>
      <p class="invite">If you’re interested in my work, feel free to reach out:</p>
      <div class="links">
        <a
            class="link-button"
            href="https://github.com/zihaozeng0021"
            target="_blank"
            rel="noopener noreferrer"
        >
          Visit GitHub
        </a>
        <a class="link-button" href="mailto:zihaozeng0021@gmail.com">
          Send Email
        </a>
      </div>
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

.contact-page {
  height: 100vh;
  width: 100vw;
  background-color: #000;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.contact-container {
  text-align: center;
  max-width: 600px;
  padding: 0 16px;
  animation: fadeInUp 1s ease-out both;
}

.thank-you {
  font-size: 3rem;
  margin-bottom: 8px;
  font-weight: bold;
  text-transform: uppercase;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.0s both;
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

.invite {
  color: #ddd;
  font-size: 1.25rem;
  line-height: 1.6;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.6s both;
}

.links {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  opacity: 0;
  animation: fadeInUp 1s ease-out 0.9s both;
}

.link-button {
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 2px solid #fff;
  border-radius: 0.5rem;
  font-size: 1rem;
  text-decoration: none;
  color: #fff;
  transition: background-color 0.2s ease, color 0.2s ease;
}

.link-button:hover {
  background-color: #fff;
  color: #000;
}

@media (max-width: 480px) {
  .thank-you {
    font-size: 2.25rem;
  }
  .invite {
    font-size: 1rem;
  }
  .link-button {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
}
</style>

<script setup>
</script>
