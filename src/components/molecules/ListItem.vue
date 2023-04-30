<script setup lang="ts">
import { defineProps } from 'vue'

type Props = {
  title: string
  description: string
  index: number
  length: number
}

const props = withDefaults(defineProps<Props>(), {})
</script>

<template>
  <li class="grid grid-cols-9 gap-y-3 py-4 md:py-4">
    <div class="col-span-8 text-sm font-semibold text-gray-600 sm:col-span-3">
      {{ props.title }}
    </div>
    <div class="text-md col-span-8 text-gray-700 sm:col-span-6">
      {{ props.description }}
    </div>
  </li>
  <div
    v-if="props.index !== props.length - 1"
    class="border-b border-indigo-100"
  />
</template>
