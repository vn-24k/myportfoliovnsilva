<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import About from "~/components/about/About.vue";
import AboutResume from "~/components/about/Resume.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";

useHead({
  title: "Sobre | Vinícius Silva — Trajetória, Formação & Engenharia",
  meta: [
    {
      name: "description",
      content: "Conheça a trajetória profissional de Vinícius Silva (Vinícius Caetano): formação acadêmica em Sistemas de Informação e Engenharia de Software, experiência em automação de processos, pipelines de IA e backend escalável."
    }
  ]
});

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});
</script>

<template>
  <div class="about-page-wrapper">
    <CommonScrollTop />
    <Header />
    <About />
    <AboutResume />
    <HomeCtaArea />
    <Footer />
  </div>
</template>

<style scoped>
.about-page-wrapper {
  background-color: #0b0e14;
  color: #e6edf3;
  min-height: 100vh;
}
</style>
