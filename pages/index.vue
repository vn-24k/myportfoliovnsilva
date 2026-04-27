<template>
  <div>
    <CommonScrollTop />
    <Header />
    <HomeAboutArea />

    <section class="hero-skills-area">
      <div class="container">
        <div class="row skills-grid">
          <div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="~/assets/images/python.png" /></div><h5>Python</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="~/assets/images/aws.png" /></div><h5>AWS</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="~/assets/images/docker.png" /></div><h5>Docker</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="~/assets/images/nextjs.png" /></div><h5>Next.js</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="~/assets/images/node.png" /></div><h5>Node.js</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="~/assets/images/tailwind.png" /></div><h5>Tailwind CSS</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="~/assets/images/react.png" /></div><h5>React</h5></div></div>
          <div class="col-6 skill-item-wrapper"><div class="skill-item"><div class="skill-icon"><img src="~/assets/images/supabase.png" /></div><h5>Supabase</h5></div></div>
        </div>
      </div>
    </section>

    <HomePortfolioArea />
    <HomeCtaArea />
    <Footer />
  </div>
</template>

<style scoped>
.hero-skills-area { padding: 60px 0; background-color: #0f1114; }
.skills-grid { display: flex; flex-wrap: wrap; justify-content: center; }
.skill-item-wrapper { padding: 10px; width: 50%; max-width: 250px; }
.skill-item { 
  background: #1a1d21; border-radius: 15px; padding: 30px 20px; 
  text-align: center; border: 2px solid #2d3436; 
  height: 160px; display: flex; flex-direction: column; 
  align-items: center; justify-content: center; transition: 0.3s;
}
.skill-item:hover { border-color: #38bdf8; box-shadow: 0 0 15px rgba(56, 189, 248, 0.3); }
.skill-icon img { max-width: 50px; margin-bottom: 15px; }
h5 { color: #fff; font-size: 16px; margin: 0; font-weight: 600; }
</style>
