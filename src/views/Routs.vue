<template>
  <div class="routs">
    <NavMenu class="nav" />
    <Content-title :title="contentTitle" :discription="contentTitleDiscription" class="content-title"/>
    <!-- <Title-image :imageSrc="imageSrc"></Title-image> -->
    
    <!-- <MainContent 
      class="hero-section"
      title="Осетия ждёт вас!"
      sub-title="Идеальный отдых без забот"
      :marginTop="-70"
      :modalData="modalData[0]"
      videoSrc="/videos/hero-background.mov"
      videoPoster="/images/hero-poster.png"

    >
    </MainContent> -->
    <!-- <ContentSubTitle :title="contentSubTitle"></ContentSubTitle> -->
    <!-- <VerticalSlider ></VerticalSlider> -->
    
    <MainContent      
      title="Древние тропы"
      sub-title="Ближе к небу, ближе к легендам"
      :marginTop="-150"
      :price="14000"
      duration="5 часов"
      distance="120 км"
      :rating="5"
      :reviewCount="12"
      :modalData="modalData"
      :ButtonSecText="ButtonSecText"
      :buttonColor="'white'"
      :buttonFontColor="'black'"
    >
      <template #image>
        <img 
        loading="lazy"
        decoding="async"
        src="/images/dargavs.jpeg" alt="Image 1" class="main-content__image">
      </template>
      
    </MainContent>
    <div class="home__table">
      <MainContent 
        title="Высота 1800"
        sub-title="От Кармадона до Даргавса"
        :marginTop="200"
        :ButtonSecText="ButtonSecText"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
        :price="11000"
        duration="3,5 часа"
        distance="90 км"
        :rating="4.5"
        :reviewCount="7"
        difficulty="Средний"
        shortDescription="Увлекательная экскурсия по живописным горным тропам с профессиональным гидом"
        :modalData="modalData"
        >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/karmadon.webp" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Insta-марафон"
        sub-title="ТОП-5 локаций для фото"
        :marginTop="200"
        :price="18000"
        duration="5 часов"
        distance="150км"
        :rating="5"
        :reviewCount="10"
        :modalData="modalData"
        :ButtonSecText="ButtonSecText"
        :buttonColor="'white'"
        :buttonFontColor="'black'"

      >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/insta.webp" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
    </div>
    <div class="home__table">
      <MainContent 
        title="Верхний Мизур"
        sub-title="Почувствуй свободу мысли"

        :marginTop="-80"
        :price="15000"
      duration="5 часа"
        distance="190 км"
        :rating="4.5"
        :reviewCount="3"
        :modalData="modalData"
        :ButtonSecText="ButtonSecText"
        :buttonColor="'white'"
        :buttonFontColor="'black'"

      >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/alagirskoe.webp" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Лавочка счастья"
        sub-title="Счастье не за горами, оно в горах"
        :marginTop="50"
        :price="17000"
      duration="4 часа"
        distance="140 км"
        :rating="5"
        :reviewCount="11"
        :modalData="modalData"
        :ButtonSecText="ButtonSecText"
        :buttonColor="'white'"
        :buttonFontColor="'black'"
      >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/lavochka.webp" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
    </div>
    <div class="home__table">
      <MainContent 
        title="Мамисон"
        sub-title="Горнолыжная трасса, открытая этой зимой"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
        :marginTop="190"
        :price="15000"
      duration="5 часов"
        distance="210 км"
        :rating="4.9"
        :reviewCount="2"
        :modalData="modalData"
        :ButtonSecText="ButtonSecText"

      >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/mamison.webp" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Згидский перевал"
        sub-title="Выше облаков на внедорожнике"
        :marginTop="190"
        videoSrc="/videos/zgid.webm"
        videoPoster="/images/zgid-poster.webp"
        :price="18000"
      duration="7 часов"
        distance="220 км"
        :rating="5"
        :reviewCount="9"
        :modalData="modalData"
        :ButtonSecText="ButtonSecText"
        :buttonColor="'white'"
        :buttonFontColor="'black'"

      >
        <!-- <template #image>
          <img src="/videos/zgid.mov" alt="Image 1" class="main-content__image-small">
        </template> -->
      </MainContent> 
    </div>
    <div class="home__table">


      <!-- <MainContent 
        title="По долине реки Ардон"
        sub-title="Самая крупная гэс республики"
        :marginTop="-250"


      >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/alagir-ardon.webp" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent>  -->
      <!-- <MainContent 
        title="Кармадон и Даргавс"
        sub-title="Это чуть дешевле"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
        :marginTop="190"
        :price="15000"
      duration="4 часа"
        distance="8 км"
        :rating="4.9"
        :reviewCount="124"
        :modalData="modalData"
        :ButtonSecText="ButtonSecText"


      >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/karmadon-darg.webp" alt="Image 1" class="main-content__image">
        </template>
      </MainContent> -->

    </div>
    <div class="home__table">
      <MainContent 
        title="Горная Дигория"
        sub-title="До водопада Жемчужина по эко тропе"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
        :marginTop="-270"
        :price="18000"
      duration="10 часов"
        distance="275 км"
        :rating="5"
        :reviewCount="8"
        :modalData="modalData"
        :ButtonSecText="ButtonSecText"


      >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/zadalesk.webp" alt="Image 1" class="main-content__image">
        </template>
      </MainContent>
      <MainContent 
        title="Военно-грузинская дорога"
        sub-title="Дарьяльские ворота"
        :marginTop="-190"
        :buttonFontColor="'black'"
        :buttonColor="'white'"
        :price="11000"
      duration="3 часа"
        distance="85 км"
        :rating="4.5"
        :reviewCount="2"
        :modalData="modalData"
        :ButtonSecText="ButtonSecText"
      >
        <template #image>
          <img 
          loading="lazy"
          decoding="async"
          src="/images/darial.webp" alt="Image 1" class="main-content__image-small">
        </template>
      </MainContent> 
    </div>
    <FAQ/>
    <Footer></Footer>
    <!-- <Booking/> -->
    <!-- <Discription :articleText="article"></Discription> -->
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';
import TitleImage from '@/components/main-content/TitleImage.vue';
import ContentSubTitle from '@/components/main-content/ContentSubTitle.vue';
// import VerticalSlider from '@/components/swiper/VerticalSlider.vue';
import Discription from '@/components/main-content/Discription.vue';
import MainContent from '@/components/main-content/MainContent.vue';
import Booking from '@/components/main-content/Booking.vue';
import Footer from '@/components/main-content/Footer.vue';
import FAQ from '@/components/main-content/FAQ.vue';

const contentTitle = 'Экскурсии';
const contentTitleDiscription = 'Увидеть своими глазами.';
const contentSubTitle = 'Выбери маршрут';
const ButtonSecText = 'Забронировать'
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
margin-top: -70px;
}

/* .content-title {
  padding-top: 70px;
} */

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
@media (max-width: 600px) {
  .content-title {
    margin-top: 10px;
    margin-bottom: 20px;
  }
}

</style>
