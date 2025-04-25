<template>
  <div class="ios-style-page">
    <!-- Hero-блок (с видео) -->
    <section class="hero">
      <video autoplay muted loop poster="/images/hero-poster.png" class="hero-video">
        <source src="/videos/hero-background.mov" type="video/mp4">
      </video>
      <div class="hero-content">
        <h1>Осетия ждёт вас!</h1>
        <p>Идеальный отдых без забот</p>
        <div class="hero-buttons">
          <button class="ios-button ios-button-primary">Подобрать тур</button>
          <button class="ios-button ios-button-outline">Смотреть видео</button>
        </div>
      </div>
    </section>

    <!-- Блок доверия (гарантии) -->
    <section class="trust-section">
      <div class="trust-item">
        <div class="trust-icon">⭐️</div>
        <p>100+ довольных гостей</p>
      </div>
      <div class="trust-item">
        <div class="trust-icon">💰</div>
        <p>Фиксированная цена</p>
      </div>
      <div class="trust-item">
        <div class="trust-icon">🛡️</div>
        <p>Безопасность</p>
      </div>
      <div class="trust-item">
        <div class="trust-icon">📞</div>
        <p>Поддержка 24/7</p>
      </div>
    </section>

    <!-- Блок топ-3 тура -->
    <section class="tours-section">
      <h2 class="section-title">Популярные программы</h2>
      <p class="section-subtitle">Готовые маршруты с продуманным комфортом</p>
      
      <div class="tours-container">
        <div class="tour-card" v-for="(tour, index) in tours" :key="index">
          <div class="tour-badge" v-if="tour.badge">{{ tour.badge }}</div>
          <img :src="tour.image" :alt="tour.title" class="tour-image">
          <div class="tour-content">
            <h3>{{ tour.title }}</h3>
            <ul class="tour-features">
              <li v-for="(feature, i) in tour.features" :key="i">{{ feature }}</li>
            </ul>
            <div class="tour-price">{{ tour.price }}</div>
            <button class="ios-button ios-button-small">Подробнее</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Блок экскурсий -->
    <section class="excursions-section">
      <h2 class="section-title">Однодневные экскурсии</h2>
      <p class="section-subtitle">Попробуйте Осетию, если мало времени</p>
      
      <div class="excursion-cards">
        <div class="excursion-card" v-for="(excursion, index) in excursions" :key="index">
          <img :src="excursion.image" :alt="excursion.title" class="excursion-image">
          <div class="excursion-content">
            <h3>{{ excursion.title }}</h3>
            <p>{{ excursion.description }}</p>
            <div class="excursion-footer">
              <span class="price">{{ excursion.price }}</span>
              <button class="ios-button ios-button-small">Выбрать дату</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA-блок -->
    <section class="cta-section">
      <h2>Остались вопросы?</h2>
      <p>Наши консультанты помогут подобрать идеальный вариант</p>
      <button class="ios-button ios-button-large">Написать в WhatsApp</button>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tours: [
        {
          title: "Тур «Осетия за 4 дня»",
          image: "/images/tour1.jpg",
          features: ["3 экскурсии", "Проживание", "Питание включено"],
          price: "от 45 000 ₽",
          badge: "Хит"
        },
        {
          title: "Горное приключение",
          image: "/images/tour2.jpg",
          features: ["2 дня", "Внедорожники", "Ночевка у озера"],
          price: "от 28 000 ₽",
          badge: "Выбор гида"
        },
        {
          title: "Уикенд в горах",
          image: "/images/tour3.jpg",
          features: ["2 экскурсии", "Комфортное жилье", "Трансферы"],
          price: "от 32 000 ₽"
        }
      ],
      excursions: [
        {
          title: "Водопады и ущелья",
          image: "/images/excursion1.jpg",
          description: "Маршрут по самым живописным местам",
          price: "8 500 ₽"
        },
        {
          title: "Даргавс - город мертвых",
          image: "/images/excursion2.jpg",
          description: "История и потрясающие виды",
          price: "6 900 ₽"
        }
      ]
    }
  }
}
</script>

<style scoped>
/* iOS-подобные стили */
.ios-style-page {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  max-width: 100%;
  overflow-x: hidden;
  color: #1c1c1e;
  background: #f8f8f8;
}

/* Герой-блок */
.hero {
  position: relative;
  height: 90vh;
  overflow: hidden;
}

.hero-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.hero-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: white;
  text-align: center;
  padding: 0 20px;
  background: rgba(0, 0, 0, 0.4);
}

.hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.hero-buttons {
  display: flex;
  gap: 15px;
}

/* iOS-кнопки */
.ios-button {
  padding: 12px 24px;
  border-radius: 12px;
  font-weight: 500;
  font-size: 1rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.ios-button-primary {
  background: #007AFF;
  color: white;
}

.ios-button-outline {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.ios-button-small {
  padding: 8px 16px;
  font-size: 0.9rem;
}

.ios-button-large {
  padding: 16px 32px;
  font-size: 1.1rem;
}

/* Блок доверия */
.trust-section {
  display: flex;
  justify-content: space-around;
  padding: 30px 20px;
  background: white;
  margin: 20px;
  border-radius: 18px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.trust-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.trust-icon {
  font-size: 1.8rem;
}

/* Секции */
.section-title {
  font-size: 1.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 0.5rem;
}

.section-subtitle {
  font-size: 1rem;
  color: #8e8e93;
  text-align: center;
  margin-bottom: 2rem;
}

/* Карточки туров */
.tours-container {
  display: flex;
  gap: 20px;
  padding: 0 20px;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
}

.tour-card {
  min-width: 300px;
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  scroll-snap-align: start;
  position: relative;
}

.tour-badge {
  position: absolute;
  top: 15px;
  right: 15px;
  background: #FF3B30;
  color: white;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  z-index: 2;
}

.tour-image {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.tour-content {
  padding: 20px;
}

.tour-features {
  list-style: none;
  padding: 0;
  margin: 15px 0;
  color: #8e8e93;
}

.tour-features li {
  margin-bottom: 8px;
  font-size: 0.9rem;
}

.tour-price {
  font-size: 1.2rem;
  font-weight: 700;
  margin: 15px 0;
}

/* Карточки экскурсий */
.excursion-cards {
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 20px;
}

.excursion-card {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
}

.excursion-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.excursion-content {
  padding: 20px;
}

.excursion-content h3 {
  margin-bottom: 8px;
}

.excursion-content p {
  color: #8e8e93;
  margin-bottom: 15px;
  font-size: 0.9rem;
}

.excursion-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.price {
  font-weight: 700;
  font-size: 1.1rem;
}

/* CTA-блок */
.cta-section {
  text-align: center;
  padding: 60px 20px;
  margin-top: 40px;
  background: white;
}

.cta-section h2 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.cta-section p {
  color: #8e8e93;
  margin-bottom: 2rem;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Анимации */
.tour-card, .excursion-card {
  transition: transform 0.3s ease;
}

.tour-card:hover, .excursion-card:hover {
  transform: translateY(-5px);
}

/* Адаптивность */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2rem;
  }
  
  .trust-section {
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .trust-item {
    width: 45%;
  }
}
</style>