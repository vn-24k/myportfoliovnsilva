<template>
  <section id="about" class="about-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <h2 class="display-name">Vinícius Silva</h2>
            <p>I'm an AI & Backend Specialist crafting intelligent systems through neural networks and automated infrastructure.</p>
          </div>
        </div>

        <div class="col-lg-12" style="margin-top: 40px;">
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
      </div>
    </div>
  </section>
</template>

<style scoped>
.display-name { font-size: 36px; color: #fff; margin-bottom: 20px; }
.section-title { font-size: 20px; color: #fff; margin-bottom: 20px; text-align: center; }

.certifications-scroller { overflow: hidden; mask: linear-gradient(90deg, transparent, white 10%, white 90%, transparent); }
.scroller__inner { display: flex; gap: 20px; width: max-content; animation: scroll 40s linear infinite; }
@keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }

.cert-item { width: 200px; height: 140px; background: #1a1d21; border-radius: 12px; border: 1px solid #2d3436; display: flex; align-items: center; justify-content: center; padding: 10px; flex-shrink: 0; }
.cert-item img { max-width: 100%; max-height: 100%; object-fit: contain; }
</style>
