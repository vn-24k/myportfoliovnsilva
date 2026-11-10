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
.brand-logo-img {
  max-height: 48px;
  width: auto;
  object-fit: contain;
}
</style>
