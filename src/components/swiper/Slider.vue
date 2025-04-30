<!-- <template>
  <swiper
    
    :slidesPerView="'auto'"
    :initialSlide="1"
    :spaceBetween="20"
    :centeredSlides="true"
    :autoplay="{
      delay: 2000,
      disableOnInteraction: false,
    }"
    :pagination="{
      clickable: true,
    }"
    :navigation="false"
    :loop="true"
    :speed="3000"
    :modules="modules"
    class="swiper"
  >
    <swiper-slide class="swiper__slide">
      <img src="../../../public/images/sliders/20.png" class="swiper__img" alt="Slide 1" />
    </swiper-slide>
    <swiper-slide class="swiper__slide">
      <img src="../../../public/images/sliders/21.png" class="swiper__img" alt="Slide 2" />
    </swiper-slide>
    <swiper-slide class="swiper__slide">
      <img src="../../../public/images/sliders/22.png" class="swiper__img" alt="Slide 3" />
    </swiper-slide>
    <swiper-slide class="swiper__slide">
      <img src="../../../public/images/sliders/23.png" class="swiper__img" alt="Slide 4" />
    </swiper-slide>
    <swiper-slide class="swiper__slide">
      <img src="../../../public/images/sliders/24.png" class="swiper__img" alt="Slide 5" />
    </swiper-slide>
    <swiper-slide class="swiper__slide">
      <img src="../../../public/images/sliders/25.png" class="swiper__img" alt="Slide 6" />
    </swiper-slide>
  </swiper>
</template>


<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

  // import required modules
  import { Autoplay, Pagination, Navigation } from 'swiper/modules';

  export default {
    components: {
      Swiper,
      SwiperSlide,
    },
    setup() {
      return {
        modules: [Autoplay, Pagination, Navigation],
      };
    },
  };
</script>

<style scoped>
  .swiper {
    height: 403px;
    max-width: 1500px;
    /* margin-left: auto;
    margin-right: auto; */

  }

  .swiper-slide {
  width: 700px;
  
  }

  .swiper__img{
    height: 370px;

    width: 700px;
    filter: brightness(80%) contrast(100%); /* Уменьшаем яркость */
  }
</style> -->
<template>
  <div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
}
</style>