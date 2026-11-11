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
      <div class="row align-items-stretch">
        <!-- Coluna Esquerda: Cartão de Perfil -->
        <div class="col-lg-4 mb-30 mb-lg-0">
          <div class="about-image-part wow fadeInUp delay-0-3s">
            <div class="profile-img-box">
              <img 
                src="~/assets/images/about/profile.png" 
                alt="Vinícius Silva" 
                class="my-profile-custom-img" 
              />
              <span class="profile-online-badge" title="Disponível para Projetos">
                <span class="badge-pulse"></span>
                <span class="badge-core"></span>
              </span>
            </div>
            
            <h2 class="display-name highlight-name">Vinícius Silva</h2>
            <p class="role-subtitle">Engenheiro de Software Full Stack & Arquiteto de IA</p>
            
            <div class="about-social text-center centraliza-icones">
              <ul>
                <li><a href="https://linkedin.com/in/viniciussilva" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="ri-linkedin-fill"></i></a></li>
                <li><a href="https://github.com/vn-24k" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="ri-github-line"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Coluna Direita: Apresentação Técnica Enriquecida & Competências -->
        <div class="col-lg-8">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <div class="hero-top-badge">
              <span class="badge-dot"></span>
              <span class="badge-text">Engenharia de Software & Soluções Full Stack</span>
            </div>

            <h1 class="hero-main-title">
              Sistemas Resilientes, Backend de Alta Escala & Ecossistemas de IA
            </h1>

            <p class="hero-description-lead">
              Sou <span class="highlight-name">Vinícius Silva</span>, Engenheiro de Software Full Stack com sólida formação em <strong>Sistemas de Informação</strong>. Desenvolvo plataformas escaláveis ponta a ponta, combinando arquitetura backend rigorosa, interfaces web modernas e reativas e orquestração supervisionada de agentes autônomos de Inteligência Artificial.
            </p>

            <!-- Grade Organizada de Especialidades & Habilidades Técnicas -->
            <div class="hero-competency-grid">
              <div class="competency-card">
                <div class="comp-icon"><i class="ri-code-s-slash-line"></i></div>
                <div class="comp-info">
                  <span class="comp-title">Engenharia Full Stack</span>
                  <span class="comp-desc">React 19, Next.js 15, TypeScript, Node.js & C# (.NET)</span>
                </div>
              </div>

              <div class="competency-card">
                <div class="comp-icon"><i class="ri-database-2-line"></i></div>
                <div class="comp-info">
                  <span class="comp-title">Backend & Bancos de Dados</span>
                  <span class="comp-desc">PostgreSQL, SQL Server, Drizzle ORM & Busca Vetorial</span>
                </div>
              </div>

              <div class="competency-card">
                <div class="comp-icon"><i class="ri-cpu-line"></i></div>
                <div class="comp-info">
                  <span class="comp-title">Inteligência Artificial & Agentes</span>
                  <span class="comp-desc">Orquestração Autônoma, Tool Calling, RAG & Automação</span>
                </div>
              </div>

              <div class="competency-card">
                <div class="comp-icon"><i class="ri-cloud-line"></i></div>
                <div class="comp-info">
                  <span class="comp-title">DevOps, Nuvem & Qualidade</span>
                  <span class="comp-desc">Docker Containers, AWS Cloud, Linux & Testes E2E</span>
                </div>
              </div>
            </div>

            <p class="hero-commitment">
              Transformo requisitos complexos de negócio em código limpo, arquitetura modular e pipelines reproduzíveis, entregando produtos estáveis, seguros e prontos para produção.
            </p>

            <div class="adress-field">
              <ul>
                <li><i class="ri-circle-fill status-icon"></i>Disponível para Projetos Estratégicos, Posições Full Stack & Engenharia de IA</li>
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
        </div>
      </div>

      <!-- Linha Dedicada para Galeria de Certificados (12 Colunas) -->
      <div class="row mt-35">
        <div class="col-12">
          <CertificationsGallery />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

.about-area {
  padding-top: 20px;
}

.mt-35 {
  margin-top: 35px;
}

