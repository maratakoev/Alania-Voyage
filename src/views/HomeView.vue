<template>
  <div class="home">
    <NavMenu class="nav" />
    <MainContent 
      class="hero-section"
      title="Осетия ждет!"
      sub-title="Твоё приключение начинается..."
      :buttonColor="'#1D68F0'"
      :marginTop="-70"
      :modalData="modalData[0]"
      videoSrc="/videos/hero-background.webm"
      videoPoster="/images/hero-poster.webp"
      :lazyLoad="false"
      :ButtonSecText="ButtonSecText"
    >
    </MainContent>
    <MainContent 
          :buttonFontColor="black"
      :buttonColor="white"
      :marginTop="-110"
      videoSrc="/videos/tours.webm"
      videoPoster="/images/hero-poster.webp"
      title="Выходные в горах"
      sub-title="Прочувствуй энергию гор" 
      :modalData="modalData[1]"
      :lazyLoad="false"
      :ButtonSecText="ButtonSecText"

    >
      <!-- <template #image>
        <img src="/images/10.png" alt="Image 1" class="main-content__image">
      </template> -->
    </MainContent>

    <div class="home__table">
      
      <MainContent 

        :marginTop="235"
        :buttonColor="'#1D68F0'"
        title="Экскурсия "
        sub-title="С комфортом на внедорожнике"
        :modalData="modalData[2]"
        :ButtonSecText="ButtonSecText"

      >
        <template #image>
          <img 
            loading="lazy"
            decoding="async"
            src="/images/zgid.webp" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
      <MainContent 
      title="Проживание"
      sub-title="Лучшие виды из окна"
      :buttonColor="'#1D68F0'"
      :modalData="modalData[3]"
      :marginTop="-235"
      :ButtonSecText="ButtonSecText"



    >
      <template #image>
        
        <img             
          loading="lazy"
          decoding="async"
          src="/images/11.png" alt="Image 1" class="main-content__image">
      </template>
    </MainContent>
    </div>

    <!-- <div class="slider">
      <Slider />
    </div> -->
    <Trust></Trust>    

    <ReviewForm/>
    <HotOffers></HotOffers>
    <InteractiveMap></InteractiveMap>
    <!-- <UniqueSelling></UniqueSelling> -->
    <FAQ/>

    <!-- <Discription :articleText="article" /> -->
    <Footer/>
    <!-- <PreFooter /> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MainContent from '@/components/main-content/MainContent.vue';
// import Slider from '@/components/swiper/Slider.vue';
import NavMenu from '@/components/header/NavMenu.vue';
import Discription from '@/components/main-content/Discription.vue';
import ReviewForm from '@/components/main-content/Review-form.vue';
import HotOffers from '@/components/main-content/HotOffers.vue';
import InteractiveMap from '@/components/main-content/InteractiveMap.vue';
import UniqueSelling from '@/components/main-content/UniqueSelling.vue';
import Trust from '@/components/main-content/Trust.vue';
import TopSection from '@/components/main-content/TopSection.vue';
import FAQ from '@/components/main-content/FAQ.vue';
import Footer from '@/components/main-content/Footer.vue';

const ButtonSecText = 'Написать в чат'

const black = '#000000'
const white = '#fff'
// const article = ref(`
//   <h2>Условия предоставления туристических услуг</h2>
//   <p><strong>1. Общие условия</strong></p>
//   <p>Экскурсии на внедорожниках по горной местности и услуги проживания предоставляются в соответствии с выбранной программой. Фактический маршрут может изменяться в зависимости от погодных условий, состояния дорог и других факторов.</p>
//   <p><strong>2. Ответственность за безопасность</strong></p>
//   <p>Участие в экскурсиях осуществляется на добровольной основе. Гости принимают на себя полную ответственность за свою безопасность, здоровье и сохранность личных вещей во время поездки. Организаторы не несут ответственности за травмы, полученные в ходе экскурсии, а также за повреждение или утерю личного имущества.</p>
//   <p><strong>3. Предоплата и отмена бронирования</strong></p>
//   <p>Для подтверждения бронирования требуется предоплата. В случае отказа от участия предоплата не возвращается. Если поездка отменяется организатором (например, из-за погодных условий), возможен перенос даты или возврат средств.</p>
//   <p><strong>4. Транспорт и условия проживания</strong></p>
//   <p>Все автомобили проходят регулярное техническое обслуживание, однако из-за сложного рельефа возможны форс-мажорные обстоятельства, такие как задержки или изменение маршрута. Проживание организуется в соответствии с выбранным тарифом, условия проживания могут отличаться в зависимости от локации.</p>
//   <p><strong>5. Особые условия</strong></p>
//   <ul>
//     <li>Организатор оставляет за собой право отказать в участии лицам в состоянии алкогольного или наркотического опьянения.</li>
//     <li>Туристы должны соблюдать правила поведения в горах и уважать природу.</li>
//     <li>В случае нарушения правил и создания опасности для группы организатор вправе прекратить участие гостя без возврата средств.</li>
//   </ul>
//   <p>Подробности маршрутов, условий проживания и актуальной информации уточняйте перед бронированием. Бронирование экскурсии означает согласие с указанными условиями.</p>
// `);

