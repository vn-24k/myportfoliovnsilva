<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const scroller = document.querySelector(".certifications-scroller");
  const scrollerInner = scroller.querySelector(".scroller__inner");
  const scrollerContent = Array.from(scrollerInner.children);

  scrollerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
});
</script>

<template>
  <section id="about" class="about-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="about-image-part wow fadeInUp delay-0-3s">
            <img src="~/assets/images/about/profile.png" alt="About Me" class="profile-img" />
            <h2 class="display-name">Vinícius Silva</h2>
            <p>Backend & DevOps Specialist</p>
          </div>
        </div>
        
        <div class="col-lg-8">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <h2>I'm <span class="highlight-name">Vinícius Silva</span>, an AI & Backend Specialist.</h2>
          </div>

          <div class="about-content-part-bottom wow fadeInUp delay-0-2s">
            <h2 class="section-title">My Certifications & Training</h2>
            <div class="certifications-scroller">
              <div class="scroller__inner">
                <div class="cert-item"><img src="/IMG-20260422-WA0005(2).jpg" /></div>
                <div class="cert-item"><img src="/IMG-20260422-WA0006(1).jpg" /></div>
                <div class="cert-item"><img src="/IMG-20260422-WA0007(1).jpg" /></div>
                <div class="cert-item"><img src="/IMG-20260422-WA0008(1).jpg" /></div>
                <div class="cert-item"><img src="/IMG-20260422-WA0009(1).jpg" /></div>
                <div class="cert-item"><img src="/IMG-20260427-WA0001.jpg" /></div>
              </div>
            </div>
          </div>

          <div class="skills-section-wrapper" style="margin-top: 50px;">
            <h2 class="section-title">Skills</h2>
            </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

.display-name { font-family: 'Syne', sans-serif; font-size: 36px; color: #fff; margin-top: 20px; }
.section-title { font-size: 20px; color: #fff; margin-bottom: 20px; font-weight: 600; }

/* Carrossel com suporte a toque */
.certifications-scroller {
  max-width: 100%;
  overflow-x: auto; /* Permite scroll manual */
  -webkit-overflow-scrolling: touch; /* Suavidade no iOS */
  touch-action: pan-x; /* Garante que o navegador entenda o gesto horizontal */
  padding-bottom: 10px;
}

.scroller__inner {
  display: flex;
  gap: 20px;
  width: max-content;
}

.cert-item {
  width: 200px;
  height: 140px;
  background-color: #1a1d21;
  border-radius: 12px;
  border: 1px solid #2d3436;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  flex-shrink: 0; /* Impede que os itens fiquem espremidos */
}

.cert-item img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}
</style>
