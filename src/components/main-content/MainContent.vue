<template>
  <div class="main-content" ref="container">
    <div class="background-container">
      <slot name="image"></slot>
      <video 
        v-if="shouldLoadVideo"
        class="video-background"
        autoplay
        loop
        muted
        playsinline
        :poster="shouldLoadPoster ? videoPoster : ''"
        preload="none"
      >
        <source :src="videoSrc" type="video/webm">
        Ваш браузер не поддерживает видео тег.
      </video>
      <div v-if="videoSrc" class="video-overlay"></div>

    </div>
    <div class="main-content__content" :style="{ marginTop: marginTop + 'px' }">
      
      <!-- <div v-if="difficulty" class="difficulty-badge" :class="difficultyClass">
        {{ difficulty }}
      </div> -->

      <h2 class="main-content__title">{{ title }}</h2>
      <h3 class="main-content__subtitle"> {{subTitle}}</h3>
      




      <!-- <p v-if="shortDescription" class="short-description">
        {{ shortDescription }}
      </p> -->
      <div v-if="rating" class="tour-meta">
  <div class="meta-item">
    <!-- Звезда (рейтинг) -->
    <span class="icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    </span>
    <span>{{ rating }} ({{ reviewCount }} отзывов)</span>
  </div>
  
  <div v-if="duration" class="meta-item">
    <!-- Часы (длительность) -->
    <span class="icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-.5-13H12v6l5.25 3.15.75-1.23-4.5-2.67z"/>
      </svg>
    </span>
    <span>{{ duration }}</span>
  </div>
  
  <div v-if="distance" class="meta-item">
    <!-- Расстояние -->
    <span class="icon">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    </span>
    <span>{{ distance }}</span>
  </div>
</div>
      <div v-if="price" class="price-badge">
        Цена {{ price }} ₽ / до 4 чел.
      </div>
      <div class="buttons">
        <btn-one 
        buttonText="Узнать больше"
        :buttonBgColor="buttonColor"
        :buttonFontColor="buttonFontColor"
        @click="openModal"
        />
        <btn-second
        :buttonText="ButtonSecText"
        :buttonBgColor="buttonColor" 
        
        telegramUrl="https://t.me/maratakoev"

        />
      </div> 

    </div>

    <Modal
      :isOpen="isModalOpen"
      :modalData="modalData"
      @close="closeModal"
      @button1-click="onButton1Click"
      @button2-click="onButton2Click"
    />
    
    
    
  </div>
</template>

<script setup>
import { ref,onMounted, onBeforeUnmount  } from 'vue';
import BtnOne from '../buttons/BtnOne.vue';
import BtnSecond from '../buttons/BtnSecond.vue';
import Modal from '../Modal.vue'; // путь укажи, как у тебя в проекте

// import StarIcon from '../icons/StarIcon.vue';
// import ClockIcon from '../icons/ClockIcon.vue';
// import RouteIcon from '../icons/RouteIcon.vue';


const props = defineProps({
  lazyLoad: { type: Boolean, default: true },
  title: String,
  subTitle: String,
  marginTop: { type: Number, default: 70 },
  buttonColor: String,
  buttonFontColor: String,
  videoSrc: String,
  videoPoster: String,
  modalData: Object,
  ButtonSecText: String,

  shortDescription: String,
  price: Number,
  duration: String,
  distance: String,
  rating: {
    type: Number,
    default: ''
  },
  reviewCount: {
    type: Number,
    default: 0
  },
  // difficulty: {
  //   type: String,
  //   default: '',
  //   validator: (value) => !value || ['Легкий', 'Средний', 'Сложный', 'Средней сложности'].includes(value)
  // },
  modalData: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      content: '',
      button1Text: 'Забронировать',
      button2Text: 'Закрыть',
      button1BgColor: '#1D68F0',
      button2BgColor: '#f44336',
      button1FontColor: '#fff',
      button2FontColor: '#fff',
    })
  },

  routeDetails: {
    type: Array,
    default: () => []
  },
  includes: {
    type: Array,
    default: () => []
  }



});

// const difficultyClass = computed(() => {
//   if (!props.difficulty) return '';
  
//   const lower = props.difficulty.toLowerCase();
//   if (lower.includes('легк')) return 'difficulty-легкий';
//   if (lower.includes('средн')) return 'difficulty-средней_сложности';
//   if (lower.includes('сложн')) return 'difficulty-сложный';
//   return '';
// });





