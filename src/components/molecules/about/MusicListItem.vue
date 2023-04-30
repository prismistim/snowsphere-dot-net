<script setup lang="ts">
import { defineProps } from 'vue'

type Props = {
  rank: number
  thumb: string
  title: string
  artist: string
  playCount: number
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <li class="text-md grid grid-cols-8 gap-y-3 py-2 md:py-4">
    <div>
      <div class="font-semibold">{{ props.rank }}</div>
      <div class="text-gray-300">({{ props.playCount }})</div>
    </div>
    <div class="col-span-7">
      <div class="mb-1 text-sm text-indigo-400">{{ props.artist }}</div>
      <div class="">{{ props.title }}</div>
    </div>
  </li>
  <div v-if="props.rank !== 10" class="border-b border-indigo-100" />
</template>
