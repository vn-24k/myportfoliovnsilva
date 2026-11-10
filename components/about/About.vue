<template>
  <section id="about" class="about-single-area innerpage-single-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="about-image-part wow fadeInUp delay-0-3s">
            <img src="~/assets/images/about/profile.png" alt="Vinícius Silva" class="about-profile-img" />
          </div>
        </div>
        
        <div class="col-lg-8">
          <div class="about-content-part wow fadeInUp delay-0-2s">
            <span class="sub-badge"><i class="ri-user-star-line"></i> Trajetória Profissional</span>
            <h2>Vinícius Silva — Engenharia de Software & Arquitetura de IA</h2>
            <p>
              Sou um desenvolvedor e arquiteto de sistemas focado em criar soluções que geram eficiência operacional real. Minha atuação combina a solidez da engenharia tradicional de software (C#, SQL Server, PostgreSQL, arquiteturas orientadas a microsserviços) com a vanguarda da inteligência artificial aplicada (orquestração de agentes, tool calling supervisionado, pipelines RAG e busca vetorial).
            </p>
            <p>
              Ao longo do meu percurso, construí plataformas completas como o <strong>AI Command Center</strong> (orquestração multi-tenant com Drizzle ORM e Better Auth) e o <strong>VNbaas</strong> (backend-as-a-service com console SQL e AI Vector Embeddings). Acredito na clareza do código, na cobertura rigorosa de testes ponta a ponta e na entrega de produtos reproduzíveis que rodam de forma estável sob demanda.
            </p>
            
            <div class="hero-btns">
              <NuxtLink to="/projects" class="theme-btn"
                >Explorar Projetos <i class="ri-arrow-right-up-line"></i>
              </NuxtLink>
              <NuxtLink to="/contact" class="theme-btn outline-btn"
                >Contato Direto <i class="ri-mail-send-line"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-single-area {
  padding: 120px 0 60px 0;
}

.sub-badge {
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

.about-profile-img {
  width: 100%;
  max-width: 320px;
  border-radius: 20px;
  border: 2px solid #30363d;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}

.about-content-part h2 {
  font-size: 32px;
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 18px;
  line-height: 1.3;
}

.about-content-part p {
  color: #a2abb5;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 16px;
}

.outline-btn {
  background: transparent;
  border: 1px solid #30363d;
  color: #f0f6fc !important;
  margin-left: 14px;
  transition: all 0.2s;
}

.outline-btn:hover {
  background: #21262d;
  border-color: #58a6ff;
  color: #58a6ff !important;
}

@media (max-width: 768px) {
  .about-content-part h2 { font-size: 24px; }
  .about-profile-img { margin-bottom: 25px; }
  .outline-btn { margin-left: 0; margin-top: 10px; display: inline-block; }
}
</style>
