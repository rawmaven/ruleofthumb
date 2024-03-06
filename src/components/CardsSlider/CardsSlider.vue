<script lang="ts" setup>
import Card from './Card.vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import '@splidejs/vue-splide/css';

const sliderOptions = { 
  type: 'slider',
  arrows: false,
  pagination: false,
  fixedHeight: '80vw',
  fixedWidth: '80vw',
  gap: 15,
}
</script>

<template>
  <div class="slider-wrapper">
    <Splide :options="sliderOptions" aria-label="My Favorite Images">
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
      <SplideSlide>
        <Card />
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
.slider-wrapper {
  @apply w-full pl-3;
}
</style>