<template>
  <div>
    <CommonScrollTop />
    <Header />
    <HomeAboutArea />

    <section class="hero-skills-area">
      <div class="container">
        <div class="row skills-grid">
          <div class="col-6 skill-item-wrapper"><div class="skill-item glow-yellow"><div class="skill-icon"><img src="https://raw.githubusercontent.com/vn-24k/myportfoliovnsilva/main/assets/images/python.png" /></div><h5>Python</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item glow-blue"><div class="skill-icon docker-logo"><img src="https://raw.githubusercontent.com/vn-24k/myportfoliovnsilva/main/assets/images/docker.png" /></div><h5>Docker</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item glow-orange"><div class="skill-icon"><img src="https://raw.githubusercontent.com/vn-24k/myportfoliovnsilva/main/assets/images/aws.png" /></div><h5>AWS</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item glow-white"><div class="skill-icon"><img src="https://raw.githubusercontent.com/vn-24k/myportfoliovnsilva/main/assets/images/nextjs.png" /></div><h5>Next.js</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item glow-green"><div class="skill-icon"><img src="https://raw.githubusercontent.com/vn-24k/myportfoliovnsilva/main/assets/images/node.png" /></div><h5>Node.js</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item glow-lightblue"><div class="skill-icon"><img src="https://raw.githubusercontent.com/vn-24k/myportfoliovnsilva/main/assets/images/tailwind.png" /></div><h5>Tailwind CSS</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item glow-cyan"><div class="skill-icon"><img src="https://raw.githubusercontent.com/vn-24k/myportfoliovnsilva/main/assets/images/react.png" /></div><h5>React</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item glow-brightgreen"><div class="skill-icon"><img src="https://raw.githubusercontent.com/vn-24k/myportfoliovnsilva/main/assets/images/supabase.png" /></div><h5>Supabase</h5></div></div>
        </div>
      </div>
    </section>

    <HomePortfolioArea />
    <HomeCtaArea />
    <Footer />
  </div>
</template>

<style scoped>
.hero-skills-area { padding: 40px 0; background-color: #0f1114; }
.skills-grid { display: flex; flex-wrap: wrap; justify-content: center; }
.skill-item-wrapper { padding: 10px; width: 50%; }
.skill-item { 
  background: #1a1d21; border-radius: 15px; padding: 25px; text-align: center; 
  border: 2px solid #2d3436; transition: 0.3s; height: 100%;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
}
.skill-icon img { max-width: 50px; margin-bottom: 15px; }
/* Ajuste específico para a baleia do Docker ficar maior */
.docker-logo img { max-width: 65px !important; } 
h5 { color: #fff; font-size: 15px; margin: 0; font-weight: 600; }
.glow-yellow:hover { border-color: #ffdf5e; box-shadow: 0 0 15px #ffdf5e; }
.glow-orange:hover { border-color: #ff9900; box-shadow: 0 0 15px #ff9900; }
.glow-blue:hover { border-color: #2496ed; box-shadow: 0 0 15px #2496ed; }
.glow-white:hover { border-color: #ffffff; box-shadow: 0 0 15px #ffffff; }
.glow-green:hover { border-color: #68a063; box-shadow: 0 0 15px #68a063; }
.glow-cyan:hover { border-color: #61dafb; box-shadow: 0 0 15px #61dafb; }
.glow-lightblue:hover { border-color: #38bdf8; box-shadow: 0 0 15px #38bdf8; }
.glow-brightgreen:hover { border-color: #3ecf8e; box-shadow: 0 0 15px #3ecf8e; }
</style>
