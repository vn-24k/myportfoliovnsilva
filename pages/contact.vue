<script setup>
import Footer from "~/layouts/Footer.vue";
import Header from "~/layouts/Header.vue";
import Contact from "~/components/contact/Contact.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";

useHead({
  title: "Contato Direto | Vinícius Silva — Engenharia de Software & IA",
  meta: [
    {
      name: "description",
      content: "Entre em contato diretamente com Vinícius Silva para projetos de engenharia de software, arquitetura de sistemas com IA, automação ou consultoria técnica."
    }
  ]
});

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});
</script>

<template>
  <div class="contact-page-wrapper">
    <CommonScrollTop />
    <Header />
    <Contact />    
    <Footer />
  </div>
</template>

<style scoped>
.contact-page-wrapper {
  background-color: #0b0e14;
  color: #e6edf3;
  min-height: 100vh;
}
</style>
