<template>
  <div class="header" >
    <div class="content">
      <div class="header__main-content">
        <span><img src="../../../public/images/3.png" alt="Logo" class="header__logo">
        </span>
        <nav class="header__navigation">
          <router-link class="header__item" to="/">Главная</router-link>
          <router-link class="header__item" to="/about">О нас</router-link>
          <router-link class="header__item" to="/routs">Экскурсии</router-link>
          <router-link class="header__item" to="/galery">Галерея</router-link>
          <router-link class="header__item" to="/tours">Полный тур</router-link>

        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';


</script>

<style >
.header {
  background-color: rgba(255, 255, 255, 0.75);
  position: sticky;
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
  color: #333; /* Цвет для обычных ссылок */
  text-decoration: none; /* Убирает подчеркивание */
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
</style>