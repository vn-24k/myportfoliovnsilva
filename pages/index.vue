<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
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

// Estado Interativo da Stack Tecnológica: inicializa sem nada selecionado (desmarcado)
const selectedSkill = ref(null);

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
  if (!selectedSkill.value) return null;
  return skills.find(s => s.name === selectedSkill.value) || null;
});

// A seleção substitui imediatamente a anterior; clicar na mesma desmarca (toggle)
const selectSkill = (skill, event) => {
  if (event) {
    event.stopPropagation();
  }
  selectedSkill.value = selectedSkill.value === skill.name ? null : skill.name;
};

// Clicar fora da stack desseleciona a tecnologia ativa
const handleOutsideClick = (event) => {
  if (!selectedSkill.value) return;
  const target = event.target;
  if (!target) return;
  if (target.closest && (target.closest('.skill-item') || target.closest('.active-skill-spotlight'))) {
    return;
  }
  selectedSkill.value = null;
};

// Tecla Escape também fecha a seleção
const handleKeyDown = (event) => {
  if (event.key === 'Escape' && selectedSkill.value) {
    selectedSkill.value = null;
  }
};

onMounted(() => {
  document.addEventListener('click', handleOutsideClick);
  document.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  document.removeEventListener('click', handleOutsideClick);
  document.removeEventListener('keydown', handleKeyDown);
});
</script>

<template>
  <div class="home-main-wrapper">
    <CommonScrollTop />
    <Header />
    
    <HomeAboutArea />

    <!-- Grid de Stacks & Tecnologias Ultra-Fluido e Otimizado -->
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
              @click="selectSkill(skill, $event)"
              tabindex="0"
              role="button"
              :aria-label="`Selecionar tecnologia ${skill.name}`"
              @keyup.enter="selectSkill(skill, $event)"
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
        <Transition name="fade-slide">
          <div class="active-skill-spotlight" v-if="currentSkill" @click.stop>
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
        </Transition>
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

