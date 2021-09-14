<template>
  <default>
    <about-me />
  </default>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Default from '/@/components/templates/Default.vue'
import AboutMe from '/@/components/organisms/Home/AboutMe.vue'

export default defineComponent({
  components: {
    Default,
    AboutMe
  }
})
</script>
