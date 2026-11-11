<script setup>
import { ref, computed, onMounted, onUnmounted, nextTick } from 'vue';

const certificates = [
  {
    id: 1,
    src: '/IMG-20260422-WA0005(2).jpg',
    title: 'Engenharia de Software & Sistemas',
    category: 'Arquitetura & Engenharia',
    issuer: 'Capacitação Profissional Especializada',
    year: '2026'
  },
  {
    id: 2,
    src: '/IMG-20260422-WA0006(1).jpg',
    title: 'Desenvolvimento Backend & APIs REST',
    category: 'Backend, APIs & Microserviços',
    issuer: 'Formação Avançada em Engenharia',
    year: '2026'
  },
  {
    id: 3,
    src: '/IMG-20260422-WA0007(1).jpg',
    title: 'Inteligência Artificial & Agentes Autônomos',
    category: 'IA Aplicada & Engenharia de Prompts',
    issuer: 'Inteligência Computacional & Automação',
    year: '2026'
  },
  {
    id: 4,
    src: '/IMG-20260422-WA0008(1).jpg',
    title: 'Pipelines Digitais & Automação Contínua',
    category: 'DevOps & Workflows de Escala',
    issuer: 'Treinamento Especializado em Automação',
    year: '2026'
  },
  {
    id: 5,
    src: '/IMG-20260422-WA0009(1).jpg',
    title: 'Engenharia de Dados & Modelagem Relacional',
    category: 'PostgreSQL, SQL Server & Estruturas',
    issuer: 'Capacitação em Modelagem de Sistemas',
    year: '2026'
  },
  {
    id: 6,
    src: '/IMG-20260427-WA0001.jpg',
    title: 'Aplicações Web de Alta Performance',
    category: 'Full Stack & Otimização',
    issuer: 'Programa de Imersão Tecnológica',
    year: '2026'
  }
];

// 5 repetições para garantir esteira contínua infinita com wrap perfeito em ambas as direções
const marqueeList = computed(() => [
  ...certificates,
  ...certificates,
  ...certificates,
  ...certificates,
  ...certificates
]);

// Referências da esteira
const marqueeContainerRef = ref(null);
const marqueeTrackRef = ref(null);
const isAutoScrollPaused = ref(false);
const activeCenteredIndex = ref(12); // Centro no 3º conjunto (conjunto 2, índice 12)

let rafId = null;
let isUserInteracting = false;
let interactionTimeout = null;
const scrollSpeed = 0.7; // pixels por frame (glide suave e contínuo)

// Calcula a largura de um conjunto completo de 6 certificados
const getSingleSetWidth = () => {
  if (!marqueeTrackRef.value) return 0;
  const cards = marqueeTrackRef.value.querySelectorAll('.cert-card-marquee');
  if (cards.length < 6) return 0;
  // Distância entre o início do card 0 e o card 6
  return cards[6].offsetLeft - cards[0].offsetLeft;
};

// Loop contínuo com requestAnimationFrame
const autoScrollLoop = () => {
  if (marqueeContainerRef.value && !isAutoScrollPaused.value && !isUserInteracting) {
    marqueeContainerRef.value.scrollLeft += scrollSpeed;

    const singleSetWidth = getSingleSetWidth();
    if (singleSetWidth > 0) {
      // Quando passar do 3º conjunto, rebobina suavemente 1 conjunto para trás (indetectável)
      if (marqueeContainerRef.value.scrollLeft >= singleSetWidth * 3) {
        marqueeContainerRef.value.scrollLeft -= singleSetWidth;
      }
      // Se rolar para trás e ficar abaixo do 1º conjunto, avança 1 conjunto
      else if (marqueeContainerRef.value.scrollLeft <= singleSetWidth) {
        marqueeContainerRef.value.scrollLeft += singleSetWidth;
      }
    }
  }
  rafId = requestAnimationFrame(autoScrollLoop);
};

// Pausar / Retomar com o botão
const toggleAutoScroll = () => {
  isAutoScrollPaused.value = !isAutoScrollPaused.value;
  if (!isAutoScrollPaused.value) {
    isUserInteracting = false;
  }
};

