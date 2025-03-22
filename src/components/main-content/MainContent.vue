<template>
  <div class="main-content" >
    <slot name="image"></slot>
    <div class="main-content__content">
      <h2 class="main-content__title">{{ title }}</h2>
      <h3 class="main-content__subtitle"> {{subTitle}}</h3>
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

.main-content__content {
  max-width: 450px;
  position: absolute;
  margin-top: 150px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.main-content__title {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 0px;
  margin-bottom: 10px;
  z-index: 2;
  color: white;
  font-size: 50px;
}

.main-content__subtitle {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  margin-top: 0px;
  margin-bottom: 15px;
  z-index: 2;
  color: white;
  font-size: 35px;
}

.buttons {
  position: relative;
  display: flex;
  align-items: center;

}

.buttons > * {
  margin-right: 15px;
}



</style>