<!-- src/pages/AboutMe.vue -->
<template>
  <transition name="fade" appear>
    <section class="page about-me">
      <div class="content">
        <h1 class="title">About Me</h1>

        <div class="intro">
          <div class="photo-container">
            <img src="/my-photo.jpg" alt="My Photo" class="profile-photo" />
          </div>
          <div class="description">
            <p>Computer Science student specializing in machine learning, with a focus on time-series forecasting and computer vision.</p>
            <p>A self-motivated lifelong learner who loves exploring and applying cutting-edge technologies and knowledge.</p>
          </div>
        </div>

        <div class="skills">
          <div class="columns">
            <div class="column">
              <!-- Machine Learning -->
              <div class="skill-category">
                <h2>Machine Learning</h2>
                <div
                    class="skill-item"
                    v-for="(skill, idx) in skillCategories[0].skills"
                    :key="`ml-${idx}`"
                >
                  <span class="skill-label">{{ skill.name }}</span>
                  <div class="bar">
                    <div class="fill" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                  <span class="skill-percent">{{ skill.percentage }}%</span>
                </div>
              </div>

              <!-- Popular Libraries & Frameworks -->
              <div class="skill-category">
                <h2>Popular Libraries &amp; Frameworks</h2>
                <div
                    class="skill-item"
                    v-for="(skill, idx) in skillCategories[2].skills"
                    :key="`lib-${idx}`"
                >
                  <span class="skill-label">{{ skill.name }}</span>
                  <div class="bar">
                    <div class="fill" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                  <span class="skill-percent">{{ skill.percentage }}%</span>
                </div>
              </div>
            </div>

            <!-- Column 2: Major Programming Languages & Others -->
            <div class="column">
              <!-- Major Programming Languages -->
              <div class="skill-category">
                <h2>Major Programming Languages</h2>
                <div
                    class="skill-item"
                    v-for="(skill, idx) in skillCategories[1].skills"
                    :key="`lang-${idx}`"
                >
                  <span class="skill-label">{{ skill.name }}</span>
                  <div class="bar">
                    <div class="fill" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                  <span class="skill-percent">{{ skill.percentage }}%</span>
                </div>
              </div>

              <!-- Others -->
              <div class="skill-category">
                <h2>Others</h2>
                <div
                    class="skill-item"
                    v-for="(skill, idx) in skillCategories[3].skills"
                    :key="`other-${idx}`"
                >
                  <span class="skill-label">{{ skill.name }}</span>
                  <div class="bar">
                    <div class="fill" :style="{ width: skill.percentage + '%' }"></div>
                  </div>
                  <span class="skill-percent">{{ skill.percentage }}%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </transition>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      skillCategories: [
        {
          name: "Machine Learning",
          skills: [
            { name: "Time Series Forecasting", percentage: 70 },
            { name: "Computer Vision", percentage: 50 },
            { name: "Natural Language Processing", percentage: 30 },
          ],
        },
        {
          name: "Major Programming Languages",
          skills: [
            { name: "Python", percentage: 80 },
            { name: "LaTeX", percentage: 70 },
            { name: "HTML, CSS", percentage: 65 },
            { name: "Java", percentage: 60 },
            { name: "JavaScript", percentage: 55 },
            { name: "SQL", percentage: 40 },
            { name: "C/C++", percentage: 40 },
          ],
        },
        {
          name: "Popular Libraries & Frameworks",
          skills: [
            { name: "NumPy", percentage: 80 },
            { name: "Pandas, Matplotlib", percentage: 70 },
            { name: "TensorFlow, Keras", percentage: 60 },
            { name: "Scikit-Learn, PyTorch", percentage: 50 },
            { name: "Vue.js", percentage: 40 },
            { name: "Optuna", percentage: 30 },
            { name: "Spring", percentage: 30 },
          ],
        },
        {
          name: "Others",
          skills: [
            { name: "Mathematics for CS", percentage: 80 },
            { name: "Academic Writing", percentage: 70 },
            { name: "Communication", percentage: 50 },
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
.about-me {
  height: 100vh;
  width: 100vw;
  background-color: #c8e6c9; /* 绿色调 */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
}

.content {
  max-width: 900px;
  width: 100%;
}

/* Title */
.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #2e7d32;
}

/* Introduction: avatar left, text right */
.intro {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.photo-container {
  flex-shrink: 0;
}

.profile-photo {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center top;
  border: 4px solid #388e3c;
}

/* Description styling */
.description {
  flex: 1;
}

.description p {
  font-size: 1.125rem;
  margin: 0.5rem 0;
  color: #1b5e20;
}

/* Skills Section */
.skills {
  margin-top: 1rem;
}

/* Two-column layout */
.columns {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
}

/* Each column takes equal width */
.column {
  flex: 1;
}

/* Skill Category */
.skill-category {
  margin-bottom: 0rem;
}

.skill-category h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #33691e;
}

/* Individual skill bar */
.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-label {
  flex: 2;
  font-size: 1rem;
  color: #2e7d32;
}

.skill-percent {
  flex: 0 0 2rem;
  font-size: 0.9rem;
  color: #2e7d32;
  text-align: right;
}

/* Progress bar container */
.bar {
  flex: 5;
  background-color: #e0e0e0;
  border-radius: 4px;
  margin: 0 0.75rem;
  height: 10px;
  overflow: hidden;
}

/* Filled portion */
.fill {
  height: 100%;
  background-color: #388e3c;
  width: 0;
  border-radius: 4px;
  transition: width 1.2s ease-in-out;
}

/* Fade‐in transition */
.fade-enter-active {
  animation: fadeIn 0.8s ease-out;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 800px) {
  .intro {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .columns {
    flex-direction: column;
  }
  .column {
    margin-bottom: 1.5rem;
  }
}
</style>
