<template>
  <section class="metrics-section">
    <div class="container">
      <div class="metrics-wrapper">
        <div class="metric-item">
          <div class="metric-top">
            <i class="ri-database-2-line metric-icon"></i>
            <span class="metric-number">20+</span>
          </div>
          <span class="metric-label">Migrações de Banco (Drizzle)</span>
          <span class="metric-sub">Schemas relacionais versionados</span>
        </div>

        <div class="metric-divider"></div>

        <div class="metric-item">
          <div class="metric-top">
            <i class="ri-shield-keyhole-line metric-icon"></i>
            <span class="metric-number">100%</span>
          </div>
          <span class="metric-label">Isolamento Multi-Tenant</span>
          <span class="metric-sub">Validado via testes E2E Playwright</span>
        </div>

        <div class="metric-divider"></div>

        <div class="metric-item">
          <div class="metric-top">
            <i class="ri-brain-line metric-icon"></i>
            <span class="metric-number">Full RAG</span>
          </div>
          <span class="metric-label">Embeddings & Busca Vetorial</span>
          <span class="metric-sub">Gemini SDK + PostgreSQL</span>
        </div>

        <div class="metric-divider"></div>

        <div class="metric-item">
          <div class="metric-top">
            <i class="ri-pulse-line metric-icon"></i>
            <span class="metric-number">99.9%</span>
          </div>
          <span class="metric-label">Disponibilidade Operacional</span>
          <span class="metric-sub">Deploys contínuos Vercel & Railway</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.metrics-section { 
  padding: 40px 0; 
  background: #0b0e14; 
}

.metrics-wrapper { 
  display: grid;
  grid-template-columns: 1fr auto 1fr auto 1fr auto 1fr;
  align-items: center;
  background: #161b22;
  border: 1px solid #30363d;
  padding: 32px 40px; 
  border-radius: 20px;
  gap: 20px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: border-color 0.25s ease;
}

.metrics-wrapper:hover {
  border-color: rgba(88, 166, 255, 0.4);
}

.metric-divider {
  width: 1px;
  height: 50px;
  background: #21262d;
}

.metric-item { 
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.metric-top {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 6px;
}

.metric-icon {
  font-size: 24px;
  color: #58a6ff;
}

.metric-number { 
  font-size: 2.2rem; 
  font-weight: 800; 
  color: #ffffff;
  letter-spacing: -0.5px;
}

.metric-label { 
  font-size: 13px; 
  color: #f0f6fc; 
  font-weight: 600;
  margin-bottom: 4px;
}

.metric-sub {
  font-size: 11px;
  color: #8b949e;
}

@media (max-width: 991px) {
  .metrics-wrapper {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
    padding: 25px;
  }
  .metric-divider {
    display: none;
  }
}

@media (max-width: 576px) {
  .metrics-wrapper {
    grid-template-columns: 1fr;
    gap: 24px;
  }
}
</style>