// Encontra o card cujo centro está mais próximo do centro atual do container
const getClosestCardIndex = () => {
  if (!marqueeContainerRef.value || !marqueeTrackRef.value) return activeCenteredIndex.value;
  const container = marqueeContainerRef.value;
  const containerCenter = container.scrollLeft + (container.clientWidth / 2);
  const cards = marqueeTrackRef.value.querySelectorAll('.cert-card-marquee');

  let closestIdx = activeCenteredIndex.value;
  let minDiff = Infinity;

  cards.forEach((card, idx) => {
    const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
    const diff = Math.abs(cardCenter - containerCenter);
    if (diff < minDiff) {
      minDiff = diff;
      closestIdx = idx;
    }
  });

  return closestIdx;
};

// Centraliza um card com precisão matemática na tela
const centerCardByIndex = (targetIdx, smooth = true) => {
  if (!marqueeContainerRef.value || !marqueeTrackRef.value) return;
  const cards = marqueeTrackRef.value.querySelectorAll('.cert-card-marquee');
  if (!cards || !cards[targetIdx]) return;

  const card = cards[targetIdx];
  const container = marqueeContainerRef.value;

  // offsetLeft + (largura do card / 2) - (largura do container / 2)
  const cardCenter = card.offsetLeft + (card.offsetWidth / 2);
  const containerCenter = container.clientWidth / 2;
  const targetScrollLeft = cardCenter - containerCenter;

  container.scrollTo({
    left: targetScrollLeft,
    behavior: smooth ? 'smooth' : 'auto'
  });

  activeCenteredIndex.value = targetIdx;
};

// Navegação manual por setas (esquerda / direita) com centralização
const scrollTrack = (direction) => {
  if (!marqueeContainerRef.value) return;

  isUserInteracting = true;
  if (interactionTimeout) clearTimeout(interactionTimeout);

  const currentClosest = getClosestCardIndex();
  const n = certificates.length; // 6
  let nextIdx = direction === 'right' ? currentClosest + 1 : currentClosest - 1;

  // Mantém os índices na faixa segura dos conjuntos centrais
  if (nextIdx >= 4 * n) {
    marqueeContainerRef.value.scrollLeft -= getSingleSetWidth();
    nextIdx -= n;
  } else if (nextIdx < n) {
    marqueeContainerRef.value.scrollLeft += getSingleSetWidth();
    nextIdx += n;
  }

  centerCardByIndex(nextIdx, true);

  // Retoma o auto-scroll após 3 segundos de inatividade se não estiver pausado manualmente
  interactionTimeout = setTimeout(() => {
    isUserInteracting = false;
  }, 3200);
};

// Interação com o mouse (hover pausa o auto-scroll)
const handleMouseEnter = () => {
  isUserInteracting = true;
};

const handleMouseLeave = () => {
  if (interactionTimeout) clearTimeout(interactionTimeout);
  interactionTimeout = setTimeout(() => {
    isUserInteracting = false;
  }, 1200);
};

// Interação com touch (mobile)
const handleTouchStart = () => {
  isUserInteracting = true;
};

