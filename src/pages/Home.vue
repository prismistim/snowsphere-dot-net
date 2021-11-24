<template>
  <div class="mb-10 md:mb-4">
    <rounded-image src="/me_icon.jpg" />
  </div>
  <link-list />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LinkList from '/@/components/organisms/about/LinkList.vue'
import RoundedImage from '/@/components/atoms/RoundedImage.vue'

export default defineComponent({
  components: {
    LinkList,
    RoundedImage,
  },
})
</script>
