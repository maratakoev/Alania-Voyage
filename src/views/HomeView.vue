<template>
  <div class="home">
    <Header></Header>
    <main-content 
    title="Экскурсии"
    sub-title="Приезжайте наслаждайтесь"
    >
      <template #image>
        <img src="/images/image-second.jpg" alt="Image 1" class="main-content__image">
      </template>
    </main-content>

    <main-content 
    title="Проживание"
    sub-title="Лучшие виды из окна"
    >
      <template #image>
        <img src="/images/image-first.jpg" alt="Image 1" class="main-content__image">
      </template>
    </main-content>

    <main-content 
    title="Туры под ключ"
    sub-title="Тут тоже важный текст"
    >
      <template #image>
        <img src="/images/image-third.jpg" alt="Image 1" class="main-content__image">
      </template>
    </main-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/header/Header.vue';
import MainContent from '@/components/main-content/MainContent.vue';

export default {
  name: 'HomeView',
  components: {
    Header, MainContent
  }
}
</script>

<style>
.main-content__image {
  width: 100%; /* Ширина 100% для растягивания на всю ширину контейнера */
  height: 692px; /* Сохраняем пропорции изображений */
  margin-bottom: 20px; /* Отступ между изображениями */
  object-fit: cover; /* Сохраняет пропорции и не обрезает изображение */
  filter: brightness(80%) contrast(100%); /* Уменьшаем яркость */
  position: relative;

}
</style>