const handleTouchEnd = () => {
  if (interactionTimeout) clearTimeout(interactionTimeout);
  interactionTimeout = setTimeout(() => {
    isUserInteracting = false;
  }, 2500);
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

const toggleDoubleTapZoom = () => {
  if (zoomScale.value > 1.05) {
    resetZoomAndPan();
  } else {
    zoomScale.value = 2.0;
  }
};

// Drag & Pan do Mouse
const startDrag = (e) => {
  if (zoomScale.value <= 1.0) return;
  isDragging.value = true;
  startMouseX.value = e.clientX;
  startMouseY.value = e.clientY;
  startTranslateX.value = translateX.value;
  startTranslateY.value = translateY.value;
  e.preventDefault();
};

const onDrag = (e) => {
  if (!isDragging.value) return;
  const deltaX = e.clientX - startMouseX.value;
  const deltaY = e.clientY - startMouseY.value;
  translateX.value = startTranslateX.value + deltaX;
  translateY.value = startTranslateY.value + deltaY;
};

const stopDrag = () => {
  isDragging.value = false;
};

// Zoom com a roda do mouse (Wheel)
const handleWheel = (e) => {
  e.preventDefault();
  const delta = e.deltaY < 0 ? 0.2 : -0.2;
  const newScale = Math.min(3.5, Math.max(1.0, +(zoomScale.value + delta).toFixed(2)));
  zoomScale.value = newScale;
  if (newScale === 1.0) {
    translateX.value = 0;
    translateY.value = 0;
  }
};

// Gestos Touch Mobile: Pinch & Pan
const handleTouchStartLightbox = (e) => {
  if (e.touches.length === 2) {
    const dist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    initialPinchDistance.value = dist;
    initialPinchScale.value = zoomScale.value;
  } else if (e.touches.length === 1 && zoomScale.value > 1.0) {
    isDragging.value = true;
    startMouseX.value = e.touches[0].clientX;
    startMouseY.value = e.touches[0].clientY;
    startTranslateX.value = translateX.value;
    startTranslateY.value = translateY.value;
  }
};

const handleTouchMoveLightbox = (e) => {
  if (e.touches.length === 2 && initialPinchDistance.value > 0) {
    const dist = Math.hypot(
      e.touches[0].clientX - e.touches[1].clientX,
      e.touches[0].clientY - e.touches[1].clientY
    );
    const scaleFactor = dist / initialPinchDistance.value;
    zoomScale.value = Math.min(3.5, Math.max(1.0, +(initialPinchScale.value * scaleFactor).toFixed(2)));
  } else if (e.touches.length === 1 && isDragging.value) {
    const deltaX = e.touches[0].clientX - startMouseX.value;
    const deltaY = e.touches[0].clientY - startMouseY.value;
    translateX.value = startTranslateX.value + deltaX;
    translateY.value = startTranslateY.value + deltaY;
  }
};

const handleTouchEndLightbox = () => {
  isDragging.value = false;
  initialPinchDistance.value = 0;
};

// Teclado
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
  nextTick(() => {
    if (marqueeContainerRef.value && marqueeTrackRef.value) {
      // Inicia centralizado no conjunto central (índice 12)
      centerCardByIndex(12, false);
      rafId = requestAnimationFrame(autoScrollLoop);
    }
  });
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  if (rafId) cancelAnimationFrame(rafId);
  if (interactionTimeout) clearTimeout(interactionTimeout);
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
        <p class="gallery-sub">Esteira contínua e infinita. Use as setas para centralizar qualquer certificado e clique para leitura em alta definição com motor dinâmico de zoom e pan.</p>
      </div>

      <div class="header-controls">
        <button 
          type="button" 
          class="ctrl-btn" 
          @click="toggleAutoScroll" 
          :title="isAutoScrollPaused ? 'Retomar movimento contínuo' : 'Pausar movimento contínuo'"
          aria-label="Pausar ou retomar animação"
        >
          <i :class="isAutoScrollPaused ? 'ri-play-fill' : 'ri-pause-line'"></i>
          <span class="ctrl-text">{{ isAutoScrollPaused ? 'Retomar' : 'Pausar' }}</span>
        </button>

        <button 
          type="button" 
          class="ctrl-btn arrow-ctrl" 
          @click="scrollTrack('left')" 
          title="Centralizar certificado anterior"
          aria-label="Centralizar certificado anterior"
        >
          <i class="ri-arrow-left-s-line"></i>
        </button>
        <button 
          type="button" 
          class="ctrl-btn arrow-ctrl" 
          @click="scrollTrack('right')" 
          title="Centralizar próximo certificado"
          aria-label="Centralizar próximo certificado"
        >
          <i class="ri-arrow-right-s-line"></i>
        </button>
      </div>
    </div>

    <!-- ESTEIRA EM MOVIMENTO CONTÍNUO E INFINITO -->
    <div 
      class="marquee-container"
      ref="marqueeContainerRef"
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div 
        class="marquee-track"
        ref="marqueeTrackRef"
      >
        <div 
          v-for="(cert, index) in marqueeList" 
          :key="`${cert.id}-${index}`"
          class="cert-card-marquee"
          :class="{ 'is-centered': activeCenteredIndex === index }"
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
              >
                <i class="ri-zoom-out-line"></i>
              </button>
              
              <button 
                type="button" 
                class="tool-btn reset-btn" 
                @click="resetZoomAndPan" 
                title="Redefinir escala (100%)"
              >
                100% Redefinir
              </button>

              <button 
                type="button" 
                class="tool-btn" 
                @click="zoomIn" 
                title="Aumentar Zoom (+)"
                :disabled="zoomScale >= 3.5"
              >
                <i class="ri-zoom-in-line"></i>
              </button>
            </div>

            <div class="topbar-right">
              <button 
                type="button" 
                class="close-btn" 
                @click="closeLightbox" 
                title="Fechar (Esc)"
                aria-label="Fechar visualizador"
              >
                <i class="ri-close-line"></i>
              </button>
            </div>
          </div>

          <!-- Palco Central com Suporte a Drag, Wheel, Pinch e Double-tap -->
          <div 
            class="lightbox-viewport"
            :class="{ 'is-zoomed': zoomScale > 1.0, 'is-dragging': isDragging }"
            @mousedown="startDrag"
            @mousemove="onDrag"
            @mouseup="stopDrag"
            @mouseleave="stopDrag"
            @wheel="handleWheel"
            @dblclick="toggleDoubleTapZoom"
            @touchstart="handleTouchStartLightbox"
            @touchmove="handleTouchMoveLightbox"
            @touchend="handleTouchEndLightbox"
          >
            <div 
              class="image-transform-wrapper"
              :style="{
                transform: `translate3d(${translateX}px, ${translateY}px, 0px) scale(${zoomScale})`,
                transition: isDragging ? 'none' : 'transform 0.22s ease-out'
              }"
            >
              <img 
                :src="certificates[currentIndex].src" 
                :alt="certificates[currentIndex].title"
                class="lightbox-image"
                draggable="false"
              />
            </div>

            <!-- Setas Flutuantes de Navegação entre Certificados -->
            <button 
              type="button" 
              class="nav-btn prev-btn" 
              @click.stop="prevCertificate"
              title="Certificado anterior (Seta esquerda)"
              aria-label="Certificado anterior"
            >
              <i class="ri-arrow-left-s-line"></i>
            </button>

            <button 
              type="button" 
              class="nav-btn next-btn" 
              @click.stop="nextCertificate"
              title="Próximo certificado (Seta direita)"
              aria-label="Próximo certificado"
            >
              <i class="ri-arrow-right-s-line"></i>
            </button>
          </div>

          <!-- Rodapé de Informações Técnicas e Legenda -->
          <div class="lightbox-footer">
            <div class="footer-info">
              <span class="footer-category">{{ certificates[currentIndex].category }}</span>
              <h4 class="footer-title">{{ certificates[currentIndex].title }}</h4>
              <p class="footer-issuer">
                <i class="ri-award-line"></i> Emitido por {{ certificates[currentIndex].issuer }} • {{ certificates[currentIndex].year }}
              </p>
            </div>
            <div class="footer-hint">
              <span><i class="ri-mouse-line"></i> Roda do mouse amplia</span>
              <span class="sep">•</span>
              <span><i class="ri-drag-move-2-line"></i> Arraste para mover</span>
              <span class="sep">•</span>
              <span><i class="ri-smartphone-line"></i> Pinça ou toque duplo no celular</span>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<style scoped>
