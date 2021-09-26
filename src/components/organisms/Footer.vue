<template>
  <div class="text-center py-4 md:py-10">
    © {{ year }} snowsphere
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
  setup() {
    const year = computed(() => {
      return new Date().getFullYear()
    })

    return {
      year
    }
  },
})
</script>
