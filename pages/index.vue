<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import HomeAIStatus from "~/components/home/AIStatus.vue";
import LiveMetrics from "~/components/home/LiveMetrics.vue";
import TechPlayground from "~/components/home/TechPlayground.vue";
</script>

<template>
  <div>
    <CommonScrollTop />
    <Header />
    
    <HomeAboutArea />

    <TechPlayground />

    <HomeAIStatus />
    <LiveMetrics />
    
    <HomePortfolioArea />
    <HomeCtaArea />
    <Footer />
  </div>
</template>

<style scoped>
/* Espaçamento geral entre as novas seções */
section {
  padding: 40px 0;
}
</style>
