<template>
  <div class="home">
    <NavMenu class="nav" />
    <MainContent 
      title="Экскурсии"
      sub-title="Оказаться над облаками"
      :marginTop="130"
      :modalData="modalData[0]"

    >
      <template #image>
        <img src="/images/14.png" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>

    <MainContent 
      title="Проживание"
      sub-title="Лучшие виды из окна"
      :buttonColor="'#1D68F0'"
      :modalData="modalData[1]"

    >
      <template #image>
        <img src="/images/11.png" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>

    <MainContent 
      title="Зругское озеро"
      sub-title="Жемчужина Осетии"
    >
      <template #image>
        <img src="/images/10.png" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>

    <div class="home__table">
      <MainContent 
        title="Откройте магию Северной Осетии"
        sub-title="Экскурсии, проживание и незабываемые впечатления"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
      >
        <template #image>
          <img src="/images/9.png" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Горные реки"
        sub-title="Невероятно красивого цвета"
      >
        <template #image>
          <img src="/images/6.png" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
    </div>
<Trust></Trust>
    <div class="home__table">
      <MainContent 
        title="Панорамы"
        sub-title="Которые сложно забыть"
        :marginTop="350"
      >
        <template #image>
          <img src="/images/7.jpg" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Вершины"
        sub-title="На расстоянии вытянутой руки"
      >
        <template #image>
          <img src="/images/8.png" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
    </div>

    <div class="slider">
      <Slider />
    </div>

    <ReviewForm/>
    <HotOffers></HotOffers>
    <InteractiveMap></InteractiveMap>
    <UniqueSelling></UniqueSelling>

    <Discription :articleText="article" />
    <PreFooter />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MainContent from '@/components/main-content/MainContent.vue';
import Slider from '@/components/swiper/Slider.vue';
import NavMenu from '@/components/header/NavMenu.vue';
// import PreFooter from '@/components/main-content/PreFooter.vue';
import Discription from '@/components/main-content/Discription.vue';
import ReviewForm from '@/components/Review-form.vue';
import HotOffers from '@/components/main-content/HotOffers.vue';
import InteractiveMap from '@/components/main-content/InteractiveMap.vue';
import UniqueSelling from '@/components/main-content/UniqueSelling.vue';
import Trust from '@/components/main-content/Trust.vue';

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

const modalData = ref([
  {
    title: 'Узнать больше о экскурсиях',
    content: `
      <p><strong>Организуем экскурсии</strong> для групп <strong>от 1 до 50 человек</strong> — выезд в любое удобное для вас время.</p>

      <p style="margin-top: 1em;"><strong>Внедорожные туры</strong> — <em>на мощных 4x4 автомобилях</em> мы с комфортом проедем по живописным маршрутам, которые недоступны обычному транспорту.</p>

      <p>Вы увидите <strong>водопады — самые высокие в Европе</strong>, подниметесь на <strong>горные вершины высотой более 2000 метров</strong>, и буквально <em>окажетесь над облаками</em>.</p>

      <p>По пути — <strong>захватывающие панорамы</strong>, остановки в красивейших локациях для <strong>крутых фото</strong> и возможность отдохнуть на природе.</p>

      <p style="margin-top: 1em;">Также доступны <strong>автобусные и пешие экскурсии</strong> — выбирайте формат, который подходит именно вам!</p>
    `,
    button1Text: 'Перейти в раздел',
    // button2Text: 'Закрыть',
    // button1BgColor: '#4CAF50',
    // button2BgColor: '#f44336',
    // button1FontColor: '#fff',
    // button2FontColor: '#fff',
  },
  {
    title: 'Экскурсия по горным вершинам',
    content: `
      <p>Наши экскурсии проходят по самым красивым горным маршрутам, где вы сможете насладиться потрясающими видами.</p>
      <p>По пути мы посетим самые высокие точки и сделаем остановки для фотосессий.</p>
    `,
    button1Text: 'Забронировать',
    button2Text: 'Закрыть',
    button1BgColor: '#4CAF50',
    button2BgColor: '#f44336',
    button1FontColor: '#fff',
    button2FontColor: '#fff',
  },
  {
    title: 'Проживание с видом на озеро',
    content: `
      <p>Мы предлагаем уютные номера с видом на живописное озеро, где вы сможете отдохнуть и насладиться природой.</p>
      <p>В отеле есть все удобства для комфортного проживания.</p>
    `,
    button1Text: 'Бронировать номер',
    button2Text: 'Закрыть',
    button1BgColor: '#1D68F0',
    button2BgColor: '#f44336',
    button1FontColor: '#fff',
    button2FontColor: '#fff',
  },
  {
    title: 'Эксплорация водопадов',
    content: `
      <p>Уникальная экскурсия по водопадам, которые считаются самыми высокими в Европе.</p>
      <p>Вы получите незабываемые впечатления от походов по горным тропам и впечатляющих водопадов.</p>
    `,
    button1Text: 'Забронировать тур',
    button2Text: 'Закрыть',
    button1BgColor: '#FF9800',
    button2BgColor: '#f44336',
    button1FontColor: '#fff',
    button2FontColor: '#fff',
  },
  // Добавляйте другие объекты с данными для других модалок по мере необходимости.
]);


</script>

<style scoped>

.nav {
  position: fixed;
}

.main-content {
  margin-bottom: 20px; 
}

.main-content__image {
  width: 100%;
  height: 580px;
  object-fit: cover;
  filter: brightness(70%) contrast(100%);
}

.main-content__image-small {
  width: 100%;
  height: 580px;
  object-fit: cover;
  filter: brightness(70%) contrast(100%);
}

.home__table {
  display: flex;
  justify-content: center;
  gap: 20px;
}

@media (max-width: 1000px) {
  .home__table {
    flex-direction: column;
  }
}
</style>
