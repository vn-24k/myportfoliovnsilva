<script setup>
import { ref } from 'vue';

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitted = ref(false);

const handleSubmit = () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    alert('Por favor, preencha todos os campos obrigatórios.');
    return;
  }
  
  // Constrói mensagem para despacho via WhatsApp ou Mailto
  const textMsg = `Olá Vinícius, meu nome é ${form.value.name} (${form.value.email}).%0AAssunto: ${form.value.subject || 'Contato via Portfólio'}%0A%0A${form.value.message}`;
  const whatsappUrl = `https://wa.me/5511910896158?text=${textMsg}`;
  
  isSubmitted.value = true;
  window.open(whatsappUrl, '_blank');
};
</script>

<template>
  <section id="contact" class="contact-area innerpage-single-area">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <span class="sub-badge"><i class="ri-chat-smile-2-line"></i> Conexão Direta</span>
              <h2>Vamos Conversar sobre o Próximo Projeto</h2>
              <p>
                Disponível para contratação técnica, projetos de arquitetura de software, consultoria em IA e automações avançadas.
              </p>
            </div>
          </div>
        </div>

        <div class="row">
          <!-- Coluna Informações de Contato -->
          <div class="col-lg-4">
            <div class="contact-content-part wow fadeInUp delay-0-2s">
              <!-- Item 1: WhatsApp -->
              <div class="single-contact-card">
                <div class="contact-icon-box whatsapp-box">
                  <i class="ri-whatsapp-line"></i>
                </div>
                <div class="contact-info-text">
                  <h3>WhatsApp Direto</h3>
                  <a href="https://wa.me/5511910896158" target="_blank" rel="noopener noreferrer" class="contact-link">
                    +55 (11) 91089-6158
                  </a>
                  <span class="info-note">Resposta rápida em horário comercial</span>
                </div>
              </div>

              <!-- Item 2: E-mail -->
              <div class="single-contact-card">
                <div class="contact-icon-box mail-box">
                  <i class="ri-mail-line"></i>
                </div>
                <div class="contact-info-text">
                  <h3>E-mail Profissional</h3>
                  <a href="mailto:imports.vclb@gmail.com" class="contact-link">
                    imports.vclb@gmail.com
                  </a>
                  <span class="info-note">Para briefings técnicos e propostas</span>
                </div>
              </div>

              <!-- Item 3: Localização -->
              <div class="single-contact-card">
                <div class="contact-icon-box location-box">
                  <i class="ri-map-pin-line"></i>
                </div>
                <div class="contact-info-text">
                  <h3>Localização</h3>
                  <p class="location-text">São Paulo — SP, Brasil</p>
                  <span class="info-note">Disponível para atuação remota global</span>
                </div>
              </div>

              <!-- Redes Sociais -->
              <div class="social-connect-box">
                <h4>Perfis Oficiais</h4>
                <div class="social-links-grid">
                  <a href="https://github.com/vn-24k" target="_blank" rel="noopener noreferrer" class="social-pill">
                    <i class="ri-github-line"></i> GitHub: vn-24k
                  </a>
                  <a href="https://linkedin.com/in/viniciussilva" target="_blank" rel="noopener noreferrer" class="social-pill">
                    <i class="ri-linkedin-fill"></i> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Coluna Formulário Funcional -->
          <div class="col-lg-8">
            <div class="contact-form-wrapper wow fadeInUp delay-0-4s">
              <form @submit.prevent="handleSubmit" class="main-contact-form">
                <div v-if="isSubmitted" class="success-banner">
                  <i class="ri-checkbox-circle-fill"></i>
                  <span>Mensagem preparada! Abrindo conexão direta no WhatsApp...</span>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-20">
                    <div class="form-group">
                      <label for="contact-name">Seu Nome Completo *</label>
                      <input
                        type="text"
                        id="contact-name"
                        v-model="form.name"
                        required
                        class="form-control"
                        placeholder="Ex: Carlos Mendes"
                      />
                    </div>
                  </div>

                  <div class="col-md-6 mb-20">
                    <div class="form-group">
                      <label for="contact-email">Seu E-mail Corporativo *</label>
                      <input
                        type="email"
                        id="contact-email"
                        v-model="form.email"
                        required
                        class="form-control"
                        placeholder="carlos@empresa.com"
                      />
                    </div>
                  </div>

                  <div class="col-md-12 mb-20">
                    <div class="form-group">
                      <label for="contact-subject">Assunto Principal</label>
                      <input
                        type="text"
                        id="contact-subject"
                        v-model="form.subject"
                        class="form-control"
                        placeholder="Ex: Arquitetura de microsserviços / Contratação de Engenheiro"
                      />
                    </div>
                  </div>

                  <div class="col-md-12 mb-25">
                    <div class="form-group">
                      <label for="contact-message">Descrição do Projeto ou Oportunidade *</label>
                      <textarea
                        id="contact-message"
                        v-model="form.message"
                        required
                        rows="5"
                        class="form-control"
                        placeholder="Conte detalhes sobre os requisitos, o desafio técnico ou a proposta..."
                      ></textarea>
                    </div>
                  </div>

                  <div class="col-md-12">
                    <button type="submit" class="theme-btn submit-btn">
                      Enviar Mensagem Direta <i class="ri-send-plane-fill"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-area {
  padding: 120px 0 80px 0;
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

.single-contact-card {
  display: flex;
  gap: 16px;
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 18px;
  margin-bottom: 16px;
  transition: border-color 0.2s ease;
}

.single-contact-card:hover {
  border-color: #58a6ff;
}

.contact-icon-box {
  width: 44px;
  height: 44px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}

.whatsapp-box { background: rgba(35, 134, 54, 0.15); color: #3fb950; }
.mail-box { background: rgba(88, 166, 255, 0.15); color: #58a6ff; }
.location-box { background: rgba(227, 96, 73, 0.15); color: #e36049; }

.contact-info-text h3 {
  font-size: 14px;
  color: #8b949e;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 0 4px 0;
}

.contact-link {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
  display: block;
  transition: color 0.2s;
}

.contact-link:hover {
  color: #58a6ff;
}

.location-text {
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.info-note {
  font-size: 12px;
  color: #6e7681;
  display: block;
  margin-top: 4px;
}

.social-connect-box {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 12px;
  padding: 18px;
  margin-top: 20px;
}

.social-connect-box h4 {
  font-size: 13px;
  color: #8b949e;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 0 12px 0;
}

.social-links-grid {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.social-pill {
  display: flex;
  align-items: center;
  gap: 8px;
  background: #0d1117;
  border: 1px solid #21262d;
  color: #c9d1d9;
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  text-decoration: none;
  transition: all 0.2s;
}

.social-pill:hover {
  background: #21262d;
  color: #58a6ff;
  border-color: #58a6ff;
}

/* Formulário */
.contact-form-wrapper {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 16px;
  padding: 35px;
}

.form-group label {
  display: block;
  font-size: 13px;
  color: #c9d1d9;
  font-weight: 600;
  margin-bottom: 8px;
}

.form-control {
  background: #0d1117;
  border: 1px solid #30363d;
  border-radius: 8px;
  color: #ffffff;
  padding: 12px 16px;
  font-size: 14px;
  width: 100%;
  transition: border-color 0.2s ease;
}

.form-control:focus {
  background: #0d1117;
  border-color: #58a6ff;
  box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.15);
  color: #ffffff;
  outline: none;
}

.form-control::placeholder {
  color: #484f58;
}

.mb-20 { margin-bottom: 20px; }
.mb-25 { margin-bottom: 25px; }

.submit-btn {
  background: #238636;
  border: none;
  color: #ffffff;
  font-weight: 600;
  padding: 14px 28px;
  border-radius: 8px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background 0.2s ease;
}

.submit-btn:hover {
  background: #2ea043;
}

.success-banner {
  background: rgba(46, 160, 67, 0.15);
  border: 1px solid rgba(46, 160, 67, 0.4);
  color: #3fb950;
  padding: 12px 18px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  font-size: 14px;
}
</style>
