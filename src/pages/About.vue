<template>
  <contents>
    <template #title>
      <section-title>
        About
      </section-title>
    </template>
    <template #content>
      <about-me class="mb-10"/>
      <career />
    </template>
  </contents>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contents from '/@/components/templates/Contents.vue'
import AboutMe from '/@/components/organisms/home/AboutMe.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import Career from '/@/components/organisms/home/Career.vue'

export default defineComponent({
  components: {
    Contents,
    AboutMe,
    SectionTitle,
    Career
  }
})
</script>