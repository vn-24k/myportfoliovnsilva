<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import ServiceArea from "~/components/service/ServiceArea.vue";
import HomeCtaArea from "~/components/home/CtaArea.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";

useHead({
  title: "Especialidades Técnicas | Vinícius Silva — Engenharia de Software",
  meta: [
    {
      name: "description",
      content: "Especialidades de engenharia de Vinícius Silva: Arquitetura de Backend Escalável, Orquestração de Agentes de IA, Engenharia de Dados & Busca Vetorial e Automação de Processos Críticos."
    }
  ]
});

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});
</script>

<template>
  <div class="service-page-wrapper">
    <CommonScrollTop />
    <Header />
    <ServiceArea />
    <HomeCtaArea />
    <Footer />
  </div>
</template>

<style scoped>
.service-page-wrapper {
  background-color: #0b0e14;
  color: #e6edf3;
  min-height: 100vh;
}
</style>
