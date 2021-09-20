<template>
  <section-card>
    <template #title>
      Career
    </template>
    <template #content>
      <career-list />
    </template>
  </section-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionCard from '/@/components/molecules/SectionCard.vue'
import CareerList from '/@/components/organisms/about/CareerList.vue'

export default defineComponent({
  components: {
    SectionCard,
    CareerList
  }
})
</script>
