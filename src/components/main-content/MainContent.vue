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
        @click="openModal"
        />
        <btn-second
        buttonText="Забронировать"
        :buttonBgColor="buttonColor" 
        />
      </div> 
    </div>

    <Modal
      :isOpen="isModalOpen"
      :modalData="modalData"
      @close="closeModal"
      @button1-click="onButton1Click"
      @button2-click="onButton2Click"
    />
    
    
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
import BtnOne from '../buttons/BtnOne.vue';
import BtnSecond from '../buttons/BtnSecond.vue';
import Modal from '../Modal.vue'; // путь укажи, как у тебя в проекте


const isModalOpen = ref(false);

function openModal() {
  isModalOpen.value = true;
}

function closeModal() {
  isModalOpen.value = false;
}

// Функция для кнопки 1
function onButton1Click() {
  // Логика для кнопки 1, например, переход на другой раздел
  console.log('Перехожу на секцию 1');
  closeModal();  // Закрытие модалки
}

// Функция для кнопки 2
function onButton2Click() {
  // Логика для кнопки 2, например, закрытие модалки
  console.log('Закрываю модалку');
  closeModal();
}


defineProps({
  title: String,
  subTitle: String,
  marginTop: { type: Number, default: 70 },
  buttonColor: String,
  buttonFontColor: String,
  modalData: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      content: '',
      button1Text: 'Перейти в раздел',
      button2Text: 'Закрыть',
      button1BgColor: '#4CAF50',
      button2BgColor: '#f44336',
      button1FontColor: '#fff',
      button2FontColor: '#fff',
    })
  }
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


.main-content__modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.main-content__modal-content {
  background: white;
  border-radius: 12px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  position: relative;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-height: 80vh;
}

.modal-buttons {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    /* max-width: 300px; */
    gap: 10px;
    margin-top: 20px;
  }

.main-content__modal-title {
  margin-top: 0;
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
}

.main-content__modal-body {
  font-size: 16px;
  color: #444;
  line-height: 1.6;
}

.main-content__modal-close {
  position: absolute;
  top: 10px;
  right: 15px;
  font-size: 28px;
  background: none;
  border: none;
  cursor: pointer;
  color: #999;
  transition: color 0.2s ease;
}
.main-content__modal-close:hover {
  color: #000;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}


@media (max-width: 600px) {
  .main-content__modal-content {
    padding: 20px;
    max-height: 90vh;
  }

  .main-content__modal-title {
    font-size: 22px;
  }

  .main-content__modal-body {
    font-size: 15px;
  }
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