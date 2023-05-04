<script setup lang="ts">
import Contents from '/@/components/templates/Contents.vue'
import AboutMe from '/@/components/organisms/about/AboutMe.vue'
import BasicInfoCard from '/@/components/about/BasicInfoCard.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import CareerList from '/@/components/organisms/about/CareerList.vue'
import SideBySide from '/@/components/templates/SideBySide.vue'
import SkilList from '/@/components/organisms/about/SkilList.vue'
import MyWeeklyMusicChartList from '/@/components/organisms/about/MyWeeklyMusicChartList.vue'
import AboutMeNew from '/@/components/organisms/about/AboutMeNew.vue'
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
          <career-list />
        </template>
        <template #right>
          <skil-list />
        </template>
      </side-by-side>
      <side-by-side>
        <template #left>
          <my-weekly-music-chart-list></my-weekly-music-chart-list>
        </template>
      </side-by-side>
    </template>
  </contents>
</template>
