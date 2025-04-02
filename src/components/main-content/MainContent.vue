<template>
  <div class="main-content" >
    <slot name="image"></slot>
    <div class="main-content__content" :style="{ marginTop: marginTop + 'px' }">
      <h2 class="main-content__title">{{ title }}</h2>
      <h3 class="main-content__subtitle"> {{subTitle}}</h3>
      <div class="buttons">
        <btn-one 
        buttonText="Узнать больше"
        :buttonBgColor="buttonColor"
        :buttonFontColor="buttonFontColor"
        />
        <btn-second
        buttonText="Забронировать"
        :buttonBgColor="buttonColor" 
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
  marginTop: { type: Number, default: 70 }, 
  buttonColor: String,  // Пропс для передачи цвета кнопки
  buttonFontColor: String, 


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
  margin-top: 110px;
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
  gap: 20px;

}

/* .buttons > * {
  margin-right: 15px;
} */


@media (max-width: 600px) {
  .buttons {
    
    /* flex-direction: column; */
    gap: 10px;
  }

  .main-content__content {
  max-width: 450px;
  position: absolute;
  margin-top: 100px;
  }

  .main-content__title {
  font-size: 35px;
}

.main-content__subtitle {

  font-size: 20px;
}
}



</style>