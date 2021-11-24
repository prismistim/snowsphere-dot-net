<script setup lang="ts">
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import Description from '/@/components/atoms/Description.vue'
</script>

<template>
  <section-title>
    <slot name="title" />
  </section-title>
  <description>
    <slot name="description" />
  </description>
</template>
