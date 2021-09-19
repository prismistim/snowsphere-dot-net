<template>
  <section-card>
    <template #title>
      職歴
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
