<script setup lang="ts">
import SubTitle from '/@/components/atoms/SubTitle.vue'
</script>

<template>
  <div class="mb-4 md:mb-3">
    <sub-title class="mb-2 md:mb-4">
      <slot name="title" />
    </sub-title>
    <div class="">
      <slot name="content" />
    </div>
  </div>
</template>
