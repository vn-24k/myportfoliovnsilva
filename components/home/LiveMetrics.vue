<template>
  <section class="metrics-area">
    <div class="container">
      <div class="metrics-grid">
        <div class="metric-card">
          <span class="label">API Latency</span>
          <span class="value">24ms</span>
        </div>
        <div class="metric-card">
          <span class="label">CPU Load</span>
          <span class="value">12%</span>
        </div>
        <div class="metric-card">
          <span class="label">Uptime</span>
          <span class="value">99.9%</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.metrics-area { padding: 30px 0; background: #0f1114; }
.metrics-grid { display: flex; gap: 15px; justify-content: center; }
.metric-card { 
  background: #1a1d21; border: 1px solid #333; 
  padding: 15px 20px; border-radius: 12px; text-align: center; flex: 1;
}
.label { display: block; color: #888; font-size: 12px; text-transform: uppercase; }
.value { color: #fff; font-size: 18px; font-weight: bold; }
</style>
