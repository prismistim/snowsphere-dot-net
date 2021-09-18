<template>
  <contents>
    <template #title>
      <section-title>
        About
      </section-title>
    </template>
    <template #content>
      <about-me />
    </template>
  </contents>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contents from '/@/components/templates/Contents.vue'
import AboutMe from '/@/components/organisms/Home/AboutMe.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'

export default defineComponent({
  components: {
    Contents,
    AboutMe,
    SectionTitle
  }
})
</script>