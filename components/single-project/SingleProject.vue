<template>
  <div class="single-project-page-design">
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center pb-30">
          <p class="category-tag">SISTEMAS INTELIGENTES - NEWS PLANET</p>
          <h1 class="main-title">Automação de Agentes de IA para Jornalismo</h1>
        </div>
      </div>
    </div>
    
    <div class="single-project-image">
      <img src="~/assets/images/projects/single-project.jpg" alt="News Planet IA" />
    </div>
    
    <div class="container pt-30">
      <div class="row">
        <div class="col-lg-4">
          <div class="single-project-page-left wow fadeInUp delay-0-2s">
            <div class="single-info">
              <p>Ano</p>
              <h3>2026</h3>
            </div>
            <div class="single-info">
              <p>Cliente</p>
              <h3>News Planet</h3>
            </div>
            <div class="single-info">
              <p>Stack</p>
              <h3>Python, AI Agents, Linux</h3>
            </div>
            <div class="single-info">
              <p>Tipo de Projeto</p>
              <h3>Full-stack & Automation</h3>
            </div>
          </div>
        </div>

        <div class="col-lg-8">
          <div class="single-project-page-right wow fadeInUp delay-0-4s">
            <div class="content-block">
              <h2>O Desafio Técnico</h2>
              <p>
                O objetivo deste projeto foi desenvolver um sistema de automação para o "News Planet", 
                capaz de gerar conteúdo jornalístico assistido por IA. O desafio central foi garantir 
                consistência visual no personagem "Repórter 404" e integrar pipelines de processamento 
                em ambientes Linux de baixa latência.
              </p>
            </div>
            
            <div class="content-block pt-20">
              <h2>Soluções Implementadas</h2>
              <p>
                Implementei uma arquitetura modular utilizando Python para a orquestração dos agentes, 
                garantindo que o fluxo de geração de texto e imagem fosse contínuo. Utilizei técnicas de 
                otimização de prompt engineering para manter a identidade visual do avatar, 
                assegurando que cada frame gerado respeitasse os padrões cinematográficos exigidos.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="row pt-50">
        <div class="col-lg-6 mb-30"><img class="gallery-img" src="~/assets/images/projects/single-project1.jpg" alt="IA 1" /></div>
        <div class="col-lg-6 mb-30"><img class="gallery-img" src="~/assets/images/projects/single-project2.jpg" alt="IA 2" /></div>
        <div class="col-lg-6 mb-30"><img class="gallery-img" src="~/assets/images/projects/single-project3.jpg" alt="IA 3" /></div>
        <div class="col-lg-6 mb-30"><img class="gallery-img" src="~/assets/images/projects/single-project4.jpg" alt="IA 4" /></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.category-tag { color: #e36049; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 10px; }
.main-title { font-size: 42px; color: #fff; font-weight: 800; }
.single-project-image img { width: 100%; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
.single-info { margin-bottom: 30px; border-bottom: 1px solid #2d3436; padding-bottom: 10px; }
.single-info p { color: #a0a0a0; margin-bottom: 5px; text-transform: uppercase; font-size: 12px; }
.single-info h3 { color: #fff; font-size: 18px; }
.content-block h2 { color: #fff; margin-bottom: 15px; font-size: 24px; }
.content-block p { color: #a0a0a0; line-height: 1.8; font-size: 17px; }
.gallery-img { width: 100%; border-radius: 15px; transition: 0.3s; }
.gallery-img:hover { transform: translateY(-10px); }
.pt-20 { padding-top: 20px; }
.pt-50 { padding-top: 50px; }
.mb-30 { margin-bottom: 30px; }
</style>
