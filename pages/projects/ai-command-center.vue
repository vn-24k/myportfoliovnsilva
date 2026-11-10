<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";

useHead({
  title: "AI Command Center — Orquestração & Governança de Agentes | Vinícius Silva",
  meta: [
    {
      name: "description",
      content: "Case study da arquitetura técnica do AI Command Center: plataforma SaaS enterprise para configuração, supervisão e execução rastreável de agentes de IA com isolamento multi-tenant, Drizzle ORM, Better Auth e testes E2E Playwright."
    }
  ]
});
</script>

<template>
  <div class="project-detail-page">
    <CommonScrollTop />
    <Header />

    <main class="project-main">
      <!-- Hero do Projeto -->
      <section class="project-hero-section">
        <div class="container">
          <div class="breadcrumbs">
            <NuxtLink to="/"><i class="ri-home-4-line"></i> Início</NuxtLink>
            <span class="sep">/</span>
            <NuxtLink to="/projects">Projetos</NuxtLink>
            <span class="sep">/</span>
            <span class="current">AI Command Center</span>
          </div>

          <div class="hero-header">
            <div class="status-pill">
              <span class="status-dot"></span> Deploy em Produção Ativo
            </div>
            <h1 class="project-title">AI Command Center</h1>
            <p class="project-tagline">
              Plataforma SaaS Enterprise para orquestração, governança e rastreabilidade rigorosa de agentes autônomos de IA em ambientes corporativos multi-tenant.
            </p>
            
            <div class="action-buttons">
              <a 
                href="https://ai-command-center-silk.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-primary"
              >
                <i class="ri-external-link-line"></i> Acessar Aplicação Ativa
              </a>
              <a 
                href="https://github.com/vn-24k/ai-command-center" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-secondary"
              >
                <i class="ri-github-line"></i> Repositório Privado (vn-24k)
              </a>
            </div>
          </div>
        </div>
      </section>

      <!-- Grid de Metadados Técnicos -->
      <section class="meta-section">
        <div class="container">
          <div class="meta-grid">
            <div class="meta-card">
              <span class="meta-label"><i class="ri-stack-line"></i> Arquitetura Core</span>
              <p class="meta-value">Next.js 15 (App Router), React 19, TypeScript</p>
            </div>
            <div class="meta-card">
              <span class="meta-label"><i class="ri-database-2-line"></i> Camada de Dados</span>
              <p class="meta-value">PostgreSQL + Drizzle ORM (20 Migrações)</p>
            </div>
            <div class="meta-card">
              <span class="meta-label"><i class="ri-shield-keyhole-line"></i> Autenticação & Tenant</span>
              <p class="meta-value">Better Auth com Plugin de Organizações & Workspaces</p>
            </div>
            <div class="meta-card">
              <span class="meta-label"><i class="ri-test-tube-line"></i> Qualidade & Testes</span>
              <p class="meta-value">Playwright E2E com Tenant Isolation Suite</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Conteúdo Técnico Aprofundado -->
      <section class="deep-dive-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <!-- O Problema Resolvido -->
              <article class="content-block">
                <span class="section-badge">Visão e Propósito</span>
                <h2>O Problema que o AI Command Center Resolve</h2>
                <p>
                  A maioria das equipes corporativas enfrenta uma barreira crítica ao adotar agentes de IA em fluxos reais: a **falta de auditabilidade e previsibilidade operacional**. Perguntas essenciais frequentemente ficavam sem resposta:
                </p>
                <ul class="problem-list">
                  <li><strong>Qual agente disparou a ação?</strong> Sob qual modelo, prompt versionado e conjunto de parâmetros?</li>
                  <li><strong>Quais ferramentas foram invocadas?</strong> Com quais payloads de entrada e quais saídas foram devolvidas?</li>
                  <li><strong>Quem autorizou operações destrutivas?</strong> Existia supervisão humana antes de alterar bancos ou despachar dados a terceiros?</li>
                  <li><strong>Isolamento de dados:</strong> Há garantia matemática e estrutural de que agentes de uma organização jamais acessem dados de outro inquilino?</li>
                </ul>
                <p>
                  O <strong>AI Command Center</strong> foi desenhado desde o primeiro commit para fornecer **governança técnica absoluta**: cada execução é isolada por organização, cada etapa de raciocínio é registrada de forma imutável, e ações críticas exigem aprovação explícita (Human-in-the-Loop).
                </p>
              </article>

              <!-- Arquitetura e Engenharia -->
              <article class="content-block">
                <span class="section-badge">Arquitetura de Software</span>
                <h2>Padrões Arquiteturais & Engenharia de Backend</h2>
                
                <div class="feature-box">
                  <div class="feature-icon"><i class="ri-git-branch-line"></i></div>
                  <div class="feature-body">
                    <h4>Pipeline de Banco de Dados com Drizzle ORM (20 Migrações)</h4>
                    <p>
                      Estrutura de dados altamente normalizada com suporte a versionamento cronológico. O schema engloba desde a modelagem de organizações e secret key rotation até o faturamento automatizado via webhooks do Mercado Pago e armazenamento de conversas com histórico contextual persistente.
                    </p>
                  </div>
                </div>

                <div class="feature-box">
                  <div class="feature-icon"><i class="ri-user-follow-line"></i></div>
                  <div class="feature-body">
                    <h4>Human-in-the-Loop & Aprovações Explícitas</h4>
                    <p>
                      Módulo dedicado de decisões (<code>approval-actions.ts</code>). Agentes inteligentes realizam o planejamento e propõem ações, mas qualquer comando categorizado com efeito colateral em bancos ou APIs de terceiros permanece bloqueado aguardando autorização com token do operador humano responsável.
                    </p>
                  </div>
                </div>

                <div class="feature-box">
                  <div class="feature-icon"><i class="ri-lock-password-line"></i></div>
                  <div class="feature-body">
                    <h4>Criptografia e Rotação Automatizada de Segredos</h4>
                    <p>
                      Script operacional dedicado para produção (<code>rotate-organization-secrets-production.mjs</code>). Chaves de API de provedores de IA e segredos de conexões nunca são expostos em texto plano nas respostas da API nem persistidos sem envelope de criptografia simétrica.
                    </p>
                  </div>
                </div>

                <div class="feature-box">
                  <div class="feature-icon"><i class="ri-checkbox-circle-line"></i></div>
                  <div class="feature-body">
                    <h4>Testes End-to-End Rigorosos com Playwright</h4>
                    <p>
                      Bateria de testes automatizados com suítes dedicadas de isolamento multi-inquilino (<code>e2e/tenant-isolation.spec.ts</code>). Cada release é testada para garantir que nenhuma consulta vaze dados entre organizações adjacentes no mesmo banco.
                    </p>
                  </div>
                </div>
              </article>
            </div>

            <!-- Sidebar Técnica -->
            <div class="col-lg-4">
              <aside class="project-sidebar">
                <div class="sidebar-widget">
                  <h3>Especificação Técnica</h3>
                  <div class="spec-item">
                    <span class="spec-label">Tipo</span>
                    <span class="spec-val">SaaS B2B / Plataforma de Governança</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Frontend</span>
                    <span class="spec-val">Next.js 15, React 19, Tailwind CSS</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Backend</span>
                    <span class="spec-val">Node.js Server Actions & API Routes</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Database</span>
                    <span class="spec-val">PostgreSQL Hospedado + Drizzle ORM</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Autenticação</span>
                    <span class="spec-val">Better Auth (OAuth GitHub + Credentials)</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Billing</span>
                    <span class="spec-val">Mercado Pago Webhooks & Grants</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">E2E Tests</span>
                    <span class="spec-val">Playwright Test Runner</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Status</span>
                    <span class="spec-val highlight-green">● Em Produção na Vercel</span>
                  </div>
                </div>

                <div class="sidebar-widget cta-widget">
                  <h4>Quer entender os bastidores?</h4>
                  <p>Posso apresentar o walkthrough da arquitetura e o código em uma conversa técnica.</p>
                  <NuxtLink to="/contact" class="btn-sidebar">
                    Agendar Conversa Técnica <i class="ri-chat-3-line"></i>
                  </NuxtLink>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped>
