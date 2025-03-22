<template>
  <div class="routs">
    <NavMenu class="nav" />
    <Content-title :title="contentTitle" :discription="contentTitleDiscription" class="content-title"/>
    <Title-image :imageSrc="imageSrc"></Title-image>
    <ContentSubTitle :title="contentSubTitle"></ContentSubTitle>
    <VerticalSlider></VerticalSlider>
  </div>
</template>

<script setup>
import NavMenu from '@/components/header/NavMenu.vue';
import ContentTitle from '@/components/main-content/ContentTitle.vue';
import TitleImage from '@/components/main-content/TitleImage.vue';
import ContentSubTitle from '@/components/main-content/ContentSubTitle.vue';
import VerticalSlider from '@/components/swiper/VerticalSlider.vue';

const contentTitle = 'Экскурсии';
const contentTitleDiscription = 'Увидеть своими глазами.'
const contentSubTitle = 'Узнать подробнее';

const imageSrc = require('../assets/titleImages/6.png');
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




</style>
