<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  rank: {
    type: Number,
    default: 1,
  },
  thumb: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  artist: {
    type: String,
    default: '',
  },
  playCount: {
    type: Number,
    default: 0,
  },
})
</script>

<template>
  <li class="grid grid-cols-8 text-md py-2 md:py-4 gap-y-3">
    <div>
      <div class="font-semibold">{{ props.rank }}</div>
      <div class="text-gray-300">({{ props.playCount }})</div>
    </div>
    <div class="col-span-7">
      <div class="mb-1 text-indigo-400 text-sm">{{ props.artist }}</div>
      <div class="">{{ props.title }}</div>
    </div>
  </li>
  <div v-if="props.rank !== 10" class="border-b border-indigo-100" />
</template>
