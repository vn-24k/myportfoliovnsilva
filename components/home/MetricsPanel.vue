<template>
  <section class="metrics-section">
    <div class="container">
      <div class="metrics-wrapper">
        <div class="metric-item">
          <span class="metric-number">5+</span>
          <span class="metric-label">Anos de Backend</span>
        </div>
        <div class="metric-item">
          <span class="metric-number">100k+</span>
          <span class="metric-label">Requisições/dia</span>
        </div>
        <div class="metric-item">
          <span class="metric-number">15+</span>
          <span class="metric-label">IA Modelos</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.metrics-section { padding: 60px 0; background: #0f1114; }
.metrics-wrapper { 
  display: flex; justify-content: space-around; flex-wrap: wrap;
  background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1); padding: 40px; border-radius: 25px;
}
.metric-item { text-align: center; }
.metric-number { display: block; font-size: 2.5rem; font-weight: 700; color: #fff; }
.metric-label { font-size: 0.9rem; color: #aaa; text-transform: uppercase; letter-spacing: 1px; }
</style>

