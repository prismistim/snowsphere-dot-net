<template>
  <contents>
    <template #title>
      <section-title> About </section-title>
    </template>
    <template #content>
      <about-me class="mb-10" />
      <side-by-side>
        <template #left>
          <career-list />
        </template>
        <template #right>
          <skil-list />
        </template>
      </side-by-side>
    </template>
  </contents>
</template>

<script setup lang="ts">
import Contents from '/@/components/templates/Contents.vue'
import AboutMe from '/@/components/organisms/about/AboutMe.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import CareerList from '/@/components/organisms/about/CareerList.vue'
import SideBySide from '/@/components/templates/SideBySide.vue'
import SkilList from '/@/components/organisms/about/SkilList.vue'
</script>
