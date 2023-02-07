<script setup lang="ts">
import { defineProps, PropType } from 'vue'

type TagItem = {
  name: string
  level: number
}

type Props = {
  title: string
  tags: TagItem[]
  index: number
  length: number
}

const props = withDefaults(defineProps<Props>(), {})

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
  <li class="text-md grid grid-cols-8 gap-y-3 py-4 md:py-4">
    <div class="col-span-8 text-sm font-semibold text-gray-600 sm:col-span-2">
      {{ props.title }}
    </div>
    <div class="relative col-span-6">
      <div class="flex flex-wrap content-evenly gap-2 overflow-hidden">
        <span
          v-for="item of tags"
          :key="item.name"
          :class="tagColor(item.level)"
          class="flex rounded-md px-4 py-2 text-sm text-white"
        >
          {{ item.name }}
        </span>
      </div>
    </div>
  </li>
  <div v-if="index !== length - 1" class="border-b border-indigo-100" />
</template>
