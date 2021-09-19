<template>
  <contents>
    <template #title>
      <section-title> Works </section-title>
    </template>
    <template #content>
      <grid-works />
    </template>
  </contents>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contents from '/@/components/templates/Contents.vue'
import GridWorks from '/@/components/organisms/works/GridWorks.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'

export default defineComponent({
  components: {
    Contents,
    GridWorks,
    SectionTitle,
  },
})
</script>
