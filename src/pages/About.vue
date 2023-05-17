<script setup lang="ts">
import Contents from '/@/components/templates/Contents.vue'
import BasicInfoCard from '/@/components/about/BasicInfoCard.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import SideBySide from '/@/components/templates/SideBySide.vue'
import CareerCard from '../components/about/CareerCard.vue'
import SkillCard from '../components/about/SkillCard.vue'
</script>

<template>
  <contents>
    <template #title>
      <section-title> About </section-title>
    </template>
    <template #content>
      <basic-info-card></basic-info-card>
      <side-by-side class="mt-6">
        <template #left>
          <career-card />
        </template>
        <template #right>
          <skill-card></skill-card>
        </template>
      </side-by-side>
    </template>
  </contents>
</template>
