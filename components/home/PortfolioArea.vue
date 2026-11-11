<script setup>
import { ref } from "vue";
import portfolio_img_1 from "~/assets/images/projects/work1.jpg";
import portfolio_img_2 from "~/assets/images/projects/work2.jpg";
import portfolio_img_3 from "~/assets/images/projects/work3.jpg";

const portfolio_data = [
  {
    id: 1,
    img: portfolio_img_1,
    category: "IA & SaaS",
    title: "AI Command Center — Orquestração & Governança de Agentes",
    desc: "Plataforma SaaS enterprise multi-tenant para supervisão de agentes autônomos de IA, histórico de tool calls, aprovação humana e faturamento automatizado.",
    stack: "Next.js 15 • React 19 • Drizzle ORM • Better Auth • PostgreSQL",
    link: "/projects/ai-command-center",
    demo: "https://ai-command-center-silk.vercel.app",
    repo: "https://github.com/vn-24k/ai-command-center",
    badge: "Deploy Ativo"
  },
  {
    id: 2,
    img: portfolio_img_2,
    category: "Backend & Dados",
    title: "VNbaas — Backend-as-a-Service & Database Engine",
    desc: "Engine própria de BaaS com Console SQL interativo, busca semântica vetorial com embeddings, Realtime WebSockets e gerenciamento de storage.",
    stack: "React 19 • Node.js Express • PostgreSQL • Gemini SDK",
    link: "/projects/vnbaas",
    repo: "https://github.com/vn-24k/VnBaas",
    badge: "Engine Real"
  },
  {
    id: 3,
    img: portfolio_img_3,
    category: "Frontend & Web",
    title: "VNLinks — Plataforma Estratégica & Hub Interativo",
    desc: "Hub estratégico de apresentação profissional e links com console interativo de skills em tempo real, audio feedback e arquitetura responsiva.",
    stack: "React • TypeScript • Tailwind CSS • Vite",
    link: "https://vnlinks.vercel.app",
    demo: "https://vnlinks.vercel.app",
    repo: "https://github.com/vn-24k/bio-link-pro",
    badge: "Deploy Ativo"
  }
];

const categories = [
  "Todos",
  ...new Set(portfolio_data.map((item) => item.category)),
]; 

const activeCategory = ref("Todos");
const items = ref(portfolio_data); 

const filterItems = (cateItem) => {
  activeCategory.value = cateItem; 

  if (cateItem === "Todos") {
    items.value = portfolio_data;
  } else {
    items.value = portfolio_data.filter(
      (findItem) => findItem.category === cateItem
    );
  }
};

const props = defineProps({
  cls: String, 
});

import ImagePopup from '~/components/common/ImagePopup.vue';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';

const image_popup = ref(null);

function handleImagePopup(index) {
  image_popup.value.showImg(index);
}
</script>

<template>
  <div>
    <section id="portfolio" :class="`portfolio-area ${props.cls || ''}`">
      <div class="container">
        <div class="container-inner">
          <div class="row">
            <div class="col-xl-12 col-lg-12">
              <div class="section-title text-center wow fadeInUp delay-0-2s">
                <span class="sub-heading-badge"><i class="ri-code-s-slash-line"></i> Engenharia & Produção</span>
                <h2>Projetos Reais & Arquiteturas</h2>
                <p>
                  Sistemas corporativos completos, backends com isolamento multi-tenant, orquestração de IA com tool-calling auditável e infraestruturas com código comprovável em produção.
                </p>
              </div>
            </div>
          </div>

          <!-- Filtro por Categoria -->
          <ul class="project-filter filter-btns-one justify-content-center pb-25 wow fadeInUp delay-0-2s">
            <li v-for="(item, i) in categories" :key="i">
              <a
                @click.prevent="filterItems(item)"
                :class="`${item === activeCategory ? 'current' : ''}`"
                href="#"
              >
                <span>{{ item }}</span>
              </a>
            </li>
          </ul>

          <!-- Grid de Projetos -->
          <div class="row project-masonry-active">
            <div
              v-for="(item, i) in items"
              :key="item.id"
              class="col-lg-4 col-md-6 mb-30"
            >
              <div class="project-item style-two wow fadeInUp delay-0-3s">
                <div class="project-image">
                  <img :src="item.img" :alt="`Exibição do projeto: ${item.title}`" loading="lazy" />
                  
                  <span class="project-badge">{{ item.badge }}</span>

                  <button 
                    type="button" 
                    @click="handleImagePopup(i)" 
                    class="details-btn" 
                    aria-label="Ver imagem ampliada"
                  >
                    <i class="ri-zoom-in-line"></i>
                  </button>
                </div>

                <div class="project-content">
                  <span class="sub-title">{{ item.category }}</span>
                  <h3 class="item-title">
                    <NuxtLink v-if="item.link.startsWith('/')" :to="item.link">{{ item.title }}</NuxtLink>
                    <a v-else :href="item.link" target="_blank" rel="noopener noreferrer">{{ item.title }}</a>
                  </h3>
                  
                  <p class="item-desc">{{ item.desc }}</p>

                  <div class="stack-tag">{{ item.stack }}</div>

                  <div class="item-links">
                    <NuxtLink v-if="item.link.startsWith('/')" :to="item.link" class="link-action detail-link">
                      Case Técnico <i class="ri-arrow-right-line"></i>
                    </NuxtLink>
                    <a v-if="item.demo" :href="item.demo" target="_blank" rel="noopener noreferrer" class="link-action demo-link">
                      Live App <i class="ri-external-link-line"></i>
                    </a>
                    <a v-if="item.repo" :href="item.repo" target="_blank" rel="noopener noreferrer" class="link-action repo-link">
                      GitHub <i class="ri-github-line"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lightbox de Imagens -->
    <ImagePopup ref="image_popup" :images="portfolio_data.map((item) => item.img)" />
  </div>
