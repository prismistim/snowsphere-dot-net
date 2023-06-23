<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  src: {
    type: String,
    required: true,
    default: '',
  },
  alt: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="h-60 overflow-hidden rounded-md bg-neutral-600 ">
    <img :src="props.src" :alt="props.alt" />
  </div>
</template>
