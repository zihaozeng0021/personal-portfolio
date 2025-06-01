<!-- src/components/CustomCursor.vue -->
<template>
  <div ref="cursor" class="custom-cursor" :class="direction"></div>
</template>

<script>
export default {
  name: 'CustomCursor',
  data() {
    return {
      direction: 'down'
    }
  },
  mounted() {
    document.body.style.cursor = 'none'
    window.addEventListener('mousemove', this.handleMove)
  },
  beforeDestroy() {
    document.body.style.cursor = ''
    window.removeEventListener('mousemove', this.handleMove)
  },
  methods: {
    handleMove(e) {
      const { clientX, clientY } = e
      const half = window.innerHeight / 2
      this.direction = clientY < half ? 'up' : 'down'
      this.$refs.cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`
    }
  }
}
</script>

<style scoped>
.custom-cursor {
  position: fixed;
  width: 0;
  height: 0;
  pointer-events: none;
  transition: transform 0.01s linear;
  z-index: 1;
}
.custom-cursor.down {
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-top: 20px solid white;
}
.custom-cursor.up {
  border-left: 12px solid transparent;
  border-right: 12px solid transparent;
  border-bottom: 20px solid white;
}
</style>
