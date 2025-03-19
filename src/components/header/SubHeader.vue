<template>
  <div class="subheader">
    subheader
  </div>
</template>

<script setup>
import { ref } from 'vue';

const name = ref('');

// Define methods here if needed

</script>

<style scoped>
  .subheader {
    background-color: rgba(255, 255, 255, 0.75);
    top: 0;
    z-index: 1000;
    backdrop-filter: blur(25px);
    height: 200px;
    width: 100%;
    position: fixed;
    margin-top: 70px;
  }
</style>