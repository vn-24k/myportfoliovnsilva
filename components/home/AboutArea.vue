<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  const scroller = document.querySelector(".certifications-scroller");
  if (scroller) {
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }
});

const handleDownload = () => {
  const link = document.createElement('a');
  link.href = '/Vinicius_Caetano_CV.pdf';
  link.setAttribute('download', 'Vinicius_Caetano_CV.pdf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <section id="about" class="about-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="about-image-part wow fadeInUp delay-0-3s">
            <img 
              src="~/assets/images/about/profile.png" 
              alt="Vinícius Silva" 
              class="my-profile-custom-img" 
            />
            
            <h2 class="display-name highlight-name">Vinícius Silva</h2>
            <p>Engenheiro de Software Full Stack</p>
            
            <div class="about-social text-center centraliza-icones">
              <ul>
                <li><a href="https://linkedin.com/in/viniciussilva" target="_blank"><i class="ri-linkedin-fill"></i></a></li>
                <li><a href="https://github.com/vn-24k" target="_blank"><i class="ri-github-line"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-lg-8">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <p class="hello-text">Olá!</p>
            <h2 class="hero-description">
              I'm <span class="highlight-name">Vinícius Silva</span>, um engenheiro movido a desconstruir sistemas. Hoje, crio backends robustos, pipelines de dados e agentes de IA autônomos. Uso Python, LangChain e Cloud para entregar produtos reais e escaláveis.
            </h2>
            <div class="adress-field">
              <ul>
                <li><i class="ri-circle-fill status-icon"></i>Disponível para trabalho freelancer</li>
              </ul>
            </div>
            <div class="hero-btns">
              <button @click="handleDownload" class="theme-btn download-btn">
                Download CV <i class="ri-download-line"></i>
              </button>
            </div>
          </div>

          <div class="about-content-part-bottom wow fadeInUp delay-0-2s">
            <h2 class="section-title">My Certifications & Training</h2>
            <div class="certifications-scroller" data-speed="slow">
              <div class="scroller__inner">
                <div class="cert-item"><img src="/IMG-20260422-WA0005(2).jpg" alt="Cert 1" /></div>
                <div class="cert-item"><img src="/IMG-20260422-WA0006(1).jpg" alt="Cert 2" /></div>
                <div class="cert-item"><img src="/IMG-20260422-WA0007(1).jpg" alt="Cert 3" /></div>
                <div class="cert-item"><img src="/IMG-20260422-WA0008(1).jpg" alt="Cert 4" /></div>
                <div class="cert-item"><img src="/IMG-20260422-WA0009(1).jpg" alt="Cert 5" /></div>
                <div class="cert-item"><img src="/IMG-20260427-WA0001.jpg" alt="Cert 6" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

.centraliza-icones ul {
  display: flex !important;
  justify-content: center !important;
  gap: 20px !important;
  padding: 0 !important;
  list-style: none !important;
}

.my-profile-custom-img {
  width: 280px !important;
  height: 280px !important;
  object-fit: cover !important;
  border-radius: 25px !important;
  border: 2px solid #808080 !important;
  box-shadow: 0 0 15px rgba(128, 128, 128, 0.6) !important;
  display: block !important;
  margin: 0 auto !important;
}

.display-name { font-family: 'Syne', sans-serif; font-weight: 800; font-size: 36px; color: #fff; margin-top: 20px; letter-spacing: -1px; }
.highlight-name { font-family: 'Syne', sans-serif; font-weight: 700; color: #fff; }
.hero-description { font-size: 28px; line-height: 1.4; color: #a0a0a0; font-weight: 400; }
.status-icon { color: #3ecf8e; margin-right: 10px; }
.download-btn { background-color: #e36049; border: none; cursor: pointer; color: #fff !important; }
.about-content-part-bottom { margin-top: 60px; border-top: 1px solid #2d3436; padding-top: 40px; }
.section-title { font-size: 20px; color: #fff; margin-bottom: 30px; font-weight: 600; }
.certifications-scroller { max-width: 100%; overflow: hidden; -webkit-mask: linear-gradient(90deg, transparent, white 15%, white 85%, transparent); mask: linear-gradient(90deg, transparent, white 15%, white 85%, transparent); }
.scroller__inner { display: flex; gap: 20px; padding: 10px 0; width: max-content; animation: scroll 60s linear infinite; }
@keyframes scroll { to { transform: translate(calc(-50% - 10px)); } }
.cert-item { width: 220px; height: 160px; background-color: #1a1d21; border-radius: 12px; border: 1px solid #2d3436; padding: 10px; display: flex; align-items: center; justify-content: center; transition: 0.3s; }
.cert-item:hover { transform: translateY(-5px); border-color: #e36049; }
.cert-item img { max-width: 100%; max-height: 100%; object-fit: contain; border-radius: 4px; }
</style>
 
