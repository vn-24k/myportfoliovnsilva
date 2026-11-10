export default defineNuxtConfig({
  telemetry: false,

  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      title: 'Vinícius Silva | Engenheiro de Software Full Stack & Arquiteto de IA',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Portfólio de Vinícius Silva (Vinícius Caetano) — Engenheiro de Software Full Stack & Arquiteto de IA. Backends escaláveis, orquestração de agentes autônomos de IA e infraestruturas modernas.' 
        },
        { name: 'theme-color', content: '#0b0e14' },
        { property: 'og:site_name', content: 'Vinícius Silva Portfolio' },
        { property: 'og:title', content: 'Vinícius Silva | Engenheiro de Software Full Stack & Arquiteto de IA' },
        { property: 'og:description', content: 'Sistemas corporativos, orquestração de IA com tool calling auditável e arquiteturas backend resilientes.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://portfoliocaetano.vercel.app' },
        { property: 'og:image', content: '/favicon.png' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Vinícius Silva | Engenheiro de Software Full Stack & Arquiteto de IA' },
        { name: 'twitter:description', content: 'Sistemas corporativos, orquestração de IA com tool calling auditável e arquiteturas backend resilientes.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' }
      ]
    }
  },

  css: [ 
    "swiper/css/bundle",
    "@/assets/fonts/remixicon.css",
    "@/assets/css/nice-select.min.css",
    "@/assets/css/animate.min.css",
    "@/assets/css/spacing.css", 
    "bootstrap/dist/css/bootstrap.min.css",
    "@/assets/css/style.css",
    "@/assets/css/responsive.css",
  ],

  compatibilityDate: "2026-04-26",
});
