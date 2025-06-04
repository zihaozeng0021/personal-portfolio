<!-- src/components/NavigationBar.vue -->
<template>
  <nav class="nav">
    <!-- If not mobile/tablet, show the normal horizontal list -->
    <ul v-if="!isMobile">
      <li v-for="(item, i) in navItems" :key="i">
        <button
            @click.prevent="navigate(i)"
            :class="{ active: currentPage === i }"
        >
          {{ $t(item) }}
        </button>
      </li>
    </ul>

    <!-- If mobile/tablet, show a hamburger that toggles the dropdown -->
    <div v-else class="hamburger-menu">
      <button class="hamburger-btn" @click="toggleDropdown">
        <!-- simple three-bar icon -->
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </button>
      <div v-if="dropdownOpen" class="dropdown">
        <ul>
          <li v-for="(item, i) in navItems" :key="i">
            <button
                @click.prevent="navigateAndClose(i)"
                :class="{ active: currentPage === i }"
            >
              {{ $t(item) }}
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    isMobile: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['update:page'],
  data() {
    return {
      navItems: [
        'nav.home',
        'nav.about',
        'nav.education',
        'nav.projects',
        'nav.experience',
        'nav.contact',
      ],
      dropdownOpen: false,
    }
  },
  methods: {
    navigate(index) {
      this.$emit('update:page', index)
    },
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    navigateAndClose(index) {
      this.$emit('update:page', index)
      this.dropdownOpen = false
    },
  },
}
</script>

<style scoped>
.nav {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;
}

/* ========== Desktop/List styles ========== */
ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 18px;
}

button {
  background: transparent;
  border: none;
  color: #ffffff;
  font-size: 14px; /* will get doubled via App.vue @media(>=2560px) */
  font-family: inherit;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
}

button:hover {
  opacity: 0.75;
  transform: translateY(-1px);
}

button.active {
  opacity: 0.5;
}

/* ========== Mobile/Hamburger styles (<768px) ========== */
.hamburger-menu {
  position: relative;
}

.hamburger-btn {
  width: 32px;
  height: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
}

.bar {
  display: block;
  width: 100%;
  height: 4px;
  background-color: #fff;
  border-radius: 2px;
}

/* Dropdown container */
.dropdown {
  position: absolute;
  top: 32px; /* drop down below the hamburger button */
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid #444;
  border-radius: 4px;
  padding: 8px 0;
  min-width: 160px;
}

/* Dropdown list items */
.dropdown ul {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 8px;
}

.dropdown button {
  width: 100%;
  text-align: left;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 16px;
  padding: 8px 0;
}

.dropdown button:hover {
  background-color: #555;
}

.dropdown button.active {
  background-color: #333;
}
</style>
