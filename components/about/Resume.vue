<template>
  <section id="resume" class="resume-area">
    <div class="container">
      <div class="resume-items">
        <div class="row">
          <!-- Coluna Experiência Real -->
          <div class="col-xl-6 col-md-6 mb-40">
            <div class="single-resume">
              <span class="column-badge"><i class="ri-briefcase-line"></i> Atuação Profissional</span>
              <h2>Experiência Técnica</h2>
              
              <div class="experience-list">
                <div class="resume-item wow fadeInUp delay-0-3s">
                  <div class="icon"><i class="ri-cpu-line"></i></div>
                  <div class="content">
                    <span class="years">2025 - Presente</span>
                    <h4>Engenheiro de Software & Sistemas de IA</h4>
                    <span class="company">Projetos Independentes, SaaS & Consultoria</span>
                    <p class="desc">
                      Desenvolvimento de plataformas SaaS completas (como AI Command Center e VNbaas). Implementação de pipelines multi-tenant, integração de LLMs com tool-calling rastreável, supervisão Human-in-the-Loop e bancos PostgreSQL com Drizzle ORM.
                    </p>
                  </div>
                </div>

                <div class="resume-item wow fadeInUp delay-0-4s">
                  <div class="icon"><i class="ri-database-2-line"></i></div>
                  <div class="content">
                    <span class="years">2024 - 2025</span>
                    <h4>Desenvolvedor de Sistemas & Analista</h4>
                    <span class="company">Sistemas Corporativos & Ambientes Críticos</span>
                    <p class="desc">
                      Desenvolvimento e sustentação de sistemas utilizando C# e Microsoft SQL Server. Modelagem de dados relacionais, criação de queries complexas (CRUD, índices, procedures), redução de incidentes e otimização de performance em produção.
                    </p>
                  </div>
                </div>

                <div class="resume-item wow fadeInUp delay-0-5s">
                  <div class="icon"><i class="ri-flow-chart"></i></div>
                  <div class="content">
                    <span class="years">2023 - 2024</span>
                    <h4>Especialista em Automação & Workflows</h4>
                    <span class="company">Integração de Sistemas & Produtividade</span>
                    <p class="desc">
                      Construção de fluxos de automação distribuídos conectando APIs, webhooks, Make.com, n8n e scripts Python em ambientes Linux para eliminação de gargalos operacionais.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Coluna Formação e Competências -->
          <div class="col-xl-6 col-md-6 mb-40">
            <div class="single-resume">
              <span class="column-badge"><i class="ri-graduation-cap-line"></i> Base Acadêmica</span>
              <h2>Formação & Especializações</h2>
              
              <div class="experience-list">
                <div class="resume-item wow fadeInUp delay-0-3s">
                  <div class="icon"><i class="ri-book-read-line"></i></div>
                  <div class="content">
                    <span class="years">Graduação em Andamento</span>
                    <h4>Sistemas de Informação & Engenharia de Software</h4>
                    <span class="company">Formação Superior em Tecnologia</span>
                    <p class="desc">
                      Fundamentos sólidos de algoritmos, estruturas de dados, engenharia de requisitos, arquitetura de computadores e governança de software.
                    </p>
                  </div>
                </div>

                <div class="resume-item wow fadeInUp delay-0-4s">
                  <div class="icon"><i class="ri-award-line"></i></div>
                  <div class="content">
                    <span class="years">Especialização Contínua</span>
                    <h4>Engenharia de Dados, Backend & IA Moderna</h4>
                    <span class="company">Programas Técnicos Especializados</span>
                    <p class="desc">
                      Domínio prático de embeddings vetoriais (Gemini SDK), TypeScript avançado, Docker, testes automatizados ponta a ponta com Playwright e arquitetura de microsserviços.
                    </p>
                  </div>
                </div>

                <div class="resume-item wow fadeInUp delay-0-5s">
                  <div class="icon"><i class="ri-terminal-box-line"></i></div>
                  <div class="content">
                    <span class="years">Ambientes & Prática Diária</span>
                    <h4>Linux, Termux & Cloud Deployments</h4>
                    <span class="company">Infraestrutura Ágil</span>
                    <p class="desc">
                      Desenvolvimento nativo em ecossistemas Linux, shells bash/zsh, orquestração de containers, Git avançado e automação de deploys na Vercel e Railway.
                    </p>
                  </div>
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
.resume-area {
  padding: 50px 0;
  border-top: 1px solid #21262d;
  background: #0d1117;
}

.column-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(62, 207, 142, 0.1);
  border: 1px solid rgba(62, 207, 142, 0.25);
  color: #3ecf8e;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 20px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.single-resume h2 {
  font-size: 26px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 30px;
}

.experience-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.resume-item {
  display: flex;
  gap: 18px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 22px;
  transition: all 0.25s ease;
}

.resume-item:hover {
  border-color: #58a6ff;
  transform: translateX(4px);
}

.resume-item .icon {
  font-size: 24px;
  color: #58a6ff;
  flex-shrink: 0;
  margin-top: 2px;
}

.resume-item .years {
  display: inline-block;
  background: #21262d;
  color: #79c0ff;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 6px;
  margin-bottom: 8px;
}

.resume-item h4 {
  font-size: 17px;
  color: #ffffff;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.resume-item .company {
  display: block;
  font-size: 13px;
  color: #8b949e;
  margin-bottom: 10px;
}

.resume-item .desc {
  font-size: 14px;
  color: #a2abb5;
  line-height: 1.6;
  margin: 0;
}
</style>
