<template>
  <div class="grid grid-cols-4 gap-10">
    <div v-for="item of works" :key="item.title">
      <rounded-image src="/@/assets/me.jpg" class="mb-4"/>
      <div class="text-md text-gray-600">
        この作品はテストです
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RoundedImage from '/@/components/atoms/RoundedImage.vue'

interface Work {
  title: string,
  description: string
}

export default defineComponent({
  components: {
    RoundedImage
  },
  setup() {
    const works: Work[] = []

    for(let i = 0; i < 10; i++) {
      works.push({
        title: 'hogehoge' + i,
        description: 'figafga'
      })
    }

    return {
      works
    }
  }
})
</script>
