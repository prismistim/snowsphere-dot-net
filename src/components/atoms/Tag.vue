<template>
  <span class="px-3 py-1 bg-gray-600 rounded-md mr-2 text-white">
    {{ name }}
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    name: {
      type: String,
      defualt: ''
    }
  }
})
</script>
