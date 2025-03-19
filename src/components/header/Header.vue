<template>
  <div class="header"  @mouseleave="hideSubMenu">
    <!-- <button @click="toggleBlur">Toggle Blur</button> -->
    <div class="content">
      <div class="header__main-content">
        <span><img src="../../../public/images/3.png" alt="Logo" class="header__logo">
        </span>
        <nav class="header__navigation">
          <router-link 
          v-for="(item, index) in menuItems"
          :key="index"
          class="header__item" 
          :to="item.route"
          @mouseenter="showSubMenu(index)"
          >{{ item.label }}
        </router-link>

        </nav>
      </div>
      <div class="header__submenu"  :style="submenuStyle"  @mouseenter="cancelHide" @mouseleave="hideSubMenu">
        <div class="header__submenu-column">
          <span class="header__submenu-title">Наши экскурсии</span>
          <ul class="header__submenu-list">
            <li v-for="(item, index) in submenuItems" :key="index" class="header__submenu-subtitle" :style="getItemStyle(index)">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="header__submenu-column">
          <span class="header__submenu-title">Дополнительно</span>
          <ul class="header__submenu-list">
            <li v-for="(item, index) in submenuItems" :key="index" class="header__submenu-item" :style="getItemStyle(index)">
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="header__submenu-column">
          <span class="header__submenu-title">Подробности</span>
          <ul class="header__submenu-list">
            <li v-for="(item, index) in submenuItems" :key="index" class="header__submenu-item" :style="getItemStyle(index)">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';

const menuItems = [
  { label: 'Главная', route: '/' },
  { label: 'О нас', route: '/about', submenu: ['Соц сети', 'Автопарк'] },
  { label: 'Экскурсии', route: '/routs', submenu: ['Кольцо Осетии', 'Алагирское направление'] },
  { label: 'Галерея', route: '/galery', submenu: ['Фотографии', 'Видео'] },
  { label: 'Проживанин', route: '/tours', submenu: ['Коттедж', 'Квартира'] }
];

const isSubMenuActive = ref(false);
const submenuItems = ref([]);
let hideTimeout = null;

const showSubMenu = (index) => {
  submenuItems.value = menuItems[index].submenu || [];
  isSubMenuActive.value = submenuItems.value.length > 0;
  clearTimeout(hideTimeout);

  emit('update:blurActive', isSubMenuActive.value); // Сообщаем родителю о изменении
};

const hideSubMenu = () => {
  hideTimeout = setTimeout(() => {
    isSubMenuActive.value = false;
    emit('update:blurActive', false); // Сообщаем родителю о скрытии
  }, 300);
};

const cancelHide = () => {
  clearTimeout(hideTimeout);
};

const emit = defineEmits();
// isSubMenuActive.value = !!menuItems[index].submenu;

// const isSubMenuActive = ref(true);
const itemHeight = 60; // Фиксированная высота одного элемента подменю

const toggleBlur = () => {
  isSubMenuActive.value = !isSubMenuActive.value;
  emit('update:blurActive', isSubMenuActive.value);
};

const submenuStyle = computed(() => ({
  height: isSubMenuActive.value ? `${submenuItems.value.length * 60}px` : '0',
  opacity: isSubMenuActive.value ? '1' : '0',
  paddingTop: isSubMenuActive.value ? '25px' : '0',
  paddingBottom: isSubMenuActive.value ? '65px' : '0',
  overflow: 'hidden',
  transition: 'height 0.3s ease, opacity 0.3s ease',
}));

const getItemStyle = (index) => {
  return {
    opacity: isSubMenuActive.value ? '1' : '0',
    transform: isSubMenuActive.value ? 'translateY(0)' : 'translateY(-10px)',
    transition: `transform 0.3s ease ${index * 0.1}s, opacity 0.3s ease ${index * 0.1}s`, // Задержка на каждый элемент
  };
};

</script>

<style >
.header {
  background-color: rgba(255, 255, 255, 0.75);
  position: fixed;
  width:  100%;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(25px);
}

.content {
  max-width: 1024px;
  margin-left: auto;
  margin-right: auto;

}

.header__main-content {
  padding: 0 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.header__navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 700px;
  height: 70px;
  color: #333; 
  text-decoration: none; 
}

.header__item {
  text-decoration: none;
  color: #0E2433;
  transition: transform 0.3s ease, text-decoration 0.3s ease;

}

.header__item:hover {
  transform: scale(1.1);
}

.header__item.router-link-exact-active {
  color: rgb(214 165 83); /* Цвет для активной ссылки */
  transform: scale(1.2);

}

.header__logo {
  width: 50px;
  backdrop-filter: blur(25px);
  border-radius: 50px;
  border: 2px solid rgb(214 165 83);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.header__logo:hover {
  transform: scale(1.1);
}

.header__submenu {
  display: flex;
  opacity: 0; /* Начальная непрозрачность */
  height: 0;  /* Начальная высота */
  overflow: hidden;  /* Скрытие содержимого при закрытии */
  transition: height 0.3s ease, opacity 0.3s ease; /* Плавный переход */

}

.header__submenu-column {
  margin-right: 65px;
}

.header__submenu-title {
  height: 15px;
  font-size: 18px;
  margin-bottom: 20px;
}

.header__submenu-subtitle {
  transition: transform 0.3s ease, opacity 0.3s ease;
  height: 20px;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 35px;
}

.header__submenu-list {
  padding-top: 25px;
  padding-left: 0;
  margin: 0;
  list-style: none;
}

.header__submenu-item {
  padding: 10px 0;
  transition: transform 0.3s ease, opacity 0.3s ease;
  height: 15px;
  font-size: 18px;
  font-weight: 600;
}







</style>