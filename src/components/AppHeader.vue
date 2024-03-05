<script setup>
import HamburguerButton from './Buttons/HamburguerButton.vue';
</script>

<template>
  <header class="w-full h-[120px] flex absolute m-0 bg-gradient-to-b from-rto-header-gradient-a from-25% to-rto-header-gradient-b">
    <div class="w-3/4 flex sm:mt-[1.875rem] sm:ml-3">
      <h1 class="text-white sm:text-2xl lg:text-4xl">
        Rule of Thumb.
      </h1>
    </div>
    <div class="w-1/4 flex justify-end items-start mt-6 mr-6">
      <HamburguerButton />
    </div>
  </header>
</template>

<style scoped>
</style>
