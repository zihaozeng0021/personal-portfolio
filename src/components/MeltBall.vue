<!-- src/components/MeltBall.vue -->
<template>
  <div class="melt-ball-container">
    <div class="content">
      <slot></slot>
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