.certifications-gallery-wrapper {
  margin-top: 50px;
  padding-top: 40px;
  border-top: 1px solid #23272d;
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
  background: rgba(62, 207, 142, 0.1);
  border: 1px solid rgba(62, 207, 142, 0.25);
  color: #3ecf8e;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 10px;
}

.gallery-title {
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 6px 0;
}

.gallery-sub {
  font-size: 14px;
  color: #8b949e;
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
  border-radius: 8px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.ctrl-btn:hover {
  background: #21262d;
  color: #58a6ff;
  border-color: #58a6ff;
}

.arrow-ctrl {
  padding: 8px 12px;
  font-size: 18px;
}

/* CONTAINER DA ESTEIRA: NATIVE HORIZONTAL SCROLL COM RAF CONTINUO */
.marquee-container {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  -webkit-overflow-scrolling: touch;
  scroll-behavior: auto;
  position: relative;
  padding: 18px 0;
  mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%);
  -webkit-mask-image: linear-gradient(90deg, transparent 0%, rgba(0,0,0,1) 4%, rgba(0,0,0,1) 96%, transparent 100%);
}

.marquee-container::-webkit-scrollbar {
  display: none;
}

.marquee-track {
  display: flex;
  gap: 22px;
  width: max-content;
  align-items: center;
}

/* CARDS DOS CERTIFICADOS */
.cert-card-marquee {
  width: 295px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 14px;
  overflow: hidden;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
}

.cert-card-marquee:hover,
.cert-card-marquee:focus {
  border-color: #58a6ff;
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.45);
  outline: none;
}

.cert-card-marquee.is-centered {
  border-color: #3ecf8e;
  box-shadow: 0 0 20px rgba(62, 207, 142, 0.22);
}

