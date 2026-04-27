<template>
  <div>
    <CommonScrollTop />
    <Header />
    <HomeAboutArea />

    <section class="hero-skills-area">
      <div class="container">
        <div class="row skills-grid">
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /><h5>Python</h5></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" /><h5>Docker</h5></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" /></div><h5>AWS</h5></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" /></div><h5>Next.js</h5></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /></div><h5>Node.js</h5></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /></div><h5>Tailwind CSS</h5></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /></div><h5>React</h5></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" /></div><h5>Supabase</h5></div></div>
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
.skill-item-wrapper { padding: 10px; width: 50%; max-width: 200px; }
.skill-item { 
  background: #1a1d21; border-radius: 15px; padding: 20px; 
  text-align: center; border: 2px solid #2d3436; 
  height: 140px; display: flex; flex-direction: column; 
  align-items: center; justify-content: center; transition: 0.3s;
}
.skill-item:hover { border-color: #38bdf8; box-shadow: 0 0 15px rgba(56, 189, 248, 0.3); }
.skill-item img { max-width: 45px; margin-bottom: 10px; }
h5 { color: #fff; font-size: 14px; margin-top: 10px; font-weight: 600; }
</style>
