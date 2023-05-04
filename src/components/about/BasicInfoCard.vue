<script setup lang="ts">
import indexJson from '/@/data/index.json'

type BasicInfoListItem = {
  label: string
  value: string
}

const basicInfo: BasicInfoListItem[] = [
  {
    label: 'a.k.a',
    value: indexJson.name.id,
  },
  {
    label: 'Birth',
    value: indexJson.birth,
  },
  {
    label: 'Place',
    value: `${indexJson.place.prefecture}, ${indexJson.place.country}`,
  },
]
</script>

<template>
  <div
    class="border-collapse grid-cols-2 overflow-hidden rounded-lg border lg:grid"
  >
    <div
      class="h-80 bg-cover bg-center lg:h-auto"
      style="background-image: url('/me.jpg')"
    ></div>
    <div>
      <div class="">
        <div class="border-neutral-300 px-6 py-4">
          <div class="font-futura text-lg font-semibold text-neutral-400">
            Name
          </div>
          <div class="mt-1">
            <span class="text-3xl">{{ indexJson.name.kanji }}</span>
          </div>
          <div class="mt-1">
            <span class="font-ubuntu-mono text-xl font-medium">
              {{ indexJson.name.eng }}
            </span>
          </div>
        </div>
        <div
          v-for="item of basicInfo"
          :key="item.label"
          class="border-t border-neutral-300 px-6 py-4"
        >
          <div class="font-futura text-lg font-semibold text-neutral-400">
            {{ item.label }}
          </div>
          <div class="mt-1 font-ubuntu-mono text-xl">{{ item.value }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
