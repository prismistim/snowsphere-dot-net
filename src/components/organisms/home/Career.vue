<template>
  <section-card>
    <template #title>
      Career
    </template>
    <template #content>
      hogehoge
    </template>
  </section-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionCard from '/@/components/molecules/SectionCard.vue'

export default defineComponent({
  components: {
    SectionCard
  }
})
</script>
