<script setup lang="ts">
import { TagType } from '/@/types/workItemType'
import RoundedBannerImage from '/@/components/atoms/RoundedBannerImage.vue'
import Tag from '/@/components/atoms/Tag.vue'

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
  <div>
    <rounded-banner-image :src="props.image" class="mb-2" />
    <div>
      <span v-for="(item, index) of tags" :key="item.name" class="mr-2">
        <tag :name="item.name" class="text-sm" />
        <span v-if="index < tags.length - 1" class="text-indigo-300">,</span>
      </span>
    </div>
    <router-link
      :to="'/works/' + id"
      class="pb-1/2 text-lg md:text-xl text-gray-600 hover:text-indigo-500 font-medium hover:border-b-2 hover:border-indigo-500"
    >
      {{ title }}
    </router-link>
  </div>
</template>
