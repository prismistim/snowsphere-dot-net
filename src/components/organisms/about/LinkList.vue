<script setup lang="ts">
import links from '/@/data/links.json'

const importSvg = (name: string): string => {
  return `/@/assets/svg/${name}.svg`
}
</script>

<template>
  <div
    class="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-0 justify-items-center"
  >
    <div v-for="(item, index) of links.items" :key="index" class="lg:p-8 icon">
      <a :href="item.link" target="_blank">
        <img :src="importSvg(item.name)" class="w-8" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.icon {
  color: '#cccccc';
}
</style>
