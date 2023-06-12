<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import type { ComponentOptions } from 'vue'

const renderContent = ref<ComponentOptions>()
const count = ref(0)

onMounted(async () => {
  renderContent.value = defineAsyncComponent(() => import('../articles/test.md'))
  count.value++
})
</script>

<template>
  <div :key="count">
    <component :is="renderContent"></component>
  </div>
</template>

<style lang="postcss">
h1 {
  @apply text-xl font-medium;
}
</style>
