<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  index: {
    type: Number,
    default: 0
  },
  length: {
    type: Number,
    default: 0
  }
})
</script>

<template>
  <li class="grid grid-cols-9 py-4 md:py-4 gap-y-3">
    <div class="col-span-8 sm:col-span-3 font-semibold text-sm text-gray-600">
      {{ props.title }}
    </div>
    <div class="col-span-8 sm:col-span-6 text-gray-700 text-md">
      {{ props.description }}
    </div>
  </li>
  <div v-if="props.index !== props.length - 1" class="border-b border-indigo-100" />
</template>
