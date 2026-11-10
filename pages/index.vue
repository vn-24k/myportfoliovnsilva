<script setup>
import { onMounted } from 'vue';
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";
import HomeAboutArea from "~/components/home/AboutArea.vue";
import MetricsPanel from "~/components/home/MetricsPanel.vue";
import HomePortfolioArea from "~/components/home/PortfolioArea.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";

useHead({
  title: "Vinícius Silva | Engenheiro de Software Full Stack & Arquiteto de IA",
  meta: [
    {
      name: "description",
      content: "Portfólio profissional de Vinícius Silva (Vinícius Caetano). Engenharia de software, arquiteturas backend de alta escala, orquestração supervisionada de agentes de IA, bancos PostgreSQL/SQL Server e aplicações em produção."
    },
    { property: "og:title", content: "Vinícius Silva | Engenheiro de Software Full Stack & Arquiteto de IA" },
    { property: "og:description", content: "Sistemas corporativos, orquestração de IA com tool calling auditável e arquiteturas backend resilientes." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://portfoliocaetano.vercel.app" }
  ]
});

// Efeito sutil de rastreamento do ponteiro
onMounted(() => {
  window.addEventListener("mousemove", (e) => {
    document.body.style.setProperty("--mouse-x", `${e.clientX}px`);
    document.body.style.setProperty("--mouse-y", `${e.clientY}px`);
  });
});
</script>

<template>
  <div class="home-main-wrapper">
    <CommonScrollTop />
    <Header />
    
    <HomeAboutArea />

    <!-- Grid de Stacks & Tecnologias -->
    <section class="hero-skills-area">
      <div class="container">
        <div class="skills-intro text-center">
          <span class="sub-badge"><i class="ri-code-box-line"></i> Stack Tecnológica</span>
          <h3>Ecossistema de Desenvolvimento & Ferramentas</h3>
        </div>
        <div class="row skills-grid">
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item glow-yellow"><div class="skill-icon"><img src="~/assets/images/python.png" alt="Python" loading="lazy" /></div><h5>Python</h5><span class="skill-level">Automação & IA</span></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item glow-blue"><div class="skill-icon"><img src="~/assets/images/docker.png" alt="Docker" loading="lazy" /></div><h5>Docker</h5><span class="skill-level">Containers & Ambientes</span></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item glow-orange"><div class="skill-icon"><img src="~/assets/images/aws.png" alt="AWS Cloud" loading="lazy" /></div><h5>AWS Cloud</h5><span class="skill-level">Infra & Deploy</span></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item glow-white"><div class="skill-icon"><img src="~/assets/images/next.png" alt="Next.js" loading="lazy" /></div><h5>Next.js</h5><span class="skill-level">App Router & Server Actions</span></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item glow-green"><div class="skill-icon"><img src="~/assets/images/node.png" alt="Node.js" loading="lazy" /></div><h5>Node.js</h5><span class="skill-level">Express & TypeScript</span></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item glow-lightblue"><div class="skill-icon"><img src="~/assets/images/tailwind.png" alt="Tailwind CSS" loading="lazy" /></div><h5>Tailwind CSS</h5><span class="skill-level">Design System</span></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item glow-cyan"><div class="skill-icon"><img src="~/assets/images/react.png" alt="React 19" loading="lazy" /></div><h5>React 19</h5><span class="skill-level">Frontend & Reatividade</span></div></div>
          <div class="col-6 col-md-3 skill-item-wrapper"><div class="skill-item glow-brightgreen"><div class="skill-icon"><img src="~/assets/images/supabase.png" alt="PostgreSQL" loading="lazy" /></div><h5>PostgreSQL</h5><span class="skill-level">Drizzle ORM & Vetores</span></div></div>
        </div>
      </div>
    </section>

    <!-- Painel de Indicadores de Arquitetura -->
    <MetricsPanel />
    
    <!-- Seção de Projetos Reais -->
    <HomePortfolioArea />
    
    <!-- Chamada para Contato -->
    <HomeCtaArea />
    
    <Footer />
  </div>
</template>

<style scoped>
.home-main-wrapper {
  background-color: #0b0e14;
  color: #e6edf3;
  min-height: 100vh;
}

/* Efeito de brilho de alta performance */
:global(body::before) {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  background: radial-gradient(
    600px circle at var(--mouse-x, -100px) var(--mouse-y, -100px), 
    rgba(88, 166, 255, 0.035), 
    transparent 40%
  );
  z-index: 9999;
}

.hero-skills-area { 
  padding: 60px 0 40px 0; 
  background-color: #0d1117; 
  border-top: 1px solid #21262d;
}

.skills-intro {
  margin-bottom: 35px;
}

.sub-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(88, 166, 255, 0.1);
  border: 1px solid rgba(88, 166, 255, 0.3);
  color: #58a6ff;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 12px;
  letter-spacing: 0.5px;
}

.skills-intro h3 {
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
  margin: 0;
}

.skills-grid { 
  display: flex; 
  flex-wrap: wrap; 
  justify-content: center; 
}

.skill-item-wrapper { 
  padding: 10px; 
}

.skill-item { 
  background: #161b22; 
  border-radius: 14px; 
  padding: 24px 16px; 
  text-align: center; 
  border: 1px solid #30363d; 
  transition: all 0.25s ease; 
  height: 100%;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
}

.skill-item:hover {
  transform: translateY(-4px);
}

.skill-icon img { 
  max-width: 52px; 
  max-height: 52px;
  object-fit: contain;
  margin-bottom: 12px; 
}

h5 { 
  color: #fff; 
  font-size: 15px; 
  margin: 0 0 4px 0; 
  font-weight: 600; 
}

.skill-level {
  font-size: 11px;
  color: #8b949e;
}

.glow-yellow:hover { border-color: #ffdf5e; box-shadow: 0 4px 15px rgba(255, 223, 94, 0.2); }
.glow-orange:hover { border-color: #ff9900; box-shadow: 0 4px 15px rgba(255, 153, 0, 0.2); }
.glow-blue:hover { border-color: #2496ed; box-shadow: 0 4px 15px rgba(36, 150, 237, 0.2); }
.glow-white:hover { border-color: #ffffff; box-shadow: 0 4px 15px rgba(255, 255, 255, 0.15); }
.glow-green:hover { border-color: #68a063; box-shadow: 0 4px 15px rgba(104, 160, 99, 0.2); }
.glow-cyan:hover { border-color: #61dafb; box-shadow: 0 4px 15px rgba(97, 218, 251, 0.2); }
.glow-lightblue:hover { border-color: #38bdf8; box-shadow: 0 4px 15px rgba(56, 189, 248, 0.2); }
.glow-brightgreen:hover { border-color: #3ecf8e; box-shadow: 0 4px 15px rgba(62, 207, 142, 0.2); }
</style>
