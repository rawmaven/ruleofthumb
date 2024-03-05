<script lang="ts" setup>
import { computed } from 'vue'
import pathValues from './iconsData'

const props = defineProps({
  iconName: String,
  fill: String,
  iconHeight: String,
  iconWidth: String,
});

const viewBoxString = computed(() => {
  return `0 0 ${props.iconWidth} ${props.iconHeight}`
})

const pathString = computed(() => {
  return pathValues[props.iconName || '']
})
</script>

<template>
  <svg :width="iconWidth" :height="iconHeight" :viewBox="viewBoxString" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path :d="pathString" :fill="fill" />
  </svg>
</template>