.cert-thumb-box {
  width: 100%;
  height: 180px;
  background: #0d1117;
  position: relative;
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
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #238636;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 13px;
  font-weight: 600;
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
  font-weight: 600;
  color: #58a6ff;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.cert-heading {
  font-size: 15px;
  font-weight: 600;
  color: #f0f6fc;
  margin: 0 0 12px 0;
  line-height: 1.35;
}

.cert-foot {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
  padding-top: 10px;
  border-top: 1px solid #21262d;
  font-size: 12px;
  color: #8b949e;
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

/* ==========================================
   ESTILOS DO MODAL LIGHTBOX COM PAN & ZOOM
   ========================================== */
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
  gap: 12px;
  z-index: 20;
  flex-wrap: wrap;
}

.topbar-left {
  display: flex;
  align-items: center;
  gap: 10px;
}

.counter-badge {
  background: #161b22;
  border: 1px solid #30363d;
  color: #c9d1d9;
  font-size: 13px;
  font-weight: 600;
  padding: 6px 14px;
  border-radius: 20px;
}

.zoom-status-pill {
  background: rgba(88, 166, 255, 0.12);
  border: 1px solid rgba(88, 166, 255, 0.3);
  color: #58a6ff;
  font-size: 12px;
  font-weight: 600;
  padding: 5px 12px;
  border-radius: 14px;
  font-family: monospace;
}

.zoom-toolbar {
  display: flex;
  align-items: center;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 20px;
  padding: 4px 8px;
  gap: 6px;
}

.tool-btn {
  background: #21262d;
  border: none;
  color: #f0f6fc;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 15px;
}

.tool-btn:hover:not(:disabled) {
  background: #388bfd;
  color: #ffffff;
}

.tool-btn:disabled {
  opacity: 0.35;
  cursor: not-allowed;
}

.reset-btn {
  width: auto;
  border-radius: 14px;
  padding: 0 12px;
  font-size: 12px;
  font-weight: 600;
}

.close-btn {
  background: #21262d;
  border: 1px solid #30363d;
  color: #f0f6fc;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 20px;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #da3633;
  border-color: #da3633;
  color: #ffffff;
  transform: rotate(90deg);
}

/* PALCO DE PAN E ZOOM */
.lightbox-viewport {
  flex-grow: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  cursor: default;
}

.lightbox-viewport.is-zoomed {
  cursor: grab;
}

.lightbox-viewport.is-dragging {
  cursor: grabbing;
}

.image-transform-wrapper {
  max-width: 95%;
  max-height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
  will-change: transform;
}

.lightbox-image {
  max-width: 100%;
  max-height: 75vh;
  object-fit: contain;
  border-radius: 8px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.7);
  pointer-events: none;
}

/* SETAS LATERAIS DO LIGHTBOX */
.nav-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(22, 27, 34, 0.85);
  border: 1px solid #30363d;
  color: #f0f6fc;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: all 0.2s ease;
  z-index: 15;
}

.nav-btn:hover {
  background: #388bfd;
  border-color: #388bfd;
  color: #ffffff;
  transform: translateY(-50%) scale(1.1);
}

.prev-btn { left: 16px; }
.next-btn { right: 16px; }

/* RODAPÉ DO LIGHTBOX */
.lightbox-footer {
  width: 100%;
  max-width: 1250px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 1px solid #21262d;
  padding-top: 14px;
  flex-wrap: wrap;
  gap: 12px;
  z-index: 20;
}

.footer-category {
  font-size: 12px;
  font-weight: 600;
  color: #3ecf8e;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.footer-title {
  color: #ffffff;
  font-size: 18px;
  font-weight: 700;
  margin: 4px 0;
}

.footer-issuer {
  color: #8b949e;
  font-size: 13px;
  margin: 0;
}

.footer-hint {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  color: #8b949e;
}

.footer-hint .sep {
  opacity: 0.4;
}

/* TRANSIÇÃO DO MODAL */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .cert-card-marquee {
    width: 250px;
  }
  .cert-thumb-box {
    height: 150px;
  }
  .lightbox-topbar {
    justify-content: center;
  }
  .lightbox-footer {
    flex-direction: column;
    align-items: flex-start;
  }
  .footer-hint {
    display: none;
  }
  .nav-btn {
    width: 38px;
    height: 38px;
    font-size: 20px;
  }
  .prev-btn { left: 6px; }
  .next-btn { right: 6px; }
}
</style>