.project-detail-page {
  background-color: #0b0e14;
  color: #e6edf3;
  min-height: 100vh;
}

.project-main {
  padding-bottom: 80px;
}

.project-hero-section {
  padding: 130px 0 50px 0;
  background: radial-gradient(circle at 50% 0%, rgba(36, 150, 237, 0.12), transparent 70%);
  border-bottom: 1px solid #21262d;
}

.breadcrumbs {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  color: #8b949e;
  margin-bottom: 25px;
}

.breadcrumbs a {
  color: #8b949e;
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumbs a:hover {
  color: #58a6ff;
}

.breadcrumbs .sep {
  color: #484f58;
}

.breadcrumbs .current {
  color: #f0f6fc;
  font-weight: 500;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(46, 160, 67, 0.15);
  border: 1px solid rgba(46, 160, 67, 0.35);
  color: #3fb950;
  font-size: 13px;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #3fb950;
  border-radius: 50%;
  box-shadow: 0 0 10px #3fb950;
}

.project-title {
  font-size: 46px;
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -1px;
  margin-bottom: 16px;
}

.project-tagline {
  font-size: 20px;
  color: #8b949e;
  max-width: 850px;
  line-height: 1.5;
  margin-bottom: 30px;
}

.action-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  background: #238636;
  color: #ffffff;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-primary:hover {
  background: #2ea043;
  color: #ffffff;
  transform: translateY(-2px);
}

