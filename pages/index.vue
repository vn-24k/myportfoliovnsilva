<template>
  <div>
    <CommonScrollTop />
    <Header />
    <HomeAboutArea />

    <section class="hero-skills-area">
      <div class="container">
        <div class="row skills-grid">
          <div class="col-lg-3 col-md-4 col-sm-6 skill-item-wrapper">
            <div class="skill-item glow-yellow">
              <div class="skill-icon"><img src="~/assets/images/python.png" alt="Python" /></div>
              <div class="skill-content"><h5>Python</h5><p>(IA & Automação)</p></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 skill-item-wrapper">
            <div class="skill-item glow-orange">
              <div class="skill-icon"><img src="~/assets/images/aws.png" alt="AWS" /></div>
              <div class="skill-content"><h5>AWS / Cloud</h5></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 skill-item-wrapper">
            <div class="skill-item glow-blue">
              <div class="skill-icon"><img src="~/assets/images/docker.png" alt="Docker" /></div>
              <div class="skill-content"><h5>Docker</h5></div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 skill-item-wrapper">
            <div class="skill-item glow-cyan">
              <div class="skill-icon"><img src="~/assets/images/react.png" alt="ReactJS" /></div>
              <div class="skill-content"><h5>ReactJS</h5></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <HomePortfolioArea />
    <HomeCtaArea />
    <Footer />
  </div>
</template>

<style scoped>
.hero-skills-area { padding: 80px 0; background-color: #0f1114; }
.skills-grid { justify-content: center; display: flex; flex-wrap: wrap; gap: 20px; }
.skill-item-wrapper { width: 220px; }
.skill-item { 
  background: #1a1d21; border-radius: 15px; padding: 30px; text-align: center; 
  border: 2px solid transparent; transition: 0.4s; height: 100%;
}
.skill-item:hover { transform: translateY(-10px); }
.skill-icon img { max-width: 60px; margin-bottom: 15px; }
h5 { color: white; margin-bottom: 5px; }
p { color: #a0a0a0; font-size: 13px; }
.glow-yellow:hover { border-color: #ffdf5e; box-shadow: 0 0 15px rgba(255, 223, 94, 0.4); }
.glow-orange:hover { border-color: #ff9900; box-shadow: 0 0 15px rgba(255, 153, 0, 0.4); }
.glow-blue:hover { border-color: #2496ed; box-shadow: 0 0 15px rgba(36, 150, 237, 0.4); }
.glow-cyan:hover { border-color: #61dafb; box-shadow: 0 0 15px rgba(97, 218, 251, 0.4); }
</style>
