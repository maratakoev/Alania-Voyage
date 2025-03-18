<template>
  <button class="button" :style="{ backgroundColor: buttonBgColor }">
    {{ buttonText }}
  </button>
</template>

<script setup>
defineProps({
  buttonText: String,
  buttonBgColor: String
});
</script>

<style scoped>
.button {
  padding: 15px 30px;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  text-align: center;
  text-transform: uppercase;
  transition: background-color 0.3s;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.button:hover {
  opacity: 0.9;
  transform: scale(1.1);

}
</style>
