<script setup>
import { ref, computed, onMounted } from 'vue';
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";
import HomeAboutArea from "~/components/home/AboutArea.vue";
import MetricsPanel from "~/components/home/MetricsPanel.vue";
import HomePortfolioArea from "~/components/home/PortfolioArea.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";

import pythonImg from "~/assets/images/python.png";
import dockerImg from "~/assets/images/docker.png";
import awsImg from "~/assets/images/aws.png";
import nextImg from "~/assets/images/next.png";
import nodeImg from "~/assets/images/node.png";
import tailwindImg from "~/assets/images/tailwind.png";
import reactImg from "~/assets/images/react.png";
import postgresImg from "~/assets/images/supabase.png";

useHead({
  title: "Vinícius Silva | Engenheiro de Software Full Stack & Arquiteto de IA",
  meta: [
    {
      name: "description",
      content: "Portfólio profissional de Vinícius Silva (Vinícius Caetano). Engenharia de software full stack, arquiteturas backend de alta escala, orquestração supervisionada de agentes de IA, bancos PostgreSQL/SQL Server e aplicações em produção."
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

// Estado Interativo da Stack Tecnológica
const selectedSkill = ref('Python');

const skills = [
  {
    id: 'python',
    name: 'Python',
    level: 'Automação & IA',
    icon: pythonImg,
    glowClass: 'glow-python',
    color: '#ffd43b',
    tag: 'Automação & AI Core',
    detail: 'Automação de workflows de engenharia, extração e processamento de dados, orquestração de modelos de inteligência artificial e scripts de sistema em Linux.'
  },
  {
    id: 'docker',
    name: 'Docker',
    level: 'Containers & Ambientes',
    icon: dockerImg,
    glowClass: 'glow-docker',
    color: '#0db7ed',
    tag: 'DevOps & Conteinerização',
    detail: 'Isolamento rigoroso de microsserviços, criação de stacks multicontêiner com Docker Compose e garantia de paridade absoluta entre desenvolvimento e produção.'
  },
  {
    id: 'aws',
    name: 'AWS Cloud',
    level: 'Infra & Deploy',
    icon: awsImg,
    glowClass: 'glow-aws',
    color: '#ff9900',
    tag: 'Cloud & Escalabilidade',
    detail: 'Arquitetura de infraestrutura na nuvem, custódia e distribuição de ativos (S3), execução serverless e pipelines de deploy de alta disponibilidade.'
  },
  {
    id: 'next',
    name: 'Next.js',
    level: 'App Router & SSR',
    icon: nextImg,
    glowClass: 'glow-next',
    color: '#ffffff',
    tag: 'Full Stack Framework',
    detail: 'Construção de aplicações corporativas escaláveis com Next.js 15, App Router, Server Actions, Server-Side Rendering e otimização avançada de renderização.'
  },
  {
    id: 'node',
    name: 'Node.js',
    level: 'Express & TypeScript',
    icon: nodeImg,
    glowClass: 'glow-node',
    color: '#6cc24a',
    tag: 'Backend & APIs REST',
    detail: 'Desenvolvimento de serviços backend assíncronos, APIs RESTful de alta velocidade, WebSockets em tempo real e arquitetura modular e tipada em TypeScript.'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    level: 'Design System & UI',
    icon: tailwindImg,
    glowClass: 'glow-tailwind',
    color: '#38bdf8',
    tag: 'Modern Styling',
    detail: 'Construção ágil de interfaces fluidas, responsivas e de alto padrão visual, com isolamento estrito de estilos e consistência em design systems.'
  },
  {
    id: 'react',
    name: 'React 19',
    level: 'Frontend & Reatividade',
    icon: reactImg,
    glowClass: 'glow-react',
    color: '#00d8ff',
    tag: 'Engenharia Frontend',
    detail: 'Componentização avançada, gerenciamento previsível de estados, hooks customizados e experiências de usuário ultrafluidas e responsivas.'
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    level: 'Drizzle ORM & Vetores',
    icon: postgresImg,
    glowClass: 'glow-postgres',
    color: '#3ecf8e',
    tag: 'Dados Relacionais & Vetoriais',
    detail: 'Modelagem de dados relacionais complexos, migrações seguras com Drizzle ORM, criação de índices de alta performance e busca semântica por vetores com pgvector.'
  }
];

const currentSkill = computed(() => {
  return skills.find(s => s.name === selectedSkill.value) || skills[0];
});

const selectSkill = (skill) => {
  selectedSkill.value = skill.name;
};
</script>

<template>
  <div class="home-main-wrapper">
    <CommonScrollTop />
    <Header />
    
    <HomeAboutArea />

    <!-- Grid de Stacks & Tecnologias Super Interativa com Cores Vivas -->
    <section class="hero-skills-area">
      <div class="container">
        <div class="skills-intro text-center">
          <span class="sub-badge"><i class="ri-code-box-line"></i> Stack Tecnológica</span>
          <h3>Ecossistema de Desenvolvimento & Ferramentas</h3>
          <p class="skills-subtitle">Clique em qualquer ferramenta para ativar o ecossistema e inspecionar a aplicação técnica em produção.</p>
        </div>

        <div class="row skills-grid">
          <div 
            v-for="skill in skills" 
            :key="skill.id" 
            class="col-6 col-md-3 skill-item-wrapper"
          >
            <div 
              class="skill-item" 
              :class="[skill.glowClass, { 'is-active': selectedSkill === skill.name }]"
              @click="selectSkill(skill)"
              tabindex="0"
              role="button"
              :aria-label="`Selecionar tecnologia ${skill.name}`"
              @keyup.enter="selectSkill(skill)"
            >
              <div class="skill-icon">
                <img :src="skill.icon" :alt="skill.name" loading="lazy" />
              </div>
              <h5>{{ skill.name }}</h5>
              <span class="skill-level">{{ skill.level }}</span>
              <span class="active-indicator" v-if="selectedSkill === skill.name"></span>
            </div>
          </div>
        </div>

        <!-- Banner Dinâmico em Destaque da Tecnologia Ativa -->
        <div class="active-skill-spotlight" v-if="currentSkill">
          <div class="spotlight-header">
            <span 
              class="spotlight-tag" 
              :style="{ borderColor: currentSkill.color, color: currentSkill.color, background: `${currentSkill.color}15` }"
            >
              <i class="ri-flashlight-line"></i> {{ currentSkill.name }} • {{ currentSkill.tag }}
            </span>
          </div>
          <p class="spotlight-detail">{{ currentSkill.detail }}</p>
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
  padding: 60px 0 45px 0; 
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
  margin: 0 0 6px 0;
}

.skills-subtitle {
  color: #8b949e;
  font-size: 14px;
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

/* CARD BASE DA TECNOLOGIA */
.skill-item { 
  background: #141820; 
  border-radius: 16px; 
  padding: 24px 16px; 
  text-align: center; 
  border: 1px solid #2d333b; 
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1); 
  height: 100%;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  user-select: none;
}

.skill-icon img { 
  max-width: 52px; 
  max-height: 52px;
  object-fit: contain;
  margin-bottom: 12px; 
  transition: all 0.3s ease;
}

h5 { 
  color: #f0f6fc; 
  font-size: 15px; 
  margin: 0 0 4px 0; 
  font-weight: 700; 
  transition: color 0.3s ease, text-shadow 0.3s ease;
}

.skill-level {
  font-size: 11.5px;
  color: #8b949e;
  transition: color 0.3s ease;
}

.active-indicator {
  position: absolute;
  bottom: 0;
  left: 20%;
  right: 20%;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background: currentColor;
  box-shadow: 0 0 10px currentColor;
}

/* ==============================================================
   CORES VIVAS, FORTES E PODEROSAS (HOVER & CLICK ATIVO)
   ============================================================== */

/* PYTHON: Dourado Vivo & Azul Elétrico */
.skill-item.glow-python:hover,
.skill-item.glow-python.is-active { 
  background: radial-gradient(circle at 50% 0%, rgba(56, 126, 184, 0.42) 0%, rgba(255, 212, 59, 0.25) 50%, #161b22 100%);
  border-color: #ffd43b; 
  box-shadow: 0 0 35px rgba(255, 212, 59, 0.5), 0 0 15px rgba(56, 126, 184, 0.7), inset 0 0 20px rgba(255, 212, 59, 0.2); 
  transform: translateY(-6px) scale(1.02);
}
.skill-item.glow-python:hover .skill-icon img,
.skill-item.glow-python.is-active .skill-icon img {
  filter: drop-shadow(0 0 16px rgba(255, 212, 59, 0.85));
  transform: scale(1.12);
}
.skill-item.glow-python:hover h5,
.skill-item.glow-python.is-active h5 {
  color: #ffd43b;
  text-shadow: 0 0 14px rgba(255, 212, 59, 0.6);
}
.skill-item.glow-python .active-indicator { color: #ffd43b; }

/* DOCKER: Ciano Elétrico Vívido */
.skill-item.glow-docker:hover,
.skill-item.glow-docker.is-active { 
  background: radial-gradient(circle at 50% 0%, rgba(13, 183, 237, 0.45) 0%, rgba(8, 109, 215, 0.22) 55%, #161b22 100%);
  border-color: #0db7ed; 
  box-shadow: 0 0 35px rgba(13, 183, 237, 0.55), 0 0 15px rgba(13, 183, 237, 0.7), inset 0 0 20px rgba(13, 183, 237, 0.22); 
  transform: translateY(-6px) scale(1.02);
}
.skill-item.glow-docker:hover .skill-icon img,
.skill-item.glow-docker.is-active .skill-icon img {
  filter: drop-shadow(0 0 16px rgba(13, 183, 237, 0.9));
  transform: scale(1.12);
}
.skill-item.glow-docker:hover h5,
.skill-item.glow-docker.is-active h5 {
  color: #0db7ed;
  text-shadow: 0 0 14px rgba(13, 183, 237, 0.6);
}
.skill-item.glow-docker .active-indicator { color: #0db7ed; }

/* AWS: Laranja / Âmbar Incandescente */
.skill-item.glow-aws:hover,
.skill-item.glow-aws.is-active { 
  background: radial-gradient(circle at 50% 0%, rgba(255, 153, 0, 0.45) 0%, rgba(236, 114, 17, 0.22) 55%, #161b22 100%);
  border-color: #ff9900; 
  box-shadow: 0 0 35px rgba(255, 153, 0, 0.55), 0 0 15px rgba(255, 153, 0, 0.7), inset 0 0 20px rgba(255, 153, 0, 0.22); 
  transform: translateY(-6px) scale(1.02);
}
.skill-item.glow-aws:hover .skill-icon img,
.skill-item.glow-aws.is-active .skill-icon img {
  filter: drop-shadow(0 0 16px rgba(255, 153, 0, 0.9));
  transform: scale(1.12);
}
.skill-item.glow-aws:hover h5,
.skill-item.glow-aws.is-active h5 {
  color: #ff9900;
  text-shadow: 0 0 14px rgba(255, 153, 0, 0.6);
}
.skill-item.glow-aws .active-indicator { color: #ff9900; }

/* NEXT.JS: Laser Branco Puro & Prata */
.skill-item.glow-next:hover,
.skill-item.glow-next.is-active { 
  background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.38) 0%, rgba(136, 136, 136, 0.2) 55%, #161b22 100%);
  border-color: #ffffff; 
  box-shadow: 0 0 35px rgba(255, 255, 255, 0.45), 0 0 15px rgba(255, 255, 255, 0.65), inset 0 0 20px rgba(255, 255, 255, 0.2); 
  transform: translateY(-6px) scale(1.02);
}
.skill-item.glow-next:hover .skill-icon img,
.skill-item.glow-next.is-active .skill-icon img {
  filter: drop-shadow(0 0 16px rgba(255, 255, 255, 0.9));
  transform: scale(1.12);
}
.skill-item.glow-next:hover h5,
.skill-item.glow-next.is-active h5 {
  color: #ffffff;
  text-shadow: 0 0 14px rgba(255, 255, 255, 0.6);
}
.skill-item.glow-next .active-indicator { color: #ffffff; }

/* NODE.JS: Verde Esmeralda Radiante */
.skill-item.glow-node:hover,
.skill-item.glow-node.is-active { 
  background: radial-gradient(circle at 50% 0%, rgba(108, 194, 74, 0.45) 0%, rgba(67, 133, 61, 0.22) 55%, #161b22 100%);
  border-color: #6cc24a; 
  box-shadow: 0 0 35px rgba(108, 194, 74, 0.55), 0 0 15px rgba(108, 194, 74, 0.7), inset 0 0 20px rgba(108, 194, 74, 0.22); 
  transform: translateY(-6px) scale(1.02);
}
.skill-item.glow-node:hover .skill-icon img,
.skill-item.glow-node.is-active .skill-icon img {
  filter: drop-shadow(0 0 16px rgba(108, 194, 74, 0.9));
  transform: scale(1.12);
}
.skill-item.glow-node:hover h5,
.skill-item.glow-node.is-active h5 {
  color: #6cc24a;
  text-shadow: 0 0 14px rgba(108, 194, 74, 0.6);
}
.skill-item.glow-node .active-indicator { color: #6cc24a; }

/* TAILWIND: Azul Céu Neon */
.skill-item.glow-tailwind:hover,
.skill-item.glow-tailwind.is-active { 
  background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.45) 0%, rgba(2, 132, 199, 0.22) 55%, #161b22 100%);
  border-color: #38bdf8; 
  box-shadow: 0 0 35px rgba(56, 189, 248, 0.55), 0 0 15px rgba(56, 189, 248, 0.7), inset 0 0 20px rgba(56, 189, 248, 0.22); 
  transform: translateY(-6px) scale(1.02);
}
.skill-item.glow-tailwind:hover .skill-icon img,
.skill-item.glow-tailwind.is-active .skill-icon img {
  filter: drop-shadow(0 0 16px rgba(56, 189, 248, 0.9));
  transform: scale(1.12);
}
.skill-item.glow-tailwind:hover h5,
.skill-item.glow-tailwind.is-active h5 {
  color: #38bdf8;
  text-shadow: 0 0 14px rgba(56, 189, 248, 0.6);
}
.skill-item.glow-tailwind .active-indicator { color: #38bdf8; }

/* REACT 19: Ciano Neon Supercharged */
.skill-item.glow-react:hover,
.skill-item.glow-react.is-active { 
  background: radial-gradient(circle at 50% 0%, rgba(0, 216, 255, 0.45) 0%, rgba(2, 132, 199, 0.22) 55%, #161b22 100%);
  border-color: #00d8ff; 
  box-shadow: 0 0 35px rgba(0, 216, 255, 0.55), 0 0 15px rgba(0, 216, 255, 0.7), inset 0 0 20px rgba(0, 216, 255, 0.22); 
  transform: translateY(-6px) scale(1.02);
}
.skill-item.glow-react:hover .skill-icon img,
.skill-item.glow-react.is-active .skill-icon img {
  filter: drop-shadow(0 0 16px rgba(0, 216, 255, 0.9));
  transform: scale(1.12);
}
.skill-item.glow-react:hover h5,
.skill-item.glow-react.is-active h5 {
  color: #00d8ff;
  text-shadow: 0 0 14px rgba(0, 216, 255, 0.6);
}
.skill-item.glow-react .active-indicator { color: #00d8ff; }

/* POSTGRESQL: Safira & Esmeralda Radiante */
.skill-item.glow-postgres:hover,
.skill-item.glow-postgres.is-active { 
  background: radial-gradient(circle at 50% 0%, rgba(62, 207, 142, 0.45) 0%, rgba(51, 103, 145, 0.25) 55%, #161b22 100%);
  border-color: #3ecf8e; 
  box-shadow: 0 0 35px rgba(62, 207, 142, 0.55), 0 0 15px rgba(62, 207, 142, 0.7), inset 0 0 20px rgba(62, 207, 142, 0.22); 
  transform: translateY(-6px) scale(1.02);
}
.skill-item.glow-postgres:hover .skill-icon img,
.skill-item.glow-postgres.is-active .skill-icon img {
  filter: drop-shadow(0 0 16px rgba(62, 207, 142, 0.9));
  transform: scale(1.12);
}
.skill-item.glow-postgres:hover h5,
.skill-item.glow-postgres.is-active h5 {
  color: #3ecf8e;
  text-shadow: 0 0 14px rgba(62, 207, 142, 0.6);
}
.skill-item.glow-postgres .active-indicator { color: #3ecf8e; }

/* BANNER DE DETALHE DA TECNOLOGIA EM DESTAQUE */
.active-skill-spotlight {
  margin-top: 30px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 14px;
  padding: 18px 24px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.3s ease;
  animation: fadeIn 0.3s ease-out;
}

.spotlight-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.spotlight-detail {
  color: #c9d1d9;
  font-size: 14.5px;
  line-height: 1.55;
  margin: 0;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(6px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
