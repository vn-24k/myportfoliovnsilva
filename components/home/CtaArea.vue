<template>
  <section class="call-to-action-area">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="call-to-action-part wow fadeInUp delay-0-2s text-center">
            <h2>
              Software confiável, arquitetura limpa e entrega de alto impacto.
            </h2>
            <p>
              Pronto para transformar requisitos complexos em sistemas escaláveis, agentes autônomos supervisionados e backends estáveis.
            </p>
            <div class="hero-btns">
              <NuxtLink to="/contact" class="theme-btn cta-btn">
                Iniciar Conversa Técnica <i class="ri-chat-3-line"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.call-to-action-area {
  padding: 80px 0;
  background: #0f1114;
}

.call-to-action-part {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 20px;
  padding: 60px 30px;
  max-width: 900px;
  margin: 0 auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
  transition: border-color 0.25s ease;
}

.call-to-action-part:hover {
  border-color: rgba(88, 166, 255, 0.4);
}

.call-to-action-part h2 {
  font-size: 32px;
  color: #ffffff;
  font-weight: 800;
  margin-bottom: 16px;
  line-height: 1.3;
}

.call-to-action-part p {
  color: #8b949e;
  font-size: 16px;
  max-width: 650px;
  margin: 0 auto 30px auto;
  line-height: 1.6;
}

.cta-btn {
  background: #238636;
  border: 1px solid rgba(46, 160, 67, 0.4);
  color: #ffffff !important;
  font-weight: 600;
  padding: 14px 32px;
  border-radius: 10px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 14px rgba(35, 134, 54, 0.35);
  transition: all 0.2s ease;
  text-decoration: none;
}

.cta-btn:hover {
  background: #2ea043;
  box-shadow: 0 6px 20px rgba(46, 160, 67, 0.45);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .call-to-action-part h2 { font-size: 24px; }
  .call-to-action-part { padding: 40px 20px; }
}
</style>
