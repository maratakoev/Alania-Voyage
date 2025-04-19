<template>
  <section class="trust-section">
    <div class="container">
      <div class="badges-grid">
        <div 
          v-for="(item, index) in trustItems" 
          :key="index" 
          class="badge-card"
        >
          <div class="badge-icon" :style="gradientBackground">
            <svg 
              class="icon"
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24"
              fill="none" 
              stroke="currentColor"
              stroke-width="2" 
              stroke-linecap="round" 
              stroke-linejoin="round"
            >
              <component :is="'path'" v-for="(path, i) in item.iconPaths" :key="i" :d="path" />
            </svg>
          </div>
          
          <div class="badge-content">
            <h3 class="title">{{ item.title }}</h3>
            <p class="description">{{ item.description }}</p>
            <a 
              v-if="item.link" 
              :href="item.link" 
              class="link"
            >
              {{ item.linkText }} →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const gradientBackground = {
  background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)'
};

const trustItems = ref([
  {
    title: "Гиды-профессионалы",
    description: "10+ лет опыта работы в горах. Маршруты с минимальным риском, проверенные за 5 лет",
    link: "/guides",
    linkText: "Наши гиды",
    iconPaths: [
      'M18 10V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4',
      'M10 20l4-16m4 4l4 4-4 4m-8-8l-4 4 4 4'
    ]
  },
  {
    title: "Фиксированная цена",
    description: "Без скрытых доплат. Если цена изменится ДО тура - вернем разницу!",
    link: "/pricing",
    linkText: "Наши гарантии",
    iconPaths: [
      'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z'
    ]
  },
  {
    title: "Проверенное качество",
    description: "Реальные отзывы с фото. 93% туристов возвращаются к нам повторно",
    link: "/reviews",
    linkText: "Смотреть отзывы",
    iconPaths: [
      'M22 11.08V12a10 10 0 1 1-5.93-9.14',
      'M22 4L12 14.01l-3-3'
    ]
  },
  {
    title: "Гибкие условия",
    description: "Бесплатный перенос за 14 дней. 100% возврат при отмене по нашей вине",
    link: "/flexibility",
    linkText: "Условия бронирования",
    iconPaths: [
      'M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l2 2h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2z',
      'M8 3v4',
      'M16 3v4',
      'M3 10h18'
    ]
  }
]);
</script>

<style scoped>
.trust-section {
  background: linear-gradient(to bottom, #ffffff, #f9fafb);
  padding: 4rem 1rem;
}

.container {
  max-width: 72rem;
  margin: 0 auto;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.badge-card {
  background: white;
  border-radius: 0.75rem;
  padding: 1.5rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
  border: 1px solid rgba(0, 0, 0, 0.03);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.badge-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.badge-icon {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
  color: white;
}

.badge-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.title {
  font-size: 1.125rem;
  font-weight: 600;
  color: #111827;
}

.description {
  font-size: 0.875rem;
  color: #4b5563;
  line-height: 1.5;
}

.link {
  display: inline-block;
  font-size: 0.75rem;
  font-weight: 500;
  color: #2563eb;
  margin-top: 0.5rem;
  text-decoration: none;
  transition: color 0.2s ease;
}

.link:hover {
  color: #1d4ed8;
  text-decoration: underline;
}

@media (max-width: 640px) {
  .badges-grid {
    grid-template-columns: 1fr;
  }
  
  .trust-section {
    padding: 2rem 1rem;
  }
}
</style>