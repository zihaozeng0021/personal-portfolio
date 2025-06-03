<!-- src/components/CenterBall.vue -->
<template>
  <div
      class="center-ball-container"
      ref="container"
      @mousemove="handleMouseMove"
      @mouseleave="resetBall"
  >
    <div class="content">
      <slot></slot>
    </div>

    <div class="center-ball"></div>

    <div
        class="smaller-ball"
        :style="smallerBallStyle"
    ></div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const container = ref(null)

const offsetX = ref(0)
const offsetY = ref(0)
const smallerBallSize = ref(0)

const mainBallDiameter = ref(0)
onMounted(() => {
  mainBallDiameter.value = window.innerHeight * 0.6
  smallerBallSize.value = mainBallDiameter.value * 0.3
  offsetX.value = 0
  offsetY.value = 0
})

function handleMouseMove(event) {
  if (!container.value) return

  const rect = container.value.getBoundingClientRect()
  const centerX = rect.left + rect.width / 2
  const centerY = rect.top + rect.height / 2

  const dx = event.clientX - centerX
  const dy = event.clientY - centerY

  const distance = Math.hypot(dx, dy) || 1

  const mainRadiusPx = mainBallDiameter.value / 2
  const maxRadius = Math.min(rect.width, rect.height) / 2
  const norm = Math.min(distance / maxRadius, 1)

  smallerBallSize.value = mainBallDiameter.value * 0.3

  const c = 0.7
  const offsetDistance = mainRadiusPx * norm * c

  const radians = Math.atan2(dy, dx)
  offsetX.value = Math.cos(radians) * offsetDistance
  offsetY.value = Math.sin(radians) * offsetDistance
}

function resetBall() {
  offsetX.value = 0
  offsetY.value = 0
}

const smallerBallStyle = computed(() => {
  return {
    width: `${smallerBallSize.value}px`,
    height: `${smallerBallSize.value}px`,
    transform: `translate(-50%, -50%) translate(${offsetX.value}px, ${offsetY.value}px)`,
  }
})
</script>

<style scoped>
.center-ball-container {
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

.center-ball {
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

.smaller-ball {
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50%;
  background-color: #fff;
  mix-blend-mode: difference;
  pointer-events: none;
  z-index: 3;
  filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
  transition: transform 0.1s ease-out;
}
</style>
