<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <span class="px-3 py-1 bg-gray-300 rounded-md mr-2 text-gray-800">
    {{ props.name }}
  </span>
</template>
