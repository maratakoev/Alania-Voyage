<template>
  <div class="title-image" :style="containerStyle">
    <img :src="imageSrc" class="title-image__img" :style="imageStyle">
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";

defineProps({
  imageSrc: {
    type: String,
    required: true
  }
});

const scrollY = ref(0);
const startOffset = 40; // Начинаем изменение после 50px прокрутки
const maxScroll = 150; // Длина участка, на котором изменяются стили

const handleScroll = () => {
  scrollY.value = Math.max(0, Math.min(window.scrollY - startOffset, maxScroll));
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

// Коэффициент от 0 до 1, учитывая startOffset
const progress = computed(() => Math.max(0, scrollY.value / maxScroll));

const containerStyle = computed(() => ({
  width: `${100 - 15 * progress.value}%`
}));

const imageStyle = computed(() => ({
  borderRadius: `${44 * progress.value}px`
}));
</script>

<style scoped>
.title-image {
  margin-left: auto;
  margin-right: auto;
  transition: width 0.1s linear;
}

.title-image__img {
  height: 800px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  object-fit: cover;
  transition: border-radius 0.1s linear;
}
</style>
