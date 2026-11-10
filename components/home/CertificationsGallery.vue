<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const certificates = [
  {
    id: 1,
    src: '/IMG-20260422-WA0005(2).jpg',
    title: 'Certificação Técnica Especializada',
    category: 'Engenharia de Software & Sistemas',
    issuer: 'Programa de Capacitação Profissional',
    year: '2026'
  },
  {
    id: 2,
    src: '/IMG-20260422-WA0006(1).jpg',
    title: 'Arquitetura e Desenvolvimento Backend',
    category: 'Backend, APIs & Banco de Dados',
    issuer: 'Formação Avançada de Engenharia',
    year: '2026'
  },
  {
    id: 3,
    src: '/IMG-20260422-WA0007(1).jpg',
    title: 'Inteligência Artificial & Agentes Autônomos',
    category: 'IA Aplicada & Modelos Preditivos',
    issuer: 'Certificação em Inteligência Computacional',
    year: '2026'
  },
  {
    id: 4,
    src: '/IMG-20260422-WA0008(1).jpg',
    title: 'Automação de Processos & Pipelines Digitais',
    category: 'DevOps & Workflows de Escala',
    issuer: 'Treinamento Especializado em Automação',
    year: '2026'
  },
  {
    id: 5,
    src: '/IMG-20260422-WA0009(1).jpg',
    title: 'Engenharia de Dados e Governança Relacional',
    category: 'PostgreSQL, SQL Server & Estruturas de Dados',
    issuer: 'Capacitação em Modelagem de Sistemas',
    year: '2026'
  },
  {
    id: 6,
    src: '/IMG-20260427-WA0001.jpg',
    title: 'Construção de Aplicações de Alto Desempenho',
    category: 'Full Stack & Performance Computacional',
    issuer: 'Programa de Imersão Tecnológica',
    year: '2026'
  }
];

// Estado do Lightbox
const isOpen = ref(false);
const currentIndex = ref(0);
const touchStartX = ref(0);
const touchEndX = ref(0);

const openLightbox = (index) => {
  currentIndex.value = index;
  isOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  isOpen.value = false;
  document.body.style.overflow = '';
};

const nextCertificate = () => {
  currentIndex.value = (currentIndex.value + 1) % certificates.length;
};

const prevCertificate = () => {
  currentIndex.value = (currentIndex.value - 1 + certificates.length) % certificates.length;
};

