<script lang="ts" setup>
import ThumbButton from '../Buttons/ThumbButton.vue'
</script>

<template>
  <div class="card-wrapper">
    <div class="card-inner">
      <h3>
        <span class="side-icon">
          <ThumbButton iconName="thumbs-up" fill="white" />
        </span>
        <span>
          Kanye West
        </span>
      </h3>
      <p class="copy-text">Vestibulum diam ante, porttitor a odio eget, rhoncus.</p>
      <p class="time-of-post">1 month ago in Entertainment</p>
      <div class="buttons-wrapper">
        <div class="vote-buttons">
          <ThumbButton iconName="thumbs-up" fill="white" />
          <ThumbButton iconName="thumbs-down" fill="white" />
        </div>
        <button>Vote Now</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-wrapper {
  @apply w-full h-full bg-black;
}
.card-inner {
  @apply w-full h-full flex flex-col gap-4 justify-center;
}
.card-inner h3 {
  @apply flex w-full text-white text-3xl font-lato-regular;
}
.side-icon  {
  @apply w-[30px] mr-1;
}
.copy-text {
  @apply w-full px-10 text-white font-lato-regular;
}
.time-of-post {
  @apply w-full text-white text-xs font-lato-bold flex justify-end pr-10;
}
.buttons-wrapper {
  @apply w-full flex justify-end gap-[10px] pr-10;
}
.vote-buttons {
  @apply w-[70px] flex items-center gap-[10px];
}
button {
  @apply w-[107px] h-[2.375rem] border-[1px] text-white border-white text-[0.938rem];
}
</style>