.hero-skills-area { 
  padding: 95px 0 75px 0; 
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
  border-radius: 9999px;
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

/* CARD BASE DA TECNOLOGIA - ULTRA-LEVE & ACELERADO POR HARDWARE */
.skill-item { 
  background: #141820; 
  border-radius: 16px; 
  padding: 24px 16px; 
  text-align: center; 
  border: 1px solid #2d333b; 
  transition: transform 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, background 0.18s ease; 
  height: 100%;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
  justify-content: center;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  user-select: none;
  will-change: transform;
}

/* Hover sutil apenas em desktop com mouse real (evita hover travado no touch mobile) */
@media (hover: hover) {
  .skill-item:hover:not(.is-active) {
    border-color: #58a6ff;
    transform: translateY(-3px);
  }
}

.skill-icon img { 
  max-width: 52px; 
  max-height: 52px;
  object-fit: contain;
  margin-bottom: 12px; 
  transition: transform 0.18s ease;
}

h5 { 
  color: #f0f6fc; 
  font-size: 15px; 
  margin: 0 0 4px 0; 
  font-weight: 700; 
  transition: color 0.18s ease;
}

.skill-level {
  font-size: 11.5px;
  color: #8b949e;
  transition: color 0.18s ease;
}

.active-indicator {
  position: absolute;
  bottom: 0;
  left: 20%;
  right: 20%;
  height: 3px;
  border-radius: 3px 3px 0 0;
  background: currentColor;
  box-shadow: 0 0 8px currentColor;
}

/* ==============================================================
   CORES VIVAS, FORTES E LUMINOSAS (EXCLUSIVO PARA .is-active)
   Isso garante que apenas 1 card por vez fique selecionado!
   ============================================================== */

.skill-item.is-active {
  transform: translateY(-5px);
}

.skill-item.is-active .skill-icon img {
  transform: scale(1.08);
}

/* PYTHON */
.skill-item.is-active.glow-python { 
  background: radial-gradient(circle at 50% 0%, rgba(56, 126, 184, 0.4) 0%, rgba(255, 212, 59, 0.22) 50%, #161b22 100%);
  border-color: #ffd43b; 
  box-shadow: 0 0 24px rgba(255, 212, 59, 0.45); 
}
.skill-item.is-active.glow-python h5 {
  color: #ffd43b;
  text-shadow: 0 0 10px rgba(255, 212, 59, 0.5);
}
.skill-item.is-active.glow-python .active-indicator { color: #ffd43b; }

/* DOCKER */
.skill-item.is-active.glow-docker { 
  background: radial-gradient(circle at 50% 0%, rgba(13, 183, 237, 0.45) 0%, rgba(8, 109, 215, 0.2) 55%, #161b22 100%);
  border-color: #0db7ed; 
  box-shadow: 0 0 24px rgba(13, 183, 237, 0.45); 
}
.skill-item.is-active.glow-docker h5 {
  color: #0db7ed;
  text-shadow: 0 0 10px rgba(13, 183, 237, 0.5);
}
.skill-item.is-active.glow-docker .active-indicator { color: #0db7ed; }

/* AWS */
.skill-item.is-active.glow-aws { 
  background: radial-gradient(circle at 50% 0%, rgba(255, 153, 0, 0.45) 0%, rgba(236, 114, 17, 0.2) 55%, #161b22 100%);
  border-color: #ff9900; 
  box-shadow: 0 0 24px rgba(255, 153, 0, 0.45); 
}
.skill-item.is-active.glow-aws h5 {
  color: #ff9900;
  text-shadow: 0 0 10px rgba(255, 153, 0, 0.5);
}
.skill-item.is-active.glow-aws .active-indicator { color: #ff9900; }

/* NEXT.JS */
.skill-item.is-active.glow-next { 
  background: radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.35) 0%, rgba(136, 136, 136, 0.2) 55%, #161b22 100%);
  border-color: #ffffff; 
  box-shadow: 0 0 24px rgba(255, 255, 255, 0.4); 
}
.skill-item.is-active.glow-next h5 {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
}
.skill-item.is-active.glow-next .active-indicator { color: #ffffff; }

/* NODE.JS */
.skill-item.is-active.glow-node { 
  background: radial-gradient(circle at 50% 0%, rgba(108, 194, 74, 0.45) 0%, rgba(67, 133, 61, 0.2) 55%, #161b22 100%);
  border-color: #6cc24a; 
  box-shadow: 0 0 24px rgba(108, 194, 74, 0.45); 
}
.skill-item.is-active.glow-node h5 {
  color: #6cc24a;
  text-shadow: 0 0 10px rgba(108, 194, 74, 0.5);
}
.skill-item.is-active.glow-node .active-indicator { color: #6cc24a; }

/* TAILWIND */
.skill-item.is-active.glow-tailwind { 
  background: radial-gradient(circle at 50% 0%, rgba(56, 189, 248, 0.45) 0%, rgba(2, 132, 199, 0.2) 55%, #161b22 100%);
  border-color: #38bdf8; 
  box-shadow: 0 0 24px rgba(56, 189, 248, 0.45); 
}
.skill-item.is-active.glow-tailwind h5 {
  color: #38bdf8;
  text-shadow: 0 0 10px rgba(56, 189, 248, 0.5);
}
.skill-item.is-active.glow-tailwind .active-indicator { color: #38bdf8; }

/* REACT 19 */
.skill-item.is-active.glow-react { 
  background: radial-gradient(circle at 50% 0%, rgba(0, 216, 255, 0.45) 0%, rgba(2, 132, 199, 0.2) 55%, #161b22 100%);
  border-color: #00d8ff; 
  box-shadow: 0 0 24px rgba(0, 216, 255, 0.45); 
}
.skill-item.is-active.glow-react h5 {
  color: #00d8ff;
  text-shadow: 0 0 10px rgba(0, 216, 255, 0.5);
}
.skill-item.is-active.glow-react .active-indicator { color: #00d8ff; }

/* POSTGRESQL */
.skill-item.is-active.glow-postgres { 
  background: radial-gradient(circle at 50% 0%, rgba(62, 207, 142, 0.45) 0%, rgba(51, 103, 145, 0.22) 55%, #161b22 100%);
  border-color: #3ecf8e; 
  box-shadow: 0 0 24px rgba(62, 207, 142, 0.45); 
}
.skill-item.is-active.glow-postgres h5 {
  color: #3ecf8e;
  text-shadow: 0 0 10px rgba(62, 207, 142, 0.5);
}
.skill-item.is-active.glow-postgres .active-indicator { color: #3ecf8e; }

/* BANNER DE DETALHE DA TECNOLOGIA EM DESTAQUE */
.active-skill-spotlight {
  margin-top: 30px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 16px;
  padding: 20px 26px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: all 0.2s ease;
}

.spotlight-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 700;
  padding: 4px 14px;
  border-radius: 9999px;
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

/* TRANSIÇÃO SUAVE PARA ENTRADA/SAÍDA DO SPOTLIGHT */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: opacity 0.22s cubic-bezier(0.16, 1, 0.3, 1), transform 0.22s cubic-bezier(0.16, 1, 0.3, 1);
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
