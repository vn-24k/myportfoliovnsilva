<script setup>
import CertificationsGallery from './CertificationsGallery.vue';

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
            <p class="role-subtitle">Engenheiro de Software & Arquiteto de IA</p>
            
            <div class="about-social text-center centraliza-icones">
              <ul>
                <li><a href="https://linkedin.com/in/viniciussilva" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="ri-linkedin-fill"></i></a></li>
                <li><a href="https://github.com/vn-24k" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="ri-github-line"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div class="col-lg-8">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <p class="hello-text">Engenharia & Soluções</p>
            <h2 class="hero-description">
              Sou <span class="highlight-name">Vinícius Silva</span>, engenheiro de software focado em construir sistemas resilientes, arquiteturas backend de alta escala e orquestração de agentes autônomos de IA. Transformo requisitos de negócio em código robusto, pipelines reproduzíveis e produtos prontos para produção.
            </h2>
            <div class="adress-field">
              <ul>
                <li><i class="ri-circle-fill status-icon"></i>Disponível para Projetos Estratégicos & Engenharia de IA</li>
              </ul>
            </div>
            <div class="hero-btns">
              <button @click="handleDownload" class="theme-btn download-btn">
                Download Currículo Completo <i class="ri-download-line"></i>
              </button>
              <NuxtLink to="/projects" class="theme-btn outline-btn">
                Ver Arquiteturas & Projetos <i class="ri-arrow-right-up-line"></i>
              </NuxtLink>
            </div>
          </div>

          <!-- Nova Galeria Interativa com Lightbox de Alta Resolução -->
          <div class="about-content-part-bottom wow fadeInUp delay-0-2s">
            <CertificationsGallery />
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
  transition: all 0.3s ease !important;
}

.my-profile-custom-img:hover, 
.my-profile-custom-img:active, 
.my-profile-custom-img:focus {
  border-color: #58a6ff !important;
  box-shadow: 0 0 25px rgba(88, 166, 255, 0.5), 0 0 45px rgba(88, 166, 255, 0.2) !important;
  transform: scale(1.02);
}

.display-name { 
  font-family: 'Syne', sans-serif; 
  font-weight: 800; 
  font-size: 36px; 
  color: #fff; 
  margin-top: 20px; 
  letter-spacing: -1px; 
}
.role-subtitle {
  color: #58a6ff;
  font-weight: 500;
  font-size: 15px;
  margin-top: 4px;
}
.highlight-name { font-family: 'Syne', sans-serif; font-weight: 700; color: #fff; }
.hero-description { font-size: 26px; line-height: 1.5; color: #b0b8c4; font-weight: 400; }
.status-icon { color: #3ecf8e; margin-right: 10px; }
.download-btn { background-color: #e36049; border: none; cursor: pointer; color: #fff !important; }
.outline-btn { 
  background: transparent; 
  border: 1px solid #30363d; 
  color: #f0f6fc !important; 
  margin-left: 14px;
  transition: all 0.2s ease;
}
.outline-btn:hover {
  background: #21262d;
  border-color: #58a6ff;
  color: #58a6ff !important;
}

.about-content-part-bottom { 
  margin-top: 30px; 
}

@media (max-width: 768px) {
  .hero-description {
    font-size: 20px;
  }
  .outline-btn {
    margin-left: 0;
    margin-top: 12px;
    display: inline-block;
  }
}
</style>
