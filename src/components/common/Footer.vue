<script setup lang="ts">
import { computed } from 'vue'

const year = computed(() => {
  return new Date().getFullYear()
})
</script>

<template>
  <div class="py-8 text-center dark:text-neutral-500 font-ubuntu-mono md:py-10">
    © {{ year }} snowsphere
  </div>
</template>
