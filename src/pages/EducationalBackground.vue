<!-- src/pages/EducationalBackground.vue -->
<template>
  <section class="education">
    <h1>Educational Background</h1>
    <div class="timeline">
      <!-- Entry 1: Into Manchester -->
      <transition name="fade">
        <div v-if="showFirst" class="timeline-item">
          <div class="timeline-content">
            <h2>Into Manchester, Manchester, England</h2>
            <span class="date">January 2022 – July 2022</span>
            <h3>A-level</h3>
            <p><strong>Course Units:</strong> Physics, Mathematics, Further Maths</p>
            <p>
              <strong>Grade:</strong> All A* in my A-level courses, which took me only 7 months to achieve, placing me in the
              <a
                  href="https://www.gov.uk/government/publications/infographic-a-level-results-2022/infographics-for-a-level-results-2022-accessible"
                  target="_blank"
                  rel="noopener"
              >
                top 5%
              </a>
              .
            </p>
          </div>
        </div>
      </transition>

      <!-- Entry 2: University of Manchester -->
      <transition name="fade">
        <div v-if="showSecond" class="timeline-item">
          <div class="timeline-content">
            <h2>University of Manchester, Manchester, England</h2>
            <span class="date">September 2022 – July 2025</span>
            <h3>BSc (Hons) Computer Science</h3>
            <p><strong>Grade:</strong> First Class Honors</p>

            <p><strong>Course Units above First-Class level:</strong></p>
            <ul>
              <li>
                <strong>First year:</strong> First Year Team Project, Mathematical Techniques for Computer Science, Data Science, Introduction to Programming
              </li>
              <li>
                <strong>Second year:</strong> Logic and Modelling, Machine Learning, Introduction to Visual Computing, Introduction to Finance
              </li>
              <li>
                <strong>Third year:</strong> Third Year Project, Advanced Computer Graphics, Organisations and Employment, Mathematical Topics in Machine Learning, Mathematical Systems &amp; Computation, Computer Vision, Managing Finance for Computer Scientists
              </li>
            </ul>

            <p class="note">
              <strong>Note:</strong> I started my undergraduate journey with almost 0 knowledge of computer science—I didn’t even know how to print “Hello, World.” After three years of hard work, I graduated with a First-Class Honours degree and a strong theoretical foundation in computer science.
            </p>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      showFirst: false,
      showSecond: false,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showFirst = true;
    }, 300);

    setTimeout(() => {
      this.showSecond = true;
    }, 600);
  },
};
</script>

<style scoped>
.education {
  background-color: #000;
  color: #fff;
  min-height: 100vh;
  width: 100vw;
  padding: 2rem 1rem;
  box-sizing: border-box;
}

.education h1 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 0;
  letter-spacing: 1px;
}

/* Timeline Container */
.timeline {
  position: relative;
  margin: 0 auto;
  height: 450px;
  max-width: 1000px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 3rem;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 2px;
  background: #444;
  transform: translateY(-50%);
}

.timeline-item {
  position: relative;
  flex: 0 0 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.timeline-item::before {
  content: "";
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #000;
  border: 3px solid #0bc9cd;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.timeline-content {
  background: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  position: absolute;
  left: 50%;
  width: 500px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
}

.timeline-item:nth-child(even) .timeline-content {
  width: 900px;
}

.timeline-item:nth-child(odd) .timeline-content {
  top: 50%;
  transform: translate(-50%, -100%) translateY(-10px);
}

.timeline-item:nth-child(even) .timeline-content {
  top: 50%;
  transform: translate(-50%, 10px);
}

.timeline-content h2 {
  margin: 0 0 0.5rem 0;
  font-size: 1.4rem;
  color: #0bc9cd;
}

.timeline-content .date {
  display: block;
  font-size: 0.9rem;
  color: #aaa;
  margin-bottom: 1rem;
}

.timeline-content h3 {
  margin-top: 0.5rem;
  font-size: 1.1rem;
  color: #fff;
}

.timeline-content p,
.timeline-content ul {
  margin: 0.75rem 0;
  line-height: 1.6;
  font-size: 1rem;
  color: #ddd;
}

.timeline-content ul {
  padding-left: 1.2rem;
}

.timeline-content ul li {
  margin-bottom: 0.5rem;
}

.timeline-content a {
  color: #0bc9cd;
  text-decoration: underline;
}

.timeline-content a:hover {
  color: #33e6dc;
}

.timeline-content .note {
  margin-top: 1rem;
  font-style: italic;
  color: #ccc;
}

/* Fade-in 过渡动画 */
.fade-enter-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@media screen and (max-width: 768px) {
  .timeline {
    flex-direction: column;
    height: auto;
    padding: 4rem 0;
    margin-top: 2rem;
  }

  .timeline::before {
    top: auto;
    bottom: auto;
    height: 2px;
    width: 100%;
    transform: none;
  }

  .timeline-item {
    width: 100%;
    margin-bottom: 4rem;
    justify-content: flex-start;
  }

  .timeline-item::before {
    top: 0;
    left: 8px;
    transform: translateY(-50%);
  }

  .timeline-content {
    position: relative;
    left: 0;
    top: 0;
    transform: none;
    width: calc(100% - 40px);
    margin-left: 40px;
  }

  .timeline-item:nth-child(odd) .timeline-content,
  .timeline-item:nth-child(even) .timeline-content {
    transform: none;
  }

  .timeline-content {
    width: calc(100% - 40px) !important;
  }
}
</style>
