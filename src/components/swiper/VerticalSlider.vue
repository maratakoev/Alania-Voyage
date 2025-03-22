<template>
  <div>
    <swiper
      :slidesPerView="3" 
      :spaceBetween="20"
      :centeredSlides="true"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="swiper"
    >
      <swiper-slide
        class="swiper__slide"
        v-for="(slide, index) in slides"
        :key="index"
        @click="openModal(slide)"
      >
        <div class="swiper__content">
          <h2 class="swiper__title">{{ slide.title }}</h2>
          <button class="swiper__btn">Узнать больше</button>
        </div>
        <img :src="slide.img" class="swiper__img" :alt="'Slide ' + (index + 1)" />
      </swiper-slide>
    </swiper>

    <!-- Модальное окно -->
    <ModalSlide
      v-if="isModalVisible"
      :isVisible="isModalVisible"
      :slideTitle="modalContent.title"
      :slideDescription="modalContent.description"
      @close="closeModal"
    />
  </div>
</template>

<script>
import { ref } from 'vue';  // Импортируем ref для реактивных данных
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import ModalSlide from './ModalSlide.vue';

export default {
  components: {
    Swiper,
    SwiperSlide,
    ModalSlide,
  },
  setup() {
    // Состояния слайдов, модального окна и контента
    const slides = ref([
      { img: require('@/assets/sliders/20.png'), title: 'Slide 1', description: 'Description for slide 1' },
      { img: require('@/assets/sliders/21.png'), title: 'Slide 2', description: 'Description for slide 2' },
      { img: require('@/assets/sliders/22.png'), title: 'Slide 3', description: 'Description for slide 3' },
      { img: require('@/assets/sliders/23.png'), title: 'Slide 4', description: 'Description for slide 4' },
      { img: require('@/assets/sliders/24.png'), title: 'Slide 5', description: 'Description for slide 5' },
      { img: require('@/assets/sliders/25.png'), title: 'Slide 6', description: 'Description for slide 6' },
    ]);
    
    const isModalVisible = ref(false);
    const modalContent = ref({ title: '', description: '' });

    // Открытие модального окна
    const openModal = (slide) => {
      modalContent.value = {
        title: slide.title,
        description: slide.description,
      };
      isModalVisible.value = true;
    };

    // Закрытие модального окна
    const closeModal = () => {
      isModalVisible.value = false;
    };

    // Модули для Swiper
    const modules = [Autoplay, Pagination, Navigation];

    return {
      slides,
      isModalVisible,
      modalContent,
      openModal,
      closeModal,
      modules,
    };
  },
};
</script>

<style scoped>
.swiper {
  height: 760px;
  max-width: 1500px;
}

.swiper-slide {
  width: 400px;
  position: relative;  /* Добавлен для правильного позиционирования текста */
}

.swiper__content {
  position: absolute;
  top: 20px;  /* Перемещаем текст в верхний левый угол */
  left: 20px;
  color: white;
  z-index: 10;
}

.swiper__title {
  font-size: 24px;
  font-weight: bold;
}

.swiper__btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.3s;
}

.swiper__btn:hover {
  background-color: #0056b3;
}

.swiper__img {
  height: 690px;
  object-fit: cover;
  transition: transform 0.5s ease;
  border-radius: 20px;
  margin-top: 40px;
  width: 400px;
  filter: brightness(80%) contrast(100%);
}

.swiper__img:hover {
  transform: scale(1.02);
}
</style>