// Navegação por teclado (Acessibilidade WCAG)
const handleKeyDown = (e) => {
  if (!isOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextCertificate();
  if (e.key === 'ArrowLeft') prevCertificate();
};

// Suporte a swipe em smartphones (Mobile UX)
const handleTouchStart = (e) => {
  touchStartX.value = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX.value = e.changedTouches[0].screenX;
  const diff = touchStartX.value - touchEndX.value;
  if (Math.abs(diff) > 50) {
    if (diff > 0) {
      nextCertificate(); // swipe left -> próximo
    } else {
      prevCertificate(); // swipe right -> anterior
    }
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown);
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="certifications-gallery-wrapper">
    <div class="gallery-header">
      <div class="header-left">
        <span class="badge-tag"><i class="ri-shield-check-line"></i> Credenciais & Treinamentos</span>
        <h3 class="gallery-title">Certificações Profissionais</h3>
        <p class="gallery-sub">Clique em qualquer certificado para leitura em alta resolução e visualização ampliada.</p>
      </div>
      <div class="gallery-count">
        <span>{{ certificates.length }} Certificados Emitidos</span>
      </div>
    </div>

    <!-- Grid Responsiva com Navegação Manual Estável -->
    <div class="certs-grid">
      <div 
        v-for="(cert, index) in certificates" 
        :key="cert.id"
        class="cert-card"
        @click="openLightbox(index)"
        tabindex="0"
        role="button"
        :aria-label="`Abrir visualização ampliada do ${cert.title}`"
        @keyup.enter="openLightbox(index)"
        @keyup.space.prevent="openLightbox(index)"
      >
        <div class="cert-thumb-container">
          <img 
            :src="cert.src" 
            :alt="cert.title" 
            loading="lazy" 
            class="cert-thumb-img" 
          />
          <div class="cert-overlay">
            <span class="view-btn">
              <i class="ri-zoom-in-line"></i> Ampliar Certificado
            </span>
          </div>
        </div>
        <div class="cert-info">
          <span class="cert-cat">{{ cert.category }}</span>
          <h4 class="cert-name">{{ cert.title }}</h4>
          <div class="cert-meta">
            <span class="cert-issuer"><i class="ri-verified-badge-line"></i> {{ cert.issuer }}</span>
            <span class="cert-year">{{ cert.year }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal Lightbox em Tela Cheia -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="isOpen" 
          class="lightbox-backdrop" 
          @click.self="closeLightbox"
          @touchstart="handleTouchStart"
          @touchend="handleTouchEnd"
        >
          <!-- Top Bar -->
          <div class="lightbox-topbar">
            <div class="counter-badge">
              Certificado {{ currentIndex + 1 }} de {{ certificates.length }}
            </div>
            <div class="topbar-actions">
              <button 
                type="button" 
                class="lightbox-close-btn" 
                @click="closeLightbox"
                aria-label="Fechar visualização"
              >
                <i class="ri-close-line"></i>
                <span class="btn-text">Fechar (ESC)</span>
              </button>
            </div>
          </div>

          <!-- Botão Anterior -->
          <button 
            type="button" 
            class="nav-btn prev-btn" 
            @click.stop="prevCertificate"
            aria-label="Certificado anterior"
          >
            <i class="ri-arrow-left-s-line"></i>
          </button>

          <!-- Área Central com Imagem em Alta Resolução -->
          <div class="lightbox-content" @click.self="closeLightbox">
            <div class="image-wrapper">
              <img 
                :src="certificates[currentIndex].src" 
                :alt="certificates[currentIndex].title"
                class="lightbox-image" 
              />
            </div>
            
            <div class="lightbox-caption">
              <h4>{{ certificates[currentIndex].title }}</h4>
              <p>{{ certificates[currentIndex].category }} • {{ certificates[currentIndex].issuer }} ({{ certificates[currentIndex].year }})</p>
            </div>
          </div>

          <!-- Botão Próximo -->
          <button 
            type="button" 
            class="nav-btn next-btn" 
            @click.stop="nextCertificate"
            aria-label="Próximo certificado"
          >
            <i class="ri-arrow-right-s-line"></i>
          </button>

          <!-- Bottom Bar para Mobile com Dica de Navegação -->
          <div class="lightbox-bottom-nav">
            <button class="mobile-nav-btn" @click.stop="prevCertificate">
              <i class="ri-arrow-left-line"></i> Anterior
            </button>
            <span class="swipe-hint"><i class="ri-drag-move-line"></i> Deslize para navegar</span>
            <button class="mobile-nav-btn" @click.stop="nextCertificate">
              Próximo <i class="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.certifications-gallery-wrapper {
  margin-top: 50px;
  border-top: 1px solid #23272d;
  padding-top: 40px;
}

.gallery-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 25px;
  flex-wrap: wrap;
  gap: 15px;
}

.badge-tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  font-weight: 600;
  color: #3ecf8e;
  background: rgba(62, 207, 142, 0.1);
  border: 1px solid rgba(62, 207, 142, 0.25);
  padding: 4px 12px;
  border-radius: 20px;
  margin-bottom: 10px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.gallery-title {
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 6px 0;
}

.gallery-sub {
  color: #8b949e;
  font-size: 14px;
  margin: 0;
}

.gallery-count span {
  font-size: 13px;
  color: #8b949e;
  background: #161b22;
  border: 1px solid #30363d;
  padding: 6px 14px;
  border-radius: 8px;
  font-weight: 500;
}

/* Grid de Certificados */
.certs-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.cert-card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
}

