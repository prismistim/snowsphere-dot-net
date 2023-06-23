<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  bgColor: string
}

const props = withDefaults(defineProps<Props>(), {
  bgColor: '',
})

const bgClass = computed(() => {
  if (props.bgColor === 'lv2') {
    return 'dark:from-blue-700 dark:to-violet-700'
  } else if (props.bgColor === 'lv1') {
    return 'dark:from-blue-400/50 dark:to-indigo-400/50'
  } else {
    return 'dark:from-neutral-500/25 dark:to-indigo-500/25'
  }
})
</script>

<template>
  <span
    :class="[
      bgClass,
      'inline-block rounded-sm bg-sky-800/0 bg-gradient-to-r px-2 text-neutral-300 font-ubuntu-mono'
    ]"
  >
    <slot name="default"></slot>
    <slot name="append"></slot>
  </span>
</template>
