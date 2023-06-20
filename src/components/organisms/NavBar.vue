<script setup lang="ts">
type NavItem = {
  to: string
  label: string
}

const navItems: NavItem[] = [
  { to: '/about', label: 'about' },
  { to: '/works', label: 'works' },
]
</script>

<template>
  <div
    class="sticky top-0 z-10 bg-white bg-opacity-90 py-5 font-heebo text-2xl font-semibold tracking-wide dark:bg-neutral-900/80"
  >
    <div class="flex space-x-10">
      <div v-for="item in navItems" :key="item.label" class="">
        <router-link
          :to="item.to"
          class="rounded-md duration-250 text-neutral-500 transition hover:text-neutral-300"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>
