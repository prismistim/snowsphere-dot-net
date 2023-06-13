<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import type { ComponentOptions } from 'vue'

const renderContent = ref<ComponentOptions>()
const count = ref(0)

onMounted(async () => {
  renderContent.value = defineAsyncComponent(() => import('../articles/test.md'))
})
</script>

<template>
  <div class="md-contents">
    <component :is="renderContent"></component>
  </div>
</template>

<style lang="postcss">
.md-contents {
  * {
    @apply font-kinto;
  }

  h1 {
    @apply my-4 text-3xl font-semibold dark:text-neutral-400;
  }

  h2 {
    @apply my-4 text-2xl font-semibold dark:text-neutral-300;
  }

  h3 {
    @apply my-3 text-xl dark:text-neutral-300;
  }

  p {
    @apply my-3 dark:text-neutral-300;
  }


  
}
</style>
