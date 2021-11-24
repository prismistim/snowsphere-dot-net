<script setup lang="ts">
import { computed } from 'vue'

const year = computed(() => {
  return new Date().getFullYear()
})
</script>


<template>
  <div class="text-center py-4 md:py-10">© {{ year }} snowsphere</div>
</template>
