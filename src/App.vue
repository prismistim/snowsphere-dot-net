<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="container w-full mx-auto px-[10vw]">
      <div class="py-10 h-[20vh] flex items-center myname">
        <router-link to="/" class="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-700 dark:text-white site-title">
          snowsphere
        </router-link>
      </div>
      <nav-bar />
      <div class="border-b border-gray-100 dark:border-gray-700 mt-2 mb-7" />
      <div>
        <router-view/>
      </div>
    </div>
    <footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '/@/components/organisms/NavBar.vue'
import MyFooter from '/@/components/organisms/Footer.vue'

export default defineComponent({
  components: {
    NavBar,
    MyFooter
  }
})
</script>

<style scoped>
.site-title {
  font-family: 'Futura PT', sans-serif;
}
</style>