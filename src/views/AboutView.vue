<template>
  <div class="about-page">
    <NavMenu class="nav" />
    
    <!-- Hero Section -->
    <section class="hero-section">
      <img src="/images/14.png"
           alt="Горы Осетии" 
           class="hero-img">
      <div class="hero-content">
        <h1 class="hero-title">Наша история</h1>
        <p class="hero-subtitle">Создавая незабываемые впечатления в горах Осетии с 2015 года</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <h2 class="section-title">Наша миссия</h2>
      <div class="mission-grid">
        <div v-for="(item, index) in missionItems" :key="index" class="mission-card">
          <div class="mission-icon">{{ item.emoji }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.text }}</p>
        </div>
      </div>
    </section>

    <!-- Team Section (используем Swiper из галереи) -->
    <section class="team-section">
      <h2 class="section-title">Наша команда</h2>
      <div class="swiper-container">
        <swiper
          :modules="[Navigation]"
          :slides-per-view="1"
          :space-between="30"
          :breakpoints="teamBreakpoints"
          navigation
          class="swiper"
        >
          <swiper-slide v-for="(member, index) in teamMembers" :key="index">
            <div class="team-card">
              <img :src="member.photo" :alt="member.name" class="team-photo">
              <h3>{{ member.name }}</h3>
              <p class="position">{{ member.position }}</p>
              <p class="bio">{{ member.bio }}</p>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <h2 class="section-title">Наши ценности</h2>
      <div class="values-grid">
        <div v-for="(value, index) in values" :key="index" class="value-card">
          <span class="number">0{{ index+1 }}</span>
          <h3>{{ value.title }}</h3>
          <p>{{ value.text }}</p>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
      <div v-for="(stat, index) in stats" :key="index" class="stat-card">
        <span class="number">{{ stat.value }}+</span>
        <p>{{ stat.label }}</p>
      </div>
    </section>

    <!-- Используем существующий Slider -->
    <div class="slider">
      <Slider />
    </div>

    <!-- Используем существующий Discription -->
    <Discription :articleText="aboutText" />

    <!-- Footer -->
    <footer class="footer">
      <p>© 2023 Туроператор "Осетия". Все права защищены.</p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import NavMenu from '@/components/header/NavMenu.vue';
import Slider from '@/components/swiper/Slider.vue';
import Discription from '@/components/main-content/Discription.vue';

// Данные
const missionItems = ref([
  { emoji: '🏔️', title: 'Открывать красоту', text: 'Показываем настоящую Осетию без туристических клише' },
  { emoji: '❤️', title: 'Заботиться', text: 'Индивидуальный подход к каждому гостю' },
  { emoji: '🛡️', title: 'Гарантировать безопасность', text: 'Все маршруты проверены, оборудование сертифицировано' },
  { emoji: '⭐', title: 'Создавать впечатления', text: 'Делаем так, чтобы вы захотели вернуться снова' }
]);

const teamMembers = ref([
  {
    photo: 'https://randomuser.me/api/portraits/men/32.jpg',
    name: 'Алан Тагаев',
    position: 'Основатель',
    bio: 'Местный житель с 15-летним опытом в горном туризме'
  },
  {
    photo: 'https://randomuser.me/api/portraits/women/44.jpg',
    name: 'Зарина Дзассохова',
    position: 'Гид',
    bio: 'Знает все тропы и легенды горной Осетии'
  },
  {
    photo: 'https://randomuser.me/api/portraits/men/75.jpg',
    name: 'Тимур Келехсаев',
    position: 'Логист',
    bio: 'Организует комфортные маршруты и проживание'
  }
]);

const values = ref([
  { title: 'Аутентичность', text: 'Показываем настоящую жизнь горных сел' },
  { title: 'Безопасность', text: 'Тщательная проверка всех маршрутов' },
  { title: 'Экологичность', text: 'Соблюдаем принципы устойчивого туризма' },
  { title: 'Традиции', text: 'Знакомим с культурой осетинского народа' }
]);

const stats = ref([
  { value: 2500, label: 'Довольных туристов' },
  { value: 45, label: 'Проведенных туров' },
  { value: 100, label: 'Пройденных маршрутов' },
  { value: 12, label: 'Профессиональных гидов' }
]);

const teamBreakpoints = {
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 }
};

const aboutText = ref(`
  <h2>О нашем туроператоре</h2>
  <p>Мы - команда местных жителей, влюбленных в свою землю. С 2015 года организуем туры по самым живописным уголкам Северной Осетии.</p>
  <p><strong>Наши преимущества:</strong></p>
  <ul>
    <li>Только проверенные маршруты</li>
    <li>Местные гиды - знатоки региона</li>
    <li>Авторские программы</li>
    <li>Полное сопровождение</li>
  </ul>
`);
</script>

<style scoped>
/* Общие стили */
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
  margin: 2rem 0;
}

/* Hero Section */
.hero-section {
  position: relative;
  height: 70vh;
  margin-bottom: 3rem;
}

.hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.7);
}

.hero-content {
  position: absolute;
  bottom: 10%;
  left: 10%;
  color: white;
  max-width: 600px;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.5rem;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
}

/* Mission Section */
.mission-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 3rem;
}

.mission-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.mission-card:hover {
  transform: translateY(-10px);
}

.mission-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

/* Team Section */
.swiper-container {
  padding: 0 2rem 3rem;
}

.team-card {
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.team-photo {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 3px solid #1D68F0;
}

.position {
  color: #1D68F0;
  font-weight: bold;
  margin: 0.5rem 0;
}

.bio {
  color: #666;
}

/* Values Section */
.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 2rem;
  margin-bottom: 3rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  position: relative;
}

.number {
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.5rem;
  color: #1D68F0;
  opacity: 0.3;
}

/* Stats Section */
.stats-section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  padding: 3rem 2rem;
  background: #1D68F0;
  color: white;
  text-align: center;
  margin-bottom: 3rem;
}

.stat-card .number {
  font-size: 2.5rem;
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

/* Footer */
.footer {
  text-align: center;
  padding: 2rem;
  background: #f5f5f5;
  margin-top: 3rem;
}

/* Адаптивность */
@media (max-width: 768px) {
  .hero-content {
    left: 5%;
    right: 5%;
  }
  
  .hero-title {
    font-size: 2rem;
  }
  
  .hero-subtitle {
    font-size: 1.2rem;
  }
}
</style>