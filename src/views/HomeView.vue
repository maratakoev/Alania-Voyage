<template>
  <div class="home">
    <NavMenu class="nav"></NavMenu>

    <!-- <Header :logo="logo" :menuItems="menuItems" @update:blurActive="handleBlurChange" ></Header> -->
    <!-- <MobileMenu></MobileMenu> -->

    <!-- <sub-header></sub-header> -->
    <main-content 
    class="home__container"
    title="Экскурсии"
    sub-title="Оказаться над облаками"
    >
      <template #image>
        <img src="/images/14.png" alt="Image 1" class="main-content__image">
      </template>
    </main-content>

    <main-content 
    title="Проживание"
    sub-title="Лучшие виды из окна"
    >
      <template #image>
        <img src="/images/11.png" alt="Image 1" class="main-content__image">
      </template>
    </main-content>

    <main-content 
    title="Зругское озеро"
    sub-title="Жемчужина Осетии"
    >
      <template #image>
        <img src="/images/10.png" alt="Image 1" class="main-content__image">
      </template>
    </main-content>
    <div class="home__table">
        <main-content 
      title="Водопад"
      sub-title="Самый высокий в Европе"
      >
        <template #image>
          <img src="/images/9.png" alt="Image 1" class="main-content__image">
        </template>
      </main-content>
      <main-content 
      title="Горные реки"
      sub-title="Невероятно красивого цвета"
      >
        <template #image>
          <img src="/images/6.png" alt="Image 1" class="main-content__image-small">
        </template>
      </main-content> 
    </div>

    <div class="home__table">
        <main-content 
      title="Панормы"
      sub-title="Которые сложно забыть"
      >
        <template #image>
          <img src="/images/7.jpg" alt="Image 1" class="main-content__image">
        </template>
      </main-content>
      <main-content 
      title="Вершины"
      sub-title="На расстоянии вытянутой руки"
      >
        <template #image>
          <img src="/images/8.png" alt="Image 1" class="main-content__image-small">
        </template>
      </main-content> 
    </div>
    <div class="slider">
      <slider></slider>
    </div>
    <div class="empty">
      <div class="content">
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

</div>
    </div>
    

  </div>
</template>

<script>
import { ref } from 'vue';
import Header from '@/components/header/Header.vue';
import MainContent from '@/components/main-content/MainContent.vue';
import Slider from '@/components/swiper/Slider.vue';
import MobileMenu from '@/components/header/MobileMenu.vue';
import NavMenu from '@/components/header/NavMenu.vue';


export default {
  name: 'HomeView',
  components: {
    Header, MainContent, Slider, MobileMenu, NavMenu
  },
  setup() {


  

    return {

    };
  }
}
</script>

<style scoped>



.home__container {
  /* margin-top: 70px; */
}

.nav {
  position: fixed;
}

.main-content__image {
  width: 100%; /* Ширина 100% для растягивания на всю ширину контейнера */
  height: 580px; /* Сохраняем пропорции изображений */
  margin-bottom: 20px; /* Отступ между изображениями */
  object-fit: cover; /* Сохраняет пропорции и не обрезает изображение */
  filter: brightness(70%) contrast(100%); /* Уменьшаем яркость */
  position: relative;

}

.main-content__image-small {
  display: flex;
  width: 100%;
  height: 580px;
  margin-bottom: 20px; 
  object-fit: cover;
  filter: brightness(70%) contrast(100%); 
  position: relative;

}



.home__table {
  display: flex;
  gap: 20px;
}

.empty {
  width: 97%;
  background-color: grey;
  /* height: 500px; */
  padding: 10px;
}

@media (max-width: 1000px) {
  .home__table {
    
    display: flex;
    flex-direction: column;
  }
  .home__container {
  margin-top: 0px;
}
}


</style>


