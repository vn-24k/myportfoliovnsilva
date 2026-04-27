
<template>
  <section class="ai-status-area">
    <div class="container">
      <div class="status-card">
        <h3>System Status</h3>
        <div class="status-indicator">
          <span class="dot"></span> AI Agent: Online
        </div>
        <p>Model: Llama-3-8B | Status: Analyzing Data...</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.ai-status-area { padding: 50px 0; background: #0f1114; }
.status-card { 
  background: #1a1d21; border: 1px solid #333; 
  padding: 30px; border-radius: 20px; text-align: center;
}
.status-indicator { color: #00ff41; font-weight: bold; margin-bottom: 10px; }
.dot { height: 10px; width: 10px; background-color: #00ff41; border-radius: 50%; display: inline-block; animation: pulse 2s infinite; }
@keyframes pulse { 0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 65, 0.7); } 70% { transform: scale(1); box-shadow: 0 0 0 6px rgba(0, 255, 65, 0); } 100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(0, 255, 65, 0); } }
</style>
