<script setup lang="ts">
import NavBar from '/@/components/organisms/NavBar.vue'
import MyFooter from '/@/components/organisms/Footer.vue'
</script>

<template>
  <div class="bg-white dark:bg-neutral-950">
    <div class="container mx-auto w-full px-[10vw]">
      <div class="myname flex h-[10vh] items-center py-4 md:h-[10vh]">
        <router-link
          to="/"
          class="font-futura text-3xl font-medium text-gray-700 dark:text-white md:text-4xl lg:text-5xl"
        >
          snowsphere
        </router-link>
      </div>
      <nav-bar />
      <div class="mt-2 mb-7 border-b border-neutral-100 dark:border-neutral-700" />
      <div>
        <router-view />
      </div>
    </div>
    <my-footer />
  </div>
</template>
