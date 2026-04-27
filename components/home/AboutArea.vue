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
          </div>
        </div>

        <div class="col-lg-8">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <p>Hello There!</p>
            <h2>I'm Vinícius Silva, an AI & Backend Specialist crafting intelligent systems.</h2>
            <div class="adress-field">
              <ul>
                <li><i class="ri-circle-fill"></i>Available for Freelancing</li>
                <li><i class="ri-circle-fill"></i>Expertise: Neural Networks, Data Science & DevOps</li>
              </ul>
            </div>
          </div>

          <div class="about-content-part-bottom wow fadeInUp delay-0-2s">
            <h2 style="margin-bottom: 30px;">My Certifications & Training</h2>
            <div class="company-list">
              <div class="scroller" data-direction="left" data-speed="slow">
                <div class="scroller__inner">
                  <img src="/certificados/cert1.png" alt="Cert 1" />
                  <img src="/certificados/cert2.png" alt="Cert 2" />
                  <img src="/certificados/cert3.png" alt="Cert 3" />
                  <img src="/certificados/cert4.png" alt="Cert 4" />
                  <img src="/certificados/cert5.png" alt="Cert 5" />
                  <img src="/certificados/cert6.png" alt="Cert 6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
