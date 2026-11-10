<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";
import PortfolioArea from "~/components/home/PortfolioArea.vue";

useHead({
  title: "Trabalhos & Projetos | Vinícius Silva — Engenharia de Software",
  meta: [
    {
      name: "description",
      content: "Portfólio de engenharia de software e arquitetura de IA de Vinícius Silva: AI Command Center, VNbaas, Neural Shell e aplicações corporativas."
    }
  ]
});

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});
</script>

<template>
  <div class="works-page-wrapper">
    <CommonScrollTop />
    <Header />
    <PortfolioArea cls="innerpage-single-area" />  
    <Footer />
  </div>
</template>

<style scoped>
.works-page-wrapper {
  background-color: #0b0e14;
  color: #e6edf3;
  min-height: 100vh;
}
</style>
