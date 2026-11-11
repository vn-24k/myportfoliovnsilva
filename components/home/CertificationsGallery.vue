<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

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

// Lista duplicada para loop infinito contínuo e sem emendas
const marqueeList = computed(() => [...certificates, ...certificates, ...certificates]);

// Controle de Auto-Scroll
const isAutoScrollPaused = ref(false);
const marqueeTrackRef = ref(null);

const toggleAutoScroll = () => {
  isAutoScrollPaused.value = !isAutoScrollPaused.value;
};

const scrollTrack = (direction) => {
  if (!marqueeTrackRef.value) return;
  const scrollAmount = direction === 'left' ? -320 : 320;
  marqueeTrackRef.value.scrollBy({ left: scrollAmount, behavior: 'smooth' });
};

// ==========================================
// ESTADO DO LIGHTBOX COM MOTOR DE PAN & ZOOM
// ==========================================
const isOpen = ref(false);
const currentIndex = ref(0);

// Zoom & Pan
const zoomScale = ref(1.0);
const translateX = ref(0);
const translateY = ref(0);
const isDragging = ref(false);
const startMouseX = ref(0);
const startMouseY = ref(0);
const startTranslateX = ref(0);
const startTranslateY = ref(0);

// Touch / Pinch Zoom
const initialPinchDistance = ref(0);
const initialPinchScale = ref(1.0);

const resetZoomAndPan = () => {
  zoomScale.value = 1.0;
  translateX.value = 0;
  translateY.value = 0;
};