const isBookingModal = ref (false);

function openBookingModal () {
  isBookingModal.value = true;
}

function closeBookingModal () {
  isBookingModal.value = false
}

const isModalOpen = ref(false);

const container = ref(null);
const shouldLoadVideo = ref(!props.lazyLoad);
const shouldLoadPoster = ref(!props.lazyLoad);
const observer = ref(null);


function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

// Функция для кнопки 1
function onButton1Click() {
  // Логика для кнопки 1, например, переход на другой раздел
  console.log('Перехожу на секцию 1');
  closeModal();  // Закрытие модалки
}

// Функция для кнопки 2
function onButton2Click() {
  // Логика для кнопки 2, например, закрытие модалки
  console.log('Закрываю модалку');
  closeModal();
}




// Методы
// const openModal = () => {
//   isModalOpen.value = true;
// };

// const closeModal = () => {
//   isModalOpen.value = false;
// };



onMounted(() => {
  if (props.lazyLoad && container.value) {
    observer.value = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          shouldLoadVideo.value = true;
          shouldLoadPoster.value = true;
          observer.value?.disconnect();
        }
      });
    }, {
      rootMargin: '200px',
      threshold: 0.01
    });

    observer.value.observe(container.value);
  }
});

onBeforeUnmount(() => {
  observer.value?.disconnect();
});

// Логика модального окна

// const openModal = () => {
//   isModalOpen.value = true;
// };

// const closeModal = () => {
//   isModalOpen.value = false;
// };

// const onButton1Click = () => {
//   console.log('Бронирование экскурсии');
//   closeModal();
// };

// const onButton2Click = () => {
//   closeModal();
// };
</script>

<style scoped>
  .main-content {
    position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 580px;
  overflow: hidden;/* Или нужная вам высота */
}

.background-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.video-background {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  object-fit: cover;
  z-index: 1;
}

.video-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;
}

.main-content__content {
  max-width: 450px;
  position: absolute;
  z-index: 1; 
  margin-top: 110px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 0px;
  margin-bottom: 10px;
  z-index: 2;
  color: white;
  font-size: 50px;
}

.main-content__subtitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 0px;
  margin-bottom: 15px;
  z-index: 2;
  color: white;
  font-size: 28px;
}

.tour-meta {
  display: flex;
  gap: 16px; /* Отступ между блоками */
  flex-wrap: wrap;
  color: #ffffff; /* Серый цвет текста как в iOS */
  font-size: 14px;
  margin-bottom: 20px;
}

.meta-item {
  display: flex;
  align-items: center;
  gap: 4px; /* Отступ иконка-текст */
}

.icon {
  display: inline-flex;
  align-items: center;
  color: rgba(255, 174, 0, 0.811); /* Серый iOS для иконок */
}

.icon svg {
  width: 16px;
  height: 16px;
}
.price-badge {
  background: rgba(255, 174, 0, 0.811);
  color: #474201;
  padding: 8px 15px;
  border-radius: 20px;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 18px;
}

.short-description {
  color: white;
  line-height: 1.4;
  margin-bottom: 20px;
  text-shadow: 0 1px 2px rgba(0,0,0,0.5);
}


.buttons {
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;

}


.main-content__modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}


.difficulty-badge {
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.difficulty-легкий {
  background: #4CAF50;
}

.difficulty-средней {
  background: #FF9800;
}

.difficulty-сложный {
  background: #F44336;
}


.main-content__modal-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-height: 80vh;
}

.modal-buttons {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    /* max-width: 300px; */
    gap: 10px;
    margin-top: 20px;
  }

.main-content__modal-title {
  margin-top: 0;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.main-content__modal-body {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
}

.main-content__modal-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  transition: color 0.2s ease;
}
.main-content__modal-close:hover {
  color: #000;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}


@media (max-width: 600px) {
  .main-content__modal-content {
    padding: 20px;
    max-height: 90vh;
  }

  .main-content__modal-title {
    font-size: 22px;
  }

  .main-content__modal-body {
    font-size: 15px;
  }
}

/* .buttons > * {
  margin-right: 15px;
} */


@media (max-width: 600px) {
  .buttons {
    
    /* flex-direction: column; */
    gap: 10px;
  }

  .main-content__content {
  max-width: 450px;
  position: absolute;
  margin-top: 100px;
  }

  .main-content__title {
  font-size: 35px;
}

.main-content__subtitle {

  font-size: 20px;
}
}



</style>