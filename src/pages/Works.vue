<script setup lang="ts">
import Contents from '/@/components/templates/Contents.vue'
import GridWorks from '/@/components/organisms/works/GridWorks.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
</script>

<template>
  <contents>
    <template #title>
      <section-title> works </section-title>
    </template>
    <template #content>
      <grid-works />
    </template>
  </contents>
</template>
