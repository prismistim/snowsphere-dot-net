<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import type { ComponentOptions } from 'vue'

const renderContent = ref<ComponentOptions>()

onMounted(async () => {
  renderContent.value = defineAsyncComponent(() => import('../articles/20230510_lastfm_lambda.md'))
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
    @apply font-ubuntu-mono dark:text-neutral-300;
  }

  h1 {
    @apply mb-4 py-6 text-2xl font-semibold border-b border-dashed border-neutral-500 dark:text-neutral-300;
  }

  h2 {
    @apply mt-6 mb-2 py-2 text-xl font-semibold border-b border-neutral-500 dark:text-neutral-300;
  }

  h3 {
    @apply mb-2 text-lg font-semibold dark:text-neutral-300;
  }

  p {
    @apply mt-4 dark:text-neutral-300;
  }

  p + p {
    @apply mt-2;
  }

  ul {
    @apply list-disc ml-4 mb-3;
  }

  li > ul {
    @apply mb-0;
  }
  
  img {
    @apply mb-2;
  }
}
</style>
