<!-- src/components/CustomCursor.vue -->
<template>
  <div
      ref="cursor"
      class="custom-cursor"
      :class="direction"
  ></div>
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
  beforeUnmount() {
    document.body.style.cursor = ''
    window.removeEventListener('mousemove', this.handleMove)
  },
  methods: {
    isInteractive(el) {
      return el && el.closest?.(
          'a, button, input, textarea, select, option, [role="button"], [role="link"]'
      )
    },
    handleMove(e) {
      const cursorEl = this.$refs.cursor
      if (!cursorEl) {
        return
      }

      const { clientX, clientY } = e
      this.direction =
          clientY < window.innerHeight / 2 ? 'up' : 'down'

      cursorEl.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`

      if (this.isInteractive(e.target)) {
        cursorEl.style.opacity = '0'
        document.body.style.cursor = ''
      } else {
        cursorEl.style.opacity = '1'
        document.body.style.cursor = 'none'
      }
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
  z-index: 1;
  transition: transform 0.01s linear,
  opacity   0.1s ease;
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
