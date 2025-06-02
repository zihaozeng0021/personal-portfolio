< !-- src/pages/PersonalProjects.vue -->
<template>
  <section class="projects">
    <div class="projects-container">
      <h1 class="page-title">Personal Projects (To be continued)</h1>
      <div class="projects-grid">
        <!-- Project 1 -->
        <div class="project-item">
          <h2 class="project-title">Project Name 1</h2>
          <p class="project-description">
            This is a placeholder description for Project 1. Briefly describe what this project does or its purpose.
          </p>
          <div class="buttons">
            <button class="btn" @click="handleDemoClick">Demo</button>
            <button class="btn" @click="handleCodeClick">Code</button>
          </div>
        </div>

        <!-- Project 2 -->
        <div class="project-item">
          <h2 class="project-title">Project Name 2</h2>
          <p class="project-description">
            This is a placeholder description for Project 2. Briefly describe what this project does or its purpose.
          </p>
          <div class="buttons">
            <button class="btn" @click="handleDemoClick">Demo</button>
            <button class="btn" @click="handleCodeClick">Code</button>
          </div>
        </div>

        <!-- Project 3 -->
        <div class="project-item">
          <h2 class="project-title">Project Name 3</h2>
          <p class="project-description">
            This is a placeholder description for Project 3. Briefly describe what this project does or its purpose.
          </p>
          <div class="buttons">
            <button class="btn" @click="handleDemoClick">Demo</button>
            <button class="btn" @click="handleCodeClick">Code</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "PersonalProjects",
  methods: {
    handleDemoClick() {
      alert("This feature is not yet implemented.");
    },
    handleCodeClick() {
      alert("This feature is not yet implemented.");
    }
  }
};
</script>

<style scoped>
.projects {
  width: 100vw;
  background-color: #000000;
  color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  box-sizing: border-box;
}

.projects-container {
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
}

.page-title {
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 600;
  text-align: center;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.project-item {
  background-color: #111111;
  padding: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
}

.project-item:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 16px rgba(255, 255, 255, 0.1);
  background-color: #1a1a1a;
}

.project-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  font-weight: 500;
}

.project-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  opacity: 0.85;
  flex-grow: 1;
}

.buttons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.btn {
  padding: 0.5rem 1.2rem;
  font-size: 0.9rem;
  color: #ffffff;
  background: transparent;
  border: 1px solid #ffffff;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s ease, color 0.2s ease;
}

.btn:hover {
  background: #ffffff;
  color: #000000;
}

/* Responsive: stack columns on narrower screens */
@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
