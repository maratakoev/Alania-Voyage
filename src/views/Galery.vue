<template>
  <div class="gallery">
    <NavMenu class="nav" />
    
    <div class="gallery__container">
      <div class="gallery__grid">
        <div 
          v-for="(item, index) in galleryItems" 
          :key="index" 
          class="gallery__item"
          @click="openModal(item)"
        >
          <img :src="item.image" :alt="item.title" class="gallery__image">
          <div class="gallery__overlay">
            <h3 class="gallery__title">{{ item.title }}</h3>
            <p class="gallery__subtitle">{{ item.subtitle }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="slider">
      <Slider />
    </div>

    <Discription :articleText="article" />
    <PreFooter />

    <!-- Модальное окно -->
    <div v-if="isModalOpen" class="modal" @click.self="closeModal">
      <div class="modal__content">
        <button class="modal__close" @click="closeModal">×</button>
        <img :src="currentItem.image" :alt="currentItem.title" class="modal__image">
        <div class="modal__text">
          <h2>{{ currentItem.title }}</h2>
          <h3>{{ currentItem.subtitle }}</h3>
          <p>{{ currentItem.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import NavMenu from '@/components/header/NavMenu.vue';
import Slider from '@/components/swiper/Slider.vue';
import Discription from '@/components/main-content/Discription.vue';
// import PreFooter from '@/components/main-content/PreFooter.vue';

const isModalOpen = ref(false);
const currentItem = ref({});

const galleryItems = ref([
  {
    image: '/images/14.png',
    title: 'Экскурсии',
    subtitle: 'Оказаться над облаками',
    description: 'Незабываемые экскурсии по живописным маршрутам Северного Кавказа с профессиональными гидами.'
  },
  {
    image: '/images/11.png',
    title: 'Проживание',
    subtitle: 'Лучшие виды из окна',
    description: 'Уютные гостевые дома с панорамными видами на горные хребты и долины.'
  },
  {
    image: '/images/10.png',
    title: 'Зругское озеро',
    subtitle: 'Жемчужина Осетии',
    description: 'Кристально чистое горное озеро на высоте 2000 метров над уровнем моря.'
  },
  {
    image: '/images/9.png',
    title: 'Водопад',
    subtitle: 'Самый высокий в Европе',
    description: 'Величественный водопад высотой более 600 метров в сердце Кавказских гор.'
  },
  {
    image: '/images/6.png',
    title: 'Горные реки',
    subtitle: 'Невероятно красивого цвета',
    description: 'Ледниковые реки с бирюзовой водой, прорезающие горные ущелья.'
  },
  {
    image: '/images/7.jpg',
    title: 'Панорамы',
    subtitle: 'Которые сложно забыть',
    description: 'Захватывающие дух виды на горные массивы с высоты птичьего полета.'
  },
  {
    image: '/images/8.png',
    title: 'Вершины',
    subtitle: 'На расстоянии вытянутой руки',
    description: 'Возможность подняться на вершины, доступные только опытным альпинистам.'
  }
]);

const article = ref(`
  <h2>Условия предоставления туристических услуг</h2>
  <p><strong>1. Общие условия</strong></p>
  <p>Экскурсии на внедорожниках по горной местности и услуги проживания предоставляются в соответствии с выбранной программой. Фактический маршрут может изменяться в зависимости от погодных условий, состояния дорог и других факторов.</p>
  <p><strong>2. Ответственность за безопасность</strong></p>
  <p>Участие в экскурсиях осуществляется на добровольной основе. Гости принимают на себя полную ответственность за свою безопасность, здоровье и сохранность личных вещей во время поездки. Организаторы не несут ответственности за травмы, полученные в ходе экскурсии, а также за повреждение или утерю личного имущества.</p>
  <p><strong>3. Предоплата и отмена бронирования</strong></p>
  <p>Для подтверждения бронирования требуется предоплата. В случае отказа от участия предоплата не возвращается. Если поездка отменяется организатором (например, из-за погодных условий), возможен перенос даты или возврат средств.</p>
  <p><strong>4. Транспорт и условия проживания</strong></p>
  <p>Все автомобили проходят регулярное техническое обслуживание, однако из-за сложного рельефа возможны форс-мажорные обстоятельства, такие как задержки или изменение маршрута. Проживание организуется в соответствии с выбранным тарифом, условия проживания могут отличаться в зависимости от локации.</p>
  <p><strong>5. Особые условия</strong></p>
  <ul>
    <li>Организатор оставляет за собой право отказать в участии лицам в состоянии алкогольного или наркотического опьянения.</li>
    <li>Туристы должны соблюдать правила поведения в горах и уважать природу.</li>
    <li>В случае нарушения правил и создания опасности для группы организатор вправе прекратить участие гостя без возврата средств.</li>
  </ul>
  <p>Подробности маршрутов, условий проживания и актуальной информации уточняйте перед бронированием. Бронирование экскурсии означает согласие с указанными условиями.</p>
`);

const openModal = (item) => {
  currentItem.value = item;
  isModalOpen.value = true;
  document.body.style.overflow = 'hidden';
};

const closeModal = () => {
  isModalOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
.gallery {
  padding-top: 80px;
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.gallery__container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}

.gallery__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 25px;
  margin-bottom: 50px;
}

.gallery__item {
  position: relative;
  cursor: pointer;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.3s ease;
  aspect-ratio: 4/3;
}

.gallery__item:hover {
  transform: scale(1.03);
}

.gallery__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.8);
  transition: filter 0.3s ease;
}

.gallery__item:hover .gallery__image {
  filter: brightness(0.6);
}

.gallery__overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  color: white;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
}

.gallery__title {
  font-size: 24px;
  margin-bottom: 5px;
}

.gallery__subtitle {
  font-size: 16px;
  opacity: 0.9;
}

/* Модальное окно */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.modal__content {
  background: white;
  max-width: 900px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 12px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.modal__close {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
  color: #333;
  z-index: 10;
}

.modal__image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
}

.modal__text {
  padding: 25px;
}

.modal__text h2 {
  font-size: 28px;
  margin-bottom: 10px;
  color: #1D68F0;
}

.modal__text h3 {
  font-size: 20px;
  margin-bottom: 20px;
  color: #666;
}

.modal__text p {
  font-size: 16px;
  line-height: 1.6;
  color: #333;
}

@media (max-width: 768px) {
  .gallery__grid {
    grid-template-columns: 1fr;
  }
  
  .modal__content {
    flex-direction: column;
  }
  
  .modal__image {
    max-height: 300px;
  }
}
</style>