<template>
  <div>
    <rounded-banner-image :src="imgSrc" class="mb-2" />
    <div>
      <span v-for="(item, index) of tags" :key="item" class="mr-2">
        <tag :name="item" class="text-sm"/>
        <span v-if="index < tags.length - 1" class="text-indigo-300">,</span>
      </span>
    </div>
    <a href="#" class="pb-1/2 text-lg md:text-xl text-gray-600 hover:text-indigo-500 font-medium hover:border-b-2 hover:border-indigo-500">
      {{ title }}
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import RoundedBannerImage from '/@/components/atoms/RoundedBannerImage.vue'
import Tag from '/@/components/atoms/Tag.vue'

export default defineComponent({
  components: {
    RoundedBannerImage,
    Tag
  },
  props: {
    imgSrc: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    tags: {
      type: Array as PropType<string[]>,
      default: () => []
    }
  }
})
</script>
