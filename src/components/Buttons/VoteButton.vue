<script lang="ts" setup>
  import GenericIcon from '../GenericIcon/GenericIcon.vue';

  const props = defineProps({
    iconName: String,
  })
</script>

<template>
  <button :class="`${iconName} ${'w-full h-8 flex justify-center items-center'}`">
    <GenericIcon 
      :iconName="iconName" fill="white" iconHeight="18" iconWidth="18" />
  </button>
</template>

<style scoped>
.thumbs-up {
  @apply bg-rto-green;
}
.thumbs-down {
  @apply bg-rto-yellow;
}
.hamburguer {
  @apply bg-transparent;
}
</style>