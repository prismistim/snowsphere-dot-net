<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'
import type { ComponentOptions } from 'vue'

const renderContent = ref<ComponentOptions>()

onMounted(async () => {
  renderContent.value = defineAsyncComponent(() => import('../articles/20230510_lastfm_lambda.md'))
})
</script>

<template>
  <div class="md-contents max-w-3xl mx-auto">
    <component :is="renderContent"></component>
    <div class="my-8 text-center">
      <button @click="$router.push('/works')">← back to list</button>
    </div>
  </div>
</template>

<style lang="postcss">
.md-contents {
  * {
    @apply dark:text-neutral-300;
  }

  h1 {
    @apply mb-4 py-4 text-2xl font-heebo border-neutral-500 dark:text-neutral-300;
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

  ul {
    @apply list-disc ml-4 mb-3;
  }

  li > ul {
    @apply mb-0;
  }

  div#thumb {
    @apply bg-neutral-700 rounded-md;
  }
  
  img {
    @apply mb-2;
  }
}
</style>
