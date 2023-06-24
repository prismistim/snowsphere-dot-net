<script setup lang="ts">
type Props = {
  src: string,
  alt?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="h-60 overflow-hidden rounded-md bg-neutral-600 ">
    <img :src="props.src" :alt="props.alt" />
  </div>
</template>
