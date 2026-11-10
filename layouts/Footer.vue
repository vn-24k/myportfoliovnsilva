<template>
  <footer class="main-footer">
    <div class="footer-bottom pt-50 pb-40">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="copyright-text">
              <p>
                © {{ new Date().getFullYear() }} <NuxtLink to="/">Vinícius Silva</NuxtLink>. Engenharia de Software & Sistemas Inteligentes.
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="copyright-text extra-copyright text-lg-end">
              <p>
                Construído com rigor arquitetural • São Paulo, Brasil •
                <a href="https://github.com/vn-24k" target="_blank" rel="noopener noreferrer">GitHub</a> •
                <a href="https://linkedin.com/in/viniciussilva" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.main-footer {
  background: #090c10;
  border-top: 1px solid #21262d;
}
.copyright-text p {
  color: #8b949e;
  font-size: 14px;
  margin: 0;
}
.copyright-text a {
  color: #58a6ff;
  text-decoration: none;
  transition: color 0.2s ease;
}
.copyright-text a:hover {
  color: #79c0ff;
  text-decoration: underline;
}
</style>
