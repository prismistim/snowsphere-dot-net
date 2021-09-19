<template>
  <contents>
    <template #title>
      <section-title>
        About
      </section-title>
    </template>
    <template #content>
      <about-me class="mb-10"/>
      <carear />
    </template>
  </contents>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contents from '/@/components/templates/Contents.vue'
import AboutMe from '/@/components/organisms/home/AboutMe.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import Carear from '/@/components/organisms/home/Carear.vue'

export default defineComponent({
  components: {
    Contents,
    AboutMe,
    SectionTitle,
    Carear
  }
})
</script>