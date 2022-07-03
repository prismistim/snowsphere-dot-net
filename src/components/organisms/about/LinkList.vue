<script setup lang="ts">
import links from '/@/data/links.json'

const importSvg = (name: string): string => {
  return `/svg/${name}.svg`
}
</script>

<template>
  <div
    class="grid grid-cols-3 justify-items-center gap-10 md:grid-cols-6 md:gap-0"
  >
    <div v-for="(item, index) of links.items" :key="index" class="icon lg:p-8">
      <a :href="item.link" target="_blank">
        <img :src="importSvg(item.name)" class="w-8 sepia-30 brightness-75 hue-rotate-180" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.icon {
  color: '#cccccc';
}
</style>
