<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";
import PortfolioArea from "~/components/home/PortfolioArea.vue";

useHead({
  title: "Projetos & Arquiteturas | Vinícius Silva — Engenharia de Software",
  meta: [
    {
      name: "description",
      content: "Portfólio de projetos reais de Vinícius Silva: AI Command Center (SaaS multi-tenant com Drizzle ORM e Better Auth), VNbaas (BaaS proprietário e Database Engine), Neural Shell CLI e sistemas em produção."
    }
  ]
});

onMounted(async () => {
  const wow = await import("wow.js");
  new wow.default().init();
});
</script>

<template>
  <div class="projects-page-wrapper">
    <CommonScrollTop />
    <Header />
    
    <div class="page-banner">
      <div class="container text-center">
        <span class="banner-badge"><i class="ri-folder-shield-2-line"></i> Portfólio de Engenharia</span>
        <h1 class="banner-title">Projetos & Arquiteturas em Produção</h1>
        <p class="banner-sub">
          Aplicações completas com código-fonte auditável, deploys ativos e foco em confiabilidade, orquestração de IA e backends escaláveis.
        </p>
      </div>
    </div>

    <PortfolioArea cls="innerpage-single-area" />

    <Footer />
  </div>
</template>

<style scoped>
.projects-page-wrapper {
  background-color: #0b0e14;
  color: #e6edf3;
  min-height: 100vh;
}

.page-banner {
  padding: 130px 0 40px 0;
  background: radial-gradient(circle at 50% 0%, rgba(36, 150, 237, 0.1), transparent 70%);
  border-bottom: 1px solid #21262d;
}

.banner-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(88, 166, 255, 0.1);
  border: 1px solid rgba(88, 166, 255, 0.3);
  color: #58a6ff;
  font-size: 13px;
  font-weight: 600;
  padding: 4px 14px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 14px;
  letter-spacing: 0.5px;
}

.banner-title {
  font-size: 38px;
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 14px;
  letter-spacing: -0.5px;
}

.banner-sub {
  color: #8b949e;
  font-size: 17px;
  max-width: 720px;
  margin: 0 auto;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .banner-title { font-size: 28px; }
  .banner-sub { font-size: 15px; }
}
</style>