.btn-secondary {
  background: #21262d;
  color: #f0f6fc;
  border: 1px solid #30363d;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 15px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-secondary:hover {
  background: #30363d;
  border-color: #8b949e;
  color: #ffffff;
}

/* Meta Grid */
.meta-section {
  padding: 30px 0;
  background: #11151c;
  border-bottom: 1px solid #21262d;
}

.meta-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 20px;
}

.meta-card {
  background: #161b22;
  border: 1px solid #30363d;
  padding: 18px;
  border-radius: 10px;
}

.meta-label {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 12px;
  color: #58a6ff;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 6px;
}

.meta-value {
  color: #f0f6fc;
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  line-height: 1.4;
}

/* Deep Dive */
.deep-dive-section {
  padding: 60px 0;
}

.content-block {
  margin-bottom: 50px;
}

.section-badge {
  display: inline-block;
  font-size: 12px;
  color: #58a6ff;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1px;
  margin-bottom: 10px;
}

.content-block h2 {
  font-size: 30px;
  color: #ffffff;
  font-weight: 700;
  margin-bottom: 20px;
}

.content-block p {
  color: #a2abb5;
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 18px;
}

.problem-list {
  list-style: none;
  padding: 0;
  margin: 20px 0;
}

.problem-list li {
  position: relative;
  padding-left: 28px;
  margin-bottom: 14px;
  color: #c9d1d9;
  font-size: 15px;
  line-height: 1.6;
}

.problem-list li::before {
  content: "→";
  position: absolute;
  left: 0;
  top: 0;
  color: #f85149;
  font-weight: bold;
}

.feature-box {
  display: flex;
  gap: 20px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 22px;
  margin-bottom: 18px;
  transition: border-color 0.2s ease;
}

.feature-box:hover {
  border-color: #58a6ff;
}

.feature-icon {
  font-size: 28px;
  color: #58a6ff;
  flex-shrink: 0;
  margin-top: 2px;
}

.feature-body h4 {
  font-size: 17px;
  color: #ffffff;
  font-weight: 600;
  margin: 0 0 8px 0;
}

.feature-body p {
  color: #8b949e;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.feature-body code {
  background: #21262d;
  color: #79c0ff;
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 12px;
}

/* Sidebar */
.project-sidebar {
  position: sticky;
  top: 100px;
}

.sidebar-widget {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 24px;
}

.sidebar-widget h3 {
  font-size: 18px;
  color: #ffffff;
  font-weight: 700;
  margin: 0 0 20px 0;
  padding-bottom: 12px;
  border-bottom: 1px solid #21262d;
}

.spec-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #21262d;
  font-size: 13px;
}

.spec-item:last-child {
  border-bottom: none;
}

.spec-label {
  color: #8b949e;
}

.spec-val {
  color: #f0f6fc;
  font-weight: 500;
  text-align: right;
}

.highlight-green {
  color: #3fb950;
  font-weight: 600;
}

.cta-widget {
  background: linear-gradient(145deg, #161b22, #1b212c);
  border-color: #388bfd33;
}

.cta-widget h4 {
  font-size: 17px;
  color: #ffffff;
  margin: 0 0 10px 0;
  font-weight: 700;
}

.cta-widget p {
  font-size: 14px;
  color: #8b949e;
  line-height: 1.5;
  margin-bottom: 18px;
}

.btn-sidebar {
  background: #1f6feb;
  color: #ffffff;
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-decoration: none;
  transition: all 0.2s ease;
}

.btn-sidebar:hover {
  background: #388bfd;
  color: #ffffff;
}

@media (max-width: 768px) {
  .project-title { font-size: 32px; }
  .project-tagline { font-size: 16px; }
}
</style>
