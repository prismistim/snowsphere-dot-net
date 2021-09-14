<template>
  <default>
    <div class="text-7xl font-semibold my-10 text-center text-blue-700 myname">
      snowsphere
    </div>
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

<style scoped>
.myname {
  font-family: 'Poppins', sans-serif;
}
</style>