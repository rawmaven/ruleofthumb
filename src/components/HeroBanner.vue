<script setup>
import VoteButton from './Buttons/VoteButton.vue';
</script>

<template>
  <section class="w-full h-[425px] flex flex-col justify-between bg-[url('/img/pope-francis.png')] bg-cover bg-center m-0 pt-[4.125rem]">
    <div class="w-[55vw] h-[266px] bg-rto-dark-gray-trans-b backdrop-blur-xl ml-3">
      <div class="flex flex-col justify-between h-full p-3">
        <h2 class="flex flex-col">
          <span class="font-lato-light text-white text-xs">What's your opinion on</span>
          <span class="text-white text-4xl">Pope Francis?</span>
        </h2>
        <p class="font-lato-light text-[0.938rem] leading-[1.063rem] text-white">
          He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
        </p>
        <p class="font-lato-regular text-white text-xs">What's your veredict?</p>
      </div>
      <div class="flex w-[55vw]">
        <VoteButton iconName="thumbs-up" />
        <VoteButton iconName="thumbs-down" />
      </div>
    </div>
    <div class="w-full flex h-9">
      <div class="w-1/2 h-9 flex justify-end items-center font-lato-light text-white bg-rto-dark-gray-trans-a p-3 uppercase">CLOSING IN</div>
      <div class="w-1/2 h-9 flex justify-start items-center font-lato-light text-rto-dark-gray bg-rto-white-trans-a pr-3 uppercase">
        <div class="border-solid border-l-rto-dark-gray-trans-a border-l-8 border-y-transparent border-y-8 border-r-0 mr-1"></div>
        <span class="font-lato-regular pr-1">15</span>
        <span>days</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
