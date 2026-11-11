<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isSticky = ref(false);
const handleSticky = () => {
  isSticky.value = window.scrollY > 80;
};

onMounted(() => {
  window.addEventListener('scroll', handleSticky);
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleSticky);
});

const openMenu = ref(false);
const toggleMenu = () => {
  openMenu.value = !openMenu.value;
};
</script>

<template>
  <header :class="`main-header ${isSticky ? 'fixed-header' : ''}`">
    <div class="header-upper">
      <div class="container">
        <div class="header-inner d-flex align-items-center">
          <div class="logo-outer">
            <div class="logo">
              <NuxtLink to="/">
                <img src="~/assets/images/logo.png" alt="Vinícius Silva Logo" class="brand-logo-img" />
              </NuxtLink>
            </div>
          </div>
          <div class="nav-outer clearfix mx-auto">
            <nav class="main-menu navbar-expand-lg">
              <div class="navbar-header">
                <div class="mobile-logo">
                  <NuxtLink to="/">
                    <img src="~/assets/images/logo.png" alt="Vinícius Silva Logo" class="brand-logo-img" />
                  </NuxtLink>
                </div>
                <button type="button" class="navbar-toggle" @click="toggleMenu" aria-label="Alternar navegação">
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
              </div>
              <div :class="`navbar-collapse collapse ${openMenu ? 'show' : ''}`">
                <ul class="navigation onepage clearfix">
                  <li><NuxtLink to="/">Início</NuxtLink></li>
                  <li><NuxtLink to="/about">Sobre</NuxtLink></li>
                  <li><NuxtLink to="/projects">Projetos</NuxtLink></li>
                  <li><NuxtLink to="/service">Especialidades</NuxtLink></li>
                  <li><NuxtLink to="/contact">Contato</NuxtLink></li>
                </ul>
              </div>
            </nav>
          </div>
          <div class="menu-btns">
            <NuxtLink to="/contact" class="theme-btn contact-btn">Fale Comigo <i class="ri-chat-3-line"></i></NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.main-header {
  position: relative;
  z-index: 999;
}

:deep(.header-upper) {
  background: rgba(11, 14, 20, 0.8) !important;
  backdrop-filter: blur(14px) !important;
  -webkit-backdrop-filter: blur(14px) !important;
  border-bottom: 1px solid rgba(48, 54, 61, 0.5) !important;
  transition: all 0.3s ease !important;
}

:deep(.fixed-header .header-upper) {
  background: rgba(11, 14, 20, 0.92) !important;
  backdrop-filter: blur(16px) !important;
  -webkit-backdrop-filter: blur(16px) !important;
  border-bottom: 1px solid rgba(88, 166, 255, 0.3) !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.55) !important;
}

.brand-logo-img {
  max-height: 48px;
  width: auto;
  object-fit: contain;
  transition: transform 0.2s ease;
}

.brand-logo-img:hover {
  transform: scale(1.03);
}

.contact-btn {
  background: #1f6feb !important;
  color: #ffffff !important;
  border: 1px solid rgba(88, 166, 255, 0.4) !important;
  border-radius: 10px !important;
  font-weight: 600 !important;
  padding: 10px 22px !important;
  font-size: 13.5px !important;
  display: inline-flex !important;
  align-items: center !important;
  gap: 6px !important;
  box-shadow: 0 4px 14px rgba(31, 111, 235, 0.3) !important;
  transition: all 0.2s ease !important;
}

.contact-btn:hover {
  background: #388bfd !important;
  box-shadow: 0 6px 20px rgba(88, 166, 255, 0.45) !important;
  transform: translateY(-2px) !important;
}
</style>
