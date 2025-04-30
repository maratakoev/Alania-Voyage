<template>
  <div class="about-page">
    <NavMenu class="nav" />
    <Content-title 
      :title="contentTitle" 
      :discription="contentTitleDiscription" 
      class="content-title"
    />
    <Title-image :imageSrc="imageSrc" />

    <!-- Philosophy Section -->
    <section class="philosophy-section">
      <h2 class="section-title">Наша философия</h2>
      <div class="philosophy-grid">
        <div v-for="(item, index) in philosophy" :key="index" class="philosophy-card">
          <div class="icon-wrapper">
            <span class="icon">{{ item.emoji }}</span>
          </div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <!-- Principles Section -->
    <section class="principles-section">
      <h2 class="section-title">Наши принципы</h2>
      <div class="tabs-container">
        <button 
          v-for="(tab, index) in tabs" 
          :key="index"
          @click="activeTab = index"
          :class="['tab-button', { active: activeTab === index }]"
        >
          {{ tab.label }}
        </button>
      </div>
      
      <transition name="fade" mode="out-in">
        <div class="tab-content" :key="activeTab">
          <h3>{{ tabs[activeTab].title }}</h3>
          <p>{{ tabs[activeTab].content }}</p>
        </div>
      </transition>
    </section>

    <!-- Slider -->
    <div class="slider">
      <Slider />
    </div>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavMenu from '@/components/header/NavMenu.vue';
import Slider from '@/components/swiper/Slider.vue';
import Footer from '@/components/main-content/Footer.vue';
import TitleImage from '@/components/main-content/TitleImage.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';

const imageSrc = new URL('/public/images/us.jpg', import.meta.url).href;
const contentTitle = 'Наша история';
const contentTitleDiscription = 'началась в 2010г';
const activeTab = ref(0);

// Данные для секций
const philosophy = ref([
  { 
    emoji: '🏔️', 
    title: 'Горы - наш дом', 
    text: 'Создаем доступные возможности для знакомства с Кавказом' 
  },
  { 
    emoji: '🛡️', 
    title: 'Безопасность прежде всего', 
    text: 'Сертифицированные гиды и проверенные маршруты' 
  },
  { 
    emoji: '🤝', 
    title: 'Ответственный подход', 
    text: 'Поддерживаем локальные сообщества и экологию' 
  },
  { 
    emoji: '🧭', 
    title: 'Индивидуальные маршруты', 
    text: 'Помогаем открыть свою уникальную Осетию' 
  }
]);

const tabs = ref([
  {
    label: 'Подход',
    title: 'Глубокое погружение в культуру',
    content: 'Мы создаем маршруты, которые позволяют не просто увидеть, а прочувствовать жизнь горной Осетии через взаимодействие с местными жителями, традиционную кухню и многовековые традиции.'
  },
  {
    label: 'Этика',
    title: 'Устойчивый туризм',
    content: 'Соблюдаем баланс между развитием туризма и сохранением природного наследия. 10% от прибыли направляем на экологические инициативы.'
  },
  {
    label: 'Цель',
    title: 'Вдохновлять через природу',
    content: 'Помогаем переосмыслить отношение к природе через личный опыт горных походов и осознанное путешествие.'
  }
]);
</script>

<style scoped>
.about-page {
  font-family: 'Arial', sans-serif;
  color: #333;
  max-width: 1400px;
  margin: 0 auto;
}

.nav {
  position: sticky;
  top: 0;
  z-index: 100;
}

.section-title {
  text-align: center;
  font-size: 2rem;
  color: #1D68F0;
  margin: 3rem 0;
  padding: 0 1rem;
}

/* Philosophy Section */
.philosophy-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 1rem;
  margin: 0 auto 4rem;
  max-width: 1200px;
}

.philosophy-card {
  padding: 2rem;
  border-radius: 16px;
  background: rgba(29, 104, 240, 0.05);
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.philosophy-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(29, 104, 240, 0.1);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: #1D68F0;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  font-size: 40px;
  line-height: 1;
}

/* Principles Section */
.principles-section {
  padding: 2rem 1rem 4rem;
  background: #f8f9ff;
  margin: 3rem 0;
}

.tabs-container {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.tab-button {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 30px;
  background: #e3e9ff;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: 500;
}

.tab-button.active {
  background: #1D68F0;
  color: white;
  transform: scale(1.05);
}

.tab-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
  background: white;
  border-radius: 16px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.tab-content h3 {
  color: #1D68F0;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}

/* Анимации */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Slider */
.slider {
  margin: 4rem 0;
}

@media (max-width: 768px) {
  .philosophy-grid {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
  
  .tab-button {
    width: 100%;
    max-width: 300px;
  }
  
  .section-title {
    font-size: 1.6rem;
  }
  .nav {
  margin-top: -70px;
}
}
</style>