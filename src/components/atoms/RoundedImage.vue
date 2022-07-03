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
  <div class="overflow-hidden rounded-3xl shadow-md">
    <img :src="props.src" :alt="props.alt" />
  </div>
</template>
