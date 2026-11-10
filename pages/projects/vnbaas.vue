<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import CommonScrollTop from "~/components/common/ScrollTop.vue";

useHead({
  title: "VNbaas — Backend-as-a-Service & Database Engine | Vinícius Silva",
  meta: [
    {
      name: "description",
      content: "Case study da arquitetura técnica do VNbaas: plataforma própria de Backend-as-a-Service e console de banco de dados com Editor SQL, AI Vector Embeddings (Gemini SDK), Realtime WebSockets, Storage e Auth construída em React 19, Express e PostgreSQL."
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
            <span class="current">VNbaas</span>
          </div>

          <div class="hero-header">
            <div class="status-pill">
              <span class="status-dot"></span> Plataforma & Engine Proprietária
            </div>
            <h1 class="project-title">VNbaas — Backend-as-a-Service</h1>
            <p class="project-tagline">
              Plataforma completa de Backend-as-a-Service e console de banco de dados com editor SQL interativo, busca vetorial assistida por IA (Gemini SDK), canais de Realtime, Storage e autenticação integrada.
            </p>
            
            <div class="action-buttons">
              <a 
                href="https://github.com/vn-24k/VnBaas" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn-primary"
              >
                <i class="ri-github-line"></i> Inspecionar Repositório (vn-24k/VnBaas)
              </a>
              <NuxtLink to="/contact" class="btn-secondary">
                <i class="ri-terminal-window-line"></i> Solicitar Demonstração Técnica
              </NuxtLink>
            </div>
          </div>
        </div>
      </section>

      <!-- Grid de Metadados Técnicos -->
      <section class="meta-section">
        <div class="container">
          <div class="meta-grid">
            <div class="meta-card">
              <span class="meta-label"><i class="ri-code-box-line"></i> Frontend Stack</span>
              <p class="meta-value">React 19, Vite, Tailwind CSS v4, Motion, Lucide</p>
            </div>
            <div class="meta-card">
              <span class="meta-label"><i class="ri-server-line"></i> Servidor Backend</span>
              <p class="meta-value">Node.js, Express, TypeScript, cliente nativo <code>pg</code></p>
            </div>
            <div class="meta-card">
              <span class="meta-label"><i class="ri-brain-line"></i> Vetores & IA</span>
              <p class="meta-value">@google/genai (Gemini SDK) para Embeddings Semânticos</p>
            </div>
            <div class="meta-card">
              <span class="meta-label"><i class="ri-line-chart-line"></i> Telemetria & Gráficos</span>
              <p class="meta-value">Recharts Analytics & Audit Logs em tempo real</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Conteúdo Técnico Aprofundado -->
      <section class="deep-dive-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <!-- A Proposta e Visão -->
              <article class="content-block">
                <span class="section-badge">Origem & Motivação</span>
                <h2>Por que construir um BaaS e Console de Banco Próprio?</h2>
                <p>
                  A maioria dos desenvolvedores utiliza soluções prontas de terceiros como caixas-pretas. O objetivo central de desenvolver o **VNbaas** foi dominar a mecânica fundamental que sustenta bancos relacionais na nuvem, abstrações de schema, motores de query SQL em tempo de execução e a nova fronteira de **busca semântica com vetores de IA**.
                </p>
                <p>
                  O VNbaas não é apenas uma interface visual: ele oferece um **servidor Express acoplado ao driver nativo do PostgreSQL (<code>pg</code>)**, expondo APIs para criação dinâmica de tabelas, execução de queries arbitrárias com sanitização e streaming de alterações em tempo real via WebSockets.
                </p>
              </article>

              <!-- Módulos e Funcionalidades Reais -->
              <article class="content-block">
                <span class="section-badge">Módulos Implementados</span>
                <h2>Arquitetura Modular dos Módulos do VNbaas</h2>
                
                <div class="module-card">
                  <div class="module-header">
                    <i class="ri-flashlight-line"></i>
                    <h4>AI Vector Tab — Busca Semântica Vetorial</h4>
                  </div>
                  <p>
                    Módulo construído com o pacote <code>@google/genai</code>. Permite transformar dados textuais do banco em vetores de alta dimensionalidade (embeddings) e realizar buscas por similaridade cosseno diretamente nos registros relacionais, possibilitando recursos avançados de busca inteligente e Retrieval-Augmented Generation (RAG).
                  </p>
                </div>

                <div class="module-card">
                  <div class="module-header">
                    <i class="ri-terminal-box-line"></i>
                    <h4>SQL Query Console & Database Tab</h4>
                  </div>
                  <p>
                    Console interativo com destaque de sintaxe para execução direta de comandos SQL (DDL, DML, DQL). Retorna a grade estruturada de resultados, tempo de execução da query em milissegundos e contadores de linhas afetadas, além do explorador visual de schemas com chave primária e tipos de coluna.
                  </p>
                </div>

                <div class="module-card">
                  <div class="module-header">
                    <i class="ri-broadcast-line"></i>
                    <h4>Realtime Engine & Audit Logs</h4>
                  </div>
                  <p>
                    Transmissão em tempo real de mutações de banco de dados para clientes conectados via WebSockets. Acompanhado de um painel de trilhas de auditoria (<code>AuditLogsTab.tsx</code>) que documenta todas as mutações realizadas para prevenção de acessos indevidos.
                  </p>
                </div>

                <div class="module-card">
                  <div class="module-header">
                    <i class="ri-folder-shield-2-line"></i>
                    <h4>Infraestrutura de Auth, Storage & Functions</h4>
                  </div>
                  <p>
                    Gerenciamento visual de usuários e autenticação, painel de buckets para armazenamento de objetos e console para cadastro e disparo de serverless edge functions.
                  </p>
                </div>
              </article>
            </div>

            <!-- Sidebar Técnica -->
            <div class="col-lg-4">
              <aside class="project-sidebar">
                <div class="sidebar-widget">
                  <h3>Ficha Técnica da Aplicação</h3>
                  <div class="spec-item">
                    <span class="spec-label">Categoria</span>
                    <span class="spec-val">BaaS / Database Management</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Camada Web</span>
                    <span class="spec-val">React 19, Tailwind CSS v4, Motion</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Backend</span>
                    <span class="spec-val">Node.js Express + pg Client</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">AI Engine</span>
                    <span class="spec-val">Google GenAI SDK (Gemini)</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Data Viz</span>
                    <span class="spec-val">Recharts Analytics</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Database</span>
                    <span class="spec-val">PostgreSQL Engine</span>
                  </div>
                  <div class="spec-item">
                    <span class="spec-label">Repositório</span>
                    <span class="spec-val">vn-24k/VnBaas</span>
                  </div>
                </div>

                <div class="sidebar-widget cta-widget">
                  <h4>Interessado no código?</h4>
                  <p>O repositório completo com todos os módulos está disponível para revisão de engenharia.</p>
                  <a 
                    href="https://github.com/vn-24k/VnBaas" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="btn-sidebar"
                  >
                    Abrir no GitHub <i class="ri-arrow-right-up-line"></i>
                  </a>
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
  background: radial-gradient(circle at 50% 0%, rgba(62, 207, 142, 0.12), transparent 70%);
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
  color: #3ecf8e;
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
  background: rgba(62, 207, 142, 0.15);
  border: 1px solid rgba(62, 207, 142, 0.35);
  color: #3ecf8e;
  font-size: 13px;
  font-weight: 600;
  padding: 5px 14px;
  border-radius: 20px;
  margin-bottom: 16px;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #3ecf8e;
  border-radius: 50%;
  box-shadow: 0 0 10px #3ecf8e;
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
  color: #3ecf8e;
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

.meta-value code {
  background: #21262d;
  color: #79c0ff;
  padding: 2px 6px;
  border-radius: 4px;
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
  color: #3ecf8e;
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

.module-card {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 22px;
  margin-bottom: 18px;
  transition: border-color 0.2s ease;
}

.module-card:hover {
  border-color: #3ecf8e;
}

.module-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 10px;
}

.module-header i {
  font-size: 22px;
  color: #3ecf8e;
}

.module-header h4 {
  font-size: 17px;
  color: #ffffff;
  font-weight: 600;
  margin: 0;
}

.module-card p {
  color: #8b949e;
  font-size: 14px;
  line-height: 1.6;
  margin: 0;
}

.module-card code {
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

.cta-widget {
  background: linear-gradient(145deg, #161b22, #18261e);
  border-color: #2ea04333;
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
  background: #238636;
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
  background: #2ea043;
  color: #ffffff;
}

@media (max-width: 768px) {
  .project-title { font-size: 32px; }
  .project-tagline { font-size: 16px; }
}
</style>
