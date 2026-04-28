


<script setup>
import portfolio_img_1 from "~/assets/images/projects/work1.jpg";
import portfolio_img_2 from "~/assets/images/projects/work2.jpg";
import portfolio_img_3 from "~/assets/images/projects/work3.jpg";
import portfolio_img_4 from "~/assets/images/projects/work4.jpg";
import portfolio_img_5 from "~/assets/images/projects/work5.jpg";
import portfolio_img_6 from "~/assets/images/projects/work6.jpg";

const portfolio_data = [
  {
    id: 1,
    img: portfolio_img_1,
    category: "Backend & APIs",
    title: "IA e Orquestração de Agentes",
  },
  {
    id: 2,
    img: portfolio_img_2,
    category: "Gist.AI Summarizer",
    title: "Ferramenta de IA que processa grandes volumes de texto e gera resumos executivos com precisão.",
  },
  {
    id: 3,
    img: portfolio_img_3,
    category: "Marketing",
    title: "Identidade de Marca e Design de Movimento",
  },
  {
    id: 4,
    img: portfolio_img_4,
    category: "Agente de IA Cognitiva",
    title: "Assistente inteligente utilizando GPT-4 e Engenharia de Prompt para automação de tarefas complexas.",
  },
  {
    id: 5,
    img: portfolio_img_5,
    category: "Design",
    title: "Design de Aplicações",
  },
  {
    id: 6,
    img: portfolio_img_6,
    category: "Branding",
    title: "Desenvolvimento do Site",
  },
];

const categories = [
  "All",
  ...new Set(portfolio_data.map((item) => item.category)),
]; 

const activeCategory = ref("All");
const items = ref(portfolio_data); 

const filterItems = (cateItem) => {
  activeCategory.value = cateItem; 

  if (cateItem === "All") {
    items.value = portfolio_data;
  } else {
    const findItems = portfolio_data.filter(
      (findItem) => findItem.category === cateItem
    );
    items.value = findItems;
  }
};
 
const props = defineProps({
  cls: String, 
})


import { ref } from 'vue';
import ImagePopup from '~/components/common/ImagePopup.vue';
import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css';

const image_popup = ref(null);

function handleImagePopup(index) {
  image_popup.value.showImg(index);
}

 
</script>

 
 



<template>
  <div>
  <section id="portfolio" :class="`portfolio-area ${props.cls}`">
    <div class="container">
      <div class="container-inner">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="section-title text-center wow fadeInUp delay-0-2s">
              <h2>Works & Projects</h2>
              <p>
                Arquiteturas otimizadas e inteligência aplicada. Meu foco é integrar modelos de IA cognitiva a sistemas full-stack de alto desempenho. Projetos que combinam engenharia de software de ponta com inteligência artificial. Do backend ao deployment.
              </p>
            </div>
          </div>
        </div>
        <ul
          class="project-filter filter-btns-one justify-content-left pb-15 wow fadeInUp delay-0-2s"
        >
          <li v-for="(item, i) in categories" :key="i">
            <a
              @click="filterItems(item)"
              :class="`${item === activeCategory ? 'current' : ''}`"
            >
              <span>{{ item }}</span>
            </a>
            {{ " " }}
          </li>
        </ul>
        <div class="row project-masonry-active">
          <div
            v-for="(item, i) in items"
            :key="i"
            class="col-lg-4 col-md-6 item branding game"
          >
            <div class="project-item style-two wow fadeInUp delay-0-3s">
              <div class="project-image">
                <img :src="item.img" alt="Project" />
                <a style="cursor: pointer" @click.prevent="handleImagePopup(i)" class="details-btn"
                  ><i class="ri-arrow-right-up-line"></i
                ></a>
              </div>
              <div class="project-content">
                <span class="sub-title">{{ item.category }}</span>
                <h3>
                  <NuxtLink to="/single-project">{{ item.title }}</NuxtLink>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

    <!-- image popup start -->
    <ImagePopup ref="image_popup" :images="portfolio_data.map((item) => item.img)" />
  <!-- image popup end -->

</div>

</template>

 
