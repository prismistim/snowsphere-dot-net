<template>
  <contents>
    <template #title>
      <section-title>
        About
      </section-title>
    </template>
    <template #content>
      <about-me class="mb-10"/>
      <side-by-side>
        <template #left>
          <background />
        </template>
        <template #right>
        </template>
      </side-by-side>
      <background-list />
    </template>
  </contents>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contents from '/@/components/templates/Contents.vue'
import AboutMe from '/@/components/organisms/about/AboutMe.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import BackgroundList from '/@/components/organisms/about/BackgroundList.vue'
import SideBySide from '/@/components/templates/SideBySide.vue'

export default defineComponent({
  components: {
    Contents,
    AboutMe,
    SectionTitle,
    BackgroundList,
    SideBySide
  }
})
</script>