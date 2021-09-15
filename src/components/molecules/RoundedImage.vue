<template>
  <div class="rounded-3xl overflow-hidden">
    <img :src="src" :alt="alt" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    src: {
      type: String,
      required: true,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    }
  }
})
</script>
