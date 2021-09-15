<template>
  <default>
    <div class="my-10 h-[20vh] flex items-center text-5xl md:text-6xl lg:text-7xl font-medium text-gray-700 myname">
      snowsphere
    </div>
    <div class="border-b border-gray-100 my-10" />
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
