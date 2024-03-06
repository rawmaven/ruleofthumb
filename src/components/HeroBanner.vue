<script setup>
import TimeLeftBar from './TimeLeftBar.vue'
import ThumbButton from './Buttons/ThumbButton.vue'
const heroBgImageURL = 'url(/img/pope-francis.png)'
</script>

<template>
  <section 
    :style="{backgroundImage: heroBgImageURL}"
    class="hero-banner-wrapper">
    <div class="banner-aside">
      <div class="copy-text">
        <h2>
          <span class="header-upper-text">What's your opinion on</span>
          <span>Pope Francis?</span>
        </h2>
        <p class="copy-text-body">
          He’s talking tough on clergy sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)
        </p>
        <p class="copy-text-cta">What's your veredict?</p>
      </div>
      <div class="vote-buttons">
        <ThumbButton iconName="thumbs-up" />
        <ThumbButton iconName="thumbs-down" />
      </div>
    </div>
    <TimeLeftBar />
  </section>
</template>

<style scoped>
.hero-banner-wrapper {
  @apply w-full h-[425px] flex flex-col justify-between bg-cover bg-center m-0 pt-[4.125rem];
}
.banner-aside {
  @apply w-[55vw] h-[266px] bg-rto-dark-gray-trans-b backdrop-blur-xl ml-3;
}
.copy-text {
  @apply flex flex-col justify-between h-full p-3;
}
.copy-text h2 {
  @apply flex flex-col text-white text-4xl;
}
.header-upper-text {
  @apply font-lato-light text-white text-xs;
}
.copy-text-body {
  @apply font-lato-light text-[0.938rem] leading-[1.063rem] text-white;
}
.copy-text-cta {
  @apply font-lato-regular text-white text-xs;
}
.vote-buttons {
  @apply flex w-[55vw];
}
</style>
