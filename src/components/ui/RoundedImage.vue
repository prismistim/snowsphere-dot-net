<script setup lang="ts">
type Props = {
  src: string,
  alt?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div class="overflow-hidden rounded-3xl shadow-md">
    <img :src="props.src" :alt="props.alt" />
  </div>
</template>
