<template>
  <div>
    <rounded-image :src="imgSrc" class="mb-4" />
    <div class="mb-2">
      <tag v-for="item of tags" :key="item" :name="item" />
    </div>
    <div class="text-lg md:text-xl text-gray-600">
      {{ title }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import RoundedImage from '/@/components/atoms/RoundedImage.vue'
import Tag from '/@/components/atoms/Tag.vue'

export default defineComponent({
  components: {
    RoundedImage,
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
