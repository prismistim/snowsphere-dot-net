<script setup lang="ts">
import Contents from '/@/layouts/Contents.vue'
import GridWorks from '/@/components/works/GridWorks.vue'
import SectionTitle from '/@/components/ui/SectionTitle.vue'
</script>

<template>
  <contents>
    <template #title>
      <section-title> works (WIP) </section-title>
    </template>
    <template #content>
      <grid-works />
    </template>
  </contents>
</template>
