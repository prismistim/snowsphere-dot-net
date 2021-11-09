<template>
  <li class="grid grid-cols-8 text-md py-4 md:py-4 gap-y-3">
    <div class="col-span-8 sm:col-span-2 font-semibold text-sm text-gray-600">
      {{ title }}
    </div>
    <div class="col-span-8 sm:col-span-6 text-gray-700">{{ description }}</div>
  </li>
  <div v-if="index !== length - 1" class="border-b border-indigo-100" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    index: {
      type: Number,
      default: 0,
    },
    length: {
      type: Number,
      default: 0,
    },
  },
})
</script>
