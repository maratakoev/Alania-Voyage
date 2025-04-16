<template>
  <div class="routs">
    <NavMenu class="nav" />
    <Content-title :title="contentTitle" :discription="contentTitleDiscription" class="content-title"/>
    <Title-image :imageSrc="imageSrc"></Title-image>
    <ContentSubTitle :title="contentSubTitle"></ContentSubTitle>
    <VerticalSlider ></VerticalSlider>
    <MainContent      
      title="Рассвет"
      sub-title="Встретить рассвет над облаками"
      :marginTop="130"
    >
      <template #image>
        <img src="/images/14.png" alt="Image 1" class="main-content__image">
      </template>
      
    </MainContent>
    <div class="home__table">
      <MainContent 
        title="Обед"
        sub-title="Обедать можно по разному"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
      >
        <template #image>
          <img src="/images/9.png" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Лошади"
        sub-title="Прогулка на лошадях"
      >
        <template #image>
          <img src="/images/6.png" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
    </div>
    <div class="home__table">
      <MainContent 
        title="Параплан"
        sub-title="Почувствуй свободу"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
      >
        <template #image>
          <img src="/images/9.png" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Сплав"
        sub-title="По горной реке на каяках"
      >
        <template #image>
          <img src="/images/6.png" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
    </div>
    <div class="home__table">
      <MainContent 
        title="Групповые туры"
        sub-title="Как проходят групповые экскурсии"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
      >
        <template #image>
          <img src="/images/9.png" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Праздники"
        sub-title="На высоте на едине"
      >
        <template #image>
          <img src="/images/6.png" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
    </div>
    <Discription :articleText="article"></Discription>
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';
import TitleImage from '@/components/main-content/TitleImage.vue';
import ContentSubTitle from '@/components/main-content/ContentSubTitle.vue';
import VerticalSlider from '@/components/swiper/VerticalSlider.vue';
import Discription from '@/components/main-content/Discription.vue';
import MainContent from '@/components/main-content/MainContent.vue';

const contentTitle = 'Экскурсии';
const contentTitleDiscription = 'Увидеть своими глазами.';
const contentSubTitle = 'Путеводитель по Осетии';

const imageSrc = new URL('@/assets/titleImages/6.png', import.meta.url).href;

const article = `
    <h2>Как проходят экскурсии</h2>
    <p> Экскурсия начинается прямо у вашего жилья. Наш комфортный внедорожник с гидом за рулем заезжает за вами и отправляется по выбранному маршруту. </p>
    <p> Во время пути гид расскажет вам о ключевых локациях маршрута, делая экскурсию не только захватывающей, но и познавательной. </p> 
    <p> В 13:00 предусмотрен обед. Время обеда может немного смещаться в зависимости от местности, а также от наличия или отсутствия кафе и ресторанов на пути. </p> 
    <p> После обеда экскурсия продолжается, и вы отправляетесь на новые приключения. В конце дня мы вернем вас обратно домой. </p> 
    <p> По необходимости предоставляем детские кресла для безопасности маленьких путешественников. </p> 
    <p> Если в процессе экскурсии вы решите изменить маршрут, это может потребовать дополнительной оплаты, в зависимости от изменений в плане. </p> 
    <h3>Время начала экскурсии</h3> 
    <p> Экскурсии начинаются в 8:00, 9:00 или 10:00. Вы можете выбрать наиболее удобное для вас время. </p> 
    <h3>Цена и местоположение</h3> 
    <p> Важно учитывать, что стоимость экскурсии рассчитывается для выезда и возвращения из Владикавказа. Если вы проживаете за пределами города, например, в горных районах, стоимость может быть увеличена в зависимости от удаленности вашего проживания. </p> 
    <h3>Рекомендации по одежде и обуви</h3> 
    <p> Рекомендуется носить удобную одежду и обувь, соответствующую погодным условиям и типу маршрута. Для горных маршрутов лучше выбрать спортивную обувь с хорошей проходимостью, а также захватить с собой верхнюю одежду в зависимости от сезона. </p> 
    <h3>Погодные условия</h3> <p> Пожалуйста, учитывайте, что в некоторых случаях погода может повлиять на выбор маршрута или время начала экскурсии. В случае неблагоприятных погодных условий мы можем предложить альтернативные маршруты. </p> 
    <h3>Программа экскурсии</h3> 
    <p> В ходе экскурсии вы посетите ключевые локации маршрута, включая живописные виды, исторические памятники и природные достопримечательности. Наши гиды расскажут вам о каждой локации, обеспечивая интересную и познавательную информацию. </p> 
    <h3>Технические особенности маршрута</h3> 
    <p> Экскурсия может включать поездки по труднодоступным маршрутам, для чего мы используем специально подготовленные внедорожники. Некоторые участки маршрута могут потребовать дополнительной физической подготовки или терпения, поэтому просьба учитывать это при выборе экскурсии. </p> 
    <h3>Продолжительность экскурсии</h3> 
    <p> Средняя продолжительность экскурсии составляет 6 часов, включая обеденный перерыв. Время может варьироваться в зависимости от выбранного маршрута и остановок. </p> 
    <h3>Услуги связи</h3> 
    <p> В некоторых районах маршрута может отсутствовать мобильная связь или интернет. Мы рекомендуем заранее убедиться, что у вас есть необходимая информация для маршрута. </p> 
    <h3>Особые пожелания</h3> 
    <p> Мы готовы учесть ваши особые пожелания, такие как вегетарианское меню для обеда или дополнительные удобства для людей с ограниченными физическими возможностями. Пожалуйста, сообщите нам об этом заранее. </p> 
    <h3>Фотографирование</h3> 
    <p> Во время экскурсии вам будет предложено множество живописных мест для фотосъемки. Мы рады, что вы хотите запечатлеть эти моменты. Пожалуйста, соблюдайте правила съемки в заповедных или охраняемых зонах. </p>  
    <h3>Безопасность</h3> 
    <p> Важно помнить, что безопасность во время экскурсии обеспечивается только в пределах автомобиля. Вне автомобиля мы не можем гарантировать вашу безопасность. Пожалуйста, будьте осторожны, не подходите близко к обрывам, берегам бурных рек и другим потенциально опасным зонам. </p> 
    <p> Мы настоятельно рекомендуем соблюдать осторожность в таких местах и следовать указаниям гида для вашего собственного комфорта и безопасности. </p>`;
    
</script>


<style scoped>
.routs {
  display: flex;
  flex-direction: column;
  margin-left: auto;
  margin-right: auto;
}

.nav {
position: absolute;
}

.content-title {
  padding-top: 70px;
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
  margin-top: 20px;
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
