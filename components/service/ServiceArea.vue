<template>
  <section id="services" class="services-area innerpage-single-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-badge"><i class="ri-tools-line"></i> Capacidades de Entrega</span>
              <h2>Especialidades de Engenharia</h2>
              <p>
                Soluções técnicas desenhadas para resolver gargalos reais de escala, automação de dados e inteligência artificial corporativa.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Especialidade 1 -->
          <div class="col-lg-4 col-md-6 mb-30">
            <div class="service-item wow fadeInUp delay-0-2s">
              <div class="service-icon"><i class="ri-server-line"></i></div>
              <h4>Arquitetura Backend & APIs</h4>
              <p>
                Desenvolvimento de backends resilientes em Node.js, Express, C# e Python. Modelagem de dados avançada com PostgreSQL, SQL Server e Drizzle ORM, com foco em throughput, segurança e isolamento multi-tenant.
              </p>
              <div class="tech-tags">
                <span>Node.js</span> <span>Python</span> <span>PostgreSQL</span> <span>Drizzle</span>
              </div>
            </div>
          </div>

          <!-- Especialidade 2 -->
          <div class="col-lg-4 col-md-6 mb-30">
            <div class="service-item wow fadeInUp delay-0-4s">
              <div class="service-icon"><i class="ri-brain-line"></i></div>
              <h4>Orquestração de Agentes de IA</h4>
              <p>
                Implementação de sistemas multiagente com tool-calling auditável, fluxos de aprovação supervisionada (Human-in-the-Loop), engenharia de prompts rigorosa e persistência de conversas contextuais.
              </p>
              <div class="tech-tags">
                <span>LangChain</span> <span>Gemini SDK</span> <span>Multi-Tenant</span> <span>E2E Tests</span>
              </div>
            </div>
          </div>

          <!-- Especialidade 3 -->
          <div class="col-lg-4 col-md-6 mb-30">
            <div class="service-item wow fadeInUp delay-0-6s">
              <div class="service-icon"><i class="ri-database-2-line"></i></div>
              <h4>Bancos Vetoriais & Busca Semântica</h4>
              <p>
                Estruturação de pipelines de RAG (Retrieval-Augmented Generation), geração e indexação de embeddings de alta dimensionalidade para busca semântica veloz integrada a bancos relacionais.
              </p>
              <div class="tech-tags">
                <span>Vector Embeddings</span> <span>RAG</span> <span>Cosine Similarity</span>
              </div>
            </div>
          </div>

          <!-- Especialidade 4 -->
          <div class="col-lg-4 col-md-6 mb-30">
            <div class="service-item wow fadeInUp delay-0-2s">
              <div class="service-icon"><i class="ri-flow-chart"></i></div>
              <h4>Automação de Processos & Workflows</h4>
              <p>
                Eliminação de gargalos operacionais através da conexão distribuída de sistemas legados, APIs REST, webhooks e engines de automação em ambientes Linux de alta disponibilidade.
              </p>
              <div class="tech-tags">
                <span>Pipelines</span> <span>Webhooks</span> <span>Scripts Linux</span> <span>n8n</span>
              </div>
            </div>
          </div>

          <!-- Especialidade 5 -->
          <div class="col-lg-4 col-md-6 mb-30">
            <div class="service-item wow fadeInUp delay-0-4s">
              <div class="service-icon"><i class="ri-shield-keyhole-line"></i></div>
              <h4>Segurança, Auth & Rotação de Chaves</h4>
              <p>
                Implementação de autenticação robusta (Better Auth, OAuth, tokens de sessão), gerenciamento seguro de variáveis de ambiente com criptografia e rotação automatizada de segredos.
              </p>
              <div class="tech-tags">
                <span>Better Auth</span> <span>Secret Rotation</span> <span>OAuth</span>
              </div>
            </div>
          </div>

          <!-- Especialidade 6 -->
          <div class="col-lg-4 col-md-6 mb-30">
            <div class="service-item wow fadeInUp delay-0-6s">
              <div class="service-icon"><i class="ri-dashboard-3-line"></i></div>
              <h4>Interfaces de Alta Performance</h4>
              <p>
                Construção de aplicações frontend reativas e modernas com React 19, Next.js, Nuxt/Vue, Tailwind CSS e Framer Motion, aliando estética sofisticada à acessibilidade e tempos de carregamento instantâneos.
              </p>
              <div class="tech-tags">
                <span>React 19</span> <span>Next.js</span> <span>Nuxt 3</span> <span>Tailwind</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-area {
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

.section-title h2 {
  font-size: 36px;
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 14px;
}

.section-title p {
  color: #8b949e;
  font-size: 16px;
  max-width: 650px;
  margin: 0 auto 50px auto;
}

.service-item {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 14px;
  padding: 30px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: all 0.25s ease;
}

.service-item:hover {
  transform: translateY(-5px);
  border-color: #58a6ff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}

.service-icon {
  font-size: 32px;
  color: #58a6ff;
  margin-bottom: 18px;
}

.service-item h4 {
  font-size: 19px;
  color: #ffffff;
  font-weight: 700;
  margin: 0 0 12px 0;
}

.service-item p {
  color: #8b949e;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 20px;
  flex-grow: 1;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  border-top: 1px solid #21262d;
  padding-top: 14px;
}

.tech-tags span {
  background: #0d1117;
  border: 1px solid #21262d;
  color: #79c0ff;
  font-size: 11px;
  font-family: monospace;
  padding: 3px 8px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .section-title h2 { font-size: 28px; }
  .service-item { padding: 22px; }
}
</style>
