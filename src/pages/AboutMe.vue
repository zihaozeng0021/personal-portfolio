<!-- src/pages/AboutMe.vue -->
<template>
  <section class="page about-me">
    <div class="content">
      <h1 class="title">{{ $t('about.title') }}</h1>

      <div class="intro">
        <div class="photo-container">
          <img src="/my-photo.jpg" alt="My Photo" class="profile-photo" />
        </div>
        <div class="description">
          <p>
            {{ $t('about.intro.p1') }}
          </p>
          <p>
            {{ $t('about.intro.p2') }}
          </p>
        </div>
      </div>

      <div class="skills">
        <div class="columns">
          <div class="column">
            <!-- Machine Learning -->
            <div class="skill-category">
              <h2>{{ $t('about.skills.machineLearning') }}</h2>
              <div
                  class="skill-item"
                  v-for="(skill, idx) in skillCategories[0].skills"
                  :key="`ml-${idx}`"
              >
                <span class="skill-label">{{ skill.name }}</span>
                <div class="bar">
                  <div
                      class="fill"
                      :style="{ width: animateSkills ? skill.percentage + '%' : '0%' }"
                  ></div>
                </div>
                <span class="skill-percent">{{ skill.percentage }}%</span>
              </div>
            </div>

            <!-- Popular Libraries & Frameworks -->
            <div class="skill-category">
              <h2>{{ $t('about.skills.popularLibraries') }}</h2>
              <div
                  class="skill-item"
                  v-for="(skill, idx) in skillCategories[2].skills"
                  :key="`lib-${idx}`"
              >
                <span class="skill-label">{{ skill.name }}</span>
                <div class="bar">
                  <div
                      class="fill"
                      :style="{ width: animateSkills ? skill.percentage + '%' : '0%' }"
                  ></div>
                </div>
                <span class="skill-percent">{{ skill.percentage }}%</span>
              </div>
            </div>
          </div>

          <!-- Column 2: Major Programming Languages & Others -->
          <div class="column">
            <!-- Major Programming Languages -->
            <div class="skill-category">
              <h2>{{ $t('about.skills.programmingLanguages') }}</h2>
              <div
                  class="skill-item"
                  v-for="(skill, idx) in skillCategories[1].skills"
                  :key="`lang-${idx}`"
              >
                <span class="skill-label">{{ skill.name }}</span>
                <div class="bar">
                  <div
                      class="fill"
                      :style="{ width: animateSkills ? skill.percentage + '%' : '0%' }"
                  ></div>
                </div>
                <span class="skill-percent">{{ skill.percentage }}%</span>
              </div>
            </div>

            <!-- Others -->
            <div class="skill-category">
              <h2>{{ $t('about.skills.others') }}</h2>
              <div
                  class="skill-item"
                  v-for="(skill, idx) in skillCategories[3].skills"
                  :key="`other-${idx}`"
              >
                <span class="skill-label">{{ skill.name }}</span>
                <div class="bar">
                  <div
                      class="fill"
                      :style="{ width: animateSkills ? skill.percentage + '%' : '0%' }"
                  ></div>
                </div>
                <span class="skill-percent">{{ skill.percentage }}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Note added at the bottom -->
      <div class="note">
        <p class="note-text">
          {{ $t('about.skills.note') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "AboutMe",
  data() {
    return {
      animateSkills: false,
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
            { name: "Java", percentage: 60 },
            { name: "HTML, CSS", percentage: 55 },
            { name: "JavaScript", percentage: 45 },
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
            { name: "Vue.js", percentage: 30 },
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
  mounted() {
    this.$nextTick(() => {
      setTimeout(() => {
        this.animateSkills = true;
      }, 100);
    });
  },
};
</script>

<style scoped>
.about-me {
  min-height: 100vh;
  width: 100%;
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 10vh;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
}

.content {
  max-width: 100%;
  width: 900px;
  box-sizing: border-box;
  padding: 0 1rem;
}

/* Title */
.title {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #ffffff;
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
  border: 4px solid #ffffff;
}

/* Description styling */
.description {
  flex: 1;
}

.description p {
  font-size: 1.125rem;
  margin: 0.5rem 0;
  color: #ffffff;
  line-height: 1.4;
}

/* Skills Section */
.skills {
  margin-top: 1rem;
}

/* Two-column layout with wrapping */
.columns {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

/* Each column takes roughly 48% but can shrink */
.column {
  flex: 1 1 48%;
  box-sizing: border-box;
  margin-bottom: 1.5rem;
  min-width: 250px;
}

/* Skill Category */
.skill-category {
  margin-bottom: 1rem;
}

.skill-category h2 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #ffffff;
}

/* Individual skill bar */
.skill-item {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  flex-wrap: wrap;
}

.skill-label {
  flex: 2 1 120px;
  font-size: 1rem;
  color: #ffffff;
  word-break: break-word;
}

.skill-percent {
  flex: 0 0 2.5rem;
  font-size: 0.9rem;
  color: #ffffff;
  text-align: right;
  margin-left: 0.5rem;
}

/* Progress bar container */
.bar {
  flex: 1 1 auto;
  background-color: #333333;
  border-radius: 4px;
  margin: 0 0.75rem;
  height: 10px;
  overflow: hidden;
  min-width: 50px;
}

/* Filled portion */
.fill {
  height: 100%;
  background-color: #ffffff;
  width: 0;
  border-radius: 4px;
  transition: width 1s ease-in-out;
}

/* Note at bottom */
.note {
  margin-top: 1.5rem;
  text-align: center;
}

.note-text {
  font-size: 0.9rem;
  color: #cccccc;
  font-style: italic;
}

@media (max-width: 800px) {
  .intro {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .columns {
    flex-direction: column;
    gap: 1.5rem;
  }
  .column {
    flex: 1 1 100%;
  }
}

@media (max-width: 500px) {
  .title {
    font-size: 2rem;
  }
  .intro {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }
  .profile-photo {
    width: 100px;
    height: 100px;
    border-width: 3px;
  }
  .description p {
    font-size: 1rem;
    margin: 0.4rem 0;
  }
  .skill-category h2 {
    font-size: 1.15rem;
    margin-bottom: 0.4rem;
  }
  .skill-item {
    margin-bottom: 0.4rem;
  }
  .skill-label {
    font-size: 0.95rem;
    flex: 2 1 100px;
  }
  .skill-percent {
    font-size: 0.8rem;
    flex: 0 0 2rem;
    margin-left: 0.3rem;
  }
  .bar {
    margin: 0 0.5rem;
    height: 8px;
    min-width: 40px;
  }
  .note-text {
    font-size: 0.8rem;
  }
}
</style>
