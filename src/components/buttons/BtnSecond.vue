<template>
  <button class="transparent-button" :style="{ border: '2px solid ' + buttonBgColor, color: buttonBgColor }">
    {{ buttonText }}
  </button>
</template>

<script setup>
defineProps({
  buttonText: String,
  buttonBgColor: {
    type: String,
    default:  'black'
  }
});
</script>

<style scoped>
.transparent-button {
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 500;
  color: rgb(0, 0, 0);
  border: 2px solid rgb(0, 0, 0);
  background-color: transparent;
  border-radius: 30px;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.3s, border-color 0.3s;
  backdrop-filter: blur(25px);
  cursor: pointer;
  transition: transform 0.3s ease;
  letter-spacing: 1.1px;

}

.transparent-button:hover {
  background-color: black;
  transform: scale(1.1);
  color: white;

}

@media (max-width: 600px) {
  .transparent-button {
  font-size: 0.8rem;
  padding: 15px 20px;
  letter-spacing: 1.1px;
  }   
} 
</style>
