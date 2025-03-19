<template>
  <div class="home">
    <Header @update:blurActive="handleBlurChange" ></Header>
    <div 
    v-show="isBlurActive" 
    class="blur-overlay"
    :class="{ 'fade-in': isBlurActive }"   

    ></div>
    <!-- <sub-header></sub-header> -->
    <main-content 
    title="Экскурсии"
    sub-title="Приезжайте наслаждайтесь"
    >
      <template #image>
        <img src="/images/image-second.jpg" alt="Image 1" class="main-content__image">
      </template>
    </main-content>

    <main-content 
    title="Проживание"
    sub-title="Лучшие виды из окна"
    >
      <template #image>
        <img src="/images/image-first.jpg" alt="Image 1" class="main-content__image">
      </template>
    </main-content>

    <main-content 
    title="Туры под ключ"
    sub-title="Тут тоже важный текст"
    >
      <template #image>
        <img src="/images/image-third.jpg" alt="Image 1" class="main-content__image">
      </template>
    </main-content>
  </div>
</template>

<script>
import { ref } from 'vue';
import Header from '@/components/header/Header.vue';
import MainContent from '@/components/main-content/MainContent.vue';
import SubHeader from '@/components/header/SubHeader.vue';

export default {
  name: 'HomeView',
  components: {
    Header, MainContent, SubHeader
  },
  setup() {
    // Создаем переменную для состояния blur
    const isBlurActive = ref(false);

    // Функция для обновления состояния blur из дочернего компонента
    const handleBlurChange = (newValue) => {
      isBlurActive.value = newValue;
    };

    return {
      isBlurActive,
      handleBlurChange
    };
  }
}
</script>

<style>
.main-content__image {
  width: 100%; /* Ширина 100% для растягивания на всю ширину контейнера */
  height: 692px; /* Сохраняем пропорции изображений */
  margin-bottom: 20px; /* Отступ между изображениями */
  object-fit: cover; /* Сохраняет пропорции и не обрезает изображение */
  filter: brightness(80%) contrast(100%); /* Уменьшаем яркость */
  position: relative;

}

.blur-overlay {
  z-index: 10; /* Размытие будет под подменю */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4); /* Полупрозрачный фон */
  backdrop-filter: blur(0px); /* Размытие фона */
  opacity: 0; /* Скрыт при изначальном состоянии */
  transition: backdrop-filter 2s ease 1s, opacity 2s ease 1s; /* увеличили время анимации и добавили задержку */

}

.blur-overlay.fade-in {
  backdrop-filter: blur(10px); /* Добавляем размытие при активном состоянии */
  opacity: 1; /* Плавно появляется */
}
</style>


