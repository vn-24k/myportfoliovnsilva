<script setup>
import { ref } from 'vue';

const activeTech = ref(null);
const techs = {
  python: { name: 'Python', level: 'Expert', desc: 'Focado em IA & Automação', link: 'https://github.com/vn-24k/python-projects' },
  docker: { name: 'Docker', level: 'Advanced', desc: 'Containerização de aplicações', link: 'https://github.com/vn-24k' },
  aws: { name: 'AWS', level: 'Intermediate', desc: 'Cloud Infrastructure & Serverless', link: 'https://github.com/vn-24k' }
};

const selectTech = (tech) => { activeTech.value = techs[tech]; };
</script>

<template>
  <section class="playground-area">
    <div class="container">
      <h3 class="text-center">Tech Stack Playground</h3>
      <div class="tech-icons">
        <button @click="selectTech('python')">🐍</button>
        <button @click="selectTech('docker')">🐳</button>
        <button @click="selectTech('aws')">☁️</button>
      </div>
      
      <div v-if="activeTech" class="details-card">
        <h4>{{ activeTech.name }} - <small>{{ activeTech.level }}</small></h4>
        <p>{{ activeTech.desc }}</p>
        <a :href="activeTech.link" target="_blank" class="btn">Ver Projeto</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.playground-area { padding: 40px 0; background: #0f1114; color: #fff; }
.tech-icons { display: flex; justify-content: center; gap: 20px; margin: 20px 0; }
.tech-icons button { background: #1a1d21; border: 1px solid #333; font-size: 2rem; padding: 10px; border-radius: 10px; cursor: pointer; }
.details-card { background: #1a1d21; border: 1px solid #00ff41; padding: 20px; border-radius: 15px; margin: 0 auto; max-width: 300px; text-align: center; }
.btn { color: #00ff41; text-decoration: none; font-weight: bold; }
</style>
