<template>
  <section-title>
    <slot name="title" />
  </section-title>
  <description>
    <slot name="description" />
  </description>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import Description from '/@/components/atoms/Description.vue'

export default defineComponent({
  components: {
    SectionTitle,
    Description,
  },
})
</script>
