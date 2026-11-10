<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";

useHead({
  title: "Case de Arquitetura | Vinícius Silva — Engenharia de Software",
  meta: [
    {
      name: "description",
      content: "Detalhamento de arquitetura de software, orquestração de IA e engenharia de sistemas por Vinícius Silva."
    }
  ]
});

// Redireciona de forma limpa para o case study do AI Command Center
navigateTo('/projects/ai-command-center', { replace: true });
</script>

<template>
  <div>
    <CommonScrollTop />
    <Header />
    <div class="container text-center py-5">
      <p>Carregando case técnico...</p>
    </div>
    <Footer />
  </div>
</template>
