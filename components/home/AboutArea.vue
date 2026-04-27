<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const scrollers = document.querySelectorAll(".scroller");
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation(scrollers);
  }

  function addAnimation(scrollers) {
    scrollers.forEach((scroller) => {
      scroller.setAttribute("data-animated", true);
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
});
</script>

<template>
  <section id="about" class="about-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="about-image-part wow fadeInUp delay-0-3s">
            <img src="~/assets/images/about/profile.png" alt="About Me" />
            <h2>Vinícius Silva</h2>
            <p>Backend & DevOps Specialist</p>
            <div class="about-social text-center">
              <ul>
                <li><a href="https://facebook.com" target="_blank"><i class="ri-facebook-circle-fill"></i></a></li>
                <li><a href="https://twitter.com" target="_blank"><i class="ri-twitter-x-line"></i></a></li>
                <li><a href="https://linkedin.com" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                <li><a href="https://github.com/vn-24k" target="_blank"><i class="ri-github-line"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-lg-8">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <p>Hello There!</p>
            <h2>
              I'm Vinícius Silva, an AI & Backend Specialist crafting intelligent systems through neural networks and automated infrastructure.
            </h2>
            <div class="adress-field">
              <ul>
                <li><i class="ri-circle-fill"></i>Expertise: Neural Networks, Data Science & DevOps</li>
              </ul>
            </div>
            <div class="hero-btns">
              <NuxtLink to="/contact" class="theme-btn">Download CV <i class="ri-download-line"></i></NuxtLink>
            </div>
          </div>

          <div class="about-content-part-bottom wow fadeInUp delay-0-2s">
            <h2 style="margin-bottom: 30px;">My Certifications & Training</h2>
            <div class="company-list">
              <div class="scroller" data-direction="left" data-speed="slow">
                <div class="scroller__inner">
                  <img src="/IMG-20260422-WA0005(2).jpg" alt="Cert 1" />
                  <img src="/IMG-20260422-WA0006(1).jpg" alt="Cert 2" />
                  <img src="/IMG-20260422-WA0007(1).jpg" alt="Cert 3" />
                  <img src="/IMG-20260422-WA0008(1).jpg" alt="Cert 4" />
                  <img src="/IMG-20260422-WA0009(1).jpg" alt="Cert 5" />
                  <img src="/IMG-20260427-WA0001.jpg" alt="Cert 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Ajuste para as imagens do carrossel ficarem uniformes */
.scroller__inner img {
  height: 80px; 
  width: auto;
  margin: 0 20px;
  object-fit: contain;
}
</style>
 
