<template>
  <div class="main-content" >
    <h2 class="main-content__title">{{ title }}</h2>
    <h3 class="main-content__subtitle"> {{subTitle}}</h3>
    
    <slot name="image"></slot>
    <div class="buttons">
      <btn-one 
      buttonText="Узнать больше"
      buttonBgColor="black" 
      />
      <btn-second
      buttonText="Забронировать"
      />
    </div>  
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BtnOne from '../buttons/BtnOne.vue';
import BtnSecond from '../buttons/BtnSecond.vue';

const name = ref('');

defineProps({
  title: String,
  subTitle: String,
});
</script>

<style scoped>
  .main-content {
    display: flex;
    flex-direction: column;
    align-items: center; 
}

.main-content__title {
  position: absolute;
  margin-top: 150px;
  z-index: 2;
  color: white;
  font-size: 50px;
}

.main-content__subtitle {
  position: absolute;
  margin-top: 220px;
  z-index: 2;
  color: white;
  font-size: 35px;
}

.buttons {
  position: absolute;
  margin-top: 280px;
}

.buttons > * {
  margin-right: 15px;
}



</style>