const modalData = ref([
  {
    title: 'Узнать больше о экскурсиях',
    content: `  
  <p><strong>Отдых в Северной Осетии без хлопот</strong> — от авторских туров до отдельных услуг. <em>Комплексные программы экономят до 20%!</em></p>  

  <p style="margin-top: 1em;"><strong>Ваш формат:</strong><br>  
  ✓ <u>Тур «всё включено»</u>:<br>  
  — Встреча в аэропорту + трансфер на комфортабельных авто<br>  
  — Проживание с панорамными видами + питание<br>  
  — 3 авторские экскурсии с гидом</p>  

  <p>✓ <u>Соберите свой пакет</u>:<br>  
  • Только экскурсии (выберите в разделе «Маршруты»)<br>  
  • Только проживание (отели/глэмпинги — каталог «Жильё»)<br>  
  • Комбо: трансфер + 2 экскурсии + завтраки</p>  

  <p style="margin-top: 1em;"><strong>Почему выгодно брать тур:</strong><br>  
  — Гарантированная доступность гидов и жилья в сезон<br>  
  — Фиксированная цена без доплат на месте<br>  
  — Бесплатный фотоотчет от сопровождающего</p>  

  <p>Посетите must-see локации: <em>Город мёртвых, Цейское ущелье, Дзивгисская крепость</em>. Добавьте экстрим, гастротуры или фотосессию — мы реализуем любые идеи!</p>  
`  ,
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
  <p style="text-align: center; margin-bottom: 1.5em;"><strong>ГОТОВЫЙ ТУР</strong><br><span style="font-size: 1.2em;">«Осетия за 48 часов»</span></p>

  <div style="border: 1px solid #e0e0e0; border-radius: 8px; padding: 1em; margin-bottom: 1.5em;">
    <p><strong>🗓 2 дня / 3 ночи | 🚗 Трансфер включен | 🏔 2 авторские экскурсии</strong></p>
    
    <p style="margin-top: 0.8em;">▸ <u>Программа</u>:<br>
    • День 1: Встреча во Владикавказе → трансфер в отель → экскурсия «Тайны Города мёртвых»<br>
    • День 2: Ранний завтрак → джип-тур в Цейское ущелье → обед в горном кафе → свободное время<br>
    • День 3: Трансфер в аэропорт с остановкой у Дзивгисской крепости</p>

    <p style="margin-top: 0.8em;">▸ <u>Что входит</u>:<br>
    ✓ Проживание в отеле с панорамой гор<br>
    ✓ 2 завтрака + 2 обеда (осетинская кухня)<br>
    ✓ Все трансферы на Mitsubishi L200<br>
    ✓ Входные билеты на локации<br>
    ✓ Чек-лист для сборов в подарок</p>
  </div>

  <p><strong>Почему выгоднее, чем самому:</strong><br>
  — Экономия до 8 000 ₽ (считаем <a href="#" style="color: #2a5ea7; text-decoration: underline;">тут</a>)<br>
  — Гарантия брони отеля в сезон<br>
  — Без скрытых платежей: цена фиксируется при оплате</p>

  <p style="margin-top: 1em; text-align: center;"><em>Дополнения:</em><br>
  ➕ Ужин с дегустацией сыров — 1 500 ₽/чел<br>
  ➕ Фотосессия в традиционной одежде — 3 000 ₽/час</p>
`,
    button1Text: 'Забронировать',
    button2Text: 'Закрыть',
    button1BgColor: '#4CAF50',
    button2BgColor: '#f44336',
    button1FontColor: '#fff',
    button2FontColor: '#fff',
  },
  {
    title: 'Экскурсии на внедорожнике',
    content: `
  <p style="text-align: center; margin-bottom: 1.2em;">
    <strong style="font-size: 1.1em;">ЭКСКУРСИЯ «СЕРДЦЕ ГОРНОЙ ОСЕТИИ»</strong><br>
    <em>8-часовое путешествие к must-see локациям</em>
  </p>

  <div style="background: #f8f9fa; padding: 1em; border-radius: 8px;">
    <p>▸ <strong>В программе:</strong><br>
    • Легендарный <u>Город мёртвых</u> — загадки средневековых склепов<br>
    • <u>Дзивгисская крепость</u> — «орлиное гнездо» на отвесной скале<br>
    • Смотровая площадка у <u>Цейского ущелья</u> — фотостоп с панорамой ледников<br>
    • Обед в кафе с осетинскими пирогами (включён в стоимость)</p>
  </div>

  <p style="margin-top: 1.2em;"><strong>Что получите:</strong><br>
  ✓ Трансфер на внедорожнике Toyota Land Cruiser (1-4 чел)<br>
  ✓ Лицензированный гид-историк с тревел-журналистикой<br>
  ✓ Посещение 2-х музеев — входные билеты наши<br>
  ✓ 15+ фото с маршрута на память</p>

  <p style="margin-top: 1em;"><strong>Почему мы?</strong><br>
  — Маршрут вне стандартных «галочек» — покажем Осетию глазами местных<br>
  — Гибкий график: старт в 7:00, 9:00 или 12:00<br>
  — Возврат 100% оплаты при отмене за 24 часа</p>

  <p style="text-align: center; margin-top: 1.5em; color: #2a5ea7;">
    <em>Хотите добавить дегустацию крафтового пива<br>или фотосессию в традиционном костюме? → Укажите при бронировании!</em>
  </p>
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
  <p style="text-align: center; margin-bottom: 1.5em;">
    <span style="font-size: 1.3em;">«CLIFFSIDE LOFT»</span><br>
    <em>дом на краю света для тех, кто ищет диалог с горами</em>
  </p>

  <div style="background: #f8fafc; padding: 1.2em; border-radius: 10px;">
    <p>▸ <strong>Ваш кокон над облаками:</strong><br>
    • 45 м² open space с панорамными окнами «в пол»<br>
    • Дизайн-проект от московского архитектора: бетон, кедр, кованая сталь<br>
    • Терраса с костровой чашей и видом на 180° на Кавказский хребет<br>
    • Спальня-лофт с кроватью king size и потолочным окном для звёздных ночей</p>
  </div>

  <p style="margin-top: 1.5em;"><strong>Почему это уникально:</strong></p>
  <ul style="list-style: none; padding-left: 0;">
    <li>🚶♂️ <u>Ваша отправная точка:</u><br>
    — 20 мин пешком → заброшенное средневековое село с боевыми башнями<br>
    — 40 мин → Город мёртвых (склепы XI-XIV вв.)<br>
    — Маршруты для трекинга: от лёгких (3 км) до экспертных (18 км)</li>
    
    <li style="margin-top: 1em;">🎒 <u>Для вашего комфорта:</u><br>
    — Рюкзаки, треккинговые палки и GPS-трекер в аренду<br>
    — Карта с секретными тропами от хозяев<br>
    — Капсульная кофемашина и набор осетинских сыров к завтраку</li>
  </ul>

  <p style="margin-top: 1.5em; border-left: 3px solid #2a5ea7; padding-left: 1em;">
    <em>Важно:</em> дом подходит только для пар или сольных путешественников —<br> 
    здесь нет места городской суете. По вечерам вы услышите только<br> 
    переклички серн и шелест ветра в ущелье.
  </p>

  <p style="text-align: center; margin-top: 1.8em;">
    <strong>Хотите романтики?</strong> Организуем:<br>
    • Ужин с шеф-поваром на террасе (+12 000 ₽)<br>
    • Ночную съёмку Млечного Пути с фотографом (+8 000 ₽)
  </p>
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
  margin-top: -70px;
}

/* .hero-section {
  

} */

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
