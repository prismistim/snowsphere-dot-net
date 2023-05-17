<script setup lang="ts">
import meJson from '/@/data/me.json'
import SubTitle from '/@/components/atoms/SubTitle.vue'
</script>

<template>
  <sub-title> Background </sub-title>
  <div
    class="mt-6 rounded-lg border border-neutral-300 dark:border-neutral-700"
  >
    <div
      v-for="(item, index) in meJson.careers"
      :key="item.name"
      :class="[
        index !== 0 ? 'border-t' : '',
        'border-neutral-300 px-6 py-4 dark:border-neutral-700',
      ]"
    >
      <div class="font-futura text-lg font-semibold text-neutral-400">
        {{ item.start }} - {{ item.end !== '' ? item.end : 'now' }}
      </div>
      <div
        class="text-md mt-1 font-kinto font-ubuntu-mono text-neutral-700 dark:text-neutral-300"
      >
        {{ item.name }} {{ item.title !== '' ? `(${item.title})` : '' }}
      </div>
    </div>
  </div>
</template>