.cert-card:hover, .cert-card:focus {
  transform: translateY(-4px);
  border-color: #58a6ff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
  outline: none;
}

.cert-thumb-container {
  position: relative;
  width: 100%;
  height: 180px;
  background: #0d1117;
  overflow: hidden;
}

.cert-thumb-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 10px;
  transition: transform 0.3s ease;
}

.cert-card:hover .cert-thumb-img {
  transform: scale(1.04);
}

.cert-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13, 17, 23, 0.7);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.cert-card:hover .cert-overlay, .cert-card:focus .cert-overlay {
  opacity: 1;
}

.view-btn {
  background: #238636;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(35, 134, 54, 0.4);
}

.cert-info {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.cert-cat {
  font-size: 11px;
  color: #58a6ff;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.cert-name {
  font-size: 15px;
  color: #f0f6fc;
  font-weight: 600;
  line-height: 1.35;
  margin: 0 0 12px 0;
}

.cert-meta {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #8b949e;
  border-top: 1px solid #21262d;
  padding-top: 10px;
}

.cert-issuer {
  display: flex;
  align-items: center;
  gap: 4px;
}

.cert-year {
  background: #21262d;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
}

/* Lightbox Modal */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(5, 7, 10, 0.94);
  backdrop-filter: blur(12px);
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  user-select: none;
}

.lightbox-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  z-index: 10;
}

.counter-badge {
  color: #c9d1d9;
  font-size: 14px;
  font-weight: 600;
  background: #161b22;
  border: 1px solid #30363d;
  padding: 6px 14px;
  border-radius: 20px;
}

.lightbox-close-btn {
  background: #21262d;
  color: #f0f6fc;
  border: 1px solid #30363d;
  border-radius: 20px;
  padding: 8px 18px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.lightbox-close-btn:hover {
  background: #da3633;
  border-color: #f85149;
  color: #fff;
}

.lightbox-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 10px 0;
}

.image-wrapper {
  max-width: 100%;
  max-height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-image {
  max-width: 100%;
  max-height: 70vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.7);
  border: 1px solid #30363d;
  animation: zoomIn 0.25s ease-out;
}

.lightbox-caption {
  text-align: center;
  margin-top: 14px;
}

.lightbox-caption h4 {
  color: #ffffff;
  font-size: 18px;
  margin: 0 0 4px 0;
  font-weight: 600;
}

.lightbox-caption p {
  color: #8b949e;
  font-size: 13px;
  margin: 0;
}

/* Botões de Navegação Desktop */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(22, 27, 34, 0.85);
  border: 1px solid #30363d;
  color: #f0f6fc;
  width: 52px;
  height: 52px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  cursor: pointer;
  transition: all 0.2s ease;
  z-index: 10;
}

.nav-btn:hover {
  background: #58a6ff;
  border-color: #58a6ff;
  color: #0d1117;
  transform: translateY(-50%) scale(1.08);
}

.prev-btn { left: 24px; }
.next-btn { right: 24px; }

/* Controles Mobile */
.lightbox-bottom-nav {
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 10px;
}

.mobile-nav-btn {
  background: #21262d;
  border: 1px solid #30363d;
  color: #f0f6fc;
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.swipe-hint {
  font-size: 12px;
  color: #8b949e;
  display: flex;
  align-items: center;
  gap: 4px;
}

@keyframes zoomIn {
  from { opacity: 0; transform: scale(0.96); }
  to { opacity: 1; transform: scale(1); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsividade Mobile */
@media (max-width: 768px) {
  .nav-btn { display: none; }
  .lightbox-bottom-nav { display: flex; }
  .btn-text { display: none; }
  .lightbox-close-btn { padding: 8px; border-radius: 50%; width: 36px; height: 36px; justify-content: center; }
  .lightbox-image { max-height: 58vh; }
  .certs-grid { grid-template-columns: 1fr; }
}
</style>
