<!-- src/components/MeltBall.vue -->
<template>
  <div class="melt-ball-container">
    <div class="content">
      <div class="text-block">
        <div class="line1">
          <span class="font1">Hi, I AM </span><span class="font1-alt">ZIHAO ZENG</span>
        </div>

        <div class="line2">
          <span class="prefix">Hi, I AM </span><span class="font2">A SOFTWARE ENGINEER</span>
        </div>
      </div>
    </div>

    <div class="melt-ball"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.melt-ball-container {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: inherit;
  overflow: hidden;
}

.content {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  white-space: nowrap;
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
  font-size: 5rem;
  font-weight: 700;
  line-height: 1;
  color: #fff;
}

.prefix {
  font-family: Arial, sans-serif;
  font-size: 3rem;
  font-weight: 700;
  visibility: hidden;
}

.melt-ball {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 60vh;
  height: 60vh;
  border-radius: 50%;

  background-color: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 2;

  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
}
</style>
