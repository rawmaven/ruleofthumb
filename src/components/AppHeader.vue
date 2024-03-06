<script setup>
import HamburguerButton from './Buttons/HamburguerButton.vue';
</script>

<template>
  <header class="header-wrapper">
    <div class="left-col">
      <h1 class="main-title">
        Rule of Thumb.
      </h1>
    </div>
    <div class="right-col">
      <HamburguerButton />
    </div>
  </header>
</template>

<style scoped>
.header-wrapper {
  @apply w-full h-[120px] flex absolute m-0 bg-gradient-to-b;
  @apply from-rto-header-gradient-a from-25% to-rto-header-gradient-b;
}
.left-col {
  @apply w-3/4 flex mt-[1.875rem] ml-3;
}
.main-title {
  @apply text-white text-2xl lg:text-4xl;
}
.right-col {
  @apply w-1/4 flex justify-end items-start mt-6 mr-6;
}
</style>
