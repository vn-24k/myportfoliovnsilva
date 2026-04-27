<template>
<div>
<CommonScrollTop />
<Header />
<HomeAboutArea />
<section class="hero-skills-area">
<div class="container">
<div class="row skills-grid">
<div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" /></div><h5>Python</h5></div></div>
<div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain.svg" /></div><h5>Docker</h5></div></div>
<div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" /></div><h5>AWS</h5></div></div>
<div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" /></div><h5>Next.js</h5></div></div>
<div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" /></div><h5>Node.js</h5></div></div>
<div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" /></div><h5>Tailwind CSS</h5></div></div>
<div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" /></div><h5>React</h5></div></div>
<div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg" /></div><h5>Supabase</h5></div></div>
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
.skill-item-wrapper { padding: 10px; width: 50%; max-width: 250px; }
.skill-item { background: #1a1d21; border-radius: 15px; padding: 25px; text-align: center; border: 2px solid #2d3436; transition: 0.3s; height: 140px; display: flex; flex-direction: column; align-items: center; justify-content: center; }
.skill-icon img { max-width: 50px; margin-bottom: 15px; }
h5 { color: #fff; font-size: 15px; margin: 0; font-weight: 600; }
</style>
