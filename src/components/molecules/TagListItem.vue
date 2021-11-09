<script setup lang="ts">
import { defineProps, PropType } from 'vue'

type TagItem = {
  name: string
  level: number
}

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  tags: {
    type: Array as PropType<TagItem[]>,
    default: () => [],
  },
  index: {
    type: Number,
    default: 0,
  },
  length: {
    type: Number,
    default: 0,
  },
})

const tagColor = (level: number) => {
  if (level === 3) {
    return 'bg-indigo-600'
  } else if (level === 2) {
    return 'bg-indigo-500'
  } else if (level === 1) {
    return 'bg-indigo-300'
  } else {
    return 'bg-gray-500'
  }
}
</script>

<template>
  <li class="grid grid-cols-8 text-md py-4 md:py-4 gap-y-3">
    <div class="col-span-8 sm:col-span-2 font-semibold text-sm text-gray-600">
      {{ props.title }}
    </div>
    <div class="col-span-6 relative">
      <div class="flex flex-wrap content-evenly overflow-hidden gap-2">
        <span
          v-for="item of tags"
          :key="item.name"
          :class="tagColor(item.level)"
          class="flex px-4 py-2 text-sm text-white rounded-md"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
  </li>
  <div v-if="index !== length - 1" class="border-b border-indigo-100" />
</template>
