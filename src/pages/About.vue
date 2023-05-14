<script setup lang="ts">
import Contents from '/@/components/templates/Contents.vue'
import BasicInfoCard from '/@/components/about/BasicInfoCard.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import CareerList from '/@/components/organisms/about/CareerList.vue'
import SideBySide from '/@/components/templates/SideBySide.vue'
import SkilList from '/@/components/organisms/about/SkilList.vue'
import MyWeeklyMusicChartList from '/@/components/organisms/about/MyWeeklyMusicChartList.vue'
import BackgroundCard from '../components/about/BackgroundCard.vue'
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
          <background-card />
          <my-weekly-music-chart-list class="mt-6"></my-weekly-music-chart-list>
        </template>
        <template #right>
          <skill-card></skill-card>
        </template>
      </side-by-side>
    </template>
  </contents>
</template>
