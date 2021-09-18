<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="container mx-auto px-[10vw]">
      <div class="py-10 h-[20vh] flex items-center myname">
        <router-link to="/" class="text-5xl md:text-6xl lg:text-7xl font-medium text-gray-700 dark:text-white">
          snowsphere
        </router-link>
      </div>
      <nav-bar />
      <div class="border-b border-gray-100 dark:border-gray-700 my-10" />
      <div class="">
        <router-view/>
      </div>
    </div>
    <!-- <div class="container flex mb-4 bg-gray-100 h-20 text-center justify-center">
      <div class="w-full">Navs</div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavBar from '/@/components/organisms/NavBar.vue'

export default defineComponent({
  components: {
    NavBar
  }
})
</script>

