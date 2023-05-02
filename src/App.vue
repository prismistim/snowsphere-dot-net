<script setup lang="ts">
import NavBar from '/@/components/organisms/NavBar.vue'
import MyFooter from '/@/components/organisms/Footer.vue'
</script>

<template>
  <div class="bg-white dark:bg-gray-900">
    <div class="container mx-auto w-full px-[10vw]">
      <div class="myname flex h-[10vh] items-center py-10 md:h-[20vh]">
        <router-link
          to="/"
          class="font-futura text-5xl font-medium text-gray-700 dark:text-white md:text-6xl lg:text-7xl"
        >
          snowsphere
        </router-link>
      </div>
      <nav-bar />
      <div class="mt-2 mb-7 border-b border-gray-100 dark:border-gray-700" />
      <div>
        <router-view />
      </div>
    </div>
    <my-footer />
  </div>
</template>
