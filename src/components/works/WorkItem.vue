<script setup lang="ts">
import { TagType } from '/@/types/workItemType'
import RoundedBannerImage from '/@/components/ui/RoundedBannerImage.vue'

type Props = {
  id: number
  title: string
  image?: string
  tags: TagType[]
}

const props = withDefaults(defineProps<Props>(), {
  id: 1,
  title: '',
  image: '',
  tags: () => [],
})
</script>

<template>
  <router-link :to="'/works/' + id" class="group/item">
    <rounded-banner-image :src="props.image" class="mb-2" />
    <div class="pb-1/2 mt-4">
      <span
        class="text-lg font-medium text-neutral-400 transition duration-200 group-hover/item:text-white md:text-xl"
      >
        {{ title }}
      </span>
    </div>
  </router-link>
</template>
