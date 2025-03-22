<template>
  <div class="nav-menu">
    <MobileMenu :logo="logo_dark" :menuItems="menuItems"  @update:blurActive="handleBlurChange"   class="mobile-menu"></MobileMenu>
    <Header :logo="logo" :menuItems="menuItems" @update:blurActive="handleBlurChange"  class="web-menu"></Header>
    <div 
    v-show="isBlurActive" 
    class="blur-overlay"
    :class="{ 'fade-in': isBlurActive,'fade-out': !isBlurActive  }"   

    ></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import MobileMenu from './MobileMenu.vue';
import Header from './Header.vue';

const name = ref('');
const logo_dark = '/images/logo_dark.jpg';  
const logo = '/images/logo_white.jpg';  // Логотип
const menuItems = [
  {
    label: 'Экскурсии',
    route: '/routs',
    submenu: ['Кольцо Осетии', 'Лавочка счастья', 'Кариу хох', 'Верхний Мизур', 'Мамисон', 'Верхний Згид', 'Уаллаг ком', 'Дигория'],
    additional: ['Обед', 'Встретить рассвет', 'Прогулка на лошадях', 'Йога', 'Кейтринг', 'Параплан', 'Сплав по реке', 'Фотограф', 'Видеограф', 'Аэросъемка'],
    discription: ['Как проходит экскурсия', 'Групповые туры', 'Праздники в горах'],
  },
  { label: 'Проживание', route: '/tours', submenu: ['В горах', 'Во Владикавказе'] },
  { label: 'Галерея', route: '/galery', submenu: ['Фотографии'] },
  { label: 'О нас', route: '/about', submenu: ['Соц сети', 'Автопарк'] },
];

  // Создаем переменную для состояния blur
  const isBlurActive = ref(false);

// Функция для обновления состояния blur из дочернего компонента
const handleBlurChange = (newValue) => {
  isBlurActive.value = newValue;
};


// Define methods here if needed

</script>

<style scoped>
  .nav-menu {
    z-index: 100;
    width: 100%;
    /* height: 300px; */
    /* background-color: red; */
    background-color: transparent;
    position: relative;
  }


.blur-overlay {
  z-index: 10; /* Размытие будет под подменю */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.4); /* Полупрозрачный фон */
  backdrop-filter: blur(0px); /* Размытие фона */
  opacity: 0; /* Скрыт при изначальном состоянии */
  transition: backdrop-filter 2s ease 1s, opacity 2s ease 1s; /* увеличили время анимации и добавили задержку */

}

.blur-overlay.fade-in {
  backdrop-filter: blur(10px); /* Добавляем размытие при активном состоянии */
  opacity: 1; /* Плавно появляется */
  transition: backdrop-filter 3s ease, opacity 3s ease; /* Плавная анимация исчезновения */

}

.blur-overlay.fade-out {
  backdrop-filter: blur(10px); /* Добавляем размытие при активном состоянии */
  opacity: 0; /* Плавно появляется */
  transition: backdrop-filter 3s ease, opacity 3s ease; /* Плавная анимация исчезновения */

}




@media (min-width: 901px) {
  .mobile-menu {
    display: none;
  }

}

@media (max-width: 900px) {
  .web-menu {
    display: none;
  }
}

</style>