<script setup lang="ts">
import meJson from '/@/data/me.json'
import type { ListItem } from '/@/types/ListItem'

const basicInfo: ListItem[] = [
  {
    label: 'a.k.a',
    value: meJson.name.id,
  },
  {
    label: 'birth',
    value: meJson.birth,
  },
  {
    label: 'place',
    value: `${meJson.place.prefecture}, ${meJson.place.country}`,
  },
]
</script>

<template>
  <div
    class="border-collapse grid-cols-2 overflow-hidden rounded-lg border border-neutral-300 dark:border-neutral-700 lg:grid lg:divide-x lg:divide-neutral-300 lg:dark:divide-neutral-700"
  >
    <div
      class="h-80 bg-cover bg-center lg:h-auto"
      style="background-image: url('/me.jpg')"
    ></div>
    <div class="divide-y divide-neutral-300 dark:divide-neutral-700">
      <div class="xs:border-t px-6 py-4">
        <div
          class="font-heebo text-lg font-medium text-neutral-400 dark:text-neutral-500"
        >
          name:
        </div>
        <div class="mt-1">
          <span class="font-kinto text-2xl dark:text-neutral-300">
            {{ meJson.name.kanji }}
          </span>
        </div>
        <div class="mt-1">
          <span
            class="font-firacode text-md dark:text-neutral-400"
          >
            {{ meJson.name.eng }}
          </span>
        </div>
      </div>
      <div
        v-for="item of basicInfo"
        :key="item.label"
        class="border-t border-neutral-300 px-6 py-4 dark:border-neutral-600"
      >
        <div
          class="font-heebo text-lg font-medium text-neutral-400 dark:text-neutral-500"
        >
          {{ item.label }}:
        </div>
        <div
          class="mt-1 font-firacode text-lg text-neutral-700 dark:text-neutral-300"
        >
          {{ item.value }}
        </div>
      </div>
    </div>
  </div>
</template>
