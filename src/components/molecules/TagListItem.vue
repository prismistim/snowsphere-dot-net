<template>
  <li class="grid grid-cols-8 text-md py-4 md:py-4 gap-y-3">
    <div class="col-span-8 sm:col-span-2 font-semibold text-sm text-gray-600">{{ title }}</div>
    <div class="col-span-6 relative">
      <div class="flex flex-wrap  content-evenly overflow-hidden gap-2">
        <span v-for="item of tags" :key="item" class="flex px-4 py-2 bg-gray-400 text-sm text-white rounded-md">
          {{ item }}
        </span>
      </div>
    </div>
  </li>
  <div v-if="index !== length - 1" class="border-b border-indigo-100" />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  props: {
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: Array as PropType<string[]> ,
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
