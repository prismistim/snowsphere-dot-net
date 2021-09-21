<template>
  <div class="">
    © {{ year }} snowsphere
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    const year = new Date().getFullYear()
    return year
  },
})
</script>