const openLightbox = (index) => {
  currentIndex.value = index % certificates.length;
  resetZoomAndPan();
  isOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeLightbox = () => {
  isOpen.value = false;
  resetZoomAndPan();
  document.body.style.overflow = '';
};

const nextCertificate = () => {
  currentIndex.value = (currentIndex.value + 1) % certificates.length;
  resetZoomAndPan();
};

const prevCertificate = () => {
  currentIndex.value = (currentIndex.value - 1 + certificates.length) % certificates.length;
  resetZoomAndPan();
};

// Controles de Zoom
const zoomIn = () => {
  if (zoomScale.value < 3.5) {
    zoomScale.value = Math.min(3.5, +(zoomScale.value + 0.35).toFixed(2));
  }
};

const zoomOut = () => {
  if (zoomScale.value > 1.0) {
    zoomScale.value = Math.max(1.0, +(zoomScale.value - 0.35).toFixed(2));
    if (zoomScale.value === 1.0) {
      translateX.value = 0;
      translateY.value = 0;
    }
  }
};

const toggleDoubleTapZoom = (e) => {
  if (zoomScale.value > 1.05) {
    resetZoomAndPan();
  } else {
    zoomScale.value = 2.0;
  }
};

// Roda do mouse para zoom
const handleWheel = (e) => {
  e.preventDefault();
  if (e.deltaY < 0) {
    zoomIn();
  } else {
    zoomOut();
  }
};

// Arraste com Mouse (Pan)
const startPan = (e) => {
  if (zoomScale.value <= 1.0) return;
  isDragging.value = true;
  startMouseX.value = e.clientX;
  startMouseY.value = e.clientY;
  startTranslateX.value = translateX.value;
  startTranslateY.value = translateY.value;
};

const doPan = (e) => {
  if (!isDragging.value || zoomScale.value <= 1.0) return;
  const deltaX = e.clientX - startMouseX.value;
  const deltaY = e.clientY - startMouseY.value;
  
  // Limites proporcionais ao nível de zoom
  const maxPan = 350 * (zoomScale.value - 1);
  translateX.value = Math.max(-maxPan, Math.min(maxPan, startTranslateX.value + deltaX));
  translateY.value = Math.max(-maxPan, Math.min(maxPan, startTranslateY.value + deltaY));
};

const endPan = () => {
  isDragging.value = false;
};

// Gestos Touch (Mobile Pan e Pinch-to-zoom)
const handleTouchStart = (e) => {
  if (e.touches.length === 2) {
    // Início de Pinch
    const dist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    initialPinchDistance.value = dist;
    initialPinchScale.value = zoomScale.value;
  } else if (e.touches.length === 1 && zoomScale.value > 1.0) {
    // Início de Pan
    isDragging.value = true;
    startMouseX.value = e.touches[0].clientX;
    startMouseY.value = e.touches[0].clientY;
    startTranslateX.value = translateX.value;
    startTranslateY.value = translateY.value;
  }
};

const handleTouchMove = (e) => {
  if (e.touches.length === 2) {
    e.preventDefault();
    const dist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    if (initialPinchDistance.value > 0) {
      const factor = dist / initialPinchDistance.value;
      const newScale = Math.max(1.0, Math.min(3.5, +(initialPinchScale.value * factor).toFixed(2)));
      zoomScale.value = newScale;
    }
  } else if (e.touches.length === 1 && isDragging.value && zoomScale.value > 1.0) {
    const deltaX = e.touches[0].clientX - startMouseX.value;
    const deltaY = e.touches[0].clientY - startMouseY.value;
    const maxPan = 350 * (zoomScale.value - 1);
    translateX.value = Math.max(-maxPan, Math.min(maxPan, startTranslateX.value + deltaX));
    translateY.value = Math.max(-maxPan, Math.min(maxPan, startTranslateY.value + deltaY));
  }
};

const handleTouchEnd = () => {
  isDragging.value = false;
  initialPinchDistance.value = 0;
};

// Teclado (Acessibilidade)
const handleKeyDown = (e) => {
  if (!isOpen.value) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight' && zoomScale.value === 1.0) nextCertificate();
  if (e.key === 'ArrowLeft' && zoomScale.value === 1.0) prevCertificate();
  if (e.key === '+' || e.key === '=') zoomIn();
  if (e.key === '-') zoomOut();
  if (e.key === '0' || e.key === 'r') resetZoomAndPan();
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
    <!-- Cabeçalho da Seção com Controles -->
    <div class="gallery-header">
      <div class="header-left">
        <span class="badge-tag"><i class="ri-shield-check-line"></i> Credenciais & Treinamentos</span>
        <h3 class="gallery-title">Certificações Profissionais</h3>
        <p class="gallery-sub">Esteira em movimento contínuo. Passe o mouse ou toque para pausar e clique para ler em alta resolução com zoom dinâmico.</p>
      </div>

      <div class="header-controls">
        <button 
          type="button" 
          class="ctrl-btn" 
          @click="toggleAutoScroll" 
          :title="isAutoScrollPaused ? 'Retomar movimento automático' : 'Pausar movimento automático'"
          aria-label="Pausar ou retomar animação"
        >
          <i :class="isAutoScrollPaused ? 'ri-play-fill' : 'ri-pause-line'"></i>
          <span class="ctrl-text">{{ isAutoScrollPaused ? 'Retomar' : 'Pausar' }}</span>
        </button>

        <button 
          type="button" 
          class="ctrl-btn arrow-ctrl" 
          @click="scrollTrack('left')" 
          title="Rolar para esquerda"
          aria-label="Rolar para esquerda"
        >
          <i class="ri-arrow-left-s-line"></i>
        </button>
        <button 
          type="button" 
          class="ctrl-btn arrow-ctrl" 
          @click="scrollTrack('right')" 
          title="Rolar para direita"
          aria-label="Rolar para direita"
        >
          <i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>

    <!-- ESTEIRA EM MOVIMENTO CONTÍNUO (AUTO-SCROLL SUAVE) -->
    <div 
      class="marquee-container"
      ref="marqueeTrackRef"
      @mouseenter="isAutoScrollPaused = true"
      @mouseleave="isAutoScrollPaused = false"
      @touchstart="isAutoScrollPaused = true"
      @touchend="isAutoScrollPaused = false"
    >
      <div 
        class="marquee-track"
        :class="{ 'is-paused': isAutoScrollPaused }"
      >
        <div 
          v-for="(cert, index) in marqueeList" 
          :key="`${cert.id}-${index}`"
          class="cert-card-marquee"
          @click="openLightbox(index % certificates.length)"
          tabindex="0"
          role="button"
          :aria-label="`Abrir ${cert.title} com zoom dinâmico`"
          @keyup.enter="openLightbox(index % certificates.length)"
        >
          <div class="cert-thumb-box">
            <img 
              :src="cert.src" 
              :alt="cert.title" 
              loading="lazy" 
              class="cert-thumb"
            />
            <div class="cert-card-overlay">
              <span class="zoom-badge">
                <i class="ri-zoom-in-line"></i> Ler com Zoom
              </span>
            </div>
          </div>
          
          <div class="cert-card-meta">
            <span class="cert-tag">{{ cert.category }}</span>
            <h4 class="cert-heading">{{ cert.title }}</h4>
            <div class="cert-foot">
              <span class="cert-inst"><i class="ri-award-line"></i> {{ cert.issuer }}</span>
              <span class="cert-yr">{{ cert.year }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL LIGHTBOX COM MOTOR COMPLETO DE PAN & ZOOM -->
    <Teleport to="body">
      <Transition name="fade">
        <div 
          v-if="isOpen" 
          class="lightbox-backdrop"
          @click.self="closeLightbox"
        >
          <!-- Barra Superior de Controle e Zoom -->
          <div class="lightbox-topbar">
            <div class="topbar-left">
              <span class="counter-badge">
                Certificado {{ currentIndex + 1 }} de {{ certificates.length }}
              </span>
              <span class="zoom-status-pill">
                Zoom: {{ Math.round(zoomScale * 100) }}%
              </span>
            </div>

            <!-- Toolbar de Zoom e Pan -->
            <div class="zoom-toolbar">
              <button 
                type="button" 
                class="tool-btn" 
                @click="zoomOut" 
                title="Diminuir Zoom (-)" 
                :disabled="zoomScale <= 1.0"
                aria-label="Diminuir Zoom"
              >
                <i class="ri-zoom-out-line"></i>
              </button>

              <button 
                type="button" 
                class="tool-btn reset-btn" 
                @click="resetZoomAndPan" 
                title="Redefinir Zoom (100%)"
                aria-label="Redefinir Zoom"
              >
                <i class="ri-refresh-line"></i>
                <span class="tool-label">100%</span>
              </button>

              <button 
                type="button" 
                class="tool-btn" 
                @click="zoomIn" 
                title="Aumentar Zoom (+)" 
                :disabled="zoomScale >= 3.5"
                aria-label="Aumentar Zoom"
              >
                <i class="ri-zoom-in-line"></i>
              </button>
            </div>

            <div class="topbar-right">
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

          <!-- Botões Laterais de Navegação -->
          <button 
            type="button" 
            class="nav-arrow-btn prev-arrow" 
            @click.stop="prevCertificate"
            aria-label="Certificado anterior"
          >
            <i class="ri-arrow-left-s-line"></i>
          </button>

          <!-- Palco Central com Visualização Interativa Pan & Zoom -->
          <div 
            class="lightbox-stage" 
            @click.self="closeLightbox"
            @wheel="handleWheel"
            @mousedown="startPan"
            @mousemove="doPan"
            @mouseup="endPan"
            @mouseleave="endPan"
            @touchstart="handleTouchStart"
            @touchmove="handleTouchMove"
            @touchend="handleTouchEnd"
          >
            <div 
              class="zoom-canvas"
              :class="{ 'is-zoomed': zoomScale > 1.0, 'is-dragging': isDragging }"
              @dblclick="toggleDoubleTapZoom"
            >
              <img 
                :src="certificates[currentIndex].src" 
                :alt="certificates[currentIndex].title"
                class="zoomable-image"
                :style="{
                  transform: `translate(${translateX}px, ${translateY}px) scale(${zoomScale})`,
                  cursor: zoomScale > 1.0 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in'
                }"
                draggable="false"
              />
            </div>

            <!-- Dica Flutuante de Interação -->
            <div class="interactive-hint">
              <span v-if="zoomScale > 1.0">
                <i class="ri-hand"></i> Clique e arraste para explorar os detalhes • Duplo clique para redefinir
              </span>
              <span v-else>
                <i class="ri-search-eye-line"></i> Duplo clique ou use a roda do mouse para ampliar o texto
              </span>
            </div>

            <!-- Legenda Contextual -->
            <div class="lightbox-caption">
              <h4>{{ certificates[currentIndex].title }}</h4>
              <p>{{ certificates[currentIndex].category }} • {{ certificates[currentIndex].issuer }} ({{ certificates[currentIndex].year }})</p>
            </div>
          </div>

          <!-- Botão Próximo -->
          <button 
            type="button" 
            class="nav-arrow-btn next-arrow" 
            @click.stop="nextCertificate"
            aria-label="Próximo certificado"
          >
            <i class="ri-arrow-right-s-line"></i>
          </button>

          <!-- Barra Inferior Mobile -->
          <div class="lightbox-mobile-footer">
            <button class="m-btn" @click.stop="prevCertificate">
              <i class="ri-arrow-left-line"></i> Anterior
            </button>
            <div class="m-zoom-actions">
              <button class="m-btn zoom-m-btn" @click.stop="zoomOut" :disabled="zoomScale <= 1.0"><i class="ri-subtract-line"></i></button>
              <button class="m-btn zoom-m-btn" @click.stop="resetZoomAndPan"><i class="ri-refresh-line"></i></button>
              <button class="m-btn zoom-m-btn" @click.stop="zoomIn" :disabled="zoomScale >= 3.5"><i class="ri-add-line"></i></button>
            </div>
            <button class="m-btn" @click.stop="nextCertificate">
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
  position: relative;
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
  max-width: 650px;
}

.header-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.ctrl-btn {
  background: #161b22;
  border: 1px solid #30363d;
  color: #c9d1d9;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;
}

.ctrl-btn:hover {
  background: #21262d;
  color: #58a6ff;
  border-color: #58a6ff;
}

.arrow-ctrl {
  padding: 8px 10px;
  font-size: 18px;
}

/* =========================================
   ESTEIRA HORIZONTAL EM MOVIMENTO CONTÍNUO
   ========================================= */
.marquee-container {
  width: 100%;
  overflow-x: hidden;
  position: relative;
  padding: 10px 0;
  -webkit-mask: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
  mask: linear-gradient(90deg, transparent, #000 5%, #000 95%, transparent);
}

.marquee-track {
  display: flex;
  gap: 22px;
  width: max-content;
  animation: marqueeLoop 40s linear infinite;
  will-change: transform;
}

.marquee-track:hover,
.marquee-track.is-paused {
  animation-play-state: paused;
}

@keyframes marqueeLoop {
  0% {
    transform: translateX(0);
  }
  100% {
    /* Desloca 1/3 da lista para loop perfeitamente contínuo */
    transform: translateX(calc(-100% / 3));
  }
}

.cert-card-marquee {
  width: 290px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.cert-card-marquee:hover, 
.cert-card-marquee:focus {
  transform: translateY(-5px);
  border-color: #58a6ff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
  outline: none;
}

.cert-thumb-box {
  position: relative;
  width: 100%;
  height: 180px;
  background: #0d1117;
  overflow: hidden;
}

.cert-thumb {
  width: 100%;
  height: 100%;
  object-fit: contain;
  padding: 12px;
  transition: transform 0.3s ease;
}

.cert-card-marquee:hover .cert-thumb {
  transform: scale(1.05);
}

.cert-card-overlay {
  position: absolute;
  inset: 0;
  background: rgba(13, 17, 23, 0.72);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.cert-card-marquee:hover .cert-card-overlay {
  opacity: 1;
}

.zoom-badge {
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

.cert-card-meta {
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.cert-tag {
  font-size: 11px;
  color: #58a6ff;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.cert-heading {
  font-size: 15px;
  color: #f0f6fc;
  font-weight: 600;
  line-height: 1.35;
  margin: 0 0 12px 0;
}

.cert-foot {
  margin-top: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #8b949e;
  border-top: 1px solid #21262d;
  padding-top: 10px;
}

.cert-inst {
  display: flex;
  align-items: center;
  gap: 4px;
}

.cert-yr {
  background: #21262d;
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 11px;
}

/* =========================================
   LIGHTBOX FULLSCREEN COM PAN & ZOOM DINÂMICO
   ========================================= */
.lightbox-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(5, 7, 10, 0.96);
  backdrop-filter: blur(14px);
  z-index: 99999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  user-select: none;
}

.lightbox-topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  z-index: 20;
  flex-wrap: wrap;
  gap: 12px;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.counter-badge {
  color: #c9d1d9;
  font-size: 13px;
  font-weight: 600;
  background: #161b22;
  border: 1px solid #30363d;
  padding: 6px 14px;
  border-radius: 20px;
}

.zoom-status-pill {
  color: #58a6ff;
  font-size: 12px;
  font-family: monospace;
  font-weight: 600;
  background: rgba(88, 166, 255, 0.12);
  border: 1px solid rgba(88, 166, 255, 0.3);
  padding: 5px 12px;
  border-radius: 14px;
}

/* Toolbar de Zoom */
.zoom-toolbar {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #161b22;
  border: 1px solid #30363d;
  padding: 4px 8px;
  border-radius: 20px;
}

.tool-btn {
  background: #21262d;
  border: none;
  color: #f0f6fc;
  width: 34px;
  height: 34px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tool-btn:hover:not(:disabled) {
  background: #58a6ff;
  color: #0d1117;
}

.tool-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.reset-btn {
  width: auto;
  padding: 0 10px;
  border-radius: 12px;
  gap: 4px;
}

.tool-label {
  font-size: 12px;
  font-weight: 600;
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

/* Palco Central */
.lightbox-stage {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  position: relative;
  overflow: hidden;
}

.zoom-canvas {
  width: 100%;
  height: 65vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.zoomable-image {
  max-width: 100%;
  max-height: 65vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.8);
  border: 1px solid #30363d;
  transition: transform 0.08s ease-out;
  transform-origin: center center;
}

.interactive-hint {
  margin-top: 10px;
  font-size: 12px;
  color: #8b949e;
  background: rgba(22, 27, 34, 0.7);
  padding: 4px 14px;
  border-radius: 12px;
  border: 1px solid #21262d;
}

.interactive-hint i {
  color: #58a6ff;
  margin-right: 4px;
}

.lightbox-caption {
  text-align: center;
  margin-top: 8px;
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

/* Setas Laterais de Navegação */
.nav-arrow-btn {
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
  z-index: 20;
}

.nav-arrow-btn:hover {
  background: #58a6ff;
  border-color: #58a6ff;
  color: #0d1117;
  transform: translateY(-50%) scale(1.08);
}

.prev-arrow { left: 24px; }
.next-arrow { right: 24px; }

/* Controles Mobile */
.lightbox-mobile-footer {
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding-top: 8px;
}

.m-btn {
  background: #21262d;
  border: 1px solid #30363d;
  color: #f0f6fc;
  padding: 8px 14px;
  border-radius: 8px;
  font-size: 13px;
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
}

.m-zoom-actions {
  display: flex;
  gap: 6px;
}

.zoom-m-btn {
  padding: 8px 10px;
  font-size: 15px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.25s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Responsividade Mobile */
@media (max-width: 768px) {
  .nav-arrow-btn { display: none; }
  .lightbox-mobile-footer { display: flex; }
  .btn-text { display: none; }
  .lightbox-close-btn { padding: 8px; border-radius: 50%; width: 36px; height: 36px; justify-content: center; }
  .zoomable-image { max-height: 52vh; }
  .zoom-canvas { height: 52vh; }
  .zoom-toolbar { display: none; }
}
</style>