/* CARDS PRINCIPAIS: PADRONIZADOS EM 20PX COM PALETA GITHUB DARK */
.about-image-part {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 20px;
  padding: 36px 24px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

.about-image-part:hover {
  border-color: rgba(88, 166, 255, 0.4);
}

.about-content-part {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 20px;
  padding: 36px 36px;
  height: 100%;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: border-color 0.25s ease;
}

.about-content-part:hover {
  border-color: rgba(88, 166, 255, 0.4);
}

/* AVATAR COM SUTILEZA TECH E BORDA PADRONIZADA EM 20PX */
.profile-img-box {
  position: relative;
  display: inline-block;
  margin-bottom: 8px;
}

.my-profile-custom-img {
  width: 250px !important;
  height: 250px !important;
  object-fit: cover !important;
  border-radius: 20px !important;
  border: 2px solid #30363d !important;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.45) !important;
  transition: all 0.3s ease !important;
}

.my-profile-custom-img:hover {
  border-color: #58a6ff !important;
  box-shadow: 0 0 25px rgba(88, 166, 255, 0.4) !important;
  transform: scale(1.02);
}

.profile-online-badge {
  position: absolute;
  bottom: 12px;
  right: 12px;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.badge-pulse {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #3ecf8e;
  opacity: 0.6;
  animation: pulse 2s infinite ease-out;
}

.badge-core {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #3ecf8e;
  border: 2px solid #161b22;
  position: relative;
  z-index: 1;
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  100% { transform: scale(2.2); opacity: 0; }
}

.centraliza-icones ul {
  display: flex !important;
  justify-content: center !important;
  gap: 16px !important;
  padding: 0 !important;
  list-style: none !important;
  margin: 16px 0 0 0 !important;
}

.centraliza-icones ul li a {
  width: 42px;
  height: 42px;
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 10px;
  color: #c9d1d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  transition: all 0.2s ease;
}

.centraliza-icones ul li a:hover {
  border-color: #58a6ff;
  color: #58a6ff;
  background: #1c2129;
  transform: translateY(-2px);
}

.display-name { 
  font-family: 'Syne', sans-serif; 
  font-weight: 800; 
  font-size: 32px; 
  color: #fff; 
  margin-top: 18px; 
  letter-spacing: -0.5px; 
}

.role-subtitle {
  color: #58a6ff;
  font-weight: 500;
  font-size: 14.5px;
  margin-top: 4px;
}

.highlight-name { 
  font-family: 'Syne', sans-serif; 
  font-weight: 700; 
  color: #fff; 
}

/* Badge Topo */
.hero-top-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(88, 166, 255, 0.1);
  border: 1px solid rgba(88, 166, 255, 0.25);
  border-radius: 9999px;
  padding: 5px 14px;
  margin-bottom: 16px;
}

.badge-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #58a6ff;
  box-shadow: 0 0 8px #58a6ff;
}

.badge-text {
  color: #58a6ff;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.hero-main-title {
  font-size: 32px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.25;
  margin-bottom: 16px;
  letter-spacing: -0.5px;
}

.hero-description-lead {
  font-size: 16.5px;
  line-height: 1.6;
  color: #b0b8c4;
  margin-bottom: 24px;
}

/* Grade de Competências: CARDS PADRONIZADOS EM 16PX */
.hero-competency-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 14px;
  margin-bottom: 22px;
}

.competency-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #0d1117;
  border: 1px solid #21262d;
  border-radius: 16px;
  padding: 14px 18px;
  transition: all 0.25s ease;
}

.competency-card:hover {
  border-color: #58a6ff;
  background: #131821;
  transform: translateY(-2px);
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35);
}

.comp-icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(88, 166, 255, 0.12);
  color: #58a6ff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  flex-shrink: 0;
}

.comp-info {
  display: flex;
  flex-direction: column;
}

.comp-title {
  color: #f0f6fc;
  font-size: 13.5px;
  font-weight: 700;
  margin-bottom: 2px;
}

.comp-desc {
  color: #8b949e;
  font-size: 12px;
  line-height: 1.35;
}

.hero-commitment {
  font-size: 14.5px;
  line-height: 1.5;
  color: #8b949e;
  border-left: 3px solid #58a6ff;
  padding-left: 14px;
  margin-bottom: 20px;
}

.status-icon { 
  color: #3ecf8e; 
  margin-right: 10px; 
}

/* BOTÕES DE AÇÃO: PADRONIZADOS EM 10PX COM ACABAMENTO MODERNO */
.hero-btns {
  display: flex;
  gap: 14px;
  flex-wrap: wrap;
  align-items: center;
  margin-top: 8px;
}

.download-btn { 
  background: #1f6feb; 
  border: 1px solid rgba(88, 166, 255, 0.4); 
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer; 
  color: #ffffff !important; 
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(31, 111, 235, 0.35);
  transition: all 0.2s ease;
}

.download-btn:hover {
  background: #388bfd;
  box-shadow: 0 6px 20px rgba(88, 166, 255, 0.45);
  transform: translateY(-2px);
}

.outline-btn { 
  background: #0d1117; 
  border: 1px solid #30363d; 
  border-radius: 10px;
  padding: 12px 24px;
  font-weight: 600;
  font-size: 14px;
  color: #f0f6fc !important; 
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.outline-btn:hover {
  background: #161b22;
  border-color: #58a6ff;
  color: #58a6ff !important;
  transform: translateY(-2px);
}

@media (max-width: 991px) {
  .mb-lg-0 {
    margin-bottom: 30px;
  }
}

@media (max-width: 768px) {
  .about-content-part {
    padding: 28px 20px;
  }
  .about-image-part {
    padding: 28px 20px;
  }
  .hero-main-title {
    font-size: 24px;
  }
  .hero-description-lead {
    font-size: 15px;
  }
  .hero-competency-grid {
    grid-template-columns: 1fr;
  }
  .hero-btns {
    flex-direction: column;
    align-items: stretch;
  }
  .download-btn,
  .outline-btn {
    justify-content: center;
    width: 100%;
  }
}
</style>
