<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  name: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <span class="py-1 rounded-md text-indigo-400 font-semibold">
    {{ props.name }}
  </span>
</template>