</template>

<style scoped>
.portfolio-area {
  padding-top: 80px;
  padding-bottom: 80px;
}

.sub-heading-badge {
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

/* FILTROS DE CATEGORIA COMO PÍLULAS INTERATIVAS ELEGANTES */
.project-filter.filter-btns-one {
  display: flex !important;
  gap: 10px !important;
  justify-content: center !important;
  list-style: none !important;
  padding: 0 0 30px 0 !important;
  margin: 0 !important;
  flex-wrap: wrap;
}

.project-filter.filter-btns-one li {
  margin: 0 !important;
  padding: 0 !important;
}

.project-filter.filter-btns-one li a {
  display: inline-flex !important;
  align-items: center;
  padding: 8px 18px !important;
  border-radius: 9999px !important;
  background: #161b22 !important;
  border: 1px solid #30363d !important;
  color: #8b949e !important;
  font-size: 13px !important;
  font-weight: 600 !important;
  text-decoration: none !important;
  transition: all 0.2s ease !important;
}

.project-filter.filter-btns-one li a:after {
  display: none !important;
}

.project-filter.filter-btns-one li a:hover {
  color: #58a6ff !important;
  border-color: #58a6ff !important;
  background: #1c2129 !important;
  transform: translateY(-2px);
}

.project-filter.filter-btns-one li a.current {
  background: rgba(88, 166, 255, 0.15) !important;
  border-color: #58a6ff !important;
  color: #58a6ff !important;
  box-shadow: 0 0 14px rgba(88, 166, 255, 0.25) !important;
}

/* CARDS DE PROJETOS PADRONIZADOS EM 16PX */
.project-item.style-two {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 16px;
  overflow: hidden;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  will-change: transform;
}

.project-item.style-two:hover {
  transform: translateY(-5px);
  border-color: #58a6ff;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}

.project-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #0d1117;
  border-radius: 16px 16px 0 0;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.project-item.style-two:hover .project-image img {
  transform: scale(1.05);
}

.project-badge {
  position: absolute;
  top: 14px;
  left: 14px;
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid #30363d;
  color: #3ecf8e;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 4px 10px;
  border-radius: 8px;
  letter-spacing: 0.5px;
}

.details-btn {
  position: absolute;
  top: 14px;
  right: 14px;
  background: rgba(13, 17, 23, 0.85);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  border: 1px solid #30363d;
  color: #f0f6fc;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.details-btn:hover {
  background: #58a6ff;
  color: #0d1117;
  border-color: #58a6ff;
}

.project-content {
  padding: 22px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.sub-title {
  font-size: 11px;
  color: #58a6ff;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.8px;
  margin-bottom: 8px;
}

.item-title {
  font-size: 18px;
  font-weight: 700;
  line-height: 1.35;
  margin: 0 0 10px 0;
}

.item-title a {
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s;
}

.item-title a:hover {
  color: #58a6ff;
}

.item-desc {
  color: #8b949e;
  font-size: 14px;
  line-height: 1.55;
  margin-bottom: 14px;
  flex-grow: 1;
}

.stack-tag {
  background: #0d1117;
  border: 1px solid #21262d;
  color: #79c0ff;
  font-size: 11px;
  font-family: monospace;
  padding: 6px 10px;
  border-radius: 8px;
  margin-bottom: 16px;
}

.item-links {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid #21262d;
  padding-top: 14px;
}

.link-action {
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  text-decoration: none;
  transition: all 0.2s;
}

.detail-link {
  color: #58a6ff;
}
.detail-link:hover {
  color: #79c0ff;
  text-decoration: underline;
}

.demo-link {
  color: #3ecf8e;
}
.demo-link:hover {
  color: #56d39e;
}

.repo-link {
  color: #8b949e;
}
.repo-link:hover {
  color: #c9d1d9;
}
</style>
