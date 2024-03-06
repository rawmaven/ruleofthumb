<template>
  <div class="time-progress-wrapper">
    <div class="time-elapsed">CLOSING IN</div>
    <div class="time-left">
      <div class="time-elapsed-arrow"></div>
      <span class="days-left">15</span>
      <span>days</span>
    </div>
  </div>
</template>
<style scoped>
.time-progress-wrapper {
  @apply w-full flex h-9 uppercase;
}
.time-elapsed {
  @apply w-1/2 h-9 flex justify-end items-center font-lato-light text-white bg-rto-dark-gray-trans-a p-3;
}
.time-elapsed-arrow {
  @apply border-solid border-l-rto-dark-gray-trans-a border-l-8 border-y-transparent border-y-8 border-r-0 mr-1;
}
.time-left {
  @apply w-1/2 h-9 flex justify-start items-center font-lato-light text-rto-dark-gray bg-rto-white-trans-a pr-3;
}
.days-left {
  @apply font-lato-regular pr-1;
}
</style>