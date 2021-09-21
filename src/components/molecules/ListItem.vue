<template>
  <li class="grid grid-cols-4 text-md px-2 py-4">
    <div class="col-span-1 font-semibold text-gray-600">{{ title }}</div>
    <div class="col-span-3 text-gray-700">{{ description }}</div>
  </li>
  <div v-if="index !== length - 1" class="border-b border-indigo-100" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
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
  }
})
</script>
