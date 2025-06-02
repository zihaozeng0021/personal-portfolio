<template>
  <nav class="nav">
    <ul>
      <li v-for="(item, i) in navItems" :key="i">
        <button
            @click.prevent="navigate(i)"
            :class="{ active: currentPage === i }"
        >
          {{ item }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",
  props: {

    currentPage: {
      type: Number,
      required: true,
    },
  },
  emits: ["update:page"],
  data() {
    return {
      navItems: [
        "Home",
        "About",
        "Education",
        "Projects",
        "Experience",
        "Contact",
      ],
    };
  },
  methods: {
    navigate(index) {
      this.$emit("update:page", index);
    },
  },
};
</script>

<style scoped>
.nav {
  position: fixed;
  top: 24px;
  right: 24px;
  z-index: 1000;
}

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
  font-size: 14px;
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
</style>
