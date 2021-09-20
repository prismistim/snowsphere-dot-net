<template>
  <ul class="rounded-md">
    <list-item
      v-for="(item, index) of careers" 
      :key="item.title"
      :title="item.title"
      :description="item.description"
      :index="index"
      :length="careers.length"
    />
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ListItem from '/@/components/molecules/ListItem.vue'

export default defineComponent({
  components: {
    ListItem
  },
  setup() {
    const careers = [
      {
        title: '2020-01',
        description: 'hogehoge'
      },
      {
        title: '2020-02',
        description: 'fugafuga'
      }
    ]

    return {
      careers
    }
  },
})
</script>
