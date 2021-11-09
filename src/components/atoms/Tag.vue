<template>
  <span class="px-3 py-1 bg-gray-300 rounded-md mr-2 text-gray-800">
    {{ name }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      default: '',
    },
  },
})
</